import Head from "next/head";
import Image from "next/image";
import React from "react";
import { Inter } from "@next/font/google";
import DLSU from "../components/Calculator";
import Calculator from "../components/Calculator";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Top 3 Grade Calculator</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Calculator />
    </>
  );
}
