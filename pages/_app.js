import Layout from '../Components/layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  
  <div className="top" style={{color:"red"}}>top</div>
  return (
    <div>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  )
}

export default MyApp
