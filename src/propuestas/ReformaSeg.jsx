import   Header  from "../Cabecera/Header"
import   Carusel from "../carusel/Carusel"
import   Footer  from "../piepagina/Footer"
import './Propuestas.css'


function ReformaSeg(){
	return(
	<div>
	<Header/>
	<Carusel/>
	      <div className="section">
          
		  <div className="container article">
            <div className="row justify-content-center align-items-stretch">
             
			 <article className="col-lg-8 order-lg-2 px-lg-5">



          <h3 className="text-center" id="b">Reforma En Seguridad </h3>

          <p className="fs-5 parrafo">
		 Seguridad para los ciudadanos y cárcel efectiva para los delincuentes:
<br/>
•	Apoyar a las fuerzas de seguridad en el cumplimiento del deber y mejorar sueldos, equipamiento e infraestructura
<br/>
•	Combatir el narcotráfico, prevenir el consumo de drogas y trabajar en la recuperación de las personas adictas
<br/>
•	Reformar el sistema de seguridad para enfrentar nuevos tipos de amenazas del crimen organizado internacional: ciberdelito, corrupción financiera, narcotráfico, tráfico de armas, lavado de dinero, terrorismo, trata, etc.
<br/>
•	Erradicar la corrupción de las Fuerzas de Seguridad
<br/>
•	Fin de la reducción arbitraria de condenas de los delincuentes
<br/>
•	Aumento de penas, aplicación estricta y fin de prisión domiciliaria para abusadores, narcos, corruptos y reincidentes de delitos graves
<br/>
•	Cárceles dignas para que nadie quede libre por falta de infraestructura, encarcelamiento urgente a los presos liberados por el Coronavirus y extraditatación de delincuentes extranjeros
 
          </p>
        </article>
		  
		   </div>
		</div>   
        </div>

    <Footer/>
</div>)}


export default ReformaSeg
