import withTM from "next-transpile-modules";
import withMDX from "@next/mdx";

import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeToc from "rehype-toc";
import rehypeCodeTitles from "rehype-code-titles";
import rehypePrism from "rehype-prism-plus";

const tm = withTM(["@unocssc/ui"]);

const mdx = withMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeSlug, rehypeToc, rehypeCodeTitles, rehypePrism],
    providerImportSource: "@mdx-js/react",
  },
});

export default tm(
  mdx({
    reactStrictMode: true,
    pageExtensions: ["js", "jsx", "tsx", "md", "mdx"],
  })
);
