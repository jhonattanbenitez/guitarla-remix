import { Link } from "@remix-run/react"

function Guitar({guitar}) {
    const {description, image, price, url, name} =guitar
  return (
    <div className="c-guitar">
        <img src={image.data.attributes.formats.medium.url} alt={`Guitar Image ${name}`}  className="c-guitar__img"/>
        <div className="c-guitar__content">
            <h3 className="c-guitar__heading">{name}</h3>
            <p className='c-guitar__description'>{description}</p>
            <p className='c-guitar__price'>${price}</p>
            <Link className="c-guitar__link"  to={`/guitars/${url}`}>See product</Link>
        </div>
    </div>
  )
}

export default Guitar