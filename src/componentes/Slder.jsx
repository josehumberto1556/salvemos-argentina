import './Slder'
import playstore from "../assets/images/googleplay.jpg"
import {Link }   from "react-router-dom";


function Slder() {
	return(
<div className="section" id="fondo" style={{marginTop:"10px"}}>
	
	<div className="container">
		
		<div className="row">
			
			<div className="col-lg-6">
				<h2 className="heading" style={{color:"white"}}>Descargar Nuestra App</h2>
				<p style={{color:"white"}}>Descargar nuestra desde la playsore. </p>
			</div>
			
			<div className="col-lg-6">
				<Link to="Construcion">
				<img src={playstore} />
				</Link>
			</div>
		</div>
	</div>
</div>
	)
}

export default Slder;	