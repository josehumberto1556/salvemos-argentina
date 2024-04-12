import React,{useState,useEffect}from 'react'
import {Link}      from 'react-router-dom'
import {db} from '../Configfirebase/Configfirebase'		
import {collection,
        getDocs,} from 'firebase/firestore'


function Comentarionovedades() {
	
  const [empre,setEmpresas ]=useState([])
  const  empresaCollection=collection(db,"contacto")
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
			<img src="" className="card-img-top" alt="Image"
			width="200" height="200"
			/></a>
            <div className="card-body">
             
              <h5 className="card-title"id="titulo3">
			     {empr.nombre}
			  </h5>
              <p>{empr.comentario} </p>
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

	)
}

export default Comentarionovedades;	