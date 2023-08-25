import { useDispatch, useSelector } from 'react-redux';
import { List, Modal, Overlay } from './style';
import { RootReducer } from '../../list';
import { close } from '../../list/reducers/cart';
import { Container } from '../../styles';
import Product from '../Product';

const Cart = () => {

  const { isOpen } = useSelector((state: RootReducer) => state.cart);
  const dispatch = useDispatch();

  const closeCart = () => {
    dispatch(close());
  }

  return (
    <Modal className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Container>
        <header>
          <h3>Carrinho de compras</h3>
        </header>
        <List>
          <ul>
          <Product nome='ARROZ' id={0}/>
          <Product nome='FEIJÃO' id={0}/>
          <Product nome='LEITE' id={0}/>
          <Product nome='ARROZ' id={0}/>
          <Product nome='ARROZ' id={0}/>
          <Product nome='ARROZ' id={0}/>
          </ul>
        </List>
      </Container>
    </Modal>
  );
}

export default Cart;
