import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import  Home        from  './Inicio/Home'
import  Provincias  from  './componentes/Provincias'
import  Opiniones   from  './componentes/Opiniones'
import  Novedades   from  './componentes/Novedades'
import  Contacto    from  './componentes/Contacto'
import  Construcion    from  './componentes/Construcion'


import  Reformafd     from  './propuestas/Reformafd'
import  ReformaEd     from  './propuestas/ReformaEd'
import  ReformaElec   from  './propuestas/ReformaElec'
import  ReformaSoc    from  './propuestas/ReformaSoc'
import  Reformape     from  './propuestas/Reformape'
import  Reformaeco    from  './propuestas/Reformaeco'
import  ReformaSeg    from  './propuestas/ReformaSeg'
import  ReformaPo     from  './propuestas/ReformaPo'
import  ReformaHum    from  './propuestas/ReformaHum'

import ModuloAdministrador from  './Admin/ModuloAdministrador'
import LoginU              from  './Admin/login/Login'
import RecuperarClave      from  './Admin/login/RecuperarClave'

import Contactoprovincia    from  './Admin/modulo_contacto _provincia/Contactoprovincia'


import  Usuarios           from  './Admin/modulo_usuarios/usuarios'
import  Registrar          from  './Admin/modulo_usuarios/Registrar'
import  Editar             from  './Admin/modulo_usuarios/Editar'

import  ListadoN            from  './Admin/modulo_novedades/Listado'
import  RegistrarN         from  './Admin/modulo_novedades/Registrar'
import  EditarN            from  './Admin/modulo_novedades/Editar'

import  ListadoP           from  './Admin/modulo_pronvincias/ListadoP'
import  RegistrarP         from  './Admin/modulo_pronvincias/Registrar'
import  EditarP            from  './Admin/modulo_pronvincias/Editar' 


import  ListadoC           from  './Admin/modulo_contacto/Listado'
 
import  ProtectedRoute     from  './Admin/login/ProtectedRoute' 
 
import  VerNovedades       from'./componentes/VerNovedades'
 
import  Notfound           from  './error/Notfound'
 
import ListadoSub          from "./Admin/modulo_sub/ListadoSub";
 
import Donacion            from "./componentes/Donacion";

import VerProvincia        from "./componentes/VerProvincia";


import Opinionesm           from "./Admin/modulo_contacto/Opiniones";

 
import {UsuarioContextProvider} from "./context/UsuarioContext";



