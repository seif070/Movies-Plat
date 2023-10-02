import React from 'react';
import MoviesList from './components/MoviesList'; 


const App = () => {
  const moviesData = [
    { title: 'Wednesday', genre: 'Horror', year: 2020 ,Imagesrc:'https://alternativemovieposters.com/wp-content/uploads/2023/01/Haley-Turnbull_Wednesday.jpg' },
    { title: 'Me3an', genre: 'science fiction horror', year: 2019 ,Imagesrc:"https://th.bing.com/th/id/OIP.SC4_7HPZwfIANrCLcF6AgwHaJQ?pid=ImgDet&rs=1"},
    { title: 'The witcher', genre: 'action', year: 2020 ,Imagesrc:'https://es.web.img2.acsta.net/pictures/19/11/22/09/33/5060052.jpg'},
    { title: 'black panther wakanda forever', genre: 'Action', year: 2019,Imagesrc:"https://lumiere-a.akamaihd.net/v1/images/blackpanther-wakandaforever_payoff_1-sht_v10_lg_c5ec6aef.jpeg?region=0%2C0%2C1688%2C2500" },
    { title: 'violent night', genre: 'Horror', year: 2019,Imagesrc:"https://th.bing.com/th/id/R.76e0ba532226cb1ccb3490060e399e19?rik=rL6E%2BaZ%2Flkqj7w&pid=ImgRaw&r=0" },
    { title: 'avatar the way of water', genre: 'Science fiction', year: 2019,Imagesrc:"https://upload.wikimedia.org/wikipedia/en/5/54/Avatar_The_Way_of_Water_poster.jpg" },

  ];

  return (
    <div className="app">
      <h1>List of Movies</h1>
      <MoviesList movies={moviesData} />
    </div>
  );
};

export default App;