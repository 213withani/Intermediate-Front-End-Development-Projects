
$(document).ready(function(){
  $(".searchBtn").on('click',function(){
      var value=$(".search").val();
      var apiURL="";
      var result=$(".result");
      var output="";

        $.ajax( {
            url: "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&origin=*&search="+value,
            dataType: 'json',
            type: 'POST',
            headers: { 'Api-User-Agent': 'Example/1.0' },
            success: function(searchResults) {
              var max=10;
              for(let child=0;child<max;child++){

                    for(let parent=1;parent<searchResults.length;parent++){
                        output+=searchResults[parent][child]+'<br/>';
                    }
                    output+='<br/>';
              }
              result.html(output);
            }
        });
    });
});
