import '../styles/globals.css'
import { Roboto } from "@next/font/google";
const roboto = Roboto({
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
});

export default function App({ Component, pageProps }) {
  return <div className={`${roboto.variable} font-sans`}>
    <Component {...pageProps} />
  </div>

}
