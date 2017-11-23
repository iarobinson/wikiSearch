$(document).ready(function() {
    
  $('.input').on('keyup', function() {
    var term = $('.input').val();
    var remoteUrlWithOrigin = "http://en.wikipedia.org/w/api.php?action=parse&format=json&prop=text&section=0&page=" + term + "&callback=?"
    
    $.ajax( {
        url: remoteUrlWithOrigin,
        data: term,
        dataType: 'json',
        type: 'GET',
        headers: { 'Api-User-Agent': 'Example/1.0' },
        success: function(data) {
          var str = data;
          console.log(str, "<-str");
          $('.searchResults').text(str);
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

