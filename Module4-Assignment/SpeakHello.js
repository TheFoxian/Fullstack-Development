// var helloSpeaker =

(function (window) {

  var helloSpeaker = {};
  var speakWord = "Hello";

  helloSpeaker.speak = function (name) {
    var speakGreeting = speakWord + " " + name
    console.log(speakGreeting);

    document.getElementById("content").innerHTML += ("<div class = 'hello'>" + speakGreeting +"</div>");
  };
  
  window.helloSpeaker = helloSpeaker;

}) (window);

//****************************** ENDS HERE ******************************
