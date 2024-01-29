import axios from 'axios';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';




function Dashbord() {
    const history = useNavigate();

    const verifyAuth = () => {
        axios.post("http://localhost:3000/verifyAuth", {}, {
            headers: {
                'access-token': localStorage.getItem("token")
            }
        })
        .then((res) => {
            console.log(res);
        })
        .catch((err) => console.log(err))
    }

        useEffect(()=>
        {
            setTimeout(() => {
                if(verifyAuth)
                {
                    if(localStorage.getItem("token") !=null)
                    {
                        console.log("Voici notre token :",localStorage.getItem("token")); 
                    }else
                    {
                        history("/login")
                    }
                }
            }, 10);
        },[])

    const logout = () => {
        // Supprimer le token du localStorage
        localStorage.removeItem("token");

        // Envoyer une requête au serveur pour effectuer des actions de déconnexion (optionnel)

        // Rediriger l'utilisateur vers la page de connexion
        history("/login");
    }

    return (
        <div className='contenu'>
            <h1>Welcome @city</h1>
            <br />
            <br />
            <br />
            <button onClick={verifyAuth}>Auth verify</button>
            <br />
            <br />
            <button className='logout' onClick={logout}>Se déconnecter</button>
        </div>
    )
}

export default Dashbord;
