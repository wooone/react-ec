import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
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