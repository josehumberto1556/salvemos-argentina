import React,{useState,useEffect}from 'react'
import {Link,useNavigate}  from 'react-router-dom'
import { collection, addDoc } from 'firebase/firestore'
import {db,app} from '../Configfirebase/Configfirebase'	
import { getStorage,
         ref, 
		 uploadBytes,
		 getDownloadURL } from 'firebase/storage'
import Swal  from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import  Comentarionovedades from './Comentarionovedades'



const MySwal = withReactContent(Swal)
		 
function Formulariocontacto({id}) {
  const [ codigo_empresa,setcodigoempresa ] = useState('')
  const [ nombre_empresa,setNombreempresa ] = useState('')
  const [ direccion_empresa,setDireccionempresa ] = useState('')
  const navigate = useNavigate()
  
  const empresaCollection = collection(db, "contacto")
     
      const store = async (e) => {
    e.preventDefault()
    await addDoc( empresaCollection, { nombre:codigo_empresa, 
	                                   email:nombre_empresa,
									   comentario:direccion_empresa
		} )
		MySwal.fire({
                      title: "Bien hecho!",
                      text: "Registo con exito!",
                      icon: "success",
                       button: "Felicitaciones!",
                   });
		 navigate(`/VerNovedades/${id}`)
    
  }   


	return(
 <div className="comment-form-wrap pt-5">
 
 
 
 
 <h3 className="mb-5">Deja  tu Comentario</h3>
 
   <Comentarionovedades/>
        
		<form  className="" onSubmit={store} >
               
			   <div className="form-group">
                  <label for="name">Nombre *</label>
                  <input type="text" 
				  className="form-control" 
				  id="name"
				  minlength="3"
				  maxlength="20"
				  value={codigo_empresa}
                  onChange={ (e) => setcodigoempresa(e.target.value)}
				  placeholder="Nombre ..."
				  required
				  />
				</div>
                
				<div className="form-group">
                  <label for="email">Email *</label>
                  <input type="email" 
				  className="form-control" 
				  id="email"
				   value={nombre_empresa}
				   placeholder="Email ..."
                   onChange={ (e) => setNombreempresa(e.target.value)}
				   minlength="10"
				   maxlength="100"
				   required
				   />
                </div>
                
                <div className="form-group">
                  <label for="message">Comentario</label>
                  <textarea name="message" id="message"
				  cols="30" 
				  rows="5" 
				  className="form-control"
				   value={direccion_empresa}
                  onChange={ (e) => setDireccionempresa(e.target.value)}
				  required
				  placeholder="Comentario ..."
				  >
				  </textarea>
                </div>
				
                <div className="form-group">
                  <input type="submit" value="Enivar Comentario"
				  className="btn btn-primary btn-md"/>
                </div>

        </form>
			  
</div>	)}	  
export default Formulariocontacto