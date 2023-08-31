import { Container, GlobalStyle } from './styles'
import Footer from './components/Footer'
import Header from './components/Header'
import ProductList from './components/ProductList'
import Search from './components/Search'
import AddCart from './components/AddCart'
import Cart from './components/Cart'

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Container>
        <Search />
        <AddCart />
        <Cart />
        <ProductList />
      </Container>
      <Footer />
    </>
  )
}

export default App
