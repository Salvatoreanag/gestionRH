import React from 'react';
import { useFormik } from 'formik';
import { useRef } from 'react';
import './inscription.css';
import { Link } from 'react-router-dom';
import axios from 'axios';


const Field=React.forwardRef(function (props,ref) {
  const { type, name, value, onChange,onBlur, children } = props
  return (
      <div className="form-outline mb-4">
          <label htmlFor={name}>{children}</label>
          {/* l'évènement onChange pour gérer les changement dans les inputs  */}
          <input type={type} name={name} value={value} onChange={onChange} onBlur={onBlur} id={name} ref={ref} className="form-control form-control-lg" />
      </div>
  )
})

const FieldRadio=React.forwardRef(({onChange,onBlur,name,children},ref)=>(
  <div className="form-outline mb-4 ">
      <label >{children}</label>
      {/* l'évènement onChange pour gérer les changement dans les inputs                  */}
      <div >
          <div className="form-check form-check-inline">
              <input type="radio" name={name}  value='masculin' onChange={onChange} onBlur={onBlur} id="radio1" className="form-check-input" ref={ref}/>
              <label className="custom-control-label" htmlFor="radio1">Masculin</label>
          </div>
          <div className="form-check form-check-inline">
              <input type="radio" name={name}  value='feminin' onChange={onChange} onBlur={onBlur} id="radio2" className="form-check-input" ref={ref} />
              <label className="custom-control-label" htmlFor="radio2">Féminin</label>
          </div>
      </div>
  </div>
));

const validate = values => {
  const errors = {};

  if (!values.nom) {
    errors.nom = 'Veuillez remplir ce champs!';
  } 

  if (!values.prenom) {
    errors.prenom = 'Veuillez remplir ce champs!';
  } 

  if (!values.username) {
  errors.username = 'Veuillez remplir ce champs!';
  } 

  if(!values.sexe){
  errors.sexe = 'Veuillez remplir ce champs!';
  }

  if (!values.email) {
    errors.email = 'Veuillez remplir ce champs!';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Adresse email invalide';
  }

  if (!values.telephone) {
  errors.telephone = 'Veuillez remplir ce champs!';
  } 

  if(!values.date){
  errors.date='Veuillez remplir ce champs!';
  }
  
  if (!values.lieu) {
  errors.lieu = 'Veuillez remplir ce champs!';
  } else if (values.lieu.length > 20) {
  errors.lieu = 'Le lieu de naissance doit être 20 caractères ou moins';
  }
  if (!values.nationalite) {
    errors.nationalite = 'Veuillez remplir ce champs!';
  } else if (values.nationalite.length > 10) {
    errors.nationalite = 'La nationalité doit être 10 caractères ou moins';
  }
  
  const passwordRegex = /(?=.*?[AZ])(?=.*?[az])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}/;
  if(!values.password){
    errors.password='Veuillez remplir ce champs!';
  }else if (values.password.length < 8) {
    errors.password= "*Le mot de passe doit contenir au moins 8 caractères.";
  } else if (!passwordRegex.test(values)) {
    errors.password = "Mot de passe invalide.Doit contenir au moins un chiffre";
  }


  if(!values.confirmPassword){
    errors.confirmPassword='Veuillez remplir ce champs!';
  }else if(values.password !== values.confirmPassword){
    errors.confirmPassword="Les mots de passe ne se correspondent pas! "
  }

    return errors;
};


