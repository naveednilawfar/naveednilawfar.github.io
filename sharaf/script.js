$(document).ready(function () {
    M.AutoInit();
    $(".loader").fadeOut("slow");
    suprise();
});

async function typewriter(sentence, eleRef, delay = 100) {
    $("#typeffs").trigger('play');
    await waitForMs(100);
    const letters = sentence.split("");
    let i = 0;
    while(i < letters.length) {
      await waitForMs(delay);
      $(eleRef).append(letters[i]);
      i++
    }
    $("#typeffs").trigger('pause');
    return;
}

async function suprise() {
    await waitForMs(5000);
    await typewriter("Happy Birthday Sharaf", "#greeting");
    $("body").removeClass("yellow accent-2");
    $("#greeting").fadeOut("slow");
    await waitForMs(500);
    $(".pagecont").fadeIn("slow");
    $("#sharafa").trigger("play");
    await waitForMs(65000);
    $("#sharafa").trigger("pause");
    next();
}

async function next() {
    $(".pagecont").css("animation", "rotate-center 1s linear infinite both");
    await waitForMs(1500);
    $(".pagecont").css("animation", "rotate-center 0.5s linear infinite both");
    await waitForMs(500);
    $(".pagecont").fadeOut("slow");
    await waitForMs(600);
    $(".pagecont").css("animation", "wipe-enter 1s");
    $("#exit").append("By Naveed");
    $("#exit").css("animation", "text-focus-in 1s cubic-bezier(0.550, 0.085, 0.680, 0.530) both");
    await waitForMs(1500);
    $("#exit").css("animation", "text-blur-out 1.2s cubic-bezier(0.550, 0.085, 0.680, 0.530) both");
}

function waitForMs(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}