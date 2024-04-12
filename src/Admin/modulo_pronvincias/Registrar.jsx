import React,{useState,useEffect}from 'react'
import {Link,useNavigate}  from 'react-router-dom'
import { collection, addDoc } from 'firebase/firestore'
import {db,app} from '../../Configfirebase/Configfirebase'	
import { getStorage,
         ref, 
		 uploadBytes,
		 getDownloadURL } from 'firebase/storage'	
import Swal  from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import Header  from '../header'
import Aside   from '../Aside'
import Footer  from '../Footer'
import './formulario.css'

const MySwal = withReactContent(Swal)


const storage=getStorage(app)


function RegistrarP() {
	
  const [ codigo_empresa,setcodigoempresa ] = useState('')
  const [ nombre_empresa,setNombreempresa ] = useState('')
  const [ description,setDescription ] = useState('')
  const navigate = useNavigate()
  const [ i,setI ] = useState(null)
  
  const empresaCollection = collection(db, "provincias")
  let urlDescarga

  async function subirArchivo(e)
   {
	   const archivoLocal=e.target.files[0];
	   setI(archivoLocal);
	   
	
   }

  const store = async (e) => {
    e.preventDefault()
	if(i)
	{
		
	  const archivoRef=ref(storage,`provincias/${i.name}`)
	  const uplo=await uploadBytes(archivoRef,i)
	  urlDescarga=await getDownloadURL(archivoRef)
      await addDoc( empresaCollection, { nombre_provincia:codigo_empresa, 
	                                   bandera:urlDescarga,
									   description:description
		} )
		MySwal.fire({
                      title: "Bien hecho!",
                      text: "Registro con exito!",
                      icon: "success",
                       button: "Felicitaciones!",
                   });
        navigate('/ModuloAdministrador/modulo_pronvincias/ModuloProvincia')
    }
  }

  return (
   <div className="hold-transition sidebar-mini layout-fixed">
		 <div className="wrapper">
	   <Aside/>
        <div className="main-panel"style={{marginTop:"80px"}} >
	<div className="content-header">
					  <div className="container-fluid">
						 <div className="row mb-2">
					<div className="col-sm-6">
					  <h1 className="m-0">Cpanel</h1>
					</div>{/* /.col */}
					<div className="col-sm-6">
					  <ol className="breadcrumb float-sm-right">
						<li className="breadcrumb-item">
						<a href="javascript:void(0);">Registro Pronvincia</a></li>
						<li className="breadcrumb-item active">Cpanel</li>
					  </ol>
					</div>
				  </div>
					  </div>
</div>	
        <div className='row' id="mover">
            <div className='col-md-8 grid-margin stretch-card'>
             <div className="card">
			  <div className="card-body">
			   <h4 className="text-center">Registro Provincia</h4><br/>
                 <form className="forms-sample" onSubmit={store} >

				 <div className="form-group">
                        <label for="Categoriar">Nombre Provincia</label>
                        <input
                            type="text"
                            className='form-control'
						    placeholder="Nombre  Provincia ..."
							minlength="3"
							maxlength="30"
                            required
							value={codigo_empresa}
                            onChange={ (e) => setcodigoempresa(e.target.value)}  
							
                        />
                    </div>  

                  <div className="form-group">
                        <label for="Categoriar">Descripci&oacute;n</label>
                        <textarea
                            
                            className='form-control'
						    placeholder="Descripci&oacute;n ..."
                            required
							value={description}
                            onChange={ (e) => setDescription(e.target.value)}
							 cols="30" 				  
				             rows="5" 
							
                        />
                    </div>        					
				 
				 <div className="form-group">
                        <label for="Categoriar">Foto Bandera</label>
                        <input
                            type="file"
                            className='form-control'
                            required
							onChange={subirArchivo} 
                        />
                    </div>  
					
				
                     <div align="Center">
                    <button type='submit' className='btn btn-primary mr-2'>Guardar</button>
					<Link to="/ModuloAdministrador/modulo_pronvincias/ModuloProvincia" className='btn btn-primary mr-2'>Regresar</Link>
                </div> 
				  
				  
                 </form>   
				</div>
			  </div>
            </div>
        </div>
	   
     </div>
	  <Footer/>
 </div>
    </div> 
  )
 
  
 
  
}

export default RegistrarP