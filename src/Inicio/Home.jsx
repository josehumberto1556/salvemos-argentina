import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import   Header               from "../Cabecera/Header"
import   Carusel              from "../carusel/Carusel"
import   Quienesomos          from "../componentes/Quienesomos"
import   Basesaccion          from "../basesaccion/Basesaccion"
import   Appe                 from "../componentes/Appe"
import   Videos               from "../componentes/Video"
import   Slder                from "../componentes/Slder"
import   Propuestas           from "../propuestas/Propuestas"
import   Ultimasnovedades     from "../componentes/Ultimasnovedades"
import   Footer               from "../piepagina/Footer"
import   Barra                from "./redes_sociales/barra"
import { useEffect, useState } from "react";
import Loader from "../loader/Loader";


function Home() {
    
	const [isLoading, setIsLoading] = useState(true);
      useEffect(() => {
    const fakeDataFetch = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 4000);
    };

    fakeDataFetch();
  }, []);
  
  return isLoading ?(
   <Loader /> ) : (
 <>
   <Header/>
   <Carusel/>
   <Barra/>
   <Quienesomos />
   <Basesaccion/>
   <Propuestas/>
   {/*<Slder/>*/}
   <Ultimasnovedades />
   <Footer/>
 </>
  )
  
}

export default Home
