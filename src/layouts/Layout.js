import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import Routers from '../routers/Routers'

const Layout = () => {
  return (
	<>
  <Header></Header>
  <div><Routers></Routers></div>
  <Footer></Footer>
  </>
  )
}

export default Layout