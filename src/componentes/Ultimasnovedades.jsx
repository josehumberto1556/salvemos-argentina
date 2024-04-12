import React,{useState,useEffect}from 'react'
import {Link}      from 'react-router-dom'
import {db} from '../Configfirebase/Configfirebase'		
import {collection,
        getDocs,} from 'firebase/firestore'
import "./Contacto.css"


function Ultimasnovedades() {
	
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

<div className="section sec-news">
	<div className="container">
		<div className="row mb-5">
			<div className="col-lg-7">
				<h2 className="heading  b">Ultimas Novedades</h2>
			</div>
		</div>

		<div className="row">
		
        {empre.map((empr)=>(
		    <div className="col-lg-4"
			key={empr.id}
			>
				<div className="card post-entry">
					<a>
					<img src= {empr.imagen} 
					className="card-img-top" alt="Image"
					width="300"
					height="300"
					/></a>
					<div className="card-body">
						<div>
						<span className="text-uppercase font-weight-bold date">
						{empr.fecha}
						</span></div>
						<h5 id="titulo">
						  {empr.nombre_novedades}
						</h5>
						<p style={{textAlign:"justify"}}>
						
						 {empr.descripcion.substring(0, 100,"...")}
						</p>
						<p className="mt-5 mb-0  text-center">
						  <Link 
						  to={`/VerNovedades/${empr.id}`}
                           className="b">
						   Leer m&aacute;s</Link>
						</p>
					</div>
				</div>
			</div>
        ))}

		</div>
	</div>
</div>)}

export default Ultimasnovedades;	