$(window).on('load', function() {
    $(".header").show();
    $(".page-footer").show();
    $("#nav-cont").show();
    $(".loader").fadeOut("slow");
    $(".page-container").show();
});

function upsbar() {
    var scroll = $(document).scrollTop();
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (scroll / height) * 100;
    $("#scrollbar").css("width", scrolled + '%');
}

async function typewriter(sentence, eleRef, delay = 100) {
  const letters = sentence.split("");
  let i = 0;
  while(i < letters.length) {
    await waitForMs(delay);
    $(eleRef).append(letters[i]);
    i++
  }
  return;
}

function waitForMs(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

function chsurl(sn) {
    if (sn == "twitter") {
        window.open("https://www.twitter.com/naveednilawfar", "_blank")
    } else if (sn == "github") {
        window.open("https://github.com/naveednilawfar", "_blank")
    } else if (sn == "codepen") {
        window.open("https://codepen.io/naveednilawfar", "_blank")
    } else if (sn == "replit") {
        window.open("https://replit.com/@naveednilawfar", "_blank")
    } else if (sn == "home") {
        window.open("https://naveednilawfar.github.io")
    } else {
        console.log("Sorry an internel error occured")
    }
}

function MENU() {
    $("#nav-cont").css("width", "100%");
}

function MENUC() {
    $("#nav-cont").css("width", "0%");
}

window.onscroll = upsbar;
window.onload = upsbar;

/*navigator.clipboard.writeText("TEXT");*/