function App() {
  return (
   <UsuarioContextProvider>  
    <Router>
    
        <Routes>
	    <Route path="/"             element={<Home/>} />
    	<Route path="/Provincias"   element={<Provincias/>} />
		<Route path="/Opiniones"    element={<Opiniones/>} />
		<Route path="/Contacto"     element={<Contacto/>} />
		<Route path="/Novedades"    element={<Novedades/>} />
		<Route path="/Donacion"     element={<Donacion/>} />
		<Route path="/VerProvincia/:id" element={<VerProvincia/>} />
		
		<Route path="/Reformafederales"        element={<Reformafd/>} />
		<Route path="/ReformaEducativa"        element={<ReformaEd/>} />
		<Route path="/ReformaElectoral"        element={<ReformaElec/>} />
		<Route path="/ReformaSocial"           element={<ReformaSoc/>} />
		<Route path="/ReformaPoliticaExterior" element={<Reformape/>} />
		<Route path="/ReformaEconomica"        element={<Reformaeco/>} />
		<Route path="/ReformaSeguridad"        element={<ReformaSeg/>} />
		<Route path="/ReformaPolitica"         element={<ReformaPo/>} />
		<Route path="/ReformaDerechosHumanos"  element={<ReformaHum/>} />
	 
	     <Route 
		 path="/ModuloAdministrador"    
		 element={<ModuloAdministrador/>} 
		 />
	     
		 <Route path="/CuentaUsuario"         
		 element={<LoginU/>} 
		 />
          
          <Route path="/RecuperarClave"         
		 element={<RecuperarClave/>} 
		 />
		  
		  <Route path="/Construcion"         
		 element={<Construcion/>} 
		 />
		  
        <Route 
		path="/ModuloAdministrador/contacto_pronvincias" 
		 element={
			 <ProtectedRoute>
			    <Contactoprovincia/>
			 </ProtectedRoute>	
				} 
		 />

		  
		<Route 
		path="/ModuloAdministrador/modulo_usuarios/ModuloUsuario" 
		 element={
			 <ProtectedRoute>
			    <Usuarios/>
			 </ProtectedRoute>	
				} 
		 />
		 
		  <Route
		  path="/ModuloAdministrador/modulo_usuarios/RegistrarUsuarios"
		  element={
			         <ProtectedRoute>
				       <Registrar/>
			         </ProtectedRoute>
			      }  
		 /> 
		 
	    <Route
		 path="/ModuloAdministrador/modulo_usuarios/EditarUsuarios/:id"
		  element={
			         <ProtectedRoute>
 				       <Editar/>
                     </ProtectedRoute>
				  } 
		 />
	 
	   	<Route 
		path="/ModuloAdministrador/modulo_novedades/ModuloNovedades" 
		 element={
			        <ProtectedRoute>  
				      <ListadoN/>
				    </ProtectedRoute>
				 } 
		 />
		 
		  <Route
		  path="/ModuloAdministrador/modulo_novedades/RegistraNovedades"
		  element={
			       <ProtectedRoute>
					 <RegistrarN/>
				   </ProtectedRoute>
				  } 
		 /> 
		 
	    <Route
		 path="/ModuloAdministrador/modulo_novedades/EditarNovedades/:id"
		  element={
			        <ProtectedRoute>
				      <EditarN/>
				    </ProtectedRoute>
				   
				   } 
		 />
		 
		 <Route 
		path="/ModuloAdministrador/modulo_pronvincias/ModuloProvincia" 
		 element={<ListadoP/>} 
		 />
		 
		  <Route
		  path="/ModuloAdministrador/modulo_pronvincias/RegistraProvincia"
		  element={
			         <ProtectedRoute>
    					<RegistrarP/>
					 </ProtectedRoute>	
				  } 
		 /> 
		 
	    <Route
		 path="/ModuloAdministrador/modulo_pronvincias/EditarProvincia/:id"
		  element={
			        <ProtectedRoute>
					  <EditarP/>
				     </ProtectedRoute>
				  } 
		 />
		 
		 	 <Route 
		path="/ModuloAdministrador/modulo_novedades/ModuloNovedades" 
		 element={
			       <ProtectedRoute>
				     <ListadoN/>
				    </ProtectedRoute>	 
			     } 
		 />
		 
		  <Route
		  path="/ModuloAdministrador/modulo_novedades/RegistraNovedades"
		  element={
			        <ProtectedRoute>
					  <RegistrarN/>
				     </ProtectedRoute>
				  } 
		 /> 
		 
	    <Route
		 path="/ModuloAdministrador/modulo_novedades/EditarNovedades/:id"
		  element={
                     <ProtectedRoute>			         
					   <EditarN/>
					  </ProtectedRoute> 
				  } 
		 />
	 
	    
		<Route
		 path="/ModuloAdministrador/modulo_contacto/ListadoContacto"
		 element={
                    <ProtectedRoute>			       
				       <ListadoC/>
				     </ProtectedRoute>
				 } 
	     />
	    
		<Route path="/ModuloAdministrador/Subscripcion"
		 element={<ProtectedRoute><ListadoSub/></ProtectedRoute>}
		  />
		
		 <Route 
		 path="/VerNovedades/:id"   
		 element={<VerNovedades/>}
		 />
		
		 <Route 
		 path="/ModuloAdministrador/Opiniones"   
		 element={<Opinionesm/>}
		 />
		
		 <Route 
		 path="*"                    
		 element={<Notfound/>}
		 />

		
		</Routes>
    
	</Router>  
	</UsuarioContextProvider>
  
  );
}

export default App;
