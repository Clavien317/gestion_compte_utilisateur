import React, { useState } from 'react'
import "../style.css"
import Header from '../component/Header'
import axios from "axios"
import {useNavigate} from "react-router-dom"

function Connect() {

    const [input,setInput] = useState([])
    const [txte,setTxte] = useState(true)
    const [type,setType] = useState(false)

    const naviagate = useNavigate()

    const change=(e)=>
    {
        const name = e.target.name;
        const value = e.target.value
        setInput(values=>({...values,[name]:value}))
    }

    const submit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:3000/connect", input);

            if (response.data.result === "Connexion réussie") {
                // Redirigez l'utilisateur vers la page souhaitée
                localStorage.setItem("token",response.data.token)
                if(response.data.token)
                {
                    console.log(response.data.token);
                    naviagate('/dashboard'); 
                }
                
            } else {
                console.log("Email ou mot de passe invalide");
            }
        } catch (error) {
            console.log("Erreur lors de la connexion", error);
        }
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
        <h2>Veillez se connecter</h2>
        <fieldset>
            <legend>Login</legend>
                <form action="" onSubmit={submit}>
                    <br />
                    <br />

                    <label htmlFor="">Email</label>
                    <br />
                    <input type="text" name='email' onChange={change}/>
                    <br />
                    <br />

                    <label htmlFor="">Password</label>
                    <br />
                    <input type={type?"text":"password"} name='password' onChange={change}/> <span onClick={txt}>{(txte?"Show":"Hide")}</span>
                    <br />
                    <br />
                    <br />
                    <button> Connect</button>
                </form>
        </fieldset>
    </div>

    </>
  )
}

export default Connect