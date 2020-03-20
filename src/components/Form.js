import React, { Component } from 'react'


class Form extends Component {
    render()
        {return(
            <form>
                <label>Nombre</label>
                <input type="text" placeholder="Nombre" />
                <input type="text" placeholder="Apellido" />
                <input type="text" placeholder="Teléfono" />
                <input type="text" placeholder="Correo electrónico" />
                <input type="date" placeholder="Fecha de nacimiento" />
            </form>
        )}

}

export default Form