import * as React from "react";
import { MDXProvider } from "@mdx-js/react";
import type { ComponentMDXLayoutProps } from "./types";
import Head from "next/head";

const MDXComponents = {
  h1: (props: any) => (
    <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
      {props.children}
    </h1>
  ),
  pre: (props: any) => (
    <pre
      className="w-full h-full overflow-auto"
      style={{
        padding: "1rem",
        backgroundColor: "#282c34",
      }}
    >
      {props.children}
    </pre>
  ),
};

export const MDXComponent = ({ children, meta }: ComponentMDXLayoutProps) => {
  return (
    <>
      <Head>
        <title>{meta.title}</title>
      </Head>
      <main
        style={{
          marginLeft: "15rem",
        }}
      >
        <div className="mdx-container p-4">
          <MDXProvider components={MDXComponents as any}>
            {children}
          </MDXProvider>
        </div>
      </main>
    </>
  );
};
