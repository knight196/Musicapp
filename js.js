let audiolist = document.getElementById('audiolist');

let songname = document.getElementById('songname');

var next = document.querySelector('.next');

var prev = document.querySelector('.prev');

var audioplayer = document.querySelector('.audioplay');

var img2 = document.querySelector('.img2');

var pic2 = document.querySelector('.pic2');

var stop = document.querySelector('.stop');

//Music file lists

var progress = document.querySelector('#progress');
const timerWrapper = document.querySelector('.timer');
const timer = document.querySelector('.timer span');
const timerBar = document.querySelector('.timer div');

var songlist = [

  Music1 ={
    musicFile: 'Audio/Cool by tobu.mp3',
    musicName: 'Tobu',
    musicPic:'images/eveninggrass.jpg',
  },

  Music2 ={
    musicFile : 'Audio/kiss the rain.mp3',
    musicName: 'Yiruma kiss the rain',
    musicPic:'images/grass.jpg',
  },
  Music3 ={
    musicFile: 'Audio/Joe Hisaishi - Summer.mp3',
    musicName: 'Joe Hisaishi Summer',
    musicPic:'images/grass2.jpg',
  },

  Music4 ={
    musicFile : 'Audio/relax-paino.mp3',
    musicName: 'Relax piano N005',
    musicPic:'images/sakura.jpg',
  },
  Music5 ={
    musicFile: 'Audio/Yiruma - Maybe.mp3',
    musicName: 'Yiruma Maybe',
    musicPic:'images/oceans.jpg',
  },

  Music6 ={
    musicFile : 'Audio/an-avenue.mp3',
    musicName: 'Tsunenori An avenue',
    musicPic:'images/plainland.jpg',
  }
]

//bottomsong in otherscreen with music lists

var bottomimg = document.querySelector('.bottomplayimg');

var bottomsong = document.querySelector('#bottomsong');

var thirdnext = document.querySelector('#thirdnext');

var thirdplay = document.querySelector('#thirdplay');

let count = 0;

audiolist.src = songlist[count].musicFile;
songname.innerText = songlist[count].musicName;
pic2.src=songlist[count].musicPic;
img2.src=songlist[count].musicPic;

bottomimg.src=songlist[count].musicPic;
bottomsong.innerText = songlist[count].musicName;



//bottomsong of next button
thirdnext.addEventListener('click', () => {
  count++;
  if(count > songlist.length -1){
    count = 0;
  }
audiolist.src = songlist[count].musicFile;
bottomimg.src=songlist[count].musicPic;
bottomsong.innerText = songlist[count].musicName;
songname.innerText = songlist[count].musicName;
pic2.src=songlist[count].musicPic;
img2.src=songlist[count].musicPic;
pic2.style.animation="spin 4s linear infinite";
songname.style.animation = "scroll-left 15s linear infinite";
audiolist.play();
thirdplay.innerHTML = '<i class="fas fa-pause"></i>';
});

//bottom song for the play

thirdplay.addEventListener('click', () => {
  if(thirdplay.innerHTML === '<i class="fas fa-pause"></i>'){
    thirdplay.innerHTML = '<i class="fas fa-play"></i>'
    pic2.style.animation="linear";
    audiolist.pause();
    audioplayer.innerHTML = '<i class="fas fa-play"></i>';
  }else if (thirdplay.innerHTML === '<i class="fas fa-play"></i>'){
    thirdplay.innerHTML = '<i class="fas fa-pause"></i>';
    audioplayer.innerHTML = '<i class="fas fa-pause"></i>';
    audiolist.play();
    pic2.style.animation ="spin 4s linear infinite";
    songname.style.animation = "scroll-left 15s linear infinite";
  }
});


//main song screen of the  next
next.addEventListener('click', () => {
  count++;
  if(count > songlist.length -1){
    count = 0;
  }
audiolist.src = songlist[count].musicFile;
songname.innerText = songlist[count].musicName;
pic2.src=songlist[count].musicPic;
img2.src=songlist[count].musicPic;
pic2.style.animation="spin 4s linear infinite";
songname.style.animation = "scroll-left 15s linear infinite";
audioplayer.innerHTML = '<i class="fas fa-pause"></i>';
bottomimg.src=songlist[count].musicPic;
bottomsong.innerText = songlist[count].musicName;
thirdplay.innerHTML = '<i class="fas fa-pause"></i>';
audiolist.play();
  });
  
