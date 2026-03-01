"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// Schema dial validation
const formSchema = z.object({
  email: z.string().email("Invalid Email address."),
  password: z.string().min(5, "Password must be at least 5 characters").max(32),
});

const CustomInput = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
CustomInput.displayName = "CustomInput";

function StudentsLogin() {
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState("");
  const navigate = useNavigate();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

 async function onSubmit(values) {
  try {
    setLoginError("");

    const response = await axios.post("http://127.0.0.1:8000/api/login", values);

    // 1. Chouf chno jay f l-console
    console.log("Full Response Object:", response);
    console.log("Data from Backend:", response.data);

    if (response.data && response.data.token) {
        localStorage.setItem("token", response.data.token);
        console.log("Token saved:", response.data.token);
        navigate("/Student_Dashboard");
    } else {
        // Hna fin kigolik makaynch token
        setLoginError("Token missing! Backend returned: " + JSON.stringify(response.data));
    }
  } catch (error) {
    console.error("Error:", error.response?.data);
  }
}

  return (
    <Card className="w-full sm:max-w-md mx-auto mt-10">
      <CardContent className="pt-6">
        <h2 className="text-2xl font-bold text-center mb-6">Student Login</h2>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-6"
            noValidate
          >
            {loginError && (
              <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-2 rounded text-sm mb-2">
                {loginError}
              </div>
            )}

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <CustomInput placeholder="Riblaou@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <div className="relative">
                    <FormControl>
                      <CustomInput
                        type={showPassword ? "text" : "password"}
                        placeholder="••••••••"
                        {...field}
                      />
                    </FormControl>
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    >
                      {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="flex justify-between pt-4 gap-4">
              <Button 
                variant="outline" 
                className="w-40" 
                type="button" 
                onClick={() => form.reset()}
              >
                Reset
              </Button>
              <Button className="w-40" type="submit">
                Login
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}

export default StudentsLogin;