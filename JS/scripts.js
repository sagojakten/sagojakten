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

/*
AFRAME.registerComponent("markerhandler", {
  init: function () {
    const animatedMarker = document.querySelector("#animated-marker");
    const aEntity = document.querySelector("#cat");

    // every click, we make our model grow in size :)
    animatedMarker.addEventListener("click", function (ev, target) {
      const intersectedElement = ev && ev.detail && ev.detail.intersectedEl;
      if (aEntity && intersectedElement === aEntity) {
        const scale = aEntity.getAttribute("scale");
        Object.keys(scale).forEach((key) => (scale[key] = scale[key] + 1));
        aEntity.setAttribute("scale", scale);
      }
    });
  },
});
*/

AFRAME.registerComponent("clickhandler", {
  init: function () {
    this.el.addEventListener("click", () => {
      alert("Clicked!");
    });
  },
});

function closeNav() {
  document.getElementById("splash").style.width = "0%";
}
