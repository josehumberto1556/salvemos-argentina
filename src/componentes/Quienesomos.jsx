import './Quienesomos.css'
import PensamientoImg    from "../assets/images/pensamiento_politico.jpg"
import PensamientoEImg   
from"../assets/images/pensamiento_educativo.jpg"
import PensamientoEc     from "../assets/images/pensamiento_economico.jpg"
import Quieneso          from "../assets/images/quienes_somos.jpg"

function  Quienesomos(){
	

	return(
	
	<div className="section">
		<div className="container">
			<div className="row justify-content-between">
				
				<div className="col-lg-12 ps-lg-2">
					<div className="mb-5 text-center">
						<h2 id="titulo">
						Quienes Somos</h2>
						<p className="fs-5 l" style={{marginBottom:"30px"}}>
						 	 Somos un conjunto de ciudadanos que decidimos conformar un proyecto político alrededor de todo el país,  para tomar acción política, social, cultural y resolver desde nuestro alcance los problemas de fondo que afectan a nuestra nación, los cuales nos  han llevado a la decadencia durante los últimos años. 
				             La política argentina necesita una transformación, lo que requiere que se involucren ciudadanos con valores. Queremos construir un futuro próspero para Argentina, brindándote la posibilidad de auto representarte en nuestro espacio y que seas un verdadero protagonista.
				             Se necesita de una generación que se comprometa en lo público y que trabaje en equipo para poder construir un futuro mejor.
				             Sostenemos desde nuestra perspectiva, que el conjunto de la sociedad estuvo siendo ignorada por todos los gobiernos y determinados actores de la política, que priorizaron sus intereses por encima de las necesidades de nuestros compatriotas, y como consecuencia han acabado con las esperanzas y sueños de tener una Argentina prospera y desarrollada por el bien de nuestros amigos, familias e hijos. 
				             Convocamos a todo aquellos, que se encuentre a disposición de brindar su potencial en este aluvión histórico sin etiquetas ideológicas, solamente trabajando en un objetivo común que es 
							 <strong>"SALVAR ARGENTINA"</strong>
					  
						</p>
					</div>
					

				

				</div>

			</div>
		</div>
	
	
	
            <div className="section sec-features" id="fondo">
		<div className="container">
			<div className="row g-5">
				<div className="col-12 col-sm-6 col-md-6 col-lg-4"  data-aos-delay="0">
					<div className="feature d-flex is">
						<div>
						
							<h3 className="text-center" 
							style={{color:"white"}}>
							Pensamiento Politico
							</h3>
							<img src={PensamientoImg}  className="rounded-circle ta"/> 
						</div>
						
						
					</div>
				</div>
				<div className="col-12 col-sm-6 col-md-6 col-lg-4"  data-aos-delay="100">
					<div className="feature d-flex">
						<div className="is">
							<h3 
							className="text-center"
							style={{color:"white"}}>
							Pensamiento Educativo
							</h3>
						     <img 
							 src={PensamientoEImg}  
							 className="rounded-circle ta"/> 

						</div>
					</div>
				</div>
				<div className="col-12 col-sm-6 col-md-6 col-lg-4"  data-aos-delay="200">
					<div className="feature d-flex ">
						<div className="is">
							<h3 className="text-center"
							style={{color:"white"}}>
							Pensamiento Economico</h3>
							<img src={PensamientoEc}  className="rounded-circle ta1"/> 

						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
	
	
	)}

export default Quienesomos;