//play button for the main screen
audioplayer.addEventListener('click', () => {
  if(audioplayer.innerHTML === '<i class="fas fa-pause"></i>'){
    audioplayer.innerHTML = '<i class="fas fa-play"></i>';
    audiolist.pause();
    thirdplay.innerHTML = '<i class="fas fa-play"></i>';
    pic2.style.animation="linear";
  }else if (audioplayer.innerHTML === '<i class="fas fa-play"></i>'){
    audioplayer.innerHTML = '<i class="fas fa-pause"></i>';
    audiolist.play();
    thirdplay.innerHTML = '<i class="fas fa-pause"></i>';
    pic2.style.animation ="spin 4s linear infinite";
    songname.style.animation = "scroll-left 15s linear infinite";
  }
});


//bottomplay of the play button
var playnext = document.querySelector('.fa-arrow-circle-right');

playnext.addEventListener('click', () => {
  count++;
  if(count > songlist.length -1){
    count = 0;
  }
audiolist.src = songlist[count].musicFile;
songname.innerText = songlist[count].musicName;
pic2.src=songlist[count].musicPic;
img2.src=songlist[count].musicPic;
pic2.style.animation="spin 4s linear infinite";
songname.style.animation = "scroll-left 15s linear infinite";
audioplayer.innerHTML = '<i class="fas fa-pause"></i>';
audiolist.play();
});

//previous button for the main screen
prev.addEventListener('click', () => {
  count--;
  if(count < 0){
    count = songlist.length-1;
  }
audiolist.src = songlist[count].musicFile;
songname.innerText = songlist[count].musicName;
pic2.src=songlist[count].musicPic;
img2.src=songlist[count].musicPic;
pic2.style.animation="spin 4s linear infinite";
songname.style.animation = "scroll-left 15s linear infinite";
audiolist.play();
  });
  
//audiolist with volume slider with minutes and progress bar when it is played by the user 
audiolist.addEventListener('timeupdate', function (){
  progress.value = audiolist.currentTime / audiolist.duration;

let minutes = Math.floor(audiolist.currentTime / 60);
let seconds = Math.floor(audiolist.currentTime - minutes * 60);
let minuteValue;
let secondValue;

if (minutes < 10) {
  minuteValue = '0' + minutes;
} else {
  minuteValue = minutes;
}

if (seconds < 10) {
  secondValue = '0' + seconds;
} else {
  secondValue = seconds;
}

let mediaTime = minuteValue + ':' + secondValue;
timer.textContent = mediaTime;

});

volumeslider.addEventListener('change', function(e) {;
audiolist.volume = e.currentTarget.value / 100;
});

volumeslider.addEventListener('change', function(e) {;
audiolist.volume = e.currentTarget.value / 100;
});

//stop button for to stop the music
stop.addEventListener('click', () => {
  audiolist.pause();
  audiolist.currentTime =0;
  pic2.style.animation="linear";
  audioplayer.innerHTML = '<i class="fas fa-play"></i>' ;
  thirdplay.innerHTML = '<i class="fas fa-play"></i>' ;
});

var nav = document.getElementById('openNav');
var navbar = document.querySelector('.navbar');
var music = document.querySelector('.music');

nav.addEventListener('click', () => {
navbar.classList.toggle('show');
});

music.addEventListener('click', () => {
navbar.classList.remove('show');
});

//bottomplay container of the song will be closed when user clicks on the title of the song
var down = document.querySelector('.down');
var bottomplay = document.querySelector('.bottomplay');
var bottomcontainer = document.querySelector('.bottomcontainer');

down.addEventListener('click', () => {
bottomplay.classList.add('show');
document.querySelector('.smalllid').style.display="none";
document.querySelector('.otherscreen').style.display="block";
});


bottomcontainer.addEventListener('click', () => {
bottomcontainer.classList.toggle('show');
document.querySelector('.otherscreen').style.display="none";
document.querySelector('.smalllid').style.display ="block";
});

var musicicon = document.querySelector('.fa-music');

musicicon.addEventListener('click', () => {
document.querySelector('.smalllid').style.display="block";
document.querySelector('.topicon').style.display="none";
});

var home = document.querySelectorAll('#home');

home.forEach(button => button.addEventListener('click', () => {
  document.querySelector('.smalllid').style.display="none";
  document.querySelector('.otherscreen').style.display="none";
  document.querySelector('.topicon').style.display="inline-flex";
}));

//square button for exiting from the music player which takes the user to the home screen
var homeclose = document.querySelectorAll('.closemusic');

homeclose.forEach(button => button.addEventListener('click', function() {
document.querySelector('.smalllid').style.display="none";
document.querySelector('.otherscreen').style.display="none";
document.querySelector('.topicon').style.display="inline-flex";
    audiolist.pause();
  audiolist.currentTime = 0;
}));

