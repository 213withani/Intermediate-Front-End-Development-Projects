
$(document).ready(function(){
  $(".searchBtn").on('click',function(){
      var value=$(".search").val();
      var apiURL="";
      var result=$(".result");
      var output="";
      console.log(value);
        $.ajax( {
            url: "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&origin=*&search="+value,
            dataType: 'json',
            type: 'POST',
            headers: { 'Api-User-Agent': 'Example/1.0' },
            success: function(searchResults) {
              var max=10;
              var textLink="",description="",hrefInfo="";

              for(let child=0;child<max;child++){

                    for(let parent=1;parent<searchResults.length;parent++){
                      // go through the first and create a link with empty href
                      // attach description
                      // add href to links

                        //output+=searchResults[parent][child]+'<br/>';
                      if (parent===1){
                        textLink=searchResults[parent][child];
                      }
                      if (parent===2){
                        description=searchResults[parent][child];
                      }
                      if (parent===3){
                        hrefInfo=searchResults[parent][child];
                      }

                    }
                    textLink="<a target='_blank' href='"+hrefInfo+"'>"+textLink+"</a>"
                    //console.log(textLink);
                    output+=textLink+'<br/>'+description+'<br/><br/>';

              }
              result.html(output);
            }
        });
    });
});
