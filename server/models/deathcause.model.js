const { Schema, model } = require("mongoose");

const DeathCauseSchema = Schema(
  {
    year: {
      type: Number,
      required: [true, "year es requerido"],
      maxlength: [4, "Year debe ser de máximo 4 caracteres"],
    },
    month: {
      type: Number,
      required: [true, "year es requerido"],
      minlength: [1, "Month debe ser de 1 caracteres o más"],
      maxlength: [2, "Month debe ser de máximo 2 caracteres"],
    },
    cases: {
      type: Number,
      required: [true, "cases es requerido"],
      maxlength: [10, "Cases debe ser de máximo 10 caracteres"],
    },

    illness: {
      type: String,
      required: [true, "Illness es requerido"],
      maxlength: [300, "Illness debe ser de 300 caracteres o más"],
    },
  },
  { timestamps: true }
);

const DeathCause = model("DeathCause", DeathCauseSchema);

module.exports = { DeathCauseSchema, DeathCause };
