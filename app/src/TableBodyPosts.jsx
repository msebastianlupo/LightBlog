import { Link } from "react-router-dom"

function TableBodyPosts({posts}){

    return(
        <tbody>
            {posts.map((post, index) => 
                <tr key={post._id} className="chipad-1 chibor-0-1">
                    <td>{post.created}</td>
                    <td>{post.user}</td>
                    <td>{post.title}</td>
                    <td className="wid-30">
                        <Link className="dis-i-b mar-y-1 wid-10 pad-1 rad-0-5 bac-s hovbac-d mar-1 col-p" to={"delete/" + post._id} >Borrar</Link>
                        <Link className="dis-i-b wid-10 pad-1 rad-0-5 bac-s hovbac-w mar-1 col-p" to={`edit/${post.user}/${post._id}`} >Editar</Link>
                    </td>
                </tr>
            )}
        </tbody>
    )
}

export default TableBodyPosts