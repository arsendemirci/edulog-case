import styles from "./page.module.scss";
import { Login, UserInfo } from "@/components";
import { getServerAuthSession } from "@/server/auth";

export default async function Home() {
  const authSession = await getServerAuthSession();
  return (
    <main className={styles.main}>
      <Login />
    </main>
  );
}
