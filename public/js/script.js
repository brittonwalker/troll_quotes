$(document).ready(function(){
  var randomTroll = "http://localhost:3000/randomTroll";
  $.getJSON(randomTroll)
  .done(function(res){
    console.log(res);
    var author = res.author.name;
    var quote = res.quote.text;
    var image = res.image.url;
    var authorTag = $('.author');
    var quoteTag = $('.quote');
    var imgTag = $('.image');
    imgTag.attr('src', image);
    authorTag.text("- " + author);
    quoteTag.text('"' + quote + '"');
  })
  $('.animated-button').click(function(e){
    e.preventDefault();
    // $('.image').toggle('display')
    var randomTroll = "http://localhost:3000/randomTroll";
    $.getJSON(randomTroll)
    .done(function(res){
      console.log(res);
      var author = res.author.name;
      var quote = res.quote.text;
      var image = res.image.url;
      var authorTag = $('.author');
      var quoteTag = $('.quote');
      var imgTag = $('.image');
      imgTag.attr('src', image);
      authorTag.text("- " + author);
      quoteTag.text('"' + quote + '"');
    })

  });

  $('.button').click(function(e){
    e.preventDefault();
    var authorTag = $('.author');
    console.log(authorTag.text());
  });


});
