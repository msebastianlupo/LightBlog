import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import TextInput from '../forms/TextInput.jsx'
import Textarea from '../forms/Textarea.jsx'
import Submit from '../forms/Submit.jsx'

function PostEdit(){
    const [errors, setErrors] = useState("")
    const [post, setPost] = useState("")
    const {userId, postId} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        fetch(`http://localhost:2023/posts/${postId}`)
        .then(res => res.json())
        .then(data => setPost(data))
        .catch(err => err)
    }, [])

    const checkForm = (e) => {
        const elements = e.target.elements
        for(let element of elements){
            if(!element.checkValidity()){
                return false
            }
        }
        return true
    }

    const formConvert = (form) => {
        const formData = new FormData(form)
        return Object.fromEntries(formData)
    }

    const updatePost = (e) => {
        e.preventDefault()
        if(checkForm(e)){
            const options = {
                method: 'PATCH',
                headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem("token")
                },
                body: JSON.stringify(formConvert(e.target))
            }
    
            fetch(`http://localhost:2023/users/${userId}/posts/${postId}`, options)
            .then(res => res.status === 400 ? setErrors("Hay errores en el formulario") : navigate('/admin/posts', {replace: true}))
            .catch(err => setErrors(err.error))
        }
    }
    
    return (
        <>
            <h1 className="tex-a-c">Modificación de entrada de blog</h1>
            <div>
                <p className="mar-t-4 tex-a-c tex-2">{errors}</p>
                <form className="chidis-f chidir-c chiinv mar-t-2 chimar-t-2 neu-1 pad-2 rad-1" onSubmit={updatePost}>
                    <TextInput label="Título" name="title" required={true} value={post.title} />
                    <TextInput label="Subtítulo" name="subtitle" required={true} value={post.subtitle} />
                    <TextInput label="Categoría" name="category" min="3" max="20" required={true} value={post.category} />
                    <Textarea label="Cuerpo" name="text" required={true} value={post.text} />
                    <Submit text="Publicar" />
                </form>
            </div>
        </>
    )
}

export default PostEdit