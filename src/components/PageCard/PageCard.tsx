"use client";
import { Fragment, forwardRef } from "react";
import styles from "./PageCard.module.scss";
import { PageCardProps } from "@/types/props";
import { usePathname } from "next/navigation";

const PageCard: React.FC<PageCardProps> = forwardRef(
  ({ children }: PageCardProps, refPage: any) => {
    const pathName = usePathname();

    return (
      <Fragment>
        <section ref={refPage} className={styles.main}>
          <div className={styles.wrapper}>
            <div className={styles.header}>{pathName.replace(/^\//, "")}</div>
            <div className={styles.body}>{children}</div>
          </div>
        </section>
      </Fragment>
    );
  }
);
PageCard.displayName = "PageCard";

export default PageCard;
