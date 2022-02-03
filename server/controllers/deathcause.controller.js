const { DeathCause } = require("../models/deathcause.model");

module.exports.createDeathCause = (request, response) => {
  console.log(request.body);
  const { year, month, cases, illness } = request.body;
  DeathCause.create({
    year,
    month,
    cases,
    illness,
  })
    .then((deathcause) =>
      response.json({ deathcause, mensaje: "Death cause creada exitosamente" })
    )
    .catch((err) => {
      console.error(err);
      response.status(400).json(err);
    });
};

module.exports.getAllDeathCause = (request, response) => {
  DeathCause.find({})
    .then((deathcause) => response.json(deathcause))
    .catch((err) => {
      console.error(err);
      res.status(400).json(err);
    });
};

module.exports.getDeathCause = (request, response) => {
  Pet.findOne({
    _id: request.params.id,
  })
    .then((deathcause) => response.json(deathcause))
    .catch((err) => {
      console.error(err);
      res.status(400).json(err);
    });
};

module.exports.deleteDeathCause = (request, response) => {
  DeathCause.deleteOne({ _id: request.params.id })
    .then((deleteConfirmation) => response.json(deleteConfirmation))
    .catch((err) => {
      console.error(err);
      res.status(400).json(err);
    });
};

module.exports.updateDeathCause = (request, response) => {
  DeathCause.findOneAndUpdate({ _id: request.params.id }, request.body, {
    new: true,
  })
    .then((updatedDeathCause) =>
      response.json({
        updatedDeathCause,
        editmessage: "death cause actualizada exitosamente",
      })
    )
    .catch((err) => {
      console.error(err);
      res.status(400).json(err);
    });
};

module.exports.getAllIllnesses = (request, response) => {
  DeathCause.find({})
    .then((deathcause) => {
      const arrIllness = deathcause.map((x) => x.illness);
      const unique = [...new Set(arrIllness)];
      response.json(unique);
    })
    .catch((err) => {
      console.error(err);
      res.status(400).json(err);
    });
};
