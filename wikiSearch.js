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
          $('.searchDisplay').html('');
          for (var i = 0; i < data[1].length; i += 1) {
            $('.searchDisplay').prepend("<li><a target= '_blank' href= " + data[3][i] + ">" + data[1][i] + "</a><p>" + data[2][i] + "</p></li>");            
          }
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

