import { useLoaderData } from '@remix-run/react'
import {getGuitars} from '../models/guitars.server'
import {getPosts} from '../models/post.server'
import Guitar from "~/components/guitar"
import Post from '../components/post'
export function meta() {
  return {
    title: 'Home'
  }
}

export async function loader() {
  const [guitars, posts] = await Promise.all([
    getGuitars(),
    getPosts()
  ])
  return { guitars: guitars.data, posts: posts.data}
}
function Index() {
  const {guitars, posts} = useLoaderData()

  return (
    <>
     <main className="o-container">
        <h2 className="c-heading">Our Colection</h2>
        {guitars.length && (
            <div className="c-guitars__grid">
                {guitars.map(guitar => (
                    <Guitar 
                        guitar={guitar?.attributes}
                        key={guitar?.id}
                    />
                ))}
            </div>
        )}
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
    </>
  )
}

export default Index