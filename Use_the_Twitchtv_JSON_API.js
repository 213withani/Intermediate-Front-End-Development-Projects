$(document).ready(function() {
      var user=["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp"];
      var apiURL="",apiURL2="";

      for(var i=0; i<user.length;i++){
            apiURL="https://wind-bow.gomix.me/twitch-api/channels/"+user[i]+"?callback=?";
            $.getJSON(apiURL, function(data) {
              $(".channels").append("<a href='"+data.url+"'> <img src='"+data.logo+"'> </a><br/><br/>");
            });

            apiURL2="https://wind-bow.gomix.me/twitch-api/streams/"+user[i]+"?callback=?";
            $.getJSON(apiURL2, function(data) {
            var userStatus="NA";
            var viewers=0;
            var id=0;

                if(data.stream!==null){
                  userStatus=data.stream.stream_type;
                  viewers=data.stream.viewers;
                  id=data.stream._id;
                }else{
                  userStatus="Offline";
                  viewers=0;
                  id=0;
                }

                $(".data").append("<br/>ID: "+id+ " Status: "+ userStatus +" Viewers:"+ viewers+" links: "+data._links.channel);
          });
      }

});
  
