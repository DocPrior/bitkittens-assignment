document.addEventListener('DOMContentLoaded', function() {
  var catButton = document.querySelector('.summon-cats');
  catButton.addEventListener('click', function() {
    $.ajax({
      url: 'http://bitkittens.herokuapp.com/cats.json',
      method: 'GET',
      dataType: 'json'
    })
  });


});
