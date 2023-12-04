import { useState, useEffect } from 'react'
import PostCard from './PostCard.jsx'

function PostsList(){
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch('http://localhost:2023/posts')
        .then(res => res.json())
        .then(data => setPosts(data))
    }, [])

    return (
        <>
            <h1 className="tex-a-c">Lista de entradas</h1>
            <div className="mar-t-4">
                {
                    posts.length ? 
                        posts.map((post, index) => <PostCard key={post._id} title={post.title} subtitle={post.subtitle} category={post.category} link={"/posts/" + post._id} />)
                    : <p className="mar-t-2 tex-a-c">No hay publicaciones</p>
                }
            </div>
        </>
    )
}

export default PostsList