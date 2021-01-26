function Cart(props) {
  const { quantities, items } = props;

  const calculateItemTotal = (quantity, index) => {
    return quantity * items[index].price;
  }

  const calculateTotal = () => {
    return quantities.reduce((sum, quantity, index) => {
      return sum + (quantity * items[index].price);
    }, 0).toLocaleString()
  }

  const itemTable = quantities.map((quantity, index) => {
    if (quantity !== 0) {
      return (
        <tr key={index}>
          <th key={`${index}-1`}>
            {items[index].name}
          </th>
          <th key={`${index}-2`}>
            × {quantity}
          </th>
          <th key={`${index}-3`}>
            {calculateItemTotal(quantity, index).toLocaleString()}
          </th>
        </tr>
      )
    }
  })

  return (
    <section 
      className='cart hide'>
      <table>
        <tbody>
          {itemTable}
          <tr>
            <th>Total</th>
            <th></th>
            <th>{calculateTotal()}</th>
          </tr>
        </tbody>
      </table>
      <button>Checkout</button>
    </section>
  )
}

export default Cart;
