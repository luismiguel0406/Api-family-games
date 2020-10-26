
var computersModel = require('../Models/Computers')

const computerController = {

//metodo controlador de computers
getComputers:function(req,res){
    
    computersModel.find({}).exec((error,computers)=>{
    if (error) return res.status(500).send('Hubo un error al realizar la consulta');
    if(!computers) return res.status(404).send('No existen los datoss solicitados');
    return res.status(200).send({computers:computers});

    });
},

getComputer:function(req,res){
    var id = req.params.id;

    computersModel.findById(id,(error,computer)=>{
    if (error) return res.status(500).send('Hubo un error al realizar la consulta');
    if(!computer) return res.status(404).send('No existe el dato soolicitado');
    return res.status(200).send({computers:computer});
        
    })
},

updateComputer:function(req,res){

var computerId = req.params.id;
Update = req.body;

computersModel.findOneAndUpdate(computerId,Update,{new:true},(error,computerUpdated)=>{
if (error) return res.status(500).send('Hubo un error al realizar la consulta');
if(!computerUpdated) return res.status(404).send('No existe  el dato solicitado');
return res.status(200).send({computers:Update});

})

},

deleteComputer:function(req,res){

    var computerId = req.params.id;
    computersModel.findByIdAndRemove(computerId,(error,computerRemoved)=>{
    if (error) return res.status(500).send('Hubo un error al realizar la consulta');
    if (!computerRemoved) return res.status(404).send('No existe el dato solicitado');
    return res.status(200).send({computerRemoved:computerRemoved});
    })
},

addComputer:function(req,res){
var computer = new computersModel();

computer.cpu = req.body.cpu;
computer.memoria_ram = req.body.memoria_ram;
computer.socket = req.body.socket;
computer.disco_duro = req.body.disco_duro;
computer.color = req.body.color;
computer.tarjeta_de_video =req.body.tarjeta_de_video;

computer.save((error,computerSaved)=>{

    if (error) return res.status(500).send('Hubo un error al realizar la consulta');
    if (!computerSaved) return res.status(404).send('No existe el dato solicitado');
    return res.status(200).send({Computer:computerSaved});
})


}

}
module.exports = computerController;