import {Link }   from "react-router-dom";
import { useState } from 'react';
import logo1  from "../assets/images/logo1.png"
import './header.css'

export default function Header(){
	
	return(
	  <header>     
	  
	  <nav className="navbar navbar-expand-lg navbar-light fixed-top">
 
      <div className="container-fluid"  style={{marginTop:"-20px"}}>
  
    <Link to="/" className="navbar-brand">
	
       <img  src={logo1}  width="200" height="130"  className="m" />
	
	</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
	
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
	  
        <li className="nav-item">
		
          <Link to="/">Inicio</Link>
		  
        </li>
        
		 
		<li className="nav-item">
          
		  <Link  to="/Provincias">Provincias</Link>
		  
        </li>
		
		<li className="nav-item">
          
		  <Link   to="/Opiniones">Opiniones</Link>
		  
        </li>
		
        <li className="nav-item">
          
		  <Link to="/Novedades"  id="color3">Novedades</Link>
        
        </li>
		
        <li className="nav-item">
          
		    <Link   to="/Contacto">Contacto</Link>
        
		</li>
		
		 <li className="nav-item">
          
		    <Link   to="/Donacion">Donación</Link>
        
		</li>
		
		 <li className="nav-item">
          
		    <Link   to="https://ecormece-e8991.web.app/">Tienda Virtual</Link>
        
		</li>
		 
      </ul>
    
    </div>
  </div>
</nav>
	 
		
     </header>    	
	)
	       
	
	
}

