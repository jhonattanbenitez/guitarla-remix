import { useOutletContext } from '@remix-run/react';
import { useEffect, useState } from 'react';
export function meta() {
  return {
    title: 'Guitar LA - Shopping Cart',
    description: 'All kind of guitars',
  };
}

function Cart() {
  const [total, setTotal] = useState(0)
  const { cart, updateQuantity } = useOutletContext();

  useEffect(() => {
    const calcTotal = cart.reduce((total, product) => total + (product.quantity * product.price), 0)
    setTotal(calcTotal)
  }, [cart])
  return (
    <main className="o-container">
      <h1 className="c-heading">Shopping Cart</h1>
      <div className="c-cart__content">
        <div className="c-cart__articles">
          <h2>Articles</h2>
          {cart.length === 0
            ? 'Empty Cart'
            : cart.map((product) => (
                <div key={product.id} className="c-cart__product">
                  <div>
                    {console.log(product)}
                    <img src={product.img} alt={`Image of ${product.name}`} />
                  </div>
                  <div>
                    <p className="c-cart__name">{product.name}</p>
                    <p>Quantity:</p>
                    <select name="" id="" value={product.quantity} className="c-cart__select" onChange={e => updateQuantity({
                      quantity: +e.target.value,
                      id: product.id
                    })}>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                    <p className="c-cart__price">
                      $ <span>{product.price}</span>
                    </p>
                    <p className="c-cart__subtotal">
                      Subtotal: ${' '}
                      <span>{product.price * product.quantity}</span>
                    </p>
                  </div>
                  <button
                  type='button' className='c-cart__btn'>x</button>
                </div>
              ))}
        </div>
        <aside className="c-cart__summary">
          <h3>Your order</h3>
          <p>Total: ${total}</p>
        </aside>
      </div>
    </main>
  );
}

export default Cart;
