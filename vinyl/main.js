(function () {
    $("button").on("click", function() {
      $.getJSON("https://codepen.io/Toluwalase/pen/gVXwEz.js");
    //   .done(function(){
    //     alert("something");
    //   });
      $.done(function(response) {
      var vinylList = '<ul class="vinyls">';
      $.each(response, function(index, vinyl) {
        vinylList += '<li class="item available">'
      }
      vinylList += vinyl.artist + '<br>' + 'Album: ' +  vinyl.name;
    vinylList += '<button class="btn btn-default">Order</button>';
    vinylList += '</li>'
    )};
    vinylList += '</ul>'
      $(vinylListing).html(vinylList);
    }
    });
     
})();