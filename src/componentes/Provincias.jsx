import React, { useState, useEffect } from 'react';
import {Link}  from 'react-router-dom'

import {collection,
        getDocs
		} from 'firebase/firestore'
import {app,db} from '../Configfirebase/Configfirebase'		
import   ProvinciaArgentina   from "./ProvinciaArgentina"
import   Header   from "../Cabecera/Header"
import   Carusel  from "../carusel/Carusel"
import   Footer   from "../piepagina/Footer"

import   Barra   from "./redes_sociales/barra"

const Provincias = () => {
  

  const [searchTerm, setSearchTerm] = useState('');
  const [empre,setEmpresas ]=useState([])
  const  empresaCollection=collection(db,"provincias")
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
  

  

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
	console.log(empre.nombre_provincia)
  };

  const filteredData = empre.filter((item) =>
    item.nombre_provincia.toLowerCase().includes(searchTerm.toLowerCase())
  );


 
  
  return (
     <>
	 <Header/>
	 <Carusel/>
	 <Barra/>
	  <div className="row">
        <div className="col-md-4 offset-md-4 p-4">   
		<h1 className="b">Pronvincias</h1>
		<form>
		  <input type="text" 
		  value={searchTerm} 
		  onChange={handleSearch} 
		  placeholder="Buscar  Provincia ..." 
		  className="form-control"
		  reuired/>
        </form>	
        </div></div>
       	<div className="row">
			{filteredData.map((item) => (
			
	        
		
		<div className="col-md-6 col-lg-4 mb-4"  data-aos-delay="0"
		key={item.id}>
          <div className="card post-entry">
            <a>
			<img src={item.bandera} 
			className="card-img-top" 
			alt={item.nombre_provincia}
			width="200" height="300"
			/></a>
            <div className="card-body">
              <h1 className="b text-center">
			    {item.nombre_provincia}
			  </h1>
               <div className="text-center">
			   <Link 
				to={`/VerProvincia/${item.id}`}
	            className="btn btn-primary">
                       Leer  m&aacute;s
                 </Link>
				   
				 </div>		
	
		   </div>
		  
      </div>   
		
		 </div>
			))}
		 
	      </div>		
		
	   
    <Footer/>
   </>
  );
};

export default Provincias;