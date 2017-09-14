$(document).ready(function() {

      var user=["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp"];
      var apiURL="";

      for(var i=0; i<user.length;i++){
            apiURL="https://wind-bow.gomix.me/twitch-api/channels/"+user[i]+"?callback=?";

            $.getJSON(apiURL, function(data) {
              console.log(data);
              //$(".channels").append(" "+"<a href='"+data.url+"'>"+data.name+"</a>"+" logo: <img src='"+data.logo+"'>");
              $(".channels").append("<a href='"+data.url+"'> <img src='"+data.logo+"'> </a><br/><br/>");
            });
       }

      for(var i=0; i<user.length;i++){

          apiURL="https://wind-bow.gomix.me/twitch-api/streams/"+user[i]+"?callback=?";

          $.getJSON(apiURL, function(data) {
            //console.log(data);
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
  
