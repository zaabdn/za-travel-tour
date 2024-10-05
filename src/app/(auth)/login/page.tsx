"use client";

import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import * as z from "zod";

const LoginSchema = z.object({
  email: z.string(),
  password: z.string().min(6),
});

type FormData = z.infer<typeof LoginSchema>;

const Login = () => {
  // const session = await getServerSession();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const form = useForm({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const router = useRouter();

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);
    try {
      const { email, password } = data;

      const response = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (response?.error) {
        setIsLoading(false);
        return toast.error(response.error || "", {
          style: {
            backgroundColor: "#ff4d4f", // Change background color
            color: "#ffffff", // Change text color
          },
        });
      }

      setIsLoading(false);
      toast.success("Login Successful");
      router.push("/");
    } catch (error) {
      console.log(error);
    }
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
                disabled={isLoading}
              >
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {isLoading ? "Loading" : "Login"}
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
