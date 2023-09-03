import { useDispatch, useSelector } from 'react-redux'
import { AbasStyle, HeaderStyle, Title } from './style'
import { RootReducer } from '../../store'
import { openCart, openList } from '../../store/reducers/lista'

const Header = () => {
  const dispatch = useDispatch()

  const { produtos } = useSelector((state: RootReducer) => state.lista)

  const openLista = () => {
    dispatch(openList())
  }
  const openCartt = () => {
    dispatch(openCart())
  }
  return (
    <HeaderStyle>
      <AbasStyle onClick={openLista}>
        <img src="https://img.icons8.com/ios/ffffff/todo-list--v1.png" />
      </AbasStyle>

      <Title>
        <h2>ClasseMarket Prestige</h2>
      </Title>

      <AbasStyle onClick={openCartt}>
        <img src="https://img.icons8.com/external-flatart-icons-solid-flatarticons/ffffff/external-cart-traditional-marketing-flatart-icons-solid-flatarticons.png" />
        <span>{produtos.length}</span>
      </AbasStyle>
    </HeaderStyle>
  )
}

export default Header
