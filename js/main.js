var markerList = [];
var soundList = [];
var entityList = [];
var characters = [
  "pettson",
  "lassemaja",
  "roda_masken",
  "rumpnisse",
  "karlsson",
];

for (let i = 0; i < characters.length; i++) {
  markerList.push(characters[i] + "-marker");
  soundList.push("#" + characters[i] + "-sound");
  entityList.push("#" + characters[i] + "-character");
}

AFRAME.registerComponent("registerevents", {
  init: function () {
    var marker = this.el;
    var markerId = marker.id;

    /*
                function markerLoop(markerList, entityList) {
                  for (let i = 0; i <= markerList.length; i++) {
                    if (markerId == markerList[i]) {
                      var entity = document.querySelector(entityList[i]);
                      var sound = new Howl({
                        src: ["assets/ljud/" + characters[i] + ".mp3"],
                        autoplay: true,
                      });
                    }
                    document
                      .querySelector(".say-hi-button")
                      .addEventListener("click", function () {
                        sound.pause();
                      });
                    marker.addEventListener("markerLost", () => {
                      console.log("Marker Lost: ", markerId);
                      sound.pause();
                    });
                  }
                }
        */

    marker.addEventListener("markerFound", function () {
      console.log("Marker Found: ", markerId);
      //  markerLoop(markerList, entityList);
      for (let i = 0; i <= markerList.length; i++) {
        if (markerId == markerList[i]) {
          var sound = new Howl({
            src: ["assets/ljud/" + characters[i] + ".mp3"],
            autoplay: true,
          });
        }
        document
          .querySelector(".say-hi-button")
          .addEventListener("click", function () {
            togglePlay(sound);
          });
        marker.addEventListener("markerLost", function () {
          console.log("Marker Lost: ", markerId);
          togglePlay(sound);
        });
      }
    });
  },
});

function togglePlay(sound) {
  return sound.paused ? sound.play() : sound.pause();
}

window.onload = function () {
  var startScreen = document.querySelector(".startScreen");
  var enterButton = document.querySelector(".enterButton");
  enterButton.addEventListener("click", function () {
    startScreen.remove();
    enterButton.remove();
    document.querySelector(".say-hi-button").style.display = "inline";
  });
};
