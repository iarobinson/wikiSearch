$(document).ready(function() {
  var didWeGetIt = "no";
  
  $('.input').on('keyup', function() {
    var search = $('.input').val();
    $('.searchResults').text(search);
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

