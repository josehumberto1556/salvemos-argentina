import React,{useState,useEffect}from 'react'
import {Link }   from "react-router-dom";
import {db} from '../Configfirebase/Configfirebase'		
import { collection, addDoc } from 'firebase/firestore'
import { getStorage,
         ref, 
		 uploadBytes,
		 getDownloadURL } from 'firebase/storage'
import Swal  from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import "./Footer.css"

const MySwal = withReactContent(Swal)


function Footer(){
	
	 const [ codigo_empresa,setcodigoempresa ] = useState('')
	  const store = async (e) => {
       e.preventDefault()
	   
      const empresaCollection = collection(db, "subscribcion")

    await addDoc( empresaCollection, {email:codigo_empresa
									   } )
									   
    MySwal.fire({
                      title: "Bien hecho!",
                      text: "subscribción con exito!",
                      icon: "success",
                       button: "Felicitaciones!",
    //console.log(e.target[0].value)
	  })}


	
	return(
 <footer id="footer">
    <div className="footer-top">
      <div className="container">
        <div className="row">

          <div className="col-lg-4 col-md-6 footer-info">
            <h3>Salvemos Argentina</h3>
			<p>
			Somos un conjunto de ciudadanos que decidimos conformar un proyecto político alrededor de todo el país,  para tomar acción política, social, cultural y resolver desde nuestro alcance los problemas de fondo que afectan a nuestra nación
			</p>
          </div>

          <div className="col-lg-2 col-md-6 footer-links">
            <h4>Enlaces</h4>
            <ul>
              <li><Link to="/">Inicio</Link></li>
              <li><Link to="/Provincias">Provincias</Link></li>
              <li><Link to="/Novedades">Novedades</Link></li>
              <li><a href="#" data-bs-toggle="modal" data-bs-target="#exampleModal">Terminos de Servicio</a></li>
            </ul>
          </div>

           <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" 
		id="exampleModalLabel" style={{color:"black",fontWeight:"bold"}}>
		Terminos de Servicios
		</h5>
        
		
		<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body" style={{color:"black",fontWeight:"bold"}}>
        Nuestra misi&oacute;n es infomar  y expresar nuestro opiniones para lograr un mejor pais.
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Cerrar</button>
        
      </div>
    </div>
  </div>
</div>

          <div className="col-lg-3 col-md-6 footer-contact">
            <h4>Contacto</h4>
            <p>
              Contactanos atravez de nuestro grupo de whtasap 
			  o escribiendo a nuestro correo<br/>
              <strong>Whtasap:

			   <Link 
			   style={{color:"white",marginLeft:"5px"}}
			  to="https://chat.whatsapp.com/Lle25x4yPZ4ATQhs1q9nKR">
			     Ir al Grupo
				</Link>
			 
			 </strong>  <br/>
              
            </p>

          

          </div>

          <div className="col-lg-3 col-md-6 footer-newsletter">
            <h4>Subscribete</h4>
			<p>Subscribete para reibir m&aacute;s informaci&oacute;nada
			sobre nuestros eventos</p>
            <form onSubmit={store}>
              <input type="email" name="email" required
			  value={codigo_empresa}
              onChange={ (e) => setcodigoempresa(e.target.value)}/>
			  <input type="submit" value="Subscribe"/>
            </form>
          </div>

        </div>
      </div>
    </div>

    <div className="container">
      <div className="copyright">
        &copy; Copyright <strong>Salvemos Argentina </strong>. Todos los derechos Reservados
      </div>
      <div className="credits">
    
       Desarrollado por <a href="#">Salvemos Argentina </a>
      </div>
    </div>
  </footer>
	)
	
}

export default  Footer;