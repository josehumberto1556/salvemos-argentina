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
import   paypal   from "../assets/images/paypal.png"
import   binance  from "../assets/images/binance.png"

const MySwal = withReactContent(Swal)


function Donacion(){
  
  const [ codigo_empresa,setcodigoempresa ] = useState('')
  const [ nombre_empresa,setNombreempresa ] = useState('')
  const [ direccion_empresa,setDireccionempresa ] = useState('')
  const [  asunto,setAsunto ] = useState('')

  const empresaCollection = collection(db, "contacto")
     
      const store = async (e) => {
    e.preventDefault()
    await addDoc( empresaCollection, { nombre:codigo_empresa, 
	                                   email:nombre_empresa,
									  comentario:direccion_empresa,
									  asunto:asunto
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
              <h1 className="b text-center">Donación</h1>
            </div>
			
			
        <div className="row">

          <div className="col-lg-12">
            <div className="map mb-4 mb-lg-0 text-center">
              Con tu donación podemos mantener nuestra plaatforma
              <br/>           
		   </div>
          </div>
		 

          <div className="col-lg-12">
          <center>          
		  <img src={paypal}/>
		   <img src={binance} width="150" height="150"/>
		    </center> 
          </div>
		  
		</div></div>	
		 

	  
	  
    </section>
	 <Footer/>
 </>
)}

export default  Donacion;