import {getGuitars} from '../models/guitars.server'
import {getPosts} from '../models/post.server'
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
  console.log(guitars)
  console.log(posts)
  return {}
}
function Index() {
  return (
    <div>Desde index</div>
  )
}

export default Index