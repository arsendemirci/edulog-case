"use client";
import Link from "next/link";
import { useContext, forwardRef } from "react";
import { AppContext } from "@providers";
import styles from "./NavLink.module.scss";
import { NavLinkProps } from "@/types/props";

const NavLink = forwardRef(function NavLink(
  { link, isActive }: NavLinkProps,
  ref: any
) {
  const ctx = useContext(AppContext);
  const goTo = (path: string) => {
    ctx.setPath(path);
  };

  return (
    <>
      <a
        className={`${styles.anchor} ${isActive ? styles.active : ""}`}
        onClick={() => goTo(link.href)}
      >
        {link.name}
      </a>

      <Link className={styles.routeLink} ref={ref} href={link.href}></Link>
    </>
  );
});

export default NavLink;
