
const computerModel  = require('../Models/Computers')

const computerController = {

//metodo controlador de computers
getComputers: async (req,res)=>{
    
        await computerModel.find((error,computer)=>{
        if (error) return res.status(500).send({Message:'Hubo un error'});
        if(!computer) return res.status(404).send({Message:'No existe el dato solicitado'});
        return res.status(200).send({computer:computer});
    })
    
},

getComputer: async (req,res)=>{
    const {id} = req.params;

    await computerModel.findById(id,(error,computer)=>{
    if (error) return res.status(500).send({Message:'Hubo un error al realizar la consulta'});
    if(!computer) return res.status(404).send('No existe el dato solicitado');
    return res.status(200).send({computers:computer});
        
    })
},


updateComputer: async (req,res)=>{
    const {id} = req.params;
    const computerUpdate = {
    cpu: req.body.cpu,
    memoria_ram: req.body.memoria_ram,
    socket: req.body.socket,
    disco_duro : req.body.disco_duro,
    color: req.body.color,
    tarjeta_de_video: req.body.tarjeta_de_video
    }
    
    await computerModel.findByIdAndUpdate(id,{$set:computerUpdate},{new:true},(error,update)=>{
    if (error) return res.status(500).send({Mmessage:'Hubo un error al realizar la consulta'});
    if (!update) return res.status(404).send({Message:'No existe el dato solicitado'});
    return res.status(200).send({computers:update}); 
    })

},

deleteComputer: async(req,res)=>{

    const {id} = req.params;
    await computerModel.findByIdAndRemove(id,(error,computerRemoved)=>{
    if (error) return res.status(500).send('Hubo un error al realizar la consulta');
    if (!computerRemoved) return res.status(404).send('No existe el dato solicitado');
    return res.status(200).send({computer:computerRemoved});
    })
},

addComputer: async(req,res)=>{
var computer = new computerModel();

computer.cpu = req.body.cpu;
computer.memoria_ram = req.body.memoria_ram;
computer.socket = req.body.socket;
computer.disco_duro = req.body.disco_duro;
computer.color = req.body.color;
computer.tarjeta_de_video =req.body.tarjeta_de_video;

await computer.save((error,computerSaved)=>{

    if (error) return res.status(500).send('Hubo un error al realizar la consulta');
    if (!computerSaved) return res.status(404).send('No existe el dato solicitado');
    return res.status(200).send({Computer:computerSaved});
})


}

}
module.exports = computerController;