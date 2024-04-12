import './Carusel.css'
import argentina1 from "../assets/images/argentina1.jpg"
import argentina2 from "../assets/images/argentina2.jpg"


function  Carusel(){
	
	
	return(
            <div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
    

	
    <div className="carousel-item active" id="bajar">
      <img src={argentina2} className="d-block w-100" />
    </div>
	
	
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

)}

export default Carusel;