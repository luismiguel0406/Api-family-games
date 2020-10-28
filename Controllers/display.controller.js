const displayModel = require('../Models/Displays');

const displayController ={

    getDisplays: async(req,res)=>{

        await displayModel.find((error,displays)=>{
        if (error) return res.status(500).send({Message:'Hubo un error al solicitar la informacion, intente de nuevo'});
        if (!displays) return res.status(404).send({Message:'El dato solicitado no existe'});
        return res.status(200).send({Display:displays});

        });
    },

    getDisplay: async (req,res)=>{
      
        const {id} = req.params;

        await displayModel.findById(id,(error,display)=>{
        if (error) return res.status(500).send({Message:'Hubo un error al solictar la informacion , intente de nuevo'});
        if(!display) return res.status(404).send({Message:'El dato solicitado no existe'});
        return res.status(200).send({Displa:display});
        });

    },

    addDisplay : async (req,res)=>{
        const display = new displayModel();
        
        
        display.inches = req.body.inches;
        display.resolution = req.body.resolution;
        display.model = req.body.mode;
        display.color = req.body.color;
        

        await display.save((error,displayAdded)=>{
        if(error) return res.status(500).send({Message:'Hubo un error al solicitar al informacion,intente de nuevo'});
        if(!displayAdded) return res.status(404).send({Message:'El dato solicitado no existe'});
        return res.status(200).send({display:displayAdded});
        })

    },
    updateDisplay: async(req,res)=>{

        const {id} = req.params;

        const updateDisplay = req.body;

        await displayModel.findByIdAndUpdate(id,{$set:updateDisplay},{new:true},(error,displayUpdated)=>{

        if(error) return res.status(500).send({Message:'Hubo un error al solicitar la informacion , intente de nuevo'});
        if (!displayUpdated) return res.status(404).send({Message:'El dato solicitado no existe'});
        return res.status(200).send({display:displayUpdated});
        })
    },

    deleteDisplay: async(req,res)=>{
        const {id} = req.params;

        displayModel.findByIdAndRemove(id,(error,displayRemoved)=>{
        if(error) return res.status(500).send({Message:'Hubo un error al solicitar la informacion , intente de nuevo'})
        if (!displayRemoved) return res.status(404).send({Message:'El dato solicitado no existe'});
        return res.status(200).send({display:displayRemoved});
    })
    }

}

module.exports = displayController;