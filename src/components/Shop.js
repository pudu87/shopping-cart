import Cart from './Cart';
import { useState } from 'react';

import billy from '../img/billy.webp';
import ektorp from '../img/ektorp.webp';
import fargrik from '../img/fargrik.webp';
import kallax from '../img/kallax.webp';
import klippan from '../img/klippan.webp';
import lack from '../img/lack.webp';

function Shop() {
  const products = [
    { src: billy, name: 'Billy', type: 'Book Case', price: 40000 },
    { src: ektorp, name: 'Ektorp', type: 'Sofa', price: 340000 },
    { src: fargrik, name: 'Färgrik', type: 'Mug', price: 700 },
    { src: kallax, name: 'Kallax', type: 'Shelf Unit', price: 36000 },
    { src: klippan, name: 'Klippan', type: 'Loveseat', price: 220000 },
    { src: lack, name: 'Lack', type: 'Side Table', price: 8000 }
  ];

  const [quantities, setQuantities] = useState(Array(products.length).fill(0));

  const toggleCart = () => {
    document.querySelector('.cart').classList.toggle('hide');
  }

  const addProduct = (e) => {
    e.preventDefault();
    const index = Number(e.target.closest('li').className.split('_')[1]);
    const newQuantity = Number(e.target.firstChild.value);
    const before = quantities.slice(0, index);
    const after = quantities.slice(index + 1);
    setQuantities([...before, newQuantity, ...after]);
  }

  const listItems = products.map((product, index) => {
    return (
      <li 
        key={index}
        className={`item_${index}`}>
        <img src={product.src}/>
        <div className='product-specs'>
          <div className='info'>
            <h2>{product.name}</h2>
            <p className='type'>{product.type}</p>
            <p className='price'>$ {product.price}</p>
          </div>
          <div className='purchase'>
            <form onSubmit={addProduct}>
              <input 
                type='number'
                className='quantity'
                name='quantity' />
              <br/>
              <input
                type='submit'
                className='add'
                value='Add to Cart' />
            </form>
          </div>
        </div>
      </li>
    )
  })

  return (
    <section className='shop'>
      <div 
        className='cart-link'
        onClick={toggleCart}>
        Cart {quantities.reduce((sum, i) => i + sum)}
      </div>
      <ul className='products'>
        {listItems}
      </ul>
      <Cart 
        quantities={quantities}
        products={products} />
    </section>
  );
}

export default Shop;
