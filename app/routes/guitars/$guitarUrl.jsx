import { useLoaderData, useOutletContext, Link } from '@remix-run/react'
import { getGuitar } from '~/models/guitars.server'
import { useState } from 'react'

export async function loader({params}) {
  const {guitarUrl} = params
  const guitar = await getGuitar(guitarUrl)

  if(guitar.data.length === 0) {
    throw new Response('', {
       status: 404,
       statusText: 'Guitar Not Found'
    })
  } 
  return guitar
}

export function meta({data}) {
  if(!data) {
    return {
       title: 'Guitar Not Found'
    }
  }
  return {
     title: `Guitar LA - ${data.data[0].attributes.name}`
  }
}

function Guitar() {
  const {addToCart} = useOutletContext()
  const [quantity, setQuantity] = useState(0)
  const guitar = useLoaderData()
  const {name, description, image, price} = guitar.data[0].attributes


  const handleSubmit = (e) => {
    e.preventDefault()
    if(quantity < 1) {
       alert('Please select a quantity')
       return
    }
    const selectedGuitar = {
      id: guitar.data[0].id,
      img: image.data.attributes.url,
      name,
      price,
      quantity
    }
    addToCart(selectedGuitar)
  }
  return (
    <main className="o-container">
     <div className="c-guitar">
     <img src={image.data.attributes.url} alt={`${name} Guitar Image`}  className='c-guitar__img'/>
      <div className="c-guitar__content">
        <h3 className="c-guitar__heading">{name}</h3>
        <p className="c-guitar__description--complete">{description}</p>
        <p className="c-guitar__price">{price}</p>
        <form className='c-form' onSubmit={handleSubmit}>
            <label htmlFor="Quantity" className='c-form__label'>Quantity</label>
            <select name="Quantity" id="Quantity" className='c-form__select'
            onChange={e => setQuantity(parseInt(e.target.value))}>
              <option value="0">--Select--</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            <input type="submit" value="Add to Cart" className='c-form__btn'/>
            <Link className="c-guitar__link"  to={`/cart`}>go to cart</Link>
        </form>
      </div>
     </div>
    </main>
  )
}

export default Guitar