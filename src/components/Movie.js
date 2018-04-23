import React from 'react';

const Movie = (props) =>
  <div className="movie">
    <p className="movie-title">
      <a><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqcaTr0cfnSpSYX6rJKqxi1QZJmSnwh7xio1DaNX7hJXTcI_lNjA"/></a>
      <a href="https://en.wikipedia.org/wiki/Film" className="titles">{props.title}</a>
      <a href={props.children} className="showtimes">Showtimes</a>
    </p>
  </div>


  export default Movie;
