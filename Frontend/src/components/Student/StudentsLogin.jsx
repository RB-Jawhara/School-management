"use client";

import React, { useState, useContext, useEffect } from "react";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
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
import { useNavigate } from "react-router-dom";
import { UserStateContext } from "../../Context/UserContext";
import { STUDENT_DASHBOARD_ROUTE, LOGIN_ROUTE } from "../../assets/router/Index.jsx";
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
  const { login,setAuthenticated } = useContext(UserStateContext); 
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState("");
  const[error,setError] = useState({});
  const navigate = useNavigate();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "admin@example.com",
      password: "P@ssw0rd2026!",
    },
  });

async function onSubmit(values) {
  try {
    const response = await login(values.email, values.password);
    console.log("Login response:", response);

    // Axios f l-ghalib kiy-sift l-data wast response.data
    if (response.status === 200) {
      // 1. Khabi l-token ila kanti katsiftu mn l-back
      if (response.data.token) {
        localStorage.setItem('ACCESS_TOKEN', response.data.token);
      }
      
      // 2. Update status w zid l-navigation
      setAuthenticated(true);
      navigate(STUDENT_DASHBOARD_ROUTE);
    }
  } 

  catch (err) {
    if (err.response) {
      // L-backend jawbek walakin b error (401, 422...)
      console.log("Status:", err.response.status);
      console.log("Data:", err.response.data);
      setError({ email: err.response.data.message });
    } else if (err.request) {
      // L-request t-siftat walakin l-backend majawbech (Network Error)
      console.error("Network Error: Ma-qdernach n-wsslo l-Backend!");
      setError({ email: "Impossible de contacter le serveur" });
    } else {
      // Chi khata' akhor (Setup error)
      console.error("Error:", err.message);
    }
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