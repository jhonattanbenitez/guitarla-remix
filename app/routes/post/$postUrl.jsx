import { useLoaderData } from "react-router"
import { getPost } from "../../models/post.server"
import { dateFormat } from "../../utils/helpers"

export async function loader({params}) {
  const {postUrl} = params
  const post = await getPost(postUrl)
  if(post.data.length === 0) {
    throw new Response('', {
       status: 404,
       statusText: 'Post Not Found'
    })
  } 
  return post
}

function Post() {
 const post = useLoaderData()
 const {content, image, title, publishedAt} = post.data[0].attributes
  return (
    <article className="o-container">
     {<div className="c-post">
     <img src={image.data.attributes.url} alt={`${title} post Image`}  className='c-post__img'/>
      <div className="c-post__wrapper">
        <h3 className="c-post__heading">{title}</h3>
        <p className="c-post__date">{dateFormat(publishedAt)}</p>
        <p className="c-post__content">{content}</p>
      </div>
     </div>}
    </article>)
}

export default Post