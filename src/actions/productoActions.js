import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR
} from '../types';

import clienteAxios from '../config/axios';
import Swal from 'sweetalert2';

//Crear nuevos productos
export function crearNuevoProductoAction(producto){
    return async (dispatch) => {
        dispatch( agregarProducto() );

        try {
            //Insertar en la API
            await clienteAxios.post('/productos', producto);

            //Si todo sale bien actualizar el state
            dispatch( agregarProductoExito(producto) );

            //Alerta
            Swal.fire(
                'Correcto',
                'El producto se agregó correctamente',
                'success'
            )
        } catch (error) {
            console.log(error);
            //Si hay un error actualizar el state
            dispatch( agregarProductoError(true) );

            //Alerta
            Swal.fire({
                icon: 'error',
                title: 'Ups!',
                text: 'Hubo un error, intenta de nuevo'
            })
        }
    }
}


const agregarProducto = () => ({
    type: AGREGAR_PRODUCTO,
    payload: true
});

//Si el producto se guarda en db 
const agregarProductoExito = producto => ({
    type:  AGREGAR_PRODUCTO_EXITO,
    payload: producto
});

//Si hay error
const agregarProductoError = estado => ({
    type:  AGREGAR_PRODUCTO_ERROR,
    payload: estado
})