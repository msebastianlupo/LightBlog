import OptionCard from './OptionCard.jsx'

function Panel(){

    return(
        <>
            <h1 className="tex-a-c">Panel de administración</h1>
            <p className="mar-t-4 col-s wei-400 tex-2 tex-a-c">Bienvenid@ otra vez</p>
            <div className="dis-f wra jus-c mar-t-2 chimar-2 chipad-2 chirad-1 chitex-a-c">
                <OptionCard name="Perfil" btnText="Configurar" link="/admin/profile" icon="faUserGear" />
                <OptionCard name="Equipo" btnText="Gestionar" link="/admin/team" icon="faUsers" />
                <OptionCard name="Entradas de blog" btnText="Gestionar" link="/admin/posts" icon="faRectangleList" />
            </div>
        </>
    )
}

export default Panel