function Inscription ()  {

  const formik = useFormik({
    initialValues: {
      nom: '',
      prenom:'',
      username: '',
      sexe: '',
      email:'',
      telephone: '',
      date: '',
      lieu: '',
      nationalite: '',
      password: '',
      confirmPassword:'' 
    },
    validate,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  const formRef=useRef(null);
  const refNom=useRef(null);
  const refPrenom=useRef(null);
  const refUsername=useRef(null);
  const refSexe=useRef(null);
  const refEmail=useRef(null);
  const refTelephone=useRef(null);
  const refDate=useRef(null);
  const refLieu=useRef(null);
  const refNationalite=useRef(null);
  const refPassword=useRef(null);
  const refConfirmPassword=useRef(null);


  const myRef=useRef(null);
  const partie1=useRef(null);
  const partie2=useRef(null);
  const suivant=useRef(null);
  const precedent=useRef(null);

  const handleClick1 = () => {
  suivant.current.classList.add('d-none')
  precedent.current.classList.remove('d-none');
  if (partie2.current.classList.contains('toggleForm')) {
      myRef.current.style.transform = 'translateY(-50%)';
      myRef.current.style.transition = 'transform .5s';
      partie2.current.classList.remove('toggleForm');
      partie1.current.classList.add('toggleForm')
  }
  }
  const  handleClick2 = () => {
    precedent.current.classList.add('d-none')
    suivant.current.classList.remove('d-none');
    if (partie1.current.classList.contains('toggleForm')) {
        myRef.current.style.transform = 'translateY(0%)';
        myRef.current.style.transition = 'transform .5s';
        partie2.current.classList.add('toggleForm')
        partie1.current.classList.remove('toggleForm');
    }
  }
  const handleClick3 = () => {    
    // formRef.current.reset()="";
  refNom.current.value="";
  refPrenom.current.value="";
  refUsername.current.value="";
  refSexe.current.value="";
  refEmail.current.value="";
  refTelephone.current.value="";
  refDate.current.value="";
  refLieu.current.value="";
  refNationalite.current.value="";
  refPassword.current.value="";
  refConfirmPassword.value="";

    precedent.current.classList.add('d-none')
    suivant.current.classList.remove('d-none');
    if (partie1.current.classList.contains('toggleForm')) {
        myRef.current.style.transform = 'translateY(0%)';
        myRef.current.style.transition = 'transform .5s';
        partie2.current.classList.add('toggleForm')
        partie1.current.classList.remove('toggleForm');
    }
            
  }

  // const handleReset = (e) =>{

  // }

    
  // Code axios de la méthode post
  
    const baseURL = 'http://localhost:8000/api/utilisateur/';
    function inscrire() {

      const utilisateur = {
        nom : formik.values.nom,
        prenom : formik.values.prenom,
        username : formik.values.username,
        email : formik.values.email,
        sexe : formik.values.sexe,
        dateNaissance : formik.values.date,
        lieuNaissance : formik.values.lieu,
        telephone : formik.values.telephone,
        nationalite : formik.values.nationalite,
        motDePasse : formik.values.password
      };
      console.log(utilisateur);
      axios
        .post(baseURL,utilisateur)
        .then(response => alert(JSON.stringify(response.data)))      // La methode JSON.stringify() convertit l'objet envoyé en string
        .catch(error => {console.log("ERROR:: ",error.response.data);});
    
    }
    
  // Code axios de la méthode post
 
  return (
    <div className="back">
      <img src="logo_sansfond.png" alt="logo gnb" className="text-center  taille_image mb-7 pb-7" />
      <section className="vh-100 " >
        <h1 className=" text-center  fw-normal mb-3 pb-3 space" >Inscrivez-vous</h1>
        <div className="container py-15 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card bords" style={{ overflow: "hidden" }} >
                <div className="row g-0">

                  <div className="col-md-6 col-lg-5 d-none d-md-block">
                    <img src="image3.jpg " alt="login form" className="img-fluid image" />
                  </div>

                  <div className="col-md-6 col-lg-7 d-flex align-items-center">
                    <div className="card-body corps p-4 ps-lg-5 pe-lg-5 pt-lg-3 text-black" id="formContainer" ref={myRef} >
                      <form onSubmit={formik.handleSubmit} ref={formRef}>

                        <div className="d-flex align-items-center mb-0 pb-1"></div>

                        <div  id="formPartie1" className="" ref={partie1}>
                          <Field type='text' name='nom' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.nom} ref={refNom}>Nom</Field>
                          { formik.errors.nom ? (<div className='erreur'>{formik.errors.nom}</div>): null}

                          <Field type='text' name='prenom' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.prenom} ref={refPrenom}>Prénom</Field>
                          {formik.touched.prenom && formik.errors.prenom ? (<div className='erreur'>{formik.errors.prenom}</div>): null}

                          <Field type="text" name='username' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.username} ref={refUsername}>Username</Field>
                          {formik.touched.username && formik.errors.username ? (<div className='erreur'>{formik.errors.username}</div>): null}

                          <FieldRadio name='sexe' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.sexe} ref={refSexe}>Sexe</FieldRadio>
                          {formik.touched.sexe && formik.errors.sexe ? (<div className='erreur'>{formik.errors.sexe}</div>): null}

                          <Field type="email" name='email' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} ref={refEmail}>Email</Field>
                          {formik.touched.email && formik.errors.email ? (<div className='erreur'>{formik.errors.email}</div>): null}

                          <Field type="tel" name='telephone' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.telephone} ref={refTelephone}>Numéro de téléphone</Field>
                          {formik.touched.telephone && formik.errors.telephone ? (<div className='erreur'>{formik.errors.telephone}</div>): null}
                        </div>

                        <div className='row'>
                          <div className="pt-1 mb-4 col-md-4" >
                            <Link to='/'><div type="button" className="btn btn-sm btn-success text-white"><i className="me-2 fa-solid fa-circle-chevron-left "></i>Retour</div></Link>
                          </div>
                          <div className="pt-1 mb-4 col-md-4 offset-4" >
                            <div id="suivant" className="btn btn-sm btn-secondary text-white" onClick={handleClick1} ref={suivant} type="button"><i className="me-2 fa-solid fa-circle-chevron-down "></i>Suivant</div>
                          </div>
                        </div>
                                       
                        <div className="d-flex align-items-center mb-3 pb-1"></div>

                        <div id="formPartie2" className="toggleForm" ref={partie2} >
                                        
                          <Field type="date" name='date' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.date} ref={refDate}>Date de naissance</Field>
                          {formik.touched.date && formik.errors.date ? (<div className='erreur'>{formik.errors.date}</div>): null}

                          <Field type="text" name='lieu' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.lieu} ref={refLieu}>Lieu de naissance</Field>
                          {formik.touched.lieu && formik.errors.lieu ? (<div className='erreur'>{formik.errors.lieu}</div>): null}

                          <Field type="text" name='nationalite' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.nationalite}ref={refNationalite}>Nationalité</Field>
                          {formik.touched.nationalite && formik.errors.nationalite ? (<div className='erreur'>{formik.errors.nationalite}</div>): null}

                          <Field type="password" name='password' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password} ref={refPassword}>Mot de passe</Field>
                          {formik.touched.password && formik.errors.password ? (<div className='erreur'>{formik.errors.password}</div>): null}

                          <Field type="password" name='confirmPassword' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.confirmPassword} ref={refConfirmPassword}>Confirmer le mot de passe</Field>
                          {formik.touched.confirmPassword && formik.errors.confirmPassword ? (<div className='erreur'>{formik.errors.confirmPassword}</div>): null}
                          
                          <div className="d-flex align-items-center mb-2 pb-1"></div>

                          <div className="row  d-none" ref={precedent}>

                            <div className="pt-1 mb-4 col-md-4 ">
                              <div id="precedent" className="btn btn-sm btn-secondary text-white" onClick={handleClick2}><i className="me-2 fa-solid fa-circle-chevron-up "></i>Précédent</div>
                            </div>

                            <div className="pt-1 mb-4 col-md-4">
                              <div id="annuler" className="btn btn-sm btn-danger text-white"  onClick={handleClick3}><i className="me-2 fa-solid fa-circle-xmark "></i>Annuler</div>
                            </div>

                            <div className="pt-1 mb-4 col-md-4 ">
                              <button type="submit" className="btn btn-sm btn-primary text-white" onClick={ inscrire /*handleReset*/ }><i className="me-2 fa-solid fa-circle-user"></i>S'inscrire</button>
                            </div>
                                        
                          </div>
    
                        </div>
                                        
                      </form>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}



export default Inscription