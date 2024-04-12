import React,{useState,useEffect}from 'react'
import {db,app} from '../Configfirebase/Configfirebase'		
import {Link,useParams} from 'react-router-dom'
import { getDoc,
         doc,
		 collection,
		 getDocs,
         addDoc,
         getStorage, } from "firebase/firestore"
import   Header    from "../Cabecera/Header"
import   Carusel   from "../carusel/Carusel"
import   Footer    from "../piepagina/Footer"
import   Formulariocontacto    from "./Formulariocontacto"
import   Comentarios           from "./Comentarios"
import Swal  from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

function VerProvincia() {
	
	 const {id} = useParams()
	 
	 const [ nombre_novedades,setcodigoempresa ] = useState('')
     const [ imagen,setNombreempresa ] = useState('')
     const [ descripcion,setDescripcion ] = useState('')	

	 const [  nombre,setNombre ] = useState('')
     const [  email,setEmail ] = useState('')
     const [ direccion_empresa,setDireccionempresa ] = useState('')
     const [  asunto,setAsunto ] = useState('')
	  
	 const empresaCollection = collection(db, "contactoprovincia")
     
      const store = async (e) => {
    e.preventDefault()
    await addDoc( empresaCollection, { nombre:nombre, 
	                                   email:email,
									   comentario:direccion_empresa,
									   asunto:asunto,
									   provincia:nombre_novedades
		} )
		MySwal.fire({
                      title: "Bien hecho!",
                      text: "Registro con Exito!",
                      icon: "success",
                       button: "Felicitaciones!",
                   });
    
  }   

	 const getEmpresaById = async (id) => {
        const empresa = await getDoc( doc(db, "provincias", id) )
        if(empresa.exists()) {
            //console.log(product.data())
            setcodigoempresa(empresa.data().nombre_provincia)    
            setNombreempresa(empresa.data().bandera)
			setDescripcion(empresa.data().description) 
           
        }else{
            console.log('El  no existe')
        }
    }
	 
	  useEffect( () => {
        getEmpresaById(id)
        // eslint-disable-next-line
    }, [])
   
	
   
	
	 
	return(
	<>
	 <Header/>
	 <Carusel/>
	          <div className="section" style={{marginTop:"80px"}}>
    <div className="container article">
      <div className="row justify-content-center align-items-stretch">

        <article className="col-lg-8 order-lg-2 px-lg-5">
          
		  

          <img src={imagen} 
		  alt="Image" className="img-fluid"
            width="600"
			height="600"
		  />

          <h3 className="text-center">{nombre_novedades}</h3>
          <p style={{textAlign:"justify"}}> 
          {descripcion}
		  </p>
          
		  
        
      


          

        </article>

     </div>
    
    </div>
  </div>
 <div>
              <h1 className="b text-center">Contactenos</h1>
            </div>
 <div className="row">

          <div className="col-lg-12">
  <div className="form">
              <form  role="form" className="php-email-form" onSubmit={store}>
                
				<div className="row">
                  
				  <div className="form-group col-lg-6">
                    <input type="text" 
					name="name" 
					className="form-control" 
					id="name" 
					placeholder="Nombre" 
					required
					minlength="3"
				    maxlength="20"
				    value={nombre}
                    onChange={ (e) => setNombre(e.target.value)}
					/>
                  </div>
				  
                  <div className="form-group col-lg-6 mt-3 mt-lg-0">
                    <input type="email" 
					className="form-control" 
					name="email" 
					id="email" 
					placeholder="Correo Electronico" 
					value={email}
					onChange={ (e) => setEmail(e.target.value)}
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
               
                <div className="text-center">
				<button type="submit" 
				title="Enviar Mensaje" 
				className="btn btn-primary">Enviar Mensaje
				</button></div>
              </form>
            </div>
			
    </div>
  </div>
	 <Footer/>
	</>
	)
}

export default VerProvincia;
	