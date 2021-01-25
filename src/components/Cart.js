function Cart(props) {
  const { quantities, products } = props;

  const listItems = quantities.map((quantity, index) => {
    return (
      <li key={index}>
        {products[index].name} : {quantity}
      </li>
    )
  })

  return (
    <section 
      className='cart hide'>
      {listItems}
      <button>
        Checkout
      </button>
    </section>
  )
}

export default Cart;
