

$.ajax({url: "http://swapi.co/api/planets/", success: function(result){
        result.results.map(function(value){
          console.log(value.name);
        })
        console.log(result);
    }});

    var StarWarsPage = React.createClass({
      render: function() {
        return (
          <div>
            This is a Star Wars Page.
            <List/>
          </div>
        );
      }
    });
