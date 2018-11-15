/* Let's Begin Js Code */

window.addEventListener('keydown', function(e) {

// Get Audio from HTML file
const audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`);
const key = document.querySelector(`.key[data-key = "${e.keyCode}"]`);

//playing my audio
audio.play();

if(!audio) {
    return false;
}

// add class active to each key elemnts
key.classList.add('active');
});

function removeClass() {
    /*if(e.propertyName !== 'transform') {
        return false;
    }*/
  this.classList.remove('active');
}

// Get all key elements from HTML file
const keys = document.querySelectorAll('.key');

// remove class
keys.forEach(
    key => key.addEventListener('transitionend', removeClass)
    );