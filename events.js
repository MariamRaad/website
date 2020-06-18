/* To add interactivity to the site with Javascript */

/* Videohandler Function: to let video play when marker is tracked */
AFRAME.registerComponent('videohandler', {
  init: function () {
    const marker = document.querySelector("#marker");
    const scanner = document.querySelector("#scanner");
    this.video = document.querySelector("#Video_Asset_0");

    marker.addEventListener('markerFound', function () {
       scanner.hidden = true;
       this.video.play(); //this.vid.play();
    }.bind(this));
    
    marker.addEventListener('markerLost', function () {
       scanner.hidden = false;
       this.video.pause(); //this.vid.pause();
       // this.vid.currentTime = 0;
    }.bind(this));
  }
});

AFRAME.registerComponent('clickhandlerVideo', {
        init: function() {
            this.el.addEventListener('click', () => {
                alert('Clicked!')
                //this.video = document.querySelector('#Video_Asset_0');
                if (this.el.paused == true) {
                    this.el.play();
                } else {
                    this.el.pause();
                }
        }, false);
            });
    }});

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
