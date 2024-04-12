import   Header  from "../Cabecera/Header"
import   Carusel from "../carusel/Carusel"
import   Footer  from "../piepagina/Footer"
import './Propuestas.css'

function ReformaEd(){
	return(
	<div>
	<Header/>
	<Carusel/>
	     <div className="section" style={{marginTop:"10px"}}>
          
		  <div className="container article">
            <div className="row justify-content-center align-items-stretch">
             
			 <article className="col-lg-8 order-lg-2 px-lg-5">



          <h3 className="text-center" id="b">Reforma Educativa </h3>

          <p className="fs-5 parrafo">
		 VIII.1 Educación Pública y obligatoria de doble escolaridad, primaria y secundaria. Participación de las familias en programas de reeducación para adultos entre 20 y 45 años. Destinar como presupuesto educativo, no menos del 10% de los ingresos tributarios de los estados Municipales, Provinciales y Nacionales.
VIII.1: Bases: Ningún presupuesto, podrá superar al educativo. Jornadas de 10 hs. diarias de lunes a sábado, de excelencia y calidad. Hijos de jueces y funcionarios deberán asistir a escuelas públicas, obligatorariamente. Los padres, directores escolares y educadores, serán responsables civil y penalmente, de la permanencia de los educandos en el sistema educativo.
VIII.2: Fortalecimiento de la Fé: Propender al sostenimiento de la sana educación confesional Católica, Evangélica, y otros cultos tradicionales, siguiendo las enseñanzas de Don Bosco y Juan Bautista de La Salle, entre otros.

          </p>
        </article>
		  
		   </div>
		</div>   
        </div>

    <Footer/>


</div>
)
}


export default ReformaEd