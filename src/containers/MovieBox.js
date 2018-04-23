import React, {Component} from 'react';
import MovieList from '../components/MovieList';

class MovieBox extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: [{id: 1, title: "Sausage Party", showtimes: "13:00"},
            {id: 2, title: "Cafe Society", showtimes: "14:00"},
            {id: 3, title: "Morgan", showtimes: "15:00"},
            {id: 4, title: "The 9th Life of Luis Drax", showtimes: "16:00"},
            {id: 5, title: "Naam Hai Akira", showtimes: "17:00"},
            {id: 6, title: "Equity", showtimes: "18:00"},
            {id: 7, title: "Things to Come", showtimes: "19:00"}]
    }
  }

  getData(){
    return this.state.data;
  }

  render(){
    return(
      <React.Fragment>
      <div className="movie-box">
        <p className="top-title">UK Opening This Week
        </p>
      </div>
        <MovieList data={this.state.data}/>
        <a  href="https://www.cineworld.co.uk/cinemas/glasgow-renfrew-street#/buy-tickets-by-cinema?in-cinema=8053&at=2018-04-23&for-movie=ho00005044&view-mode=list" className="see-more">
        See more opening this week <img className="small-image" src="https://image.flaticon.com/icons/svg/60/60771.svg"/></a>
      <div className="button-area">
        <p className="line-separator">&nbsp;</p>
        <button onClick={this.getData} className="button">Get Showtimes
          <a><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM9H1Yh9J_maF4yFG42cZngze1H18u1E8vaGEiCWl8jsz0hlUD"/></a>
        </button>
      </div>
      </React.Fragment>
    )
  }

}

export default MovieBox;
