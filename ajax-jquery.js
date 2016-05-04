$('#my-button').click(function() { 
  console.log("Knappen klickades på!") 
  
  // Gör en GET request med AJAX i jQuery
  $.get("https://api.github.com/zen", function(data, textStatus, jqXHR) {
    // Vilken status?
    console.log(textStatus);
    
    // Visa texten från servern i stycket (<p>) med id:t show-server-text
    $('#show-server-text').text(data);
    
    
  }).fail(function() {console.log("Request gav fel!")})
  
  
} 
);
