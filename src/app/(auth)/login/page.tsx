"use client";

import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { useForm } from "react-hook-form";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "@/hooks/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const LoginSchema = z.object({
  email: z.string(),
  password: z.string().min(6),
});

type FormData = z.infer<typeof LoginSchema>;

const Login = () => {
  // const session = await getServerSession();
  const form = useForm({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const router = useRouter();

  const onSubmit = async (data: FormData) => {
    try {
      const { email, password } = data;

      const response = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      console.log(response);

      if (!response?.error) {
        router.push("/");
      }

      if (!response?.ok) {
        throw new Error("Network response was not ok");
      }

      toast({ title: "Login Successful" });
    } catch (error) {}
  };

  // if (session) {
  //   redirect("/");
  // }

  return (
    <section className="h-screen flex items-center justify-center">
      <div className="w-[400px]">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="mt-5">
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      className="py-5 focus:border-[#FFAF00] focus:ring-0 focus:outline-none"
                      style={{
                        boxShadow: "none",
                        transition: "border-color 0.2s ease-in-out",
                      }}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="mt-5">
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      {...field}
                      className="py-5 focus:border-[#FFAF00] focus:ring-0 focus:outline-none"
                      style={{
                        boxShadow: "none",
                        transition: "border-color 0.2s ease-in-out",
                      }}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <div className="flex justify-end">
              <Button
                type="submit"
                className="mt-5 py-5 w-full bg-[#FFAF00] hover:bg-[#e69e02]"
              >
                Login
              </Button>
            </div>

            <div className="flex flex-row mt-5 justify-center items-center">
              <p>Don't have an account?</p>
              <Link href="/register" className="ml-1">
                <p className="text-[#FFAF00]">Register</p>
              </Link>
            </div>
          </form>
        </Form>
      </div>
    </section>
  );
};

export default Login;
