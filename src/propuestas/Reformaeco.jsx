import   Header  from "../Cabecera/Header"
import   Carusel from "../carusel/Carusel"
import   Footer  from "../piepagina/Footer"
import './Propuestas.css'


function Reformaeco(){
	return(
	<div>
	  <Header/>
		<Carusel/>
	   <div className="section">
          
		  <div className="container article">
            <div className="row justify-content-center align-items-stretch">
             
			 <article className="col-lg-8 order-lg-2 px-lg-5">



          <h3 className="text-center" id="b">Reforma Economica </h3>

          <p className="fs-5 parrafo">
•	Promover la cultura del empleo genuino para el desarrollo personal. <br/>
o	Reforma impositiva estructural para generar más empleo genuino. <br/>
o	Reformar, integrar y transparentar el sistema de planes sociales para terminar con su instrumentalización política y generar movilidad hacia
 el empleo genuino. <br/>
o	Programa de reentrenamiento laboral para mejorar las competencias de los
 ciudadanos que buscan trabajo. <br/>
o	Disminución significativa de impuestos para las empresas que 
contraten a beneficiarios de subsidios sociales. <br/>
•	Promover la producción para el desarrollo nacional.  <br/>
o	Créditos especiales y beneficios impositivos sin trabas burocráticas para 
pymes endeudadas por la pandemia. <br/>
o	Reforma laboral, créditos especiales y exenciones impositivas para pymes y 
emprendedores. <br/>
o	Promover y facilitar las exportaciones y reducir las retenciones. <br/>
o	Garantizar que los productores puedan decidir libremente sobre su producción. <br/>
•	Frenar la inflación que perjudica más a los que menos tienen <br/>
o	Reducción del gasto público y en especial el gasto político. <br/>
o	Deskirchnerización de las empresas públicas. <br/>
o	Reducción de impuestos a los alimentos de la canasta básica. <br/>
o	Independencia del Banco Central para que cumpla en controlar la inflación. <br/>
         </p>
        </article>
		  
		   </div>
		</div>   
        </div>

 <Footer/>
</div>)}


export default Reformaeco
