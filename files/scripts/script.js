function addNewsPopup() {
    document.body.innerHTML +=
      '<div class="news" style="bottom:' +
      getRandomInt(1, window.innerHeight) +
      "px; left:" +
      getRandomInt(1, window.innerWidth) +
      'px;"><h1>Subscribe to our Newsletter!</h1><input type="email"><button>Send!</button><button onclick="this.parentElement.style.display = `none`;">Decline</button></div>';
  }
  
  function generateNewsPopups(amount) {
    for (let i = 0; i <= amount; i++) {
      addNewsPopup();
    }
  }
  
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  function CloseAllNewsPopups() {
    let NewsPopUps = document.getElementsByClassName("news");
    console.log(NewsPopUps.length);
    for (var i = 0; i < NewsPopUps.length; i++) {
      NewsPopUps[i].style.display = "none";
    }
  }
  
  document.addEventListener("keypress", function (event) {
    if (event.keyCode == 13) {
      console.log("test");
      CloseAllNewsPopups();
    }
  });
    
  generateNewsPopups(1);
  
  function addNewsPopup() {
    const videoUrl = "mac.mp4";
    const videoElement = '<video width="100%" height="100%" autoplay muted loop controls><source src="' + videoUrl + '" type="video/mp4">Your browser does not support the video tag.</video>';
  
    const newsPopup =
      '<div class="news" style="bottom:' +
      getRandomInt(1, window.innerHeight) +
      "px; left:" +
      getRandomInt(1, window.innerWidth) +
      'px;">' +
      videoElement +
      '<div class="content"></div>' +
      '</div>';
  
    document.body.innerHTML += newsPopup;
  }
  
  let amountOfAds = 1;
  
  function EverySecond() {
    if (amountOfAds <= 17) {
      setTimeout(function () {
        addNewsPopup();
        amountOfAds++;
        EverySecond();
      }, 2000);
    }
  }
// ================================================================//
let ReclameAantal = 1;
// ================================================================//

document.addEventListener("DOMContentLoaded", function () {
    const MacDonalds = document.getElementById("McDonalds");
    const button = document.getElementById("button");
    const BurgerKing = document.getElementById("BurgerKing");
    const KFC = document.getElementById("KFC");
    const Jumbo = document.getElementById("Jumbo");
    const Albert = document.getElementById("Albert");
    const Kruidvat = document.getElementById("Kruidvat");
    const videos = [MacDonalds, BurgerKing, KFC, Jumbo, Albert, Kruidvat];
// ================================================================//

    function playRandomVideo() {
        const randomIndex = Math.floor(Math.random() * videos.length);
        const currentVideo = videos[randomIndex];

        currentVideo.style.display = 'block';
        currentVideo.play();

        currentVideo.addEventListener('ended', function onEnded() {
            currentVideo.style.display = 'none';
            currentVideo.pause();
            currentVideo.currentTime = 0;
            currentVideo.removeEventListener('ended', onEnded);

            ReclameAantal++;
            button.innerText = "wacht [" + ReclameAantal + "/9]";
            Reclame();
        });
    }
// ================================================================//
    function Reclame() {
        if (ReclameAantal <= 9) {
            playRandomVideo();
            button.innerText = "wacht [" + ReclameAantal + "/9]";
        } else {
            ReclameAantal = 1;
            button.style.display = "none";
            restart();
        }
    }
// ================================================================//
    function restart() {
        setTimeout(function () {
            Reclame();
            button.style.display = "block";
            ReclameAantal = 1;
        }, 20000);
    }
    document.getElementById('Reclame').addEventListener('click', function () {
        Reclame();
    });

    Reclame();
});
// ================================================================//
document.addEventListener('keydown', function (event) {
    let key = event.key;
    const reclame = document.getElementById("Reclame");
    if (key.toLowerCase() === "q") {
        if (reclame.style.display == "block") {
            reclame.style.display = "none";
            EverySecond()
        } else {
            reclame.style.display = "block";
        }

    }
})
// ================================================================//

const ad = document.getElementById("ad");
function Reclame(){
  ad.style.display = "block";
}
// ================================================================//
