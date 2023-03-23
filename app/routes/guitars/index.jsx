import { useLoaderData } from "@remix-run/react"
import { getGuitars } from "~/models/guitars.server"
import Guitar from "~/components/guitar"

export function meta() {
  return {
    title: 'Guitar LA - Store',
    description:
      'Guitar LA - Our Guitar Colection',
  };
}

export async function loader() {
    const guitars = await getGuitars()
    return guitars.data
}

function Store() {
    const guitars = useLoaderData()

    
  return (
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
    </main>
  )
}

export default Store