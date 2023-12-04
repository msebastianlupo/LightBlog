import { Link } from "react-router-dom"

function TableBodyUsers({users}){

    return(
        <tbody>
            {users.map((user, index) => 
                <tr key={user._id} className="chipad-1 chibor-0-1">
                    <td>{user._id}</td>
                    <td>{user.email}</td>
                    <td className="wid-30">
                        <Link className="dis-i-b wid-20 mar-y-1 wid-10 pad-1 rad-0-5 bac-s hovbac-d mar-1 col-p" to={"delete/" + user._id} >Desactivar</Link>
                    </td>
                </tr>
            )}
        </tbody>
    )
}

export default TableBodyUsers