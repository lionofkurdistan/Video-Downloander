$ (".btn").click(function(){
  var link = $(".link").val();
  var format = $(".format").children("option:selected").val();
  var src = "" + link + format + "";
  download(link , format)
});

function  download(link , format){
  $('.button-container').html('<iframe stayle="height:50px; border:none; overflow:hildren" src="https://loader.to/api/button/?url='+ link + '&f=' + format  + '"></inframe>');
  
}
