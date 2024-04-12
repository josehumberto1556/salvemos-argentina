import "./barra.css";
import whtasap from "./whtasap.jpg"

const Barra = () => {
	
  return (
<div className="sticky-container">
    <ul className="sticky">
        <li>
            <img 
			src={whtasap} width="58" height="58"/>
            <p>
			<a 
			href="https://chat.whatsapp.com/Lle25x4yPZ4ATQhs1q9nKR" 
			target="_blank">
			Unete a nuestro<br/>
			 WhatsApp
			</a>
			</p>
        </li>
      
      
       
       
    </ul>
</div>
  );
};


export default Barra;
