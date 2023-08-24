import Price from './components/AddPrice/Price'
import Header from './components/Header'
import Search from './components/Search'
import { Container, GlobalStyle } from './styles'

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Header />
        <Search />
        <Price />
      </Container>
    </>
  )
}

export default App
