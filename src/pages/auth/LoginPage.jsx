import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import logo from "@/assets/images/logo.jpg";

const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <Card className="w-full max-w-md shadow-lg">
        {/* Header */}
        <CardHeader className="flex flex-col items-center space-y-3">
          <img src={logo} alt="ProjectCamp Logo" className="w-20 h-20" />

          <h2 className="text-2xl font-bold">Welcome Back</h2>

          <p className="text-sm text-muted-foreground text-center">
            Sign in to continue managing your projects.
          </p>
        </CardHeader>

        {/* Content */}
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
            />
          </div>

          <div className="flex justify-end">
            <Link
              to="/forgot-password"
              className="text-sm text-blue-600 hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          <Button className="w-full">
            Login
          </Button>
        </CardContent>

        {/* Footer */}
        <CardFooter className="justify-center">
          <p className="text-sm">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-blue-600 font-medium hover:underline"
            >
              Register
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default LoginPage;