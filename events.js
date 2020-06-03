/* To add interactivity to the site with Javascript */

AFRAME.registerComponent('navigate-on-click', {
  schema: {
    url: {
      default: 'https://www.google.com/'
    }
  },
  init: function () {
    console.log("hello")
    console.log(this.el)
    var data = this.data;
    var el = this.el;
    el.addEventListener('click', function () {
      //window.location.href = data.url;
      window.open(data.url, '_blank');
    });
  }
});

AFRAME.registerComponent('color-randomizer', {
  init: function () {
    let colors = ["red", "green", "blue", "black", "orange", "white"]
    var el = this.el;
    el.addEventListener('click', (e) => {     
      this.el.setAttribute('color', colors[Math.floor(Math.random() * colors.length)])
    });
  }
});

AFRAME.registerComponent('markerhandler', {

    init: function() {
        const animatedMarker = document.querySelector("#animated-marker");
        const aEntity = document.querySelector("#animated-model");

        // every click, we make our model grow in size :)
        animatedMarker.addEventListener('click', function(ev, target){
            const intersectedElement = ev && ev.detail && ev.detail.intersectedEl;
            if (aEntity && intersectedElement === aEntity) {
                const scale = aEntity.getAttribute('scale');
                Object.keys(scale).forEach((key) => scale[key] = scale[key] + 1);
                aEntity.setAttribute('scale', scale);
            }
        });
}});

 //window.onload = function() {
   AFRAME.registerComponent("videohandler", {
     init: function() {
       var marker = this.el;
       this.vid = document.querySelector("#vid");
       marker.addEventListener(
         "markerFound",
         function(){
           this.vid.play();
         }.bind(this)
       );
                                
       marker.addEventListener(
         "markerLost",
         function() {
           this.vid.pause();
           this.vid.currentTime = 0;
         }.bind(this)
       );
     }
   });
 //};
