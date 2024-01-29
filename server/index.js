const express = require("express")
const app = express()
const port = 3000
const mongoose = require("mongoose")
const cors = require("cors")
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken")





app.use(cors());
app.use(express.json());
// Connexion à MongoDB
const url = "mongodb://localhost:27017/tp"

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Base de données connectée!")

    })
    .catch((err) => {
        console.error("Erreur de connexion à la base de données:", err)
    })
const schema = new mongoose.Schema({
    nom: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    tel: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
})

const model = mongoose.model("users", schema)

// Insertion de données
app.post("/ajout", async (req, res) => {
    const { nom, email, tel, password } = req.body

    if (!nom || !email || !tel || !password) {
        return res.status(400).json("La nom, le email, le tel et le password sont requis")
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10)
        await model.create({ nom, email, tel, password: hashedPassword })
        res.send("Insertion réussie")
    } catch (error) {
        console.error(error)
        res.status(500).json("Erreur serveur lors de l'insertion")
    }
})


//Liste de donnees
app.get("/", async(req, res) => {
    const data = await model.find()
    res.json(data)
})

//un seul donnees
app.get("/:id", async(req, res) => {
    const id = req.params.id
    const data = await model.find({ _id: id })
    res.json({ "Voici l'un de nos element :": data })
})

app.post("/connect", async (req, res) => {
    const { email } = req.body

    const utilisateur = await model.findOne({ email })
    if (!utilisateur) {
        return res.status(401).json("Email invalide")
    }
    // const correspondanceMotDePasse = await bcrypt.compare(password, utilisateur.password)
    const correspondanceMotDePasse = await model.find({ email:utilisateur.email,password:utilisateur.password })
    if (correspondanceMotDePasse) {

        const id = utilisateur._id
        const token = jwt.sign({id},"jwtSecretKey", {expiresIn:300})

        res.json({result:"Connexion réussie",login:true,token,utilisateur})
        console.log(token);
    } else
    {
        res.status(401).json("Email ou mot de passe invalide")
    }
})

const verifyJwt =(req,res,next)=>
{
    const token = req.headers["access-token"]

    if(!token)
    {
        return res.json("Nous avons besoin de token")
    }else
    {
        jwt.verify(token,"jwtSecretKey",(err,decoded)=>
        {
            if(err)
            {
                res.json("Non authentifiee")
            }else
            {
                req.userId = decoded.id
                next()
            }
        })
    }
}


app.post("/verifyAuth",verifyJwt,(req,res)=>
{
    res.header('Access-Control-Allow-Origin', '*')
    return res.json("Authentified")
})



//Modification de donnees
app.put("/:id", async(req, res) => {
    const id = req.params.id
    const data = {
        nom: req.body.nom,
        email: req.body.email,
        tel:req.body.tel,
        password:req.body.password
    }
    try {
        const d = await model.findByIdAndUpdate(id, data, { new: true })
        if (d) {
            res.json("Modifiée avec succès")
        } else {
            res.status(404).json("ID non trouvé")
        }
    } catch (error) {
        console.error(error)
        res.status(500).json("Erreur serveur")
    }
})


//Suppression de donnees
app.delete("/:id", async(req, res) => {
    const id = req.params.id
    await model.findOneAndDelete({ _id: id })
    res.json("Supprimee avec succes")
})

app.listen(port, console.log("serveur demarre...."))