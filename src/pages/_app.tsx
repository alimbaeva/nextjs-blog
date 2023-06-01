import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Inter, Lora } from '@next/font/google'
import { ThemeProvider } from 'next-themes'

const inter = Inter({
  subsets: ['latin'],
  weight: ['900'],
  variable: '--font-inter',
})
const lora = Lora({
  subsets: ['latin'],
  variable: '--font-inter',
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider enableSystem={true} attribute='class'>
      <main className={`${inter.variable} font-sans dark:color-white`}>
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  )
}
