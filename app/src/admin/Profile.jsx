import UpdatePassword from './UpdatePassword.jsx'

function Profile(){

    return(
        <>
            <h1 className="tex-a-c">Perfil</h1>
            <h2 className="mar-t-'">Cambiar clave de usuario</h2>
            <div>
                <UpdatePassword />
            </div>
        </>
    )
}

export default Profile