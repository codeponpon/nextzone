import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter()
  useEffect(() => {
    return () => {
      if(router.pathname === "/") router.replace(`/g/${process.env.GAME_ID}`)
    }
  }, [router])
  return <Component {...pageProps} />
}
export default MyApp
