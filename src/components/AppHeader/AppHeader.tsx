"use client";
import styles from "./AppHeader.module.scss";
import { Fragment, useContext, useRef, useEffect } from "react";
import { Logout as LogoutIcon } from "@mui/icons-material";
import { Button, AppLink } from "@/components";
import { AppContext } from "@providers";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import { redirect, usePathname } from "next/navigation";
import { links } from "@/constant/navigation";
import Link from "next/link";

const AppHeader: React.FC = () => {
  const { data: session } = useSession();
  const ctx = useContext(AppContext);
  const pathName = usePathname();
  const ref = useRef<any | null[]>([]);
  const pushRef = (el: any | null) => ref.current.push(el!);
  const handleLogout = async () => {
    await signOut();
  };
  const goTo = (path: string) => {
    ctx.setPath(path);
  };
  useEffect(() => {
    if (pathName !== ctx.currentPath) {
      let refIndex = ctx.currentPath == "/home" ? 0 : 1;

      ref.current[refIndex].click();
    }
  }, [ctx.currentPath, pathName]);
  return (
    <Fragment>
      <header className={`${styles.main} ${styles.fixed}`}>
        <div className={styles.wrapper}>
          <h1>Edulog Case</h1>
          {session && session.user && (
            <div className={styles.navigation}>
              <ul>
                {links.map((link, index) => (
                  <li key={index + 1}>
                    <a
                      className={`${
                        ctx.currentPath == link.href ? styles.active : ""
                      }`}
                      onClick={() => goTo(link.href)}
                    >
                      {link.name}
                    </a>
                    {
                      <Link
                        className={styles.routeLink}
                        ref={pushRef}
                        href={link.href}
                      ></Link>
                    }
                  </li>
                ))}
              </ul>
              <div className={styles.links}></div>
            </div>
          )}
          {session && session.user && (
            <div className={styles.session}>
              <h3>{session.user.name}</h3>
              <Button onClick={handleLogout}>
                <LogoutIcon /> Sign Out
              </Button>
            </div>
          )}
        </div>
      </header>
    </Fragment>
  );
};

export default AppHeader;
