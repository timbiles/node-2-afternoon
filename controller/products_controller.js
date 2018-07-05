const create = (req, res, next) => {
  const db = req.app.get("db");
  const { name, description, price, imageurl } = req.body;

  db.create_product([name, description, price, imageurl])
    .then(response => {
      res.status(200).send(response);
    })
    .catch(err => {
      res.status(500).send(err);
      console.log(err);
    });
};

const getOne = (req, res, next) => {
  const db = req.app.get("db");
  const { params } = req;
  db.read_product(params.id)
    .then(response => {
      res.staus(200).send(response);
    })
    .catch(err => {
      res.status(500).send(err);
      console.log(err);
    });
};

const getAll = (req, res, next) => {
  const db = req.app.get("db");
  db.read_products()
    .then(response => {
      res.status(200).send(response);
    })
    .catch(err => {
      res.status(500).send(err);
      console.log(err);
    });
};

const update = (req, res, next) => {
  const db = req.app.get("db");
  const { params, query } = req;

  db.update_product([params.id, query.desc])
    .then(response => {
      res.status(200).send(response);
    })
    .catch(err => {
      res.status(500).send(err);
      console.log(err);
    });
};

const deleter = (req, res, next) => {
  const db = req.app.get();
  const { params } = req;
  db.delete_product(params.id)
    .then(response => {
      res.status(200).send(response);
    })
    .catch(err => {
      res.status(500).send(err);
      console.log(err);
    });
};

module.exports = {
  create,
  getOne,
  getAll,
  update,
  deleter
};
