import { Provider } from 'react-redux'
import Price from './components/AddPrice'
import { store } from './list'
import Cart from './components/Cart'
import Header from './components/Header'
import Search from './components/Search'
import { Container, GlobalStyle } from './styles'
import Footer from './components/Footer'

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Header />
      <Container>
        <Search />
        <Price
          product={{
            id: 0,
            nome: ''
          }}
        />
      </Container>
      <Cart />
      <Footer />
    </Provider>
  )
}

export default App
