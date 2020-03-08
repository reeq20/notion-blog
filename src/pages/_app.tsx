import '../styles/global.css'
import Link from 'next/link'
import Footer from '../components/footer'
export default ({ Component, pageProps }) => (
  <>
    <Component {...pageProps} />

    <Footer />
  </>
)
