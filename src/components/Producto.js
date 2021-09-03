import React from 'react'
import {Link, useHistory} from 'react-router-dom';
import Swal from 'sweetalert2';

//Redux
import { useDispatch } from 'react-redux';
import {eliminarProductoAction} from '../actions/productoActions';

const Producto = ({producto}) => {

    const {nombre, precio, id} = producto;

    const dispatch = useDispatch();
    const history = useHistory(); //Habilitar history para redireccion

    //Cuando el usuario presione eliminar confirmar si desea eliminarlo
    const confirmarEliminarProducto = id =>{

        //Preguntar al usuario
        Swal.fire({
            title: '¿Estás Seguro?',
            text: "Esta opción es irreversible!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, eliminar!',
            cancelButtonText: 'Cancelar'
          }).then((result) => {
            if (result.isConfirmed) {
                //Pasarlo al action
                dispatch(eliminarProductoAction(id));
                
            }
          })
        
    } 

    //Funcion que redirige de forma programada
    const redireccionarEdicion = producto =>{
        history.push(`/productos/editar/${producto.id}`)
    }
    
    return ( 
        <tr>
            <td>{nombre}</td>
            <td><span className="font-weight-bold">${precio}</span></td>
            <td className="acciones">
                <button 
                    type="button"
                    onClick={()=> redireccionarEdicion(producto)}
                    className="btn btn-primary mr-2">
                    Editar
                </button>
                <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => confirmarEliminarProducto(id)}
                >Eliminar</button>
            </td>
        </tr>
     );
}
 
export default Producto;