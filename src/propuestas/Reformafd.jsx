import   Header  from "../Cabecera/Header"
import   Carusel from "../carusel/Carusel"
import   Footer  from "../piepagina/Footer"
import './Propuestas.css'

function Reformafd(){
	return(
	<div>
	<Header/>
	<Carusel/>
	   
	    <div className="section" style={{marginTop:"10px"}}>
          
		  <div className="container article">
            <div className="row justify-content-center align-items-stretch">
             
			 <article className="col-lg-8 order-lg-2 px-lg-5">



          <h3 className="text-center" id="b">Reforma Federativa </h3>

          <p className="fs-5 parrafo">
		 <span className="b"> VII. Estado absolutamente Federal: </span>
		   Avanzando en institutos:<br/> 
		  a) juicios por jurados.<br/>
		  b) Presupuestos participativos. Subsidiariedad en decisiones jurídico-políticas de actos administrativos, descentralización tributaria y fortalecimiento de Gob. Municipales y Provinciales.
          VII.1<br/>
		  c) Descentralización permanente de gestiones y actividades públicas.<br/>
		  d) Descentralización de la Recaudación tributaria.<br/>
		  e) Desarrollo de potestades tributarias locales para provincias y municipios.<br/>
		  f) mayor grado de autonomía y libertad de las provincias para su desarrollo
          VII.<br/>
		  g) Los organismos de control, serán constituidos por miembros de la oposición, 
		  y no podrán ser integrados por quienes guarden alguna relación. 
		  Sus miembros, no podrán provenir de empresas privadas, ni tener compromisos con ellas. 
		  El incumplimiento será penado penalmente.

          </p>

        


       

         
         

              

               
             

        </article>
		  
		   </div>
		</div>   
        </div>

 <Footer/>
</div>
)
}


export default Reformafd