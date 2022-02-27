const post = (model) => async(req, res)=>{
    try{
        const item = await model.create(req.body);
        return res.status(201).send(item);
    }catch(er){
        return res.status(500).send({error : er.message});
    }
}
const getAll = (model) =>async(req, res)=>{
    try{
        const item = await model.find().lean().exec();
        return res.send(item);
    }catch(err){
        return res.status(500).send({error : err.message});
    }
}

const getOne = (model)=>async(req, res)=>{
    try{
        const item = await model.findById(req.params.id).lean().exec();
        return res.send(item);
    }catch(er){
        return res.status(500).send({error : er.message});
    }
}

const Delete = (model) => async(req, res)=>{
    try{
        const item = await model.findByIdAndDelete(req.params.id).lean().exec()
        return res.send(item);
    }catch(err){
        return res.status(500).send({error : err.message});
    }
}
const patch = (model)=>async(req, res)=>{
    try{
        const item = await model.findByIdAndUpdate(req.params.id, req.body, {new : true}).lean().exec();
        return res.send(item);
    }catch(err){
        return res.send(500).send({error : err.message});
    }
}
module.exports = (model)=>{
   return {
    post : post(model),
    getAll : getAll(model),
    getOne : getOne(model),
    Delete : Delete(model),
    patch : patch(model)
   }
}