var locked = false; // Determines if the Navigation Button is locked. False denotes locked !!
var NavState = false; // Navbar Status. False denotes closed !!

window.addEventListener('DOMContentLoaded', () => {
// timer();

})

function active(svg) {

    if(!window.locked) {

        window.locked = true;
        svg.classList.toggle('active');

        console.log(window.NavState)
        
        if(window.NavState) {
            document.getElementById("navbar").style.left= "5px";
            window.NavState = false; // Denotes NavBar is closed
        } else {
            document.getElementById("navbar").style.left= "-90px";
            window.NavState = true;
        }

        setTimeout(unlock, 400);
    }
}
function unlock () {
    window.locked = false;
}


function timer() {
    var countDownDate = new Date();
    countDownDate.setDate(countDownDate.getDate() + 30);
    countDownDate.getTime();

    var x = setInterval(async function () {

      var now = new Date().getTime();
      var distance = countDownDate - now;

      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      
      if (distance > 0) {
        document.getElementsByClassName("shadow-days")[1].innerHTML = `${days}<br>Days`;
        document.getElementsByClassName("shadow-hours")[1].innerHTML = `${hours}<br>Hour`
        document.getElementsByClassName("shadow-minutes")[1].innerHTML = `${minutes}<br>Mins`
        document.getElementsByClassName("shadow-seconds")[1].innerHTML = `${seconds}<br>Secs`

        // for(var i = seconds; i >= 1; i--){
        //   document.getElementsByClassName("shadow-seconds")[1].innerHTML = `${i}<br>Secs`
        //   await new Promise(r => setTimeout(r, 1000));
        // }
      }
      else {
        $("div[name='seconds']").html("-");
        $("div[name='minutes']").html("-");
        $("div[name='hours']").html("-");
        $("div[name='days']").html("-");
      }

    }, 500);
}


// function lol () {
//   const test
// }