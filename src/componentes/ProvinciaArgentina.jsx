import   Bandera1    from  "../assets/images/Bandera-de-Catamarca.png"
import {Link }   from "react-router-dom";


function ProvinciaArgentina({bandera,nombre_provincia}) {
	
	return (
      
   
		
		<div className="col-md-6 col-lg-4 mb-4"  data-aos-delay="0">
          <div className="card post-entry">
            <a>
			<img src={bandera} className="card-img-top" alt={nombre_provincia}
			width="200" height="200"
			/></a>
            <div className="card-body">
              <h1 className="b text-center">
			    {nombre_provincia}
			  </h1>
               <div className="text-center">
			   <button 
				type="button"
	            className="btn btn-primary">
                       Leer  m&aacute;s
                 </button>
				 </div>
           
		
		
		
		
		
		
		
		
		
		
		
		   </div>
		   
		   
		   
		   
		 </div>
      </div>
  )
}

export default ProvinciaArgentina