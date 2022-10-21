var express = require('express');
var router = express.Router();

const films = [];


/* GET minimum duration */
router.get('/', function (req, res) {
  const minFilmDuration = req?.query
    ? parseInt(req.query['minimum-duration']) : undefined;
  if (minFilmDuration && (typeof minFilmDuration !== 'number' || minFilmDuration <= 0))
    return res.sendStatus(400); //ERROR

  if (!minFilmDuration)
    return res.json(films);

  const filmsAtteignantMinDuration = films.filter(
    (film) => film.duration >= minFilmDuration
  );
  return res.json(filmsAtteignantMinDuration);
});


//Lire un film a partir d'un id
router.get('/:id', function (req, res) {
  const indexFilm = films.findIndex((film) => film.id == req.params.id);

  //si l'index est plus petit que 0
  if (indexFilm < 0)
  return res.sendStatus(400); //ERROR

  return res.json(films[indexFilm]);
});


//delete a film
router.delete('/:id', function(req, res) {
  const indexFilm = films.findIndex((film) => film.id == req.params.id);

  if (indexFilm < 0)
  return res.sendStatus(400); //ERROR

  const filmsRemoved = films.slice(indexFilm, 1);
  const filmRemoved = filmsRemoved[0]; 

    return req.json(filmRemoved);
});

//CREATE FILM
router.post('/', function(req, res) {
  const title = req?.body?.title?.trim().lenght !== 0 ? req.body.title : undefined;
  const content = req?.body?.content?.lenght !== 0 ? req.body.content : undefined;

  console.log('POST /films');

  if (!title || !content) return res.sendStatus(400);

  const lastItemIndex = films?.length !== 0 ? 
  films.length - 1 : undefined;
  const lastId = lastItemIndex !== undefined ? 
  films[lastItemIndex]?.id : 0;
  const nextId = lastId + 1;

  const newFilm = {
    id : nextId,
    title : title,
    content : content,
  };

  films.push(newFilm);

  res.json(newFilm);
});


//UPDATE FILM 
router.patch('/:id', (req, res) => {
  console.log(`PATCH /films/${req.params.id}`);

  const title = req?.body?.title;
  const content = req?.body?.content;

  console.log('POST /films');

  if ((!title && !content) || title?.lenght === 0 || content?.lenght === 0)
  return res.sendStatus(400);

  const indexFilm = films.indexFilm(film => film.id == req.params.id);

  if (indexFilm < 0)
  return res.sendStatus(400);

  const updateFilm = {...films[indexFilm], ...req.body};

    films[indexFilm] = updateFilm;

    res.json(updateFilm);
});


module.exports = router;
