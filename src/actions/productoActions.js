import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR,
    COMENZAR_DESCARGA_PRODUCTOS,
    DESCARGA_PRODUCTOS_EXITO,
    DESCARGA_PRODUCTOS_ERROR,
    OBTENER_PRODUCTO_ELIMINAR,
    PRODUCTO_ELIMINADO_EXITO,
    PRODUCTO_ELIMINADO_ERROR
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


//Funcion que descarga los productos de la db
export function obtenerProductosAction () {
    return async (dispatch) => {
        dispatch( descargarProductos() );

        try {
            const respuesta = await clienteAxios.get('productos');
            dispatch( descargarProductosExitosa(respuesta.data) );
        } catch (error) {
            dispatch( descargarProductosError() );
        }
    }
}

const descargarProductos = () => ({
    type: COMENZAR_DESCARGA_PRODUCTOS,
    payload: true
});

const descargarProductosExitosa = productos =>({
    type: DESCARGA_PRODUCTOS_EXITO,
    payload: productos
});

const descargarProductosError = () => ({
    type: DESCARGA_PRODUCTOS_ERROR,
    payload: true
});

//Selecciona y elimina el producto
export function eliminarProductoAction(id){
    return async dispatch => {
        dispatch( obtenerProductoEliminar(id) );
        // console.log(id);
        
        try {
        } catch (error) {

        }
    }
}

const obtenerProductoEliminar = id => ({
    type: OBTENER_PRODUCTO_ELIMINAR,
    payload: id
})