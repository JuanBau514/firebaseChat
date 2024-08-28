const lista = ({usuarios}) => {
    return (
        <div>
        <h1>Lista de usuarios</h1>
        <ul>
            {usuarios.map(usuario => (
            <li key={usuario.id}>{usuario.nombre}</li>
            ))}
        </ul>
        </div>
    );
}

    export default lista;