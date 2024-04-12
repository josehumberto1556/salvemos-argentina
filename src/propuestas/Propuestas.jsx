import {Link }   from "react-router-dom";
import "./Propuestas.css"

function Propuestas(){
	return(
    <div className="section sec-services" style={{marginTop:"10px"}}>
	
	    <div className="container">
		
		{ /*<div className="col-lg-5 mx-auto text-center">
				<h2 className="heading" id="titulo">Propuestas de Salvemos Argentina</h2>
				<p>Nuestra propuesta para salvar a argentina. </p>
			</div>
		*/}
		
		
		<div className="row">
			<div className="col-12 col-sm-6 col-md-6 col-lg-4 card post-entry">

				<div className="service text-center">
					<span className="bi-bank"></span>
					<div>
						<h3>REFORMAS ESTRUCTURALES</h3>
						<p className="mb-4">
                        
                       Las medidas 2 a 5 apuntan a lograr superávit fiscal genuino que permita disminuir la presión impositiva y disipe totalmente la
                       presunción de un futuro default ... 
					
						</p>
						<p>
						<Link 
						className="btn btn-outline-primary py-2 px-3">
						Leer m&aacute;s
						</Link></p>
					</div>
				</div>

			</div>
			<div className="col-12 col-sm-6 col-md-6 col-lg-4 card post-entry"  data-aos-delay="100">
				<div className="service text-center">
					<span className="bi-bank2"></span>
					<div>
						<h3>REFORMA FEDERATIVA</h3>
						<p className="mb-4">
						 Estado absolutamente Federal y Avanzando en institutos: 
						 a) juicios por jurados. 
						 b) Presupuestos participativos. 
						 Subsidiariedad en decisiones jurídico-políticas 
						 de actos administrativos ...

						
						</p>
						<p>
						<Link to="/ReformaFederales"className="btn btn-outline-primary py-2 px-3">
						Leer m&aacute;s</Link>
						</p>
					</div>
				</div>
			</div>
			
			<div className="col-12 col-sm-6 col-md-6 col-lg-4 card post-entry"  data-aos-delay="200">
				<div className="service text-center">
					<span className="bi-journal-text"></span>
					<div>
						<h3>REFORMA EDUCATIVA</h3>
						<p className="mb-4">
						  Educación Pública y obligatoria de doble escolaridad, 
						  primaria y secundaria. Participación 
						  de las familias en programas de reeducación
						  para adultos entre 20 y 45 años ...
						</p>
						<p>
						<Link to="/ReformaEducativa" 
						className="btn btn-outline-primary py-2 px-3">
						Leer m&aacute;s
						</Link>
						</p>
					</div>
				</div>
			</div>

           	<div className="col-12 col-sm-6 col-md-6 col-lg-4 card post-entry"  data-aos-delay="200">
				<div className="service text-center">
					<span className="bi-journal-text"></span>
					<div>
						<h3>REFORMA ELECTORAL</h3>
						<p className="mb-4">
						
						 SISTEMA ELECTORAL CATEGORIZADO Todo el proceso electoral,
								 deberá ser efectuado respetando las diferentes categorías. 
								 Por lo tanto, se deberá establecer un sistema, por el cual ...
						
						</p>
						<p>
						<Link to="/ReformaElectoral" 
						className="btn btn-outline-primary py-2 px-3">
						Leer m&aacute;s
						</Link>
						</p>
					</div>
				</div>
			</div>

			
			
			<div className="col-12 col-sm-6 col-md-6 col-lg-4 card post-entry"  data-aos-delay="200">
				<div className="service text-center">
					<span className="bi-graph-up-arrow"></span>
					<div>
						<h3>REFORMA SOCIAL</h3>
						<p className="mb-4">

                       DEFENSA DE LA VIDA Defensa sostenida y activa a favor de Las Dos Vidas y la Ancianidad. Toda política social de cualquier Estado, debe estar dirigida a la protección de los niños por nacer ...

						 
                         </p>
						<p>
						<Link to="/ReformaSocial" className="btn btn-outline-primary py-2 px-3">
						Leer m&aacute;s
						</Link>
						</p>
					</div>
				</div>
			</div>
			
			<div className="col-12 col-sm-6 col-md-6 col-lg-4 card post-entry"  data-aos-delay="300">
				<div className="service text-center">
					<span className="bi-globe"></span>
					<div>
						<h3>REFORMA POLITICA EXTERIOR</h3>
						<p className="mb-4">
						Propiciar una gran Nación exportadora no de materias
						primas, sino agregándole valor.Se creará: Argentina Exporta Fácil (AEF), 
						articulado por la Aduana, Banco Central ...


						</p>
						<p>
						<Link to="/ReformaPoliticaExterior" 
						className="btn btn-outline-primary py-2 px-3">
                         Leer m&aacute;s
                         </Link></p>
					</div>
				</div>
			</div>

            <div className="col-12 col-sm-6 col-md-6 col-lg-4 card post-entry"  data-aos-delay="300">
				<div className="service text-center">
					<span className="bi-cash-coin"></span>
					<div>
						<h3>REFORMA ECONOMICA</h3>
						<p className="mb-4">
                       	Promover la cultura del empleo genuino para el desarrollo personal 
                      	Reforma impositiva estructural para generar más empleo genuino.
	                    Reformar, integrar y transparentar ...
						
						</p>
						<p>
						<Link to="/ReformaEconomica" 
						className="btn btn-outline-primary py-2 px-3">
						Leer m&aacute;s
						</Link></p>
					</div>
				</div>
			</div>

          <div className="col-12 col-sm-6 col-md-6 col-lg-4 card post-entry"  data-aos-delay="300">
				<div className="service text-center">
					<span className="bi-cone-striped"></span>
					<div>
						<h3>REFORMA EN SEGURIDAD</h3>
						<p className="mb-4">
						 Seguridad para los ciudadanos y cárcel efectiva para los delincuentes
                         Apoyar a las fuerzas de seguridad en el cumplimiento del deber y mejorar sueldos, 
						 equipamiento ...

						</p>
						<p>
						<Link to="/ReformaSeguridad" 
						className="btn btn-outline-primary py-2 px-3">
						Leer m&aacute;s
						</Link>
						</p>
					</div>
				</div>
			</div>
			
			   <div className="col-12 col-sm-6 col-md-6 col-lg-4 card post-entry"  data-aos-delay="300">
				<div className="service text-center">
					<span className="bi-layers"></span>
					<div>
						<h3>REFORMA POLITICA</h3>
						<p className="mb-4">
							 Reforma política para recuperar la democracia 
							 y erradicar la corrupción
	                         Reforma electoral con voto electrónico, 
							 boleta única y eliminación de las listas 
							 sábanas para reducir gastos ...
	
						</p>
						<p>
						<Link to="/ReformaPolitica" className="btn btn-outline-primary py-2 px-3">
						Leer m&aacute;s
						</Link>
						</p>
					</div>
				</div>
			</div>
			
			
			   <div className="col-12 col-sm-6 col-md-6 col-lg-4 card post-entry "  data-aos-delay="300">
				<div className="service text-center">
					<span className="bi-fingerprint"></span>
					<div>
						<h3>REFORMA DERECHOS HUMANOS</h3>
						<p className="mb-4">
						
						 Derechos humanos para todos desde la 
						 concepción hasta la muerte natural
                     	Impulsar medidas que prevengan y limiten 
						el aborto hasta derogar el aborto legal ...
					
						</p>
						<p>
						<Link to="/ReformaDerechosHumanos" 
						className="btn btn-outline-primary py-2 px-3">
                        Leer m&aacute;s</Link></p>
					</div>
				</div>
			</div>

		</div>
		</div>
		
	  </div>
	
)}

export default  Propuestas;