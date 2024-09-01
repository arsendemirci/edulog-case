"use client";
import styles from "./AppHeader.module.scss";
import { Fragment, useContext } from "react";
import { Logout as LogoutIcon } from "@mui/icons-material";
import { Button, NavMenu } from "@/components";
import { AppContext } from "@providers";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";

const AppHeader: React.FC = () => {
  const { data: session } = useSession();
  const ctx = useContext(AppContext);
  const handleLogout = async () => {
    await signOut({
      callbackUrl: "/login",
    });
  };

  return (
    <Fragment>
      <header className={`${styles.main} ${styles.fixed}`}>
        <div className={styles.wrapper}>
          <h1>Edulog Case</h1>

          {session && session.user && (
            <>
              <NavMenu />
              <div className={styles.session}>
                <h3>{session.user.name}</h3>
                <Button onClick={handleLogout}>
                  <LogoutIcon /> Sign Out
                </Button>
              </div>
            </>
          )}
        </div>
      </header>
    </Fragment>
  );
};

export default AppHeader;
