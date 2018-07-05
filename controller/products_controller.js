
const create = (req,res,next)=>{
    const db = req.app.get('db');
    db.create_product()
    .then(res=>{
        res.status(200).send(res)
    })
    .catch(err=>{
        err.status(500).send(err);
        console.log(err);
    });
};

const getOne = (req,res,next)=>{
    const db = req.app.get('db');
    db.read_product()
    .then(res=>{
        res.staus(200).send(res)
    })
    .catch(err=>{
        err.status(500).send(err);        
        console.log(err)
    });
};

const getAll = (req,res,next)=>{
    const db = req.app.get('db');
    db.read._products()
    .then(res=>{
        res.status(200).send(res)
    })
    .catch(err=>{
        err.status(500).send(err);        
        console.log(err)
    });
};

const update = (req, res, next)=>{
    const db = req.app.get('db');
    db.update_product()
    .then(res=>{
        res.status(200).send(res)
    })
    .catch(err=>{
        err.status(500).send(err);        
        console.log(err)
    });
};

const deleter = (req, res, next)=>{
    const db = req.app.get();
    db.delete_product()
    .then(res=>{
        res.status(200).send(res)
    })
    .catch(err=>{
        err.status(500).send(err);        
        console.log(err)
    });
};

module.exports = {
    create,
    getOne,
    getAll,
    update,
    deleter
}