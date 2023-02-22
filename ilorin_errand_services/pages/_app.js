import Layout from 'component/components/Layout'
import "bootstrap/dist/css/bootstrap.min.css"
import { useEffect } from "react";
import 'component/styles/globals.css'

export default function App({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
