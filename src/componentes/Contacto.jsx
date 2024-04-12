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
import './Contacto.css'
import   Header   from "../Cabecera/Header"
import   Carusel  from "../carusel/Carusel"
import   Footer   from "../piepagina/Footer"


const MySwal = withReactContent(Swal)


function Contacto(){
  
  const [ codigo_empresa,setcodigoempresa ] = useState('')
  const [ nombre_empresa,setNombreempresa ] = useState('')
  const [ direccion_empresa,setDireccionempresa ] = useState('')
  const [  asunto,setAsunto ] = useState('')
  let m="contacto"
  const empresaCollection = collection(db, "contacto")
     
      const store = async (e) => {
    e.preventDefault()
    await addDoc( empresaCollection, { nombre:codigo_empresa, 
	                                   email:nombre_empresa,
									  comentario:direccion_empresa,
									  asunto:asunto,
									  tipomensaje:m
		} )
		MySwal.fire({
                      title: "Bien hecho!",
                      text: "Registro con Exito!",
                      icon: "success",
                       button: "Felicitaciones!",
                   });
    
  }   
	return(
	 <>
   <Header/>
   <Carusel/>
    <section id="contact">
      
	   <div className="container-fluid">

            <div>
              <h1 className="b text-center">Contacto</h1>
            </div>
			
			
        <div className="row">

          

          
            <div className="form">
              <form  
			  role="form" 
			  className="php-email-form" 
			  onSubmit={store}>
                
				<div className="row">
                  
				  <div className="form-group col-lg-12">
                    <input type="text" 
					name="name" 
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
				  
                  <div className="form-group col-lg-12 mt-3 mt-lg-0">
                    <input type="email" 
					className="form-control" 
					name="email" 
					id="email" 
					placeholder="Correo Electronico" 
					value={nombre_empresa}
					onChange={ (e) => setNombreempresa(e.target.value)}
				    minlength="10"
				    maxlength="100"
					required/>
                  </div>
                </div>
				
                <div className="form-group mt-3">
                  <input 
				   type="text" 
				   className="form-control"
				   name="subject" 
				   id="subject" 
				   placeholder="Asunto" 
				   required
				   value={asunto}
					onChange={ (e) => setAsunto(e.target.value)}
				   />
                </div>
				
                <div className="form-group mt-3">
                  <textarea className="form-control" 
				  name="message"
                   cols="30" 				  
				  rows="5" 
				  placeholder="Mensaje ... " 
				  required 
				   value={direccion_empresa}
                  onChange={ (e) => setDireccionempresa(e.target.value)}
				  >
				  </textarea>
                </div>
               
                <div className="text-center"><button type="submit" title="Send Message">Enviar Mensaje</button></div>
              </form>
            </div>
          </div>

      
			
			
		</div>	
		 

	  
	  
    </section>
	 <Footer/>
 </>
)}

export default  Contacto;