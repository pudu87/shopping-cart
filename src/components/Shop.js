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

  const listItems = products.map((product, index) => {
    return (
      <li key={index}>
        <img src={product.src}/>
        <div className='product-info'>
          <h2>{product.name}</h2>
          <p className='type'>{product.type}</p>
          <p className='price'>$ {product.price}</p>
        </div>
      </li>
    )
  })

  return (
    <section className='shop'>
      <div className='cart'>
        Cart
      </div>
      <ul className='products'>
        {listItems}
      </ul>
    </section>
  );
}

export default Shop;
