import React,{useState,useEffect}from 'react'
import {db} from '../Configfirebase/Configfirebase'		
import {Link,useParams} from 'react-router-dom'
import { getDoc,doc,collection,getDocs, } from "firebase/firestore"
import   Header    from "../Cabecera/Header"
import   Carusel   from "../carusel/Carusel"
import   Footer    from "../piepagina/Footer"
import   Formulariocontacto    from "./Formulariocontacto"
import   Comentarios           from "./Comentarios"


function VerNovedades() {
	
	 const {id} = useParams()
	 
	 const [ nombre_novedades,setcodigoempresa ] = useState('')
     const [ fecha,setNombreempresa ] = useState('')
     const [ descripcion,setDescripcion ] = useState('')	
     const [ imagen,setImagen ] = useState('')
     const [ video,setVideo ] = useState('')
	 
	  
	 
	 const getEmpresaById = async (id) => {
        const empresa = await getDoc( doc(db, "novedades", id) )
        if(empresa.exists()) {
            //console.log(product.data())
            setcodigoempresa(empresa.data().nombre_novedades)    
            setNombreempresa(empresa.data().fecha)
			setDescripcion(empresa.data().descripcion) 
            setImagen(empresa.data().imagen)
			setVideo(empresa.data().video)	
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

          <h3>{nombre_novedades}</h3>
          <p style={{textAlign:"justify"}}> 
          {descripcion}
		  </p>
          
		  { /*<p>
		    
			<iframe width="560" height="315" src={video} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
			
          </p>*/}

        
      


          <div className="pt-5">
            
			
            {/*/<Comentarios/>
           
              <Formulariocontacto id={id}/>
			*/}
          </div>
          

        </article>

     </div>
    
    </div>
  </div>
	 <Footer/>
	</>
	)
}

export default VerNovedades;	