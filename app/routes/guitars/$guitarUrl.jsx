import { useLoaderData } from '@remix-run/react'
import { getGuitar } from '~/models/guitars.server'

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
  const guitar = useLoaderData()
  const {name, description, image, price} = guitar.data[0].attributes
  return (
    <main className="o-container">
     <div className="c-guitar">
     <img src={image.data.attributes.url} alt={`${name} Guitar Image`}  className='c-guitar__img'/>
      <div className="c-guitar__content">
        <h3 className="c-guitar__heading">{name}</h3>
        <p className="c-guitar__description--complete">{description}</p>
        <p className="c-guitar__price">{price}</p>
      </div>
     </div>
    </main>
  )
}

export default Guitar