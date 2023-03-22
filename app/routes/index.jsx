import { useLoaderData } from '@remix-run/react';
import { getGuitars } from '../models/guitars.server';
import { getPosts } from '../models/post.server';
import { getLesson } from '../models/lesson.server';
import Guitar from '~/components/guitar';
import Post from '../components/post';
import Lesson from '../components/lesson';
export function meta() {
  return {
    title: 'Home',
  };
}

export async function loader() {
  const [guitars, posts, lesson] = await Promise.all([
    getGuitars(),
    getPosts(),
    getLesson(),
  ]);

  return { guitars: guitars.data, posts: posts.data, lesson: lesson.data };
}
function Index() {
  const { guitars, posts, lesson } = useLoaderData();

  return (
    <>
      <main className="o-container">
        <h2 className="c-heading">Our Colection</h2>
        {guitars.length && (
          <div className="c-guitars__grid">
            {guitars.map((guitar) => (
              <Guitar guitar={guitar?.attributes} key={guitar?.id} />
            ))}
          </div>
        )}
      </main>
      <Lesson lesson={lesson?.attributes}/>
      <div className="o-container">
        <h2 className="c-heading">Blog</h2>
        <div className="c-blog">
          {posts.map((post) => (
            <Post post={post.attributes} key={post.id} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Index;
