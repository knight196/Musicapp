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
    name:'Cool by tobu.mp3',
    title:'Tobu',
    clipArt:'eveninggrass.jpg',
    images:'./images/eveninggrass.jpg'
  },

  Music2 ={
    musicFile : 'Audio/kiss the rain.mp3',
    musicName: 'Yiruma Kiss the rain',
    musicPic:'images/grass.jpg',
    name:'kiss the rain.mp3',
    title:'kiss the rain',
    clipArt:'grass.jpg',
    images:'./images/grass.jpg'
  },
  Music3 ={
    musicFile: 'Audio/Joe Hisaishi - Summer.mp3',
    musicName: 'Joe Hisaishi Summer',
    musicPic:'images/grass2.jpg',
    name:'Joe Hisaishi - Summer.mp3',
    title:'Summer',
    clipArt:'grass2.jpg',
    images:'./images/grass2.jpg'
  },

  Music4 ={
    musicFile : 'Audio/relax-paino.mp3',
    musicName: 'Relax piano N005',
    musicPic:'images/sakura.jpg',
    name:'relax-paino.mp3',
    title:'relax-piano',
    clipArt:'sakura.jpg',
    images:'./images/sakura.jpg'
  },
  Music5 ={
    musicFile: 'Audio/Yiruma - Maybe.mp3',
    musicName: 'Yiruma - Maybe',
    musicPic:'images/oceans.jpg',
    name:'Yiruma - Maybe.mp3',
    title:'Maybe',
    clipArt:'oceans.jpg',
    images:'./images/oceans.jpg'
  },

  Music6 ={
    musicFile : 'Audio/an-avenue.mp3',
    musicName: 'Tsunenori An avenue',
    musicPic:'images/plainland.jpg',
    name:'an-avenue.mp3',
    title:'An-Avenue',
    clipArt:'plainland.jpg',
    images:'./images/plainland.jpg'
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
  document.querySelector('.otherscreen').style.animation ="grow 1s ease";
});


bottomcontainer.addEventListener('click', () => {
bottomcontainer.classList.toggle('show');
document.querySelector('.otherscreen').style.display="none";
document.querySelector('.smalllid').style.display ="block";
});

var musicicon = document.querySelector('.fa-music');

musicicon.addEventListener('click', () => {
document.querySelector('.smalllid').style.display="block";
  document.querySelector('.smalllid').style.animation ="grow 1s ease";
document.querySelector('.topicon').style.display="none";
});

var home = document.querySelectorAll('#home');

home.forEach(button => button.addEventListener('click', () => {
  document.querySelector('.smalllid').style.display="none";
  document.querySelector('.otherscreen').style.display="none";
  document.querySelector('.topicon').style.display="inline-flex";
  audiolist.pause();
  audiolist.currentTime = 0;
  pic2.style.animation="linear";
audioplayer.innerHTML = "<i class='fas fa-play'></i>";
}));

//square button for exiting from the music player which takes the user to the home screen
var homeclose = document.querySelectorAll('.closemusic');

homeclose.forEach(button => button.addEventListener('click', function() {
  document.querySelector('.smalllid').style.display="none";
document.querySelector('.otherscreen').style.display="none";
document.querySelector('.topicon').style.display="inline-flex";
audiolist.pause();
audiolist.currentTime = 0;
pic2.style.animation="linear";
audioplayer.innerHTML = "<i class='fas fa-play'></i>";
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
  document.querySelector('.topicon').style.display="inline-flex";
  audiolist.pause();
  audiolist.currentTime = 0;
  pic2.style.animation="linear";
  audioplayer.innerHTML = "<i class='fas fa-play'></i>";
}
}));

//no button it will stay in the same music screen when user clicks
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



  var thumbsup = document.querySelector('.fa-thumbs-up');
  var thumbsup2 = document.querySelector('.fa-thumbs-up');

  thumbsup.addEventListener('click', () => {
 thumbsup2.classList.toggle('show');
      thumbsup2.style.transition="all .5s";
  });


//for music play functionality

//changing songs data

function loadSong(songlist) {
    songname.textContent = songlist.musicName;
    audiolist.src = "Audio/"+songlist.name;
    img2.src = "images/"+songlist.clipArt;
    pic2.src = "images/"+songlist.clipArt;
   bottomimg.src = "images/" + songlist.clipArt;
    bottomsong.textContent = songlist.musicName;
}


//Coding for Music Lists

let musicList = document.querySelector('.musics-ul').children;   
let li = document.querySelectorAll('li');

for (let i = 0; i < musicList.length; i++) {

    musicList[i].textContent = songlist[i].title;
    musicList[i].setAttribute('id',i);

   const img = document.createElement('IMG');
   img.src=songlist[i].images;
   li[i].appendChild(img);

    musicList[i].addEventListener('click', function(){
        loadSong(songlist[this.id]);
        pic2.style.animation ="spin 4s linear infinite";
       audioplayer.innerHTML = '<i class="fas fa-pause"></i>';
       songname.style.animation = "scroll-left 15s linear infinite";
       thirdplay.innerHTML = '<i class="fas fa-pause"></i>';
       audiolist.play();
    })
    
}
