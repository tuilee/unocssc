import * as React from "react";

export interface ComponentLayoutProps {
  children: React.ReactNode;
  title: string;
}

export const ComponentLayout = ({ children, title }: ComponentLayoutProps) => {
  return (
    <main
      style={{
        marginLeft: "15rem",
      }}
    >
      <div className="p-4">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          {title}
        </h1>
        {children}
      </div>
    </main>
  );
};
