// var byeSpeaker =

(function (window) {

  var byeSpeaker = {};
  var speakWord = "Good Bye";

  byeSpeaker.speak = function (name) {
    var speakGreeting = speakWord + " " + name
    console.log(speakGreeting);

    document.getElementById("content").innerHTML += ("<div class = 'goodbye'>" + speakGreeting +"</div>");
  };
  
  window.byeSpeaker = byeSpeaker;

}) (window);

//****************************** ENDS HERE ******************************
