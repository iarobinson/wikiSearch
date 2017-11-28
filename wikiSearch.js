$(document).ready(function() {
    
  $('.input').on('keyup', function() {
    var term = $('.input').val();
    var remoteUrlWithOrigin = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + term + "&format=json&callback=?";
    
    $.ajax( {
        url: remoteUrlWithOrigin,
        type: 'GET',
        async: false,
        dataType: 'json',
        
        success: function(data) {
          console.log(data)
          $('.searchResults').text(data[1][0]);
          $('.searchResults').text(data[2][0]);
        },
        
        error: function(errorMessage) {
          alert("AJAX function error by Ian");
        }
    } );
  });

  $('.search').on('click', function() {
    var searchTerm = "Wikipedia on " + $('.input').val();
    $('.searchDisplay').text(searchTerm);
  });
  
  $('.random').on('click', function() {
    var randomCopy = "Ok, here is something random."
    $('.searchDisplay').text(randomCopy);
  });
});

