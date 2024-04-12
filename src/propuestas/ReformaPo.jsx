import   Header  from "../Cabecera/Header"
import   Carusel from "../carusel/Carusel"
import   Footer  from "../piepagina/Footer"
import './Propuestas.css'

function ReformaPo(){
	return(
	<div>
	<Header/>
	<Carusel/>
         <div className="section">
          
		  <div className="container article">
            <div className="row justify-content-center align-items-stretch">
             
			 <article className="col-lg-8 order-lg-2 px-lg-5">



          <h3 className="text-center" id="b">Reforma Política  </h3>

          <p className="fs-5 parrafo">
		 Reforma política para recuperar la democracia y erradicar la corrupción

•	Reforma electoral con voto electrónico, boleta única y eliminación de las listas sábanas para reducir gastos, circulación y terminar con el fraude electoral.<br/>
•	Ficha limpia y declaraciones juradas obligatorias y online para todos los candidatos a los poderes Ejecutivo, Legislativo y Judicial a nivel nacional, provincial y municipal.<br/>
•	PPara los políticos corruptos: prisión efectiva, devolución de lo robado, extinción de dominio e inhabilitación política de por vida. <br/>
•	Inhabilitación para los políticos con causas abiertas de corrupción.<br/>
•	Control estricto del patrimonio y declaraciones juradas de todos funcionarios públicos e 
inhabilitación y penas efectivas para los que no puedan justificar su incremento patrimonial.<br/>
•	Fin de las reelecciones indefinidas para todos los cargos políticos nacionales, provinciales y municipales.

          </p>
        </article>
		  
		   </div>
		</div>   
        </div>

 <Footer/>

</div>
)
}


export default ReformaPo