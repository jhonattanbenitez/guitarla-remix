import { Link } from '@remix-run/react'
import React from 'react'
import { dateFormat } from '../utils/helpers'

function Post({post}) {
  const {title, content, image, url, publishedAt} = post
  return (
    <article className='c-post'>
        <img src={image.data.attributes.formats.small.url} alt={`blog image for ${title}`}  className='c-post__img'/>
        <div className="c-post__wrapper">
            <h3 className="c-post__title">{title}</h3>
            <p className="c-post__date">{dateFormat(publishedAt)}</p>
            <p className="c-post__summary">{content}</p>
            <Link className='c-post__link' to={`/post/${url}`} >{`Read about: ${title}`}</Link>
        </div>
    </article>
  )
}

export default Post