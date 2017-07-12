document.addEventListener('DOMContentLoaded', function() {
  var catButton = document.querySelector('.summon-cats');
  var box1 = document.querySelector('#cat1');
  var box2 = document.querySelector('#cat2');
  var box3 = document.querySelector('#cats3');
  catButton.addEventListener('click', function() {
    $.ajax({
      url: 'http://bitkittens.herokuapp.com/cats.json',
      method: 'GET',
      dataType: 'json'
    }).done(function(responseData) {
      var catPic = document.createElement('img');
      catPic.setAttribute('src', responseData.cats[0].photo);
      catPic.setAttribute('alt', responseData.cats[0].name);
      box1.append(catPic);
    });
  });


});
