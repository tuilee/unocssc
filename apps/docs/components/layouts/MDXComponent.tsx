import * as React from "react";
import { MDXProvider } from "@mdx-js/react";
import { AnimatePresence, motion } from "framer-motion";
import { ClipboardCopyIcon, CheckIcon } from "@heroicons/react/outline";
import Head from "next/head";
import type { ComponentMDXLayoutProps } from "./types";

const Pre = (props: any) => {
  const textRef: any = React.useRef(null);

  const [hovered, setHovered] = React.useState(false);
  const [copied, setCopied] = React.useState(false);

  const onEnter = () => {
    setHovered(true);
  };
  const onLeave = () => {
    setHovered(false);
    setCopied(false);
  };

  const onCopy = () => {
    setCopied(true);
    navigator.clipboard.writeText(textRef?.current?.textContent ?? "");
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div
      ref={textRef}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      className="relative my-6 w-full h-full bg-gray-800 px-4 rounded-lg border border-gray-400 border-opacity-50"
    >
      <pre className="w-full h-full overflow-auto max-h-3/4 max-h-96 py-4 rounded-lg">
        {hovered && (
          <button
            aria-label="Copy code"
            type="button"
            className={`absolute right-2 top-2 h-8 w-8 inline-flex items-center justify-center rounded text-stone-300 p-1 ${
              copied
                ? "border-green-400 focus:border-green-400 focus:outline-none"
                : "border-gray-300"
            }`}
            onClick={onCopy}
          >
            <AnimatePresence initial={false}>
              {copied ? (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  transition={{ duration: 1 }}
                >
                  <CheckIcon width={24} />
                </motion.div>
              ) : (
                <motion.div
                  initial={{ scale: 1 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  transition={{ duration: 0 }}
                >
                  <ClipboardCopyIcon width={24} cursor="pointer" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        )}
        {props.children}
      </pre>
    </div>
  );
};

const MDXComponents = {
  h1: (props: any) => (
    <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight my-3">
      {props.children}
    </h1>
  ),
  h2: (props: any) => (
    <h2 className="text-3xl sm:text-2xl text-slate-900 tracking-tight my-3">
      {props.children}
    </h2>
  ),
  pre: Pre,
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
        <div className="p-4">
          <MDXProvider components={MDXComponents as any}>
            {children}
          </MDXProvider>
        </div>
      </main>
    </>
  );
};
