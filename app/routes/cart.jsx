import { useOutletContext } from "@remix-run/react";
export function meta () {
    return {
        title: 'Guitar LA - Shopping Cart',
        description: 'All kind of guitars'
    }
}

function Cart() {
  const cart = useOutletContext()
  console.log(cart)
  return (
    <main className="o-container">
      <h1 className="c-heading">Shopping Cart</h1>
      <div className="c-cart__content">
        <div className="c-cart__articles">
            <h2>Articles</h2>
        </div>
        <aside className="c-cart__summary">
          <h3>Your order</h3>
          <p>Total: $</p>
        </aside>
      </div>
    </main>
  );
}

export default Cart;
