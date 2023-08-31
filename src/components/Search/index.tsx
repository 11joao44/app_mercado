import { useDispatch } from 'react-redux'

import { open } from '../../store/redurcers/lista'
import { AbasStyle, SearchStyle } from './style'

const Search = () => {
  const dispatch = useDispatch()

  const openList = () => {
    dispatch(open())
  }

  return (
    <>
      <SearchStyle>
        <AbasStyle onClick={openList}>
          <img src="https://img.icons8.com/ios/todo-list--v1.png" />
        </AbasStyle>

        <AbasStyle>
          <img src="https://img.icons8.com/cotton/64/shopping-cart--v2.png" />
        </AbasStyle>
      </SearchStyle>
    </>
  )
}

export default Search
