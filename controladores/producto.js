app.post('/producto/calificar/:id', (req, res) => {
    const calif = new Calificacion({
      idProducto: req.params.id,
      raiting: req.body.raiting,
    });

    calif.save(function (error, raiting) {
      if (error) { console.log(error); }
      else {
        res.send({
          pelicula_id: calif.pelicula_id,
          raiting: calif.raiting,
        });
      }
    });
  });