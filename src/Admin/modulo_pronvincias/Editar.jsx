import React,{useState,useEffect}    from 'react'
import {Link,useParams} from 'react-router-dom'
import { getDoc, updateDoc, doc } from "firebase/firestore"
import {db,app} from '../../Configfirebase/Configfirebase'
import { getStorage,
         ref, 
		 uploadBytes,
		 getDownloadURL } from 'firebase/storage'		
import Header  from '../header'
import Aside   from '../Aside'
import Footer  from '../Footer'
import './formulario.css'
import Swal  from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


const storage=getStorage(app)
const MySwal = withReactContent(Swal)

function EditarP() {
  const [ codigo_empresa,setcodigoempresa ] = useState('')
  const [ nombre_empresa,setNombreempresa ] = useState('')
  const [ des,setDes ] = useState('')
  const [ i,setI ] = useState(null)

   
    const {id} = useParams()

    let urlDescarga

	const getEmpresaById = async (id) => {
        const empresa = await getDoc( doc(db, "provincias", id) )
        if(empresa.exists()) {
            //console.log(product.data())
            setcodigoempresa(empresa.data().nombre_provincia)    
            setNombreempresa(empresa.data().bandera)  
            setDes(empresa.data().description) 			
        }else{
            console.log(' no existe')
        }
    }

    useEffect( () => {
        getEmpresaById(id)
        // eslint-disable-next-line
    }, [])
	
  async function subirArchivo(e)
   {
	   const archivoLocal=e.target.files[0];
	   setI(archivoLocal);
	   
   }

    const update = async (e) => {
        e.preventDefault()
		
        const empresa = doc(db, "provincias", id)
		//console.log("hola",urlDescarga)
		if(i)
		{
		  
		  const archivoRef=ref(storage,`provincias/${i.name}`)
	      const uplo=await uploadBytes(archivoRef,i)
	      urlDescarga=await getDownloadURL(archivoRef)	
          const data = { nombre_provincia:codigo_empresa, 
                         bandera:urlDescarga,
						 description:des
									   
					   }
         await updateDoc(empresa, data)
         MySwal.fire({
                      title: "Bien hecho!",
                      text: "Registro Modificado con exito!",
                      icon: "success",
                       button: "Felicitaciones!",
                   });
		
      }
	  else
	  {
		   const data = { 
		                   nombre_provincia:codigo_empresa,
						   description:des
						}
        await updateDoc(empresa, data)
        MySwal.fire({
                      title: "Bien hecho!",
                      text: "Registro Modificado con exito!",
                      icon: "success",
                       button: "Felicitaciones!",
                   });
	  }		  
	}
    
	 

  return (
   <div className="hold-transition sidebar-mini layout-fixed">
		 <div className="wrapper">
	   <Aside/>
        <div className="main-panel" style={{marginTop:"80px"}} >
	<div className="content-header">
					  <div className="container-fluid">
						 <div className="row mb-2">
					<div className="col-sm-6">
					  <h1 className="m-0">Cpanel</h1>
					</div>{/* /.col */}
					<div className="col-sm-6">
					  <ol className="breadcrumb float-sm-right">
						<li className="breadcrumb-item">
						<a href="javascript:void(0);">
						Editar Provincia</a></li>
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
			   <h4 className="text-center">Editar Provincia {codigo_empresa}</h4><br/>
                 <form className="forms-sample" onSubmit={update}>

				    <div className="form-group">
                        <label for="Categoriar">Nombre Provincia</label>
                        <input
                            type="text"
                            className='form-control'
						    placeholder="Nombre  Provincia ..."
							minlength="3"
							maxlength="20"
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
							value={des}
                            onChange={ (e) => setDes(e.target.value)}
							 cols="30" 				  
				             rows="5" 
							
                        />
                    </div>        					
				 
			     
				    <div className="form-group">
                        <label for="Categoriar">Foto Provincia</label>
                        <img
						src={nombre_empresa}
						width="100"  height="100"
                        />
                    </div> 
				 
				 <div className="form-group">
                        <label for="Categoriar">Bandera</label>
                        <input
                            type="file"
                            className='form-control'
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

export default EditarP