//exit the screen when user clicks on the exit button from the modal container
var exit = document.querySelectorAll('.exit');

exit.forEach(button => button.addEventListener('click', function() {
var x,i;
x=document.querySelectorAll('.exitbox');
for(i=0; i<x.length; i++){
  x[i].style.display="block";
}
}));

//when user clicks on the yes button it will exits the app from the screen
var yes = document.querySelectorAll('.yes');

yes.forEach(button => button.addEventListener('click', function() {
var x,i;
x=document.querySelectorAll('.exitbox');
for(i=0; i<x.length; i++){
  x[i].style.display="none";
  document.querySelector('.otherscreen').style.display="none";
  document.querySelector('.smalllid').style.display="none";
    audiolist.pause();
  audiolist.currentTime = 0;
    pic2.style.animation="linear";
  audioplayer.innerHTML = "<i class='fas fa-play'></i>";
  document.querySelector('.topicon').style.display="inline-flex";
}
}));

//no button it will stays in the same music screen when user clicks
var no = document.querySelectorAll('.No');

no.forEach(button => button.addEventListener('click', function () {
  var x,i;
  x=document.querySelectorAll('.exitbox');
  for(i=0; i<x.length; i++){
    x[i].style.display="none";
  }
}));

//animation when the down icon is clicked it will show grow animation 
document.querySelector('.navbar').style.animation="slide-up ease .5s";

bottomplay.style.animation="grow ease 1.5s";

//music list and audio for each song

var audio1,audio2,audio3,audio4,audio5,audio6;

var play1,play2,play3,play4,play5,play6;

audio1 = document.querySelector('#audio1');
audio2 = document.querySelector('#audio2');
audio3 = document.querySelector('#audio3');
audio4 = document.querySelector('#audio4');
audio5 = document.querySelector('#audio5');
audio6 = document.querySelector('#audio6');

play1 = document.querySelector('#play1');
play2 = document.querySelector('#play2');
play3 = document.querySelector('#play3');
play4 = document.querySelector('#play4');
play5 = document.querySelector('#play5');
play6 = document.querySelector('#play6');

play1.addEventListener('click', () => {
if(audio1.paused){
  play1.innerHTML = '<i class="fas fa-pause"></i>'
  audio1.play(); 
  audio2.pause();
  audio3.pause();
  audio4.pause();
  audio5.pause();
  audio6.pause();
}else{
  audio1.pause();
  play1.innerHTML = '<i class="fas fa-play"></i>'
}
});

play2.addEventListener('click', () => {
  if(audio2.paused){
    audio2.play();
    play2.innerHTML = '<i class="fas fa-pause"></i>'
    audio1.pause();
    audio3.pause();
    audio4.pause();
    audio5.pause();
    audio6.pause();
  }else{
    audio2.pause();
    play2.innerHTML = '<i class="fas fa-play"></i>'
  }
  });

  play3.addEventListener('click', () => {
    if(audio3.paused){
      play3.innerHTML = '<i class="fas fa-pause"></i>'
      audio3.play();
      audio2.pause();
      audio1.pause();
      audio4.pause();
      audio5.pause();
      audio6.pause();
    }else{
      audio3.pause();
      play3.innerHTML = '<i class="fas fa-play"></i>'
    }
    });

    play4.addEventListener('click', () => {
      if(audio4.paused){
        play4.innerHTML = '<i class="fas fa-pause"></i>'
        audio4.play();
        audio2.pause();
        audio3.pause();
        audio1.pause();
        audio5.pause();
        audio6.pause();
      }else{
        audio4.pause();
        play4.innerHTML = '<i class="fas fa-play"></i>'
      }
      });

      play5.addEventListener('click', () => {
        if(audio5.paused){
          play5.innerHTML = '<i class="fas fa-pause"></i>'
          audio5.play();
          audio2.pause();
          audio3.pause();
          audio4.pause();
          audio1.pause();
          audio6.pause();
        }else{
          audio5.pause();
          play5.innerHTML = '<i class="fas fa-play"></i>'
        }
        });

        play6.addEventListener('click', () => {
          if(audio6.paused){
            play6.innerHTML = '<i class="fas fa-pause"></i>'
            audio6.play();
            audio2.pause();
            audio3.pause();
            audio4.pause();
            audio5.pause();
            audio1.pause();
          }else{
            audio6.pause();
            play6.innerHTML = '<i class="fas fa-play"></i>'
          }
          });
