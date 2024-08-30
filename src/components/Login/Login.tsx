"use client";
import { signIn } from "next-auth/react";
import { ChangeEvent, FormEvent, useState } from "react";
import style from "./Login.module.scss";
import { LockOutlined } from "@mui/icons-material";
import {
  Container,
  CssBaseline,
  Box,
  Avatar,
  Typography,
  TextField,
  Button,
} from "@mui/material";

type LoginInput = {
  username: string;
  password: string;
};

export default function Login() {
  const [inputs, setInputs] = useState<LoginInput>({
    username: "",
    password: "",
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleLogin = async (event: FormEvent) => {
    event.preventDefault();
    console.log("login data", inputs);
    await signIn("credentials", {
      username: inputs.username,
      password: inputs.password,
      callbackUrl: "/patients",
    }).then((res) => console.log("server respoonse", res));
  };
  return (
    <div className={style.wrapper}>
      <Avatar sx={{ m: 1, bgcolor: "primary.light" }}>
        <LockOutlined />
      </Avatar>
      <Typography variant="h5">Login</Typography>
      <form onSubmit={handleLogin}>
        <Box sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoFocus
            value={inputs.username || ""}
            onChange={handleChange}
          />

          <TextField
            margin="normal"
            required
            fullWidth
            id="password"
            name="password"
            label="Password"
            type="password"
            value={inputs.password || ""}
            onChange={handleChange}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            //   onClick={handleLogin}
          >
            Login
          </Button>
        </Box>
      </form>
      {/* <button
            onClick={() => {
              axios.get("/api/test").then((res) => console.log(res.data));
            }}
          >
            test button
          </button> */}
    </div>
  );
}
