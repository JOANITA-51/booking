const {Router} = require('express');
const routerPreference = Router();
const {getPreference, getPreferences} = require('../controllers/preference');

routerPreference.get('/', (req,res) => {
    try{
        const allPreferences = getPreferences();
        if (allPreferences?.length > 0)
            return res.json({
                'result':'sucess',
                'preferences':allPreferences
            })
        return res.json({
            'result':'success',
            'preferences':[]
        })
    } catch(error){
        console.log(error)
        return res.json({
            'result':'error',
            'message':'Error while getting Preferences'
        })
    }
})

routerPreference.get('/:user',(req,res)=>{
    const {user} = req.params;

    try{
        const allPreferences = getPreferences(user)
        if (allPreferences?.length>0)
            return res.json({
                'result':'success',
                'preferences':allPreferences
            })
        return res.json({
            'result': 'success',
            'preferences':allPreferences
        })
        
    } catch(erro){
        console.log(error);
        return res.json({
            'result':'error',
            'message':'Error while getting Preferences'
        })
    }
})

routerPreference.get('/preference/:id', (req,res)=>{
    const {id} = req.params;
    try {
        const preference = getPreference(String(id));
        if(preference)
            return res.json({
                'result' : 'success',
                'preference' : preference
            })
        return res.json({
            'result':'failure',
            'preference':'Preference not found'
        })
    } catch (error) {
        console.log(error);
        return res.json({
            'result' : 'error',
            'message': 'Error while getting Preference'
        })
    }
})

module.exports = routerPreference;