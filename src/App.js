import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';

function App() {
  const [movies, setMovies] = useState(false)
  const [search, setSearch] = useState(false)

  function fetchMovies() {
    console.log(search);
    fetch(`http://www.omdbapi.com/?s=${search}&apikey=f2e8db35`)
    .then(res => res.json())
    .then((results) => {
      console.log(results);
      setMovies(results.Search)
    })
  }

  function handleChange(event) {
    setSearch(event.target.value);
  }

  const items = []

  if(movies) {
    movies.forEach( (movie, index) => {
      items.push(
      <Card key={index} style={{ width: '18rem' }}>
        <Card.Img variant="top" src={movie.Poster} />
        <Card.Body>
        <Card.Title>{movie.Title}</Card.Title>
          <Card.Text>
            {movie.Year}
          </Card.Text>
          <Button variant="primary">Watch</Button>
        </Card.Body>
      </Card>
      )
    })
  }

  return (
    <Container>
      <Row>
        <Col>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Search for Movies..."
            aria-label="Movie Search"
            aria-describedby="basic-addon2"
            onChange={handleChange}
          />
          <InputGroup.Append>
            <Button onClick={fetchMovies} variant="outline-secondary">Search</Button>
          </InputGroup.Append>
        </InputGroup>
        </Col>
      </Row>
      {/* 
      Search Bar
      <Header />
      Search Movies List
      <MovieList /> 
      */}
      <CardColumns>
        {items}
      </CardColumns>

    </Container>
  );
}

export default App;
