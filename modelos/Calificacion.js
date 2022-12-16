const mongoose =require('mongoose');
const Esquema = mongoose.Schema;
const EsquemaCalificacion = new Esquema({
  idProducto: String,
  raiting: String,
});

const Calificacion = mongoose.model("Calificacion", EsquemaCalificacion);
module.exports = Calificacion;