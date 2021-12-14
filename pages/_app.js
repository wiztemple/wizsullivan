import Head from 'next/head' 
import '../styles/globals.css'
// components
import Navbar from '../components/Navbar'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Wiz Sullivan</title>
        <meta name="description" content="Wiz Sullivan" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Navbar />
      </header>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
