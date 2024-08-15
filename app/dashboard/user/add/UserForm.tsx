'use client';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { PrismaClient } from '@prisma/client';
import { ReloadIcon } from '@radix-ui/react-icons';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const prisma = new PrismaClient();

const userSchema = z.object({
  name: z
    .string()
    .min(3,{ message: 'Name Mus be at least 3 '}),
  
  email: z
    .string()
    .nonempty({ message: "Email is required"})
    .email("Invalid email address"),
    
  password: z
    .string()
    .nonempty({message: "Password is required"})
});

type UserFormValue = z.infer<typeof userSchema>;

const UserForm: React.FC = () => {

  const router = useRouter();
  
  const form = useForm<UserFormValue>({
    resolver: zodResolver(userSchema)
  });

  const onSubmit = async (data: UserFormValue) => {
    console.log(`handle Submit`)
    setLoading(true);
    try {
      const response = await fetch('/api/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      if (!response.ok) {
        throw new Error('Failed to create user');
      }
      setLoading(false);
      //success maka redirect
      router.push('/dashboard/user')
    } catch (error) {
      console.log(`message ${error}`);
      setLoading(false);
    }
  };

  const [loading, setLoading] = useState(false);
  
  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='w-full space-y-8'>
            <FormField
              control={form.control}
              name='name'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder='Name'
                      autoComplete='off'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage/>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder='Email'
                      autoComplete='off'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage/>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      type='password'
                      {...field}
                      autoComplete='off'
                    />
                  </FormControl>
                  <FormMessage/>
                </FormItem>
              )}
            />
            <Button className='ml-auto' type='submit' disabled={loading}>
              {loading ? <ReloadIcon className="mr-2 h-4 w-4 animate-spin" /> : ''}
              Submit
            </Button>
        </form>
      </Form>
    </>
  );
}
export default UserForm;