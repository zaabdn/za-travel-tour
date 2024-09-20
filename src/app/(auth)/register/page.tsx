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
      <div className="w-[600px]">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
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
                    <Input type="password" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />

            <Button type="submit" className="mt-5">
              Submit
            </Button>
          </form>
        </Form>
      </div>
    </section>
  );
};

export default Register;
