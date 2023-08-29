import { useDispatch, useSelector } from 'react-redux'

import { open } from '../../store/redurcers/lista'
import { alteraTexto } from '../../store/redurcers/filtro'
import { InputStyle, AbasStyle, SearchStyle, FiltroStyle } from './style'
import { RootReducer } from '../../store'
import { useAPI } from '../../hooks/useAPI'

const Search = () => {
  const dispatch = useDispatch()
  const items = useAPI()
  const { texto } = useSelector((state: RootReducer) => state.filtro)

  const filtraProdutos = () => {
    return items.filter(
      (item) => item.nome.toLowerCase().search(texto.toLowerCase()) >= 0
    )
  }

  const openList = () => {
    dispatch(open())
  }

  return (
    <>
      <SearchStyle>
        <AbasStyle onClick={openList}>
          <img src="https://img.icons8.com/ios/todo-list--v1.png" />
        </AbasStyle>
        <InputStyle>
          <img src="https://img.icons8.com/ios/search--v1.png" />
          <input
            type="text"
            name="search"
            placeholder="Pesquisar"
            value={texto}
            onChange={(evento) => dispatch(alteraTexto(evento.target.value))}
          />
          <img src="https://img.icons8.com/ios/plus--v1.png" />
          <FiltroStyle style={{ display: texto.length > 0 ? 'block' : 'none' }}>
            {filtraProdutos().map((item) => (
              <span key={item.id}>
                <h2>{item.nome}</h2>
              </span>
            ))}
          </FiltroStyle>
        </InputStyle>
        <AbasStyle>
          <img src="https://img.icons8.com/cotton/64/shopping-cart--v2.png" />
        </AbasStyle>
      </SearchStyle>
    </>
  )
}

export default Search
