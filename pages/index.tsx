import Head from "next/head";
import Image from "next/image";
import React from "react";
import { Inter } from "@next/font/google";
import DLSU from "../components/Calculator";
import Calculator from "../components/Calculator";
import Description from "../components/Description";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
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
          name="google-site-verification"
          content="p85mCcSwFZJ69PAVhyDe8y6XCTy497_Hruwp801ggec"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Description />
      <Calculator />
    </>
  );
}
