import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

import { useEffect, useState } from "react";

const Login = () => {

    const[signupInput, setSignupInput] = useState({
        name :"",
        email: "",
        password: "",
    });

    const [loginInput, setLoginInput] = useState({
        email: "",
        password: "",
    });


    const changeInputHandler = (e, type) => {
        const { name, value } = e.target;
        if (type === "signup") {
          setSignupInput({ ...signupInput, [name]: value });
        } else {
          setLoginInput({ ...loginInput, [name]: value });
        }
    };

    const handleRegistration = async (type) => {
        const inputData = type === "signup" ? signupInput : loginInput;
        // const action = type === "signup" ? registerUser : loginUser;
        // await action(inputData);
        console.log(inputData);
    };


  return (
    <div className="flex items-center w-full justify-center mt-20">
        <Tabs defaultValue="account" className="w-[400px]">

            <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="signup">Signup</TabsTrigger>
                <TabsTrigger value="login">Login</TabsTrigger>
            </TabsList>



            <TabsContent value="signup">
                <Card>
                <CardHeader>
                    <CardTitle>Signup</CardTitle>
                    <CardDescription>
                    Create a new account and click signup when you're done.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                    <div className="space-y-1">
                        <Label htmlFor="name">Name</Label>
                        <Input
                            type="email"
                            name="email"
                            value={signupInput.email}
                            onChange={(e) => changeInputHandler(e, "signup")}
                            placeholder="abc@gmail.com"
                            required="true"
                        />
                    </div>
                    <div className="space-y-1">
                        <Label htmlFor="username">Username</Label>
                        <Input
                            type="password"
                            name="password"
                            value={signupInput.password}
                            onChange={(e) => changeInputHandler(e, "signup")}
                            placeholder="xyz"
                            required="true"
                        />
                    </div>
                </CardContent>
                <CardFooter>
                <Button
                    onClick={() => handleRegistration("signup")}
                >
                    Signup
                </Button>
                </CardFooter>
                </Card>
            </TabsContent>

            

            <TabsContent value="login">
                <Card>
                <CardHeader>
                    <CardTitle>Login</CardTitle>
                    <CardDescription>
                    Login your password here. After signup, you'll be logged in.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                    <div className="space-y-1">
                    <Label htmlFor="current">Current password</Label>
                    <Input
                        type="email"
                        name="email"
                        value={loginInput.email}
                        onChange={(e) => changeInputHandler(e, "login")}
                        placeholder="abc@gmain.com"
                        required="true"
                    />
                    </div>
                    <div className="space-y-1">
                    <Label htmlFor="new">New password</Label>
                    <Input
                        type="password"
                        name="password"
                        value={loginInput.password}
                        onChange={(e) => changeInputHandler(e, "login")}
                        placeholder="abc"
                        required="true"
                    />
                    </div>
                </CardContent>
                <CardFooter>
                <Button
                    onClick={() => handleRegistration("login")}
                >
                    Login
                </Button>
                </CardFooter>
                </Card>
            </TabsContent>
        </Tabs>
    </div>
  )
}

export default Login
