import { useState } from 'react'
import emailjs from 'emailjs-com'
import firebase from 'firebase/app'
import firestore from "firebase/firestore"
import swal from 'sweetalert';


export const Contact = (props) => {

  var initialState = {
    name: "",
    email:"",
    origen:"",
    destino:"",
    hora:"00:00",
  }

  

  var firebaseConfig = {
    apiKey: "AIzaSyAWXODQAhENY80Rr9HBlcEF5XU3dsXGs3s",
    authDomain: "dojobox-6937d.firebaseapp.com",
    projectId: "dojobox-6937d",
    storageBucket: "dojobox-6937d.appspot.com",
    messagingSenderId: "957166754796",
    appId: "1:957166754796:web:770f24c11bbbfb2771bec9",
    measurementId: "G-NMX29NNFVX"
  };
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
    
    
 }else {
    firebase.app(); // if already initialized, use that one
 }
  
 let db = firebase.firestore();

  const [{ name, email, origen, destino, time }, setState] = useState(initialState)

  const handleChange = (e) => {

    // setState({
    //   [e.target.name]: e.target.value,
    // });
    const { name, value } = e.target
    setState((prevState) => ({ ...prevState, [name]: value }))
  }
  const clearState = () => setState({ ...initialState })

  const handleSubmit = (e) => {
    
    e.preventDefault()
    var usuario = {
      Nombre: name,
      Correo: email,
      Origen: origen,
      Destino: destino,
      hora: time
    }

    
    db.collection('usuarios').add({
      item: usuario
    }).then(()=>{      
      swal("Genial!", "Gracias Totales! Dentro de poco te contactaremos con mas informacion", "success");
      
      
      

    })

    
       
    
  }
  return (
    <div>
      <div id='contact'>
        <div className='container'>
          <div className='col-md-8'>
            <div className='row'>
              <div className='section-title'>
                <h2>Comienza ya!</h2>
                <p>
                  Hey! te invitamos a que te unas a nuestra causa. Llena el siguiente formulario y dejanos hacer el resto por ti. Entraremos en contacto contigo cuando logremos ofreceter la mejor solucion.
                </p>
              </div>
              <form id='contact' name='sentMessage' validate onSubmit={handleSubmit}>
                <div className='row'>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <input
                        type='text'
                        id='name'
                        name='name'
                        className='form-control'
                        placeholder='Tu Nombre'
                        required
                        onChange={handleChange}
                        
                        
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <input
                        type='email'
                        id='email'
                        name='email'
                        className='form-control'
                        placeholder='Email'
                        required
                        onChange={handleChange}
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <input
                        type='text'
                        id='origen'
                        name='origen'
                        className='form-control'
                        placeholder='Origen'
                        required
                        onChange={handleChange}
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <input
                        type='text'
                        id='destino'
                        name='destino'
                        className='form-control'
                        placeholder='Destino'
                        required
                        onChange={handleChange}
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>
                </div>
                <div className="row">
                <div className='col-md-6'>
                    <div className='form-group'>
                      <label>Hora de Salida:</label>
                      <input
                        type='time'
                        id='time'
                        name='time'
                        className='form-control'
                        placeholder='Hora'
                        required
                        onChange={handleChange}
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>
                  </div>

                  
                <div className='form-group'>                  
                  <p className='help-block text-danger'></p>
                </div>
                <div id='success'></div>
                <button type='submit' className='btn btn-custom btn-lg'>
                  Enviar
                </button>
              </form>
            </div>
          </div>
          <div className='col-md-3 col-md-offset-1 contact-info'>
           
            {/* <div className='contact-item'>
              <h3>Contact Info</h3>
              <p>
                <span>
                  <i className='fa fa-map-marker'></i> Address
                </span>
                {props.data ? props.data.address : 'loading'}
              </p>
            </div>
            <div className='contact-item'>
              <p>
                <span>
                  <i className='fa fa-phone'></i> Phone
                </span>{' '}
                {props.data ? props.data.phone : 'loading'}
              </p>
            </div>
            <div className='contact-item'>
              <p>
                <span>
                  <i className='fa fa-envelope-o'></i> Email
                </span>{' '}
                {props.data ? props.data.email : 'loading'}
              </p>
            </div> */}
          </div>
          <div className='col-md-12'>
            <div className='row'>
              <div className='social'>
                <ul>
                  <li>
                    <a href={props.data ? props.data.facebook : '/'}>
                      <i className='fa fa-facebook'></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.twitter : '/'}>
                      <i className='fa fa-instagram'></i>
                    </a>
                  </li>
                  
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}
