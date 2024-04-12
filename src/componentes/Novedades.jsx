import React,{useState,useEffect}from 'react'
import {Link}      from 'react-router-dom'
import {db} from '../Configfirebase/Configfirebase'		
import {collection,
        getDocs} from 'firebase/firestore'
import   Header       from "../Cabecera/Header"
import   Footer       from "../piepagina/Footer"
import   Carusel      from "../carusel/Carusel"
import "./Contacto.css"




function Novedades() {
	
  const [empre,setEmpresas ]=useState([])
  const  empresaCollection=collection(db,"novedades")
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
	   <div className="section sec-news">
         <div className="container">
		 
		 
		 <h1 className="b text-center">Novedades</h1>
		   <div className="row">
		{empre.map((empr)=>(
		
		<div 
		className="col-md-6 col-lg-4 mb-4"  
		key={empr.id}
		data-aos-delay="0">
          <div className="card post-entry">
            <a>
			<img src={empr.imagen} className="card-img-top" alt="Image"
			width="200" height="200"
			/></a>
            <div className="card-body">
              <div>
			    <span 
				className="text-uppercase font-weight-bold date">
				{empr.fecha}
			   </span>
			  </div>
              <h5 className="card-title"id="titulo3">
			     {empr.nombre_novedades}
			  </h5>
              <p style={{textAlign:"justify"}}>
			  {empr.descripcion.substring(0, 100,"...")} </p>
              <p className="mt-5 mb-0 text-center">
		<Link to={`/VerNovedades/${empr.id}`} className="b">Leer  m&aacute;s</Link></p>
            </div>
          </div>
        </div>
		
		))}
		
		
		
		
		
		
		
		
		
		   </div>
		   
		    <div className="row">
        <div className="col-lg-12 text-center py-5">
          <div className="custom-navigation">
            <a href="#" className="active">1</a>
            <a href="#">2</a>
            <a href="#">3</a>
            <a href="#">4</a>
            <span>...</span>
            <a href="#">5</a>
        </div>
      </div>
    </div>
		   
		   
		 </div>
      </div>
<Footer/>
  
	</>
	)
}

export default Novedades;	