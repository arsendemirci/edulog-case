import styles from "./page.module.scss";
import { Login, UserInfo } from "@/components";
import { getServerAuthSession } from "@/server/auth";

export default async function Home() {
  const authSession = await getServerAuthSession();
  return (
    <div className={styles.main}>
      {authSession?.user && <UserInfo user={authSession?.user} />}
      {!authSession?.user && <Login />}
    </div>
  );
}
