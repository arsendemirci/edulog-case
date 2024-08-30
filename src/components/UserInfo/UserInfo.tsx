"use client";

import { User } from "@/types/user";
import { signOut } from "next-auth/react";

type UserInfoProps = {
  user: User;
};

export default function UserInfo({ user }: UserInfoProps) {
  return (
    <div>
      <div>Id : {user.id}</div>
      <div>Name : {user.name}</div>
      <div>Email : {user.email}</div>
    </div>
  );
}
