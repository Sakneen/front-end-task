import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "../../node_modules/@fortawesome/fontawesome-free/css/all.min.css";
import "../../node_modules/jquery/dist/jquery.min.js";
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import CounterContextProvider from '@/components/context/store';


export default function App({ Component, pageProps }: AppProps) {
  return (
    <CounterContextProvider>
      <Component {...pageProps} />
    </CounterContextProvider >
  )
}
