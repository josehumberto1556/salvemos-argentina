import React,{useState,useEffect}from 'react'
import {Link}      from 'react-router-dom'
import {collection,
        getDocs,
		getDoc,
		deleteDoc,
		doc} from 'firebase/firestore'
import {app,db} from '../../Configfirebase/Configfirebase'		
import DataTable from 'react-data-table-component'
import Swal  from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import Header  from '../header'
import Aside   from '../Aside'
import Footer  from '../Footer'

const MySwal = withReactContent(Swal)


function Opinionesm() {
	
   ///1.configuramos los hooks
  const [search,setSearch ]=useState([])
  const [empre,setEmpresas ]=useState([])
  const [filtereCountries,setfiltereCountries]=useState([])

  const  empresaCollection=collection(db,"opiniones")
  const getEmpresas=async ()   => {
  const data=await getDocs(empresaCollection)
   //console.log(data.docs)
   setEmpresas(
       data.docs.map( (doc) => ( {...doc.data(),id:doc.id}))
   )
   setfiltereCountries(
       data.docs.map( (doc) => ( {...doc.data(),id:doc.id}))
   )
     }

  const deleteempresa = async (id) => {
   const empresaDoc = doc(db, "opiniones", id)
   await deleteDoc(empresaDoc)
    getEmpresas()
  }	 
 
 const confirmDelete = (id) => {
    MySwal.fire({
      title: '¿Esta Seguro de Eliminar esta Registro?',
      text: "",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Eliminar'
    }).then((result) => {
      if (result.isConfirmed) { 
        //llamamos a la fcion para eliminar   
        deleteempresa(id)               
        Swal.fire(
          'Eliminado!',
          'Registro Eliminado.',
          'Con Exito'
        )
      }
    })    
  }
 
   const columns= [
  
  {
	name:"Nombre",
	selector:(row)=>row.nombreu
  },
  
  {
	name:"Correo electronico",
	selector:(row)=>row.email
  },
  {
	  name:"Descripcion",
	  selector:(row)=>row.descripcion
  }
  
  ]
	
  useEffect( () => {
    getEmpresas()
  }, [] )
  
    useEffect( () => {
    const result=empre.filter((country)=>{
	  return country.email.toLowerCase().match(search.toLowerCase())
	})
	setfiltereCountries(result)
  }, [search] ) 
	
		

  return (
    <>
  <div className="hold-transition sidebar-mini layout-fixed">
      <div className="wrapper">
	    <Aside/>
	   <div className="main-panel" style={{marginTop:"150px",marginBottom:"-30px"}}>
		  <div className="row">
		    <div className="col-lg-12 grid-margin stretch-card">
			  <div className="card">
			    <div className="card-body">
				<h4 className="card-title">Listado de Opiniones</h4>
				<DataTable 
				columns={columns} 
				data={filtereCountries} 
				fixedHeader 
				pagination
				fixedHeaderScrollHeight="450px"
				selecttablesRow
				selecttablesRowHighlight
				highlightOnHover
				subHeader
				subHeaderComponent={<input 
				                    type="text" 
									placeholder="Buscar email ..." 
									className="w25 form-control" 
									value={search}
									onChange={(e)=>setSearch(e.target.value)}/>
									}
				/>
		          
		       </div>
              </div>		 

		   </div>
		  </div>
	    </div>
	   	 
     </div>
	  
  </div>
  
  <div style={{marginTop:"350px"}}>
   <Footer/>
   </div>
  </>
  )
}

export default Opinionesm