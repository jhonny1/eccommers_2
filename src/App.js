import Home from './Components/Home'
import { CartProvider } from './Context/CartContext';
import './App.scss';



function App() {
  return (
    <CartProvider >
      <Home /> 
    </CartProvider>
  );
}

export default App;
