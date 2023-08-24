import { InputStyle, AbasStyle, SearchStyle } from './style'

const Search = () => {
  return (
    <>
      <SearchStyle>
        <AbasStyle>
          <img
            src="https://img.icons8.com/ios/50/todo-list--v1.png"
            alt="todo-list--v1"
          />
        </AbasStyle>
        <InputStyle>
          <img
            width="24"
            height="24"
            src="https://img.icons8.com/ios/50/search--v1.png"
            alt="search--v1"
          />
          <input type="text" name="search" placeholder="Pesquisar" />
          <img
            width="32"
            height="32"
            src="https://img.icons8.com/ios/50/plus--v1.png"
            alt="plus--v1"
          />
        </InputStyle>
        <AbasStyle>
          <img
            src="https://img.icons8.com/cotton/64/shopping-cart--v2.png"
            alt="shopping-cart--v2"
          />
        </AbasStyle>
      </SearchStyle>
    </>
  )
}

export default Search
