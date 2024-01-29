import React, { useEffect, useState } from 'react'
import Header from './component/Header'
import "./App.css"
// import axios from 'axios'

function App() {

  // const [user,setUser] = useState([])

  // const liste =async()=>
  // {
  //   await axios.get("http://localhost:3000").then((res)=>
  //   {


  //     if(res)
  //     {
  //       const x = res.data
  //       console.log("Liste des users",x);

  //       setUser(x)
  //     }else
  //     {
  //       console.log("Erreur lors des affichage users");
  //     }
 
  //   })
  // }

  // useEffect(()=>
  // {
  //   liste()
  // },[])
  return (
    <>
      <Header />
    <div className='container'>
      <br />
      <div className="contenu">
      <h2>Bienvenu dans nos site de rencontre</h2>
      <br />
      <br />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Magnam, provident? Sunt at veritatis odio reprehenderit magni
         sapiente earum, non nisi animi laborum, atque, eveniet dolo
         r nesciunt. Nisi reiciendis adipisci modi.
         Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Magnam, provident? Sunt at veritatis odio reprehenderit magni
         sapiente earum, non nisi animi laborum, atque, eveniet dolo
         r nesciunt. Nisi reiciendis adipisci modi.
         Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Magnam, provident? Sunt at veritatis odio reprehenderit magni
         sapiente earum, non nisi animi laborum, atque, eveniet dolo
         r nesciunt. Nisi reiciendis adipisci modi.
      </p>
      </div>

      <div className="liste">
        <h3>Voici la liste des users inscrit</h3>
        <br />
        {/* {
          
            <div key={x.id}>
              <p>{x.nom}</p>
              <p>{x.email}</p>
              <p>{x.tel}</p>
            </div>
         
        } */}
      </div>
    </div>
    </>
  )
}

export default App