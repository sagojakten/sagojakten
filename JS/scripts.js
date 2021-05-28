window.onload = function () {
  document
    .querySelector(".say-hi-button")
    .addEventListener("click", function () {
      // here you can change also a-scene or a-entity properties, like
      // changing your 3D model source, size, position and so on
      // or you can just open links, trigger actions...
      alert("Hi there!");
    });
};

AFRAME.registerComponent("registerevents", {
  init: function () {
    const marker = this.el;

    marker.addEventListener("markerFound", () => {
      var markerId = marker.id;
      console.log("Marker Found: ", markerId);

      if (markerId == "pettson-marker") {
        var pettsonEntity = document.querySelector("#pettson_character");
        var pettsonSound = document.querySelector("#pettson_sound");
        pettsonEntity.addEventListener("click", function () {
          if (pettsonSound.paused) {
            pettsonSound.play();
          } else {
            pettsonSound.pause();
          }
        });
      }
      if (markerId == "lassemaja-marker") {
        var lassemajaEntity = document.querySelector("#lassemaja_characters");
        var lassemajaSound = document.querySelector("#lassemaja_sound");
        lassemajaEntity.addEventListener("click", function () {
          if (lassemajaSound.paused) {
            lassemajaSound.play();
          } else {
            lassemajaSound.pause();
          }
        });
      }
      if (markerId == "roda_masken-marker") {
        var roda_maskenEntity = document.querySelector(
          "#roda_masken_character"
        );
        var roda_maskenSound = document.querySelector("#roda_masken_sound");
        roda_maskenEntity.addEventListener("click", function () {
          if (roda_maskenSound.paused) {
            roda_maskenSound.play();
          } else {
            roda_maskenSound.pause();
          }
        });
      }
      if (markerId == "rumpnisse-marker") {
        var rumpnisseEntity = document.querySelector("#rumpnisse_clickable");
        var rumpnisseSound = document.querySelector("#rumpnisse_sound");
        rumpnisseEntity.addEventListener("click", function () {
          if (rumpnisseSound.paused) {
            rumpnisseSound.play();
          } else {
            rumpnisseSound.pause();
          }
        });
      }
      if (markerId == "karlsson-marker") {
        var karlssonEntity = document.querySelector("#karlsson_character");
        var karlssonSound = document.querySelector("#karlsson_sound");
        karlssonEntity.addEventListener("click", function () {
          if (karlssonSound.paused) {
            karlssonSound.play();
          } else {
            karlssonSound.pause();
          }
        });
      }
    });

    marker.addEventListener("markerLost", () => {
      var markerId = marker.id;
      console.log("Marker Lost: ", markerId);

      if (markerId == "pettson-marker") {
        var pettsonSound = document.querySelector("#pettson_sound");
        pettsonSound.pause();
      }
      if (markerId == "lassemaja-marker") {
        var lassemajaSound = document.querySelector("#lassemaja_sound");
        lassemajaSound.pause();
      }
      if (markerId == "roda_masken-marker") {
        var roda_maskenSound = document.querySelector("#roda_masken_sound");
        roda_maskenSound.pause();
      }
      if (markerId == "rumpnisse-marker") {
        var rumpnisseSound = document.querySelector("#rumpnisse_sound");
        rumpnisseSound.pause();
      }
      if (markerId == "karlsson-marker") {
        var karlssonSound = document.querySelector("#karlsson_sound");
        karlssonSound.pause();
      }
    });
  },
});
