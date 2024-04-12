import React,{useState,useEffect}from 'react'
import {db} from '../Configfirebase/Configfirebase'		
import { getDoc,doc,collection,getDocs, } from "firebase/firestore"

function Comentarios() {
		 const [empre,setEmpresas]=useState([])
		 const  empresaCollection=collection(db,"comentarios")
      const getEmpresas=async ()   => {
       const data=await getDocs(empresaCollection)
   //console.log(data.docs)
   setEmpresas(
       data.docs.map( (doc) => ( {...doc.data(),id:doc.id}))
   )

   
     }
    
	  useEffect( () => {
        getEmpresas()
        // eslint-disable-next-line
    }, [])
	
	return(
 <div>
<h3 className="mb-5">6 Comentario</h3>
           
		   <ul className="comment-list">
              {empre.map((empr)=>(
			  <li className="comment">
                
				<div className="vcard bio">
                  <img src={empr.imagen} alt="Image placeholder" />
                </div>
				
                <div className="comment-body">
                  <h3>{empr.nombre}</h3>
                  <div className="meta">{empr.fecha}</div>
                  <p>{empr.comentario}</p>
                </div>
				
              </li>
                 ))} 
            </ul>
</div>	)}	  
export default Comentarios 