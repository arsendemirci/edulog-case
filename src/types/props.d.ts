import { ReactNode } from "react";
import type { User } from "./user";
import { MouseEventHandler } from "react";
import { UrlObject } from "url";
export interface PageCardProps {
  children: ReactNode;
  ref: any;
}

export interface ButtonProps {
  children: ReactNode;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export interface AppHeaderProps {
  user: User;
}

export interface AppContextProviderProps {
  currentPath: string;
  children: ReactNode;
}
export interface AuthProviderProps {
  children: React.ReactNode;
}
export interface StoreProviderProps {
  children: React.ReactNode;
}
export interface AppLinkProps {
  href: Url | UrlObject;
  replace?: Boolean;
  scroll?: Boolean;
  prefetch?: Boolean | null;
  className?: string;
  children?: ReactNode;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}
