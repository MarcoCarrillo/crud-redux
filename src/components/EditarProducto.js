import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {editarProductoAction} from '../actions/productoActions';

const EditarProducto = () => {
    
    //Producto a editar
    const producto = useSelector(state => state.productos.productoeditar);
    if(!producto) return null;
    // console.log(producto);
    const {nombre, precio} = producto;

    const submitEditarProducto = e => {
        e.preventDefault();

        editarProductoAction();
    }

    return ( 
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 ">Editar Producto</h2>
                        <form
                            onSubmit={submitEditarProducto}
                        >
                            <div className="form-group">
                                <label>Editar el Producto</label>
                                <input 
                                    type="text" 
                                    className="form-control"
                                    placeholder="Nombre Producto"
                                    name="nombre" 
                                    value={nombre}
                                />
                            </div>
                            <div className="form-group">
                                <label>Precio del Producto</label>
                                <input 
                                    type="number" 
                                    className="form-control"
                                    placeholder="Precio Producto"
                                    name="precio" 
                                    value={precio}
                                />
                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"     
                            >Guardar Cambios</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default EditarProducto;