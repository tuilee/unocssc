const { default: dynamic } = require('next/dynamic')

const withTM = require('next-transpile-modules')(['@unocssc/ui'])

const remarkGfm = dynamic(() =>
  import('remark-gfm').then((module) => module.NamedExport)
)
const rehypeSlug = dynamic(() =>
  import('rehype-slug').then((module) => module.NamedExport)
)
const rehypeToc = dynamic(() =>
  import('rehype-toc').then((module) => module.NamedExport)
)
const rehypeCodeTitles = dynamic(() =>
  import('rehype-code-titles').then((module) => module.NamedExport)
)
const rehypePrism = dynamic(() =>
  import('rehype-prism-plus').then((module) => module.NamedExport)
)

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    providerImportSource: "@mdx-js/react",
  },
})

module.exports = withTM(withMDX({
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'tsx', 'md', 'mdx']
}))