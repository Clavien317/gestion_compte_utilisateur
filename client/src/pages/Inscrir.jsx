import React, { useState } from 'react'
import "../style.css"
import Header from '../component/Header'
import axios  from "axios"

function Inscrir() {
    const [input,setInput] = useState([])
    const [txte,setTxte] = useState(true)
    const [type,setType] = useState(false)

    const change=(e)=>
    {
        const name = e.target.name;
        const value = e.target.value

        setInput(values=>({...values,[name]:value}))
    }

    const submit =async(e)=>
    {
        e.preventDefault()
        await axios.post("http://localhost:3000/ajout",input).then(function(response)
        {
          if(response)
          {
            console.log("Tout va bien");
          }else
          {
            alert("Erreur d'insertion ...")
          }
    
        });
        console.log(input);
    }


    const txt=()=>
    {
        setTxte(!txte)
        setType(!type)
    }
  return (
    <>
    <Header />
    <div className='inscrir'>
        <br />
        <h2>Effectuer votre inscription</h2>
        <fieldset>
            <legend>INSCRIPTION</legend>
                <form action="" onSubmit={submit}>
                    <br />
                    <br />
                    <label htmlFor="">Nom et prenom</label>
                    <br />
                    <input type="text" name='nom' onChange={change}/>
                    <br />
                    <br />

                    <label htmlFor="">Email</label>
                    <br />
                    <input type="text" name='email' onChange={change}/>
                    <br />
                    <br />

                    <label htmlFor="">Tel num</label>
                    <br />
                    <input type="text" name='tel' onChange={change}/>
                    <br />
                    <br />

                    <label htmlFor="">Password</label>
                    <br />
                    <input type={type?"text":"password"} name='password' onChange={change}/> <span onClick={txt}>{(txte?"Show":"Hide")}</span>
                    <br />
                    <br />
                    <br />
                    <button> S'inscrir</button>
                </form>
        </fieldset>
    </div>

    </>
  )
}

export default Inscrir