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
import Link from "next/link";

const RegisterSchema = z.object({
  email: z.string(),
  fullName: z.string(),
  password: z.string().min(6),
});

type FormData = z.infer<typeof RegisterSchema>;

const Register = () => {
  // const session = getServerSession();
  const form = useForm({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: "",
      fullName: "",
      password: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    try {
      const { email, fullName, password } = data;

      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, fullName, password }),
      });

      console.log("regis", response);

      if (!response.ok) {
        throw new Error("");
      }

      toast({ title: "Register Successfully" });
    } catch (error) {}
  };

  // if (session) {
  //   redirect("/");
  // }

  return (
    <section className="bg-white h-screen flex items-center justify-center">
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
              name="fullName"
              render={({ field }) => (
                <FormItem className="mt-5">
                  <FormLabel>Full Name</FormLabel>
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
                Register
              </Button>
            </div>

            <div className="flex flex-row mt-5 justify-center items-center">
              <p>Already have an account?</p>
              <Link href="/login" className="ml-1">
                <p className="text-[#FFAF00]">Login</p>
              </Link>
            </div>
          </form>
        </Form>
      </div>
    </section>
  );
};

export default Register;
