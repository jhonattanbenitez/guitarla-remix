import { useLoaderData } from "@remix-run/react"
import { getPosts } from "../models/post.server"
import Post from "../components/post"

export async function loader() {
    const posts = await getPosts()
    return posts.data
}
export function meta() {
  return {
    title: 'Gutar LA - Blog'
  }
}
function Blog() {
  const posts = useLoaderData()
  return (
    <main className="o-container">
      <h2 className="c-heading">Blog</h2>
      <div className="c-blog">
        {posts.map(post => (
          <Post 
           post={post.attributes}
           key={post.id}
          />
        ))}
      </div>
    </main>
  )
}

export default Blog