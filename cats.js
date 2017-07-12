document.addEventListener('DOMContentLoaded', function() {
  var catButton = document.querySelector('.summon-cats');
  var box1 = document.querySelector('#cat1');
  var box2 = document.querySelector('#cat2');
  var box3 = document.querySelector('#cat3');
  catButton.addEventListener('click', function() {
    $.ajax({
      url: 'http://bitkittens.herokuapp.com/cats.json',
      method: 'GET',
      dataType: 'json'
    }).done(function(responseData) {
      var catPic1 = document.createElement('img');
      catPic1.setAttribute('src', responseData.cats[0].photo);
      catPic1.setAttribute('alt', responseData.cats[0].name);
      box1.append(catPic1);
      var catPic2 = document.createElement('img');
      catPic2.setAttribute('src', responseData.cats[1].photo);
      catPic2.setAttribute('alt', responseData.cats[1].name);
      box2.append(catPic2);
      var catPic3 = document.createElement('img');
      catPic3.setAttribute('src', responseData.cats[2].photo);
      catPic3.setAttribute('alt', responseData.cats[2].name);
      box3.append(catPic3);
    });
  });
  //I know that it needs to be refactored.


});
