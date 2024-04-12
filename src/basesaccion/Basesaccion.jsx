import "./bases.css"
import salvemos  from "../assets/images/salvemos.jpg"


function Basesaccion(){
	return(
          	<div className="section" style={{marginTop:"20px"}}>
		<div className="container">
			<div className="row">
				<div className="col-lg-7 order-lg-2 mb-4 mb-lg-0">
                  <img src={salvemos} alt="bandera Argentina"  
				  height="648" width="856" className="img-fluid"/>
				</div>
				<div className="col-lg-5 pe-lg-5">
					<div className="mb-5">
						<h2  id="titulo">
						Bases de Acción de Salvemos Argentina</h2>
					</div>
					
						<div className="mb-5">
						<p className="fs-5">
						  Salvemos Argentina está conformada por 
			   jóvenes con distintos matices ideológicos, 
			   desde progresistas, desarrollistas, 
			   nacionalistas, conservadores, liberales hasta
			   incluso anarquistas, que buscan una salida a 
			   esta situación crítica del país. Compartimos 
			   una mirada desoladora, tanto en lo económico 
			   como en lo político y social, tan desfavorable para nuestra sociedad, que todos buscamos iniciar un sendero hacia un cambio radical. 

						</p>
					</div>
					
			
				
					
				</div>
				  
			 
			</div>
			<div className="row gy-5 ">
			
			<div className="col-lg-5 pe-lg-5">
		          <div className="card">
				    <div className="card-body">
					   <h3 className="text-center">PENSAMIENTO POLITICO</h3>
					   <p className="titulo">
					   Es un espacio creado por argentinos y para argentinos,
					   que quieren transitar por un camino diferente, 
					   aplicando el sentido común, para lograr una unión 
					   moral en nuestra sociedad 
					 </p> 

					</div>
				  </div>
				</div>	
				
				<div className="col-lg-5 pe-lg-5">
		          <div className="card">
				    <div className="card-body">
					<h3 className="text-center">EDUCACIÓN Y CULTURA</h3>
					  <p className="titulo">
					  Consideramos prioritario el campo de la educación, ya que es éste ámbito el que más incidencia tiene hacia la igualdad de oportunidades para todos los habitantes de la república.
					 </p> 

					</div>
				  </div>
				</div>	
				
				<div className="col-lg-5 pe-lg-5">
		          <div className="card">
				    <div className="card-body">
					<h3 className="text-center">MEDIOS DE COMUNICACIÓN</h3>
					<p className="titulo">
                               EI Estado debe garantizar la libertad de prensa y expresión. Para esto, debe velar con el máximo celo por limitar el poder de monopolio en esta esfera.
                               TE INVITAMOS A PARTICIPAR EN SALVEMOS ARGENTINA!
                    </p>
					</div>
				  </div>
				</div>	
				
				<div className="col-lg-5 pe-lg-5">
		          <div className="card">
				    <div className="card-body">
                        
						<h3 className="text-center">RELACIONES INTERNACIONALES Y DEFENSA</h3>
							<p className="titulo">
							  Creemos que el Estado argentino debe mantener relaciones amistosas con el mundo, impulsando especialmente el intercambio cultural y comercial, tanto como el respeto por los derechos humanos.

                            </p>
						
					</div>
				  </div>
				</div>	
			
			</div>
		</div>
	</div>

)}

export default  Basesaccion;