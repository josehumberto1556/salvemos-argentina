import React,{useState,useEffect}from 'react'
import {Link,useNavigate}  from 'react-router-dom'
import { collection, addDoc } from 'firebase/firestore'
import {db,app} from '../Configfirebase/Configfirebase'	
import Swal  from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)


function FormulrioOpiniones (){
	
	const [ codigo_empresa,setcodigoempresa ] = useState('')
    const [ nombre_empresa,setNombreempresa ] = useState('')
    const [ direccion_empresa,setDireccionempresa ] = useState('')
	 let m="contacto"
	const fecha=new Date()
	
    const empresaCollectio = collection(db,"opiniones")
     
      const store = async (e) => {
    e.preventDefault()
    await addDoc( empresaCollectio, { nombreu:codigo_empresa, 
	                                   email:nombre_empresa,
									   descripcion :direccion_empresa,
									   fecha:fecha,
									   tipomensaje:m
		} )
		MySwal.fire({
                      title: "Bien hecho!",
                      text: "Registro con Exito!",
                      icon: "success",
                       button: "Felicitaciones!",
                   });
       

  }   
	
 return (
 
            
		  <div className="comment-form-wrap pt-5">	
			<h3 className="mb-5">Escribir Comentario</h3>
              <form  className="" onSubmit={store}>
                
				<div className="form-group">
                  <label for="name">Nombre *</label>
                  <input 
				  type="text" 
				  className="form-control" 
				  id="name"
				  placeholder="Nombre" 
				  required
				  minlength="3"
				  maxlength="20" 
				  value={codigo_empresa}
                  onChange={ (e) => setcodigoempresa(e.target.value)}
				  />
                </div>
                
				<div className="form-group">
                  <label for="email">Email *</label>
                  <input
				  type="email" 
				  className="form-control" 
				  name="email"
				  id="email"
				  placeholder="Email"
				  value={nombre_empresa}
				  onChange={ (e) => setNombreempresa(e.target.value)}
				  minlength="10"
				  maxlength="100"
				  required
				  />
                </div>
              
                <div className="form-group">
                  <label for="message">Comentario*</label>
                  <textarea 
				  name="message" 
				  id="message" 
				  cols="30" 
				  rows="5"
				  className="form-control"
				  placeholder="Comentario"
				  required 
				  value={direccion_empresa}
                  onChange={ (e) => setDireccionempresa(e.target.value)}
				  >
				  </textarea>
                </div>
				
                <div className="form-group">
                  <input type="submit" value="Enviar Comentario"
				  className="btn btn-primary btn-md"/>
                </div>

              </form>
	        </div>
)}

export default FormulrioOpiniones;