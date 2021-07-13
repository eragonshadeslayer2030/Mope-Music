function checkClient() {
    typeof waterBarPer_c != 'undefined' ? setTimeout(clientLoaded,500) : setTimeout(checkClient,100);
}
checkClient();

function clientLoaded() {


window.custom = setInterval(function(){ //custom
    try {
        $bus.emit($bus.EVENTS.HIDE_ALL_ADS);
        $bus.emit($bus.EVENTS.ENDED_GAME);
    } catch {}
});


let loaded = false;
 (function() {
     if(!loaded) {
        var origOpen = XMLHttpRequest.prototype.open;
        XMLHttpRequest.prototype.open = function(method, url) {
            this.addEventListener('load', function() {
             //   console.log('XHR finished loading', method, url);
                display();
            });

            this.addEventListener('error', function() {
           //     console.log('XHR errored out', method, url);
            });
            origOpen.apply(this, arguments);
        };
     }
    })();


function display() {
    if (!loaded) {
             loaded = true

var lastbiome = 9;
var curraudio = 0
var options_musicMuted = false
var getLazyLoadAudio = function(theUrl) {

try{
    curraudio.pause();

}catch{}

    //start loading if not loaded

    var newAudio = new Audio(theUrl);
    console.log("loading audio: " + theUrl);
    curraudio = newAudio;
    newAudio.currentTime = 0;


    newAudio.addEventListener('ended', function() {

            this.currentTime = 0; //restart on music end
            try {
                this.play();
            } catch (err) {}
        }, false);

    newAudio.volume = 0.25
    newAudio.muted = options_musicMuted;
    newAudio.play();


  return curraudio
};

setInterval(function(){

var entity = _0x26fbfe
var myid = _0x467f74

if (entity[myid]) {
    if (lastbiome !=entity[myid].curBiome) {

   switch (entity[myid].curBiome) {
       case 0:
           if (lastbiome != 3) {
           getLazyLoadAudio('https://cdn.glitch.com/ce836b8c-3cb9-4e54-81f3-93398db9d86d%2Fmusic_menu_LONG.mp3')
           }
           break;
       case 1:
           getLazyLoadAudio('https://cdn.glitch.com/ce836b8c-3cb9-4e54-81f3-93398db9d86d%2FOFFICIAL_MOPE.IO_-_OCEAN_BIOME_SONG_by_N4FY_Copyright_Free.mp3')
           break;
             case 2:
           getLazyLoadAudio('https://cdn.glitch.com/ce836b8c-3cb9-4e54-81f3-93398db9d86d%2Fmusic_game_LONG2.mp3')
           break;
             case 3:
          if (lastbiome != 0) {
           getLazyLoadAudio('https://cdn.glitch.com/ce836b8c-3cb9-4e54-81f3-93398db9d86d%2Fmusic_menu_LONG.mp3')
          }
           break;
       case 4:
           getLazyLoadAudio('https://cdn.glitch.com/b6d89722-38f1-4915-9d45-a050c03c91f7%2Fmope_biome_3.mp3')
           break;
   }
    lastbiome = entity[myid].curBiome
}
} else {
    if (lastbiome != 9) {
        curraudio.pause()
        curraudio = 0
        lastbiome = 9
    }
}
}, 100);

          }
    }
}
