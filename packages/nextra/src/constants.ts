import path from 'node:path'

export const MARKDOWN_EXTENSION_REGEX = /\.mdx?$/

export const IS_PRODUCTION = process.env.NODE_ENV === 'production'

export const LOCALE_REGEX = /\.([a-z]{2}(-[A-Z]{2})?)$/

export const DEFAULT_LOCALE = 'en-US'

export const DEFAULT_CONFIG = {
  staticImage: true,
  flexsearch: {
    codeblocks: true
  }
}

export const OFFICIAL_THEMES = [
  'nextra-theme-docs',
  'nextra-theme-blog'
] as const

export const META_FILENAME = '_meta.json'

export const CWD = process.cwd()

export const MARKDOWN_EXTENSIONS = ['md', 'mdx'] as const

export const PUBLIC_DIR = path.join(CWD, 'public')

export const EXTERNAL_URL_REGEX = /^https?:\/\//

export const NEXTRA_INTERNAL = Symbol.for('__nextra_internal__')
