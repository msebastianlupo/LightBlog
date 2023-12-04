import { Link } from 'react-router-dom'

function PostCard({title, subtitle, category, link}){
    return(
        <div className="dis-f dir-c pad-2 bor-0-1 rad-1">
            <div className="dis-f">
                <p className="col-t wei-500">{category}</p>
            </div>
            <p className="mar-t-2 tex-2-3">{title}</p>
            <p className="mar-t-1 tex-1-5">{subtitle}</p>
            <div className="tex-a-r">
                <Link to={link} className="dis-i-b mar-t-2 pad-1 bac-s col-p hovbac-t rad-0-5">Leer entrada</Link>
            </div>
        </div>
    )
}


export default PostCard