

const Posts = async() => {
    let data = await fetch('https://api.vercel.app/blog')
    let posts = await data.json()

    return (
        <ul>
        {posts.map((post) => (
            <li key={post.id} style={{marginBottom: 20}}>
               <h3>{post.title}</h3>
               <p>{post.content}</p>
            </li>
        ))}
        </ul>
    )
}

export default Posts;