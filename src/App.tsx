"use client";
import { Fragment, useEffect, useState, useCallback, useRef } from "react";
import { PageCard } from "@/components";
const App = (props: any) => {
  //   const [isFixed, setIsFixed] = useState(false);

  const refPage = useRef<any>();
  //   useEffect(() => {
  //     const handleScroll = () => {
  //       const { top } = refPage.current.getBoundingClientRect();
  //       if (top < 66 && !isFixed) {
  //         setIsFixed(true);
  //       } else if (top > 66 && isFixed) {
  //         setIsFixed(false);
  //       }
  //     };

  //     window.addEventListener("scroll", handleScroll);

  //     return () => {
  //       window.removeEventListener("scroll", handleScroll);
  //     };
  //   }, [isFixed]);
  return (
    <Fragment>
      <main>
        <PageCard ref={refPage}>{props.children}</PageCard>
      </main>
    </Fragment>
  );
};

export default App;
