import   Header  from "../Cabecera/Header"
import   Carusel from "../carusel/Carusel"
import   Footer  from "../piepagina/Footer"
import './Propuestas.css'

function ReformaElec(){
	return(
	<div>
	<Header/>
	<Carusel/>
	      <div className="section">
          
		  <div className="container article">
            <div className="row justify-content-center align-items-stretch">
             
			 <article className="col-lg-8 order-lg-2 px-lg-5">



          <h3 className="text-center" id="b">Reforma Electoral </h3>

          <p className="fs-5 parrafo">
		  <span className="b">XIX.1 SISTEMA ELECTORAL CATEGORIZADO:</span>
		  Todo el proceso electoral, deberá ser efectuado respetando las diferentes categorías. Por lo tanto, se deberá establecer un sistema, por el cual, se vote en diferentes días para la elección de cada categoría electoral. Por lo tanto, no podrán existir listas denominadas sábanas, donde todas las categorías estén pegadas.
         <br/>
		 <span className="b"> XIX.2 ESCALAFONAMIENTO DEL SISTEMA ELECTORAL:</span>
		 Se establecerá un sistema por el cual quien acceda a un cargo electivo, nunca podrá pasar a ocupar un cargo inferior al que accedió, y solo se permitirá en todas las categorías y en cualquier cargo, la única posibilidad de una sola reelección

          </p>
        </article>
		  
		   </div>
		</div>   
        </div>
    <Footer/>
    </div>
)
}


export default ReformaElec