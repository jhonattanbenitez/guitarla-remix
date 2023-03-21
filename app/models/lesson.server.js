export async function getLesson () {
    const respose = await fetch(`${process.env.API_URL}/lesson?populate=image`)
    return await respose.json()
}