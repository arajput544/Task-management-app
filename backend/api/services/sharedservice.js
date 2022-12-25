const all = async (Model) => {
    // console.log(Model);
    // console.log("hello");
    const data = await Model.find({});
    return data;
    // try{
    //     const data = await Model.find({});
    //     console.log(data);
    //     return data;
    // }catch(error){
    //     return error;
    // }
};

const get = async (Model, id) => {
    const data = await Model.findById(id);
    console.log(data,id);

    return data;    
    // try {
    //     const data = await Model.findByID(id);
    //     return data;
    // }catch(error){
    //     return error;
    // }
};

const create = async (Model,body) => {
    try{
        const data = await Model.create(body);
        return data;
    }catch(error){
        return error;
    }
};

const update = async (Model, id, body) => {
    try{
        const data = await Model.findByIdAndUpdate(id, body, {
            returnDocument : 'after'
        });
        return data;
    }catch(error){
        return error;
    }
}

const remove = async (Model, id ) => {
    try{
        const data = await Model.findByIdAndDelete(id);
        return data;
    }catch(error){
        return error;
    }
};

module.exports = {
    all,
    create,
    get, 
    update,
    remove
}