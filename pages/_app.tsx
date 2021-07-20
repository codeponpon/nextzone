import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/dist/client/router';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  useEffect(() => {
    return () => {
      if(router.pathname === "/") router.push(`/g/${process.env.GAME_ID}`)
    }
  }, [router])
  return <Component {...pageProps} />
}
export default MyApp
