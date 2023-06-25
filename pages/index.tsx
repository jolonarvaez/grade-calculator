import Head from "next/head";
import React, { useState, createContext } from "react";
import Calculator from "../components/Calculator";
import Description from "../components/Description";
import { Switch } from "@headlessui/react";
import ThemeSwitch from "../components/ThemeSwitch";

export default function Home() {
  const [enabled, setEnabled] = useState(true);

 

  return (
    <>
      <Head>
        <title>Grade Calculator</title>
        <meta
          name="description"
          content="A grade calculator app that is tailored to the specific grading systems of
                  three major Philippine universities: De La Salle University (DLSU),
                  University of the Philippines (UP), and the Ateneo de Manila University
                  (ADMU)."
        />
        <meta
          name="keywords"
          content="grade calculator app, dlsu gpa calculator, up gwa calculator, amdu qpi calculator, philippine universities grade calculator"
        />
        <meta
          name="google-site-verification"
          content="p85mCcSwFZJ69PAVhyDe8y6XCTy497_Hruwp801ggec"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={`h-screen transition`}>
        <ThemeSwitch />
        <Description />
        <Calculator />
      </div>
    </>
  );
}
