import React,{useState,useEffect}from 'react'
import {db} from '../Configfirebase/Configfirebase'		
import {collection,
        getDocs
		}from 'firebase/firestore'
import   Header               from "../Cabecera/Header"
import   Carusel              from "../carusel/Carusel"
import   Footer               from "../piepagina/Footer"
import   FormulrioOpiniones   from "./FormulrioOpiniones"
import   "./Opiniones.css"



function Opiniones() {
	

	const [empre,setEmpresas ]=useState([])
    const  empresaCollection=collection(db,"opiniones")
	 const getEmpresas=async ()   => {
  const data=await getDocs(empresaCollection)
   //console.log(data.docs)
   setEmpresas(
       data.docs.map( (doc) => ( {...doc.data(),id:doc.id}))
   )
   
     }
	 
	   useEffect( () => {
    getEmpresas()
  }, [] )
	
	
	
	return(
	<>
	 <Header/>
	 <Carusel/>
	          <div className="section">
			   <h1 className="b text-center">Opiniones</h1>
    <div className="container article">
	 <div>
             
            </div>
      <div className="row justify-content-center align-items-stretch">

        <article className="col-lg-8 order-lg-2 px-lg-5">
            <div className="pt-5">
            <ul className="comment-list">
              
			  {empre.map((empr)=>(
			  
			    <li className="comment" key={empr.id}>
			  
			        <div className="vcard bio">
					{/*<img src="" alt="Image placeholder" />*/}
                    </div>
			  
			        <div className="comment-body">
                        <h3>{empr.nombreu}</h3>
                         <div className="meta"></div>
                           <p> 
				            {empr.descripcion} 
				            </p>
                    </div>
						
			  
			  
			    </li>
			  
			  ))}
		
            </ul> 
            
          
              <FormulrioOpiniones/>  
            
          </div>
          

        </article>

    
      </div>
    </div>
  </div>
	 <Footer/>
	</>
	)
}

export default Opiniones;	