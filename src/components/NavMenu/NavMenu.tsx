"use client";
import { useContext, useRef, useEffect } from "react";
import { AppContext } from "@providers";
import { usePathname } from "next/navigation";
import styles from "./NavMenu.module.scss";
import { NavLink } from "@/components";
import { links } from "@/constant/navigation";

const NavMenu = () => {
  const ctx = useContext(AppContext);
  const ref = useRef<any | null[]>([]);
  const pushRef = (el: any | null) => ref.current.push(el!);
  const pathName = usePathname();
  useEffect(() => {
    if (pathName !== ctx.currentPath) {
      let refIndex = ctx.currentPath == "/home" ? 0 : 1;

      ref.current[refIndex].click();
    }
  }, [ctx.currentPath, pathName]);
  return (
    <div className={styles.navigation}>
      <ul>
        {links.map((link, index) => (
          <li key={index + 1}>
            <NavLink
              link={link}
              ref={pushRef}
              isActive={ctx.currentPath == link.href}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavMenu;
