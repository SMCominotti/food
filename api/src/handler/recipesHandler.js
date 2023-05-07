//AQUI IMPORTAMOS CONTROLADORES
const getAllRecipes = require('../controllers/getAllRecipes.js');

const getRecipe = async (req, res) => {
    const {id} = req.params 
    try {
        const response = await getAllRecipes(id)
        console.log(response)
        res.status(200).json(response)
    } catch (error) {
        // aqui marca el error
        res.status(400).json({error: error.message, descripcion: 'error en getRecipe'})
    }
}

const getRecipes = async (req, res) => {
    try {
        const recipes = []
        res.status(200).json(recipes)
    } catch (error) {
        // aqui marca el error
        res.status(400).json({error: error.message, descripcion: 'error en getRecipes'})
    }
}

const postRecipes = async() => {
    try {
        // aquí salió todo bien
        const recipes = {};
        res.status(200).json(recipes)
    } catch (error) {
        //aquí está el error
        res.status(400).json({error: error.message, description:"error en postRecipes"})
    }
}

const putRecipes = async(req,res) => {
    try {
        // aquí salió todo bien
        const recipes = {};
        res.status(200).json(recipes)
    } catch (error) {
        //aquí está el error
        res.status(400).json({error: error.message, description:"error en putRecipes"})
    }
}

const deleteRecipes = async(req,res) => {
    try {
        // aquí salió todo bien
        const recipes = {};
        res.status(200).json(recipes)
    } catch (error) {
        //aquí está el error
        res.status(400).json({error: error.message, description:"error en deleteRecipes"})
    }
}

module.exports = {
    getRecipe,
    getRecipes,
    postRecipes,
    putRecipes,
    deleteRecipes,
};