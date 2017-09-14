$(document).ready(function() {
      var user=["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp"];
      var apiURL="";

      for(var i=0; i<user.length;i++){

            apiURL="https://wind-bow.gomix.me/twitch-api/streams/"+user[i]+"?callback=?";
            $.getJSON(apiURL, function(data) {
            var userStatus="NA", logo="",display_name="",status="",url="";
            var viewers=0;
            var id=0;

                if(data.stream!==null){
                  userStatus=data.stream.stream_type;
                  viewers=data.stream.viewers;
                  id=data.stream._id;
                  logo=data.stream.channel.logo;
                  display_name=data.stream.channel.display_name;
                  status=data.stream.channel.status;
                  url=data.stream.channel.url;
                }else{
                  userStatus="Offline";
                  viewers=0;
                  logo="https://orels1.tips/s/twitch-offline-no-text.jpg";

                }

                //$(".data").append("<br/> Status: "+ userStatus +" Viewers:"+ viewers+" links: "+data._links.channel+data.stream.channel.status);
            $(".data").append("<br/><a target='_blank' href='"+url+"'>"+"<img width=300 height=300 src='"+logo+"'></a> Channel: "+display_name+" Status: "+ userStatus +" Viewers:"+ viewers+" Status: "+status+"<br/>");
          });
      }

});
  
