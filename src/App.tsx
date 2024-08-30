"use client";
import { Fragment, useRef } from "react";
import { PageCard, AppHeader } from "@/components";
const App = (props: any) => {
  const refPage = useRef<any>();

  return (
    <Fragment>
      <AppHeader />
      <main>
        <PageCard ref={refPage}>{props.children}</PageCard>
      </main>
    </Fragment>
  );
};

export default App;
