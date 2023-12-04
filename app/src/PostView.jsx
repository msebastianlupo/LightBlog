import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import ErrorSite from "./ErrorSite"
import Comments from './Comments.jsx'
import CommentNew from './CommentNew.jsx'

function PostView(){
    const [post, setPost] = useState({})
    const {postId} = useParams()

    useEffect(() => {
        fetch(`http://localhost:2023/posts/${postId}`)
        .then(res => res.json())
        .then(data => setPost(data))
        .catch(err => err)
    }, [])

    if(post.title){
        return (
            <>
                <h1 className="tex-a-c">{post.title}</h1>
                <h2 className="tex-a-c">{post.subtitle}</h2>
                <p className="wei-400 col-t tex-1-4">{post.category} | {post.created}</p>
                <div className="tex-1-8 whi-p-l">
                    {post.text}
                </div>
                <Comments />
                <CommentNew />
            </>
        )
    }else{
        return <ErrorSite />
    }
}

export default PostView