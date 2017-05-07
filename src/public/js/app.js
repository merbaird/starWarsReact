import React from 'react';
import ReactDOM from 'react-dom';

var json = (function () {
    var json = null;
    $.ajax({
        'async': false,
        'global': false,
        'url': "http://swapi.co/api/planets/",
        'dataType': "json",
        'success': function (data) {
            json = data;
        }
    });
    return json;
})();


console.log(json);
// $.ajax({url: "http://swapi.co/api/planets/", success: function(result){
//         console.log(result);
//     }});

    function Navbar(){
      return(
        <div className="navbar navbar-default">
          <div className="navbar-header">
            <ul className="navbar-nav">
              <li className="active"><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
        </div>
      );
    }

    function Header() {
      return(
        <div className="jumbotron">
          <h1> Star Wars Census Bureau </h1>
        </div>
      );
    }

    function Planet(prop) {
      return (
        <div className="col-md-1 thumbnail caption">
          <h3>{json.results["0"].name}</h3>
          <p>Description?!</p>
          <ul>
            <li>stats</li>
            <li>stats</li>
            <li>stats</li>
          </ul>
          <img className="img-responsive" src={prop.link}/>
        </div>
      );
    }

    function Rows() {
      return(
        <div>
          <ul className="row">
            <Planet name="Planet" link="" />
            <Planet name="Planet" link="" />
            <Planet name="Planet" link="" />
            <Planet name="Planet" link="" />
            <Planet name="Planet" link="" />
            <Planet name="Planet" link="" />
            <Planet name="Planet" link="" />
            <Planet name="Planet" link="" />
            <Planet name="Planet" link="" />
            <Planet name="Planet" link="" />
            <Planet name="Planet" link="" />
            <Planet name="Planet" link="" />
          </ul>

          <ul className="row">
            <Planet name="Planet" link="" />
            <Planet name="Planet" link="" />
            <Planet name="Planet" link="" />
            <Planet name="Planet" link="" />
            <Planet name="Planet" link="" />
            <Planet name="Planet" link="" />
            <Planet name="Planet" link="" />
            <Planet name="Planet" link="" />
            <Planet name="Planet" link="" />
            <Planet name="Planet" link="" />
            <Planet name="Planet" link="" />
            <Planet name="Planet" link="" />
          </ul>

          <ul className="row">
            <Planet name="Planet" link="" />
            <Planet name="Planet" link="" />
            <Planet name="Planet" link="" />
            <Planet name="Planet" link="" />
            <Planet name="Planet" link="" />
            <Planet name="Planet" link="" />
            <Planet name="Planet" link="" />
            <Planet name="Planet" link="" />
            <Planet name="Planet" link="" />
            <Planet name="Planet" link="" />
            <Planet name="Planet" link="" />
            <Planet name="Planet" link="" />
          </ul>

          <ul className="row">
            <Planet name="Planet" link="" />
            <Planet name="Planet" link="" />
            <Planet name="Planet" link="" />
            <Planet name="Planet" link="" />
            <Planet name="Planet" link="" />
            <Planet name="Planet" link="" />
            <Planet name="Planet" link="" />
            <Planet name="Planet" link="" />
            <Planet name="Planet" link="" />
            <Planet name="Planet" link="" />
            <Planet name="Planet" link="" />
            <Planet name="Planet" link="" />
          </ul>

          <ul className="row">
            <Planet name="Planet" link="" />
            <Planet name="Planet" link="" />
            <Planet name="Planet" link="" />
            <Planet name="Planet" link="" />
            <Planet name="Planet" link="" />
            <Planet name="Planet" link="" />
            <Planet name="Planet" link="" />
            <Planet name="Planet" link="" />
            <Planet name="Planet" link="" />
            <Planet name="Planet" link="" />
            <Planet name="Planet" link="" />
            <Planet name="Planet" link="" />
          </ul>

          <ul className="row">
            <Planet name="Planet" link="" />
          </ul>
        </div>

      );
    }


function App() {
  return(
    <div>
      <Navbar/>
      <Header/>
      <Rows />
    </div>
  );
}


ReactDOM.render(
  <App />,
document.getElementById('container')
);
