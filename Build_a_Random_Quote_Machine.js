$(document).ready(function() {
  var html = "", quote="";

  $("#getMessage").on("click", function() {
      $.getJSON("https://talaikis.com/api/quotes/random/", function(json) {
      var html = "";
      html="<strong>"+json.cat.toUpperCase()+": </strong>"+json.quote+" - "+json.author;

        $(".quote").html(html);
      quote=html;
      });
  });
  $(".tweetOut").on("click", function() {
      $(".tweetOut").attr('href','https://twitter.com/share?text='+quote+'&url=https%3A%2F%2Ftalaikis.com%2F');
  });
});
