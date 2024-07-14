$(".open-nav").click(function () {
  $("#leftMenu").animate({ width: "250px" }, 500);
  $("#home .content").animate({ marginLeft: "250px" }, 500);
});

$("#closeNav").click(function () {
  $("#leftMenu").animate({ width: "0px" }, 500);
  $("#home .content").animate({ marginLeft: "0px" }, 500);
});

$("#leftMenu a").click(function () {
  const sectionSelector = $(this).attr("href");
  const sectionOffsetTop = $(sectionSelector).offset().top;
  console.log(sectionOffsetTop);
  $("html, body").animate({ scrollTop: sectionOffsetTop }, 2000);
});

$(".slide h3").click(function (e) {
  $(".slide div").not($(e.target).next()).slideUp(500);
  $(e.target).next().slideToggle(500);
});

$(document).ready(function () {
  countDownToTime("26 march 2026 00:30:00");
});

function countDownToTime(toTime) {
  let futureDate = new Date(toTime).getTime() / 1000;
  let currentDate = new Date().getTime() / 1000;
  let timeDifference = futureDate - currentDate;
  let days = Math.floor(timeDifference / (3600 * 24));
  let hours = Math.floor((timeDifference - days * (24 * 60 * 60)) / 3600);
  let minutes = Math.floor(
    (timeDifference - days * (24 * 60 * 60) - hours * 3600) / 60
  );
  let seconds = Math.floor(
    timeDifference - days * (24 * 60 * 60) - hours * 3600 - minutes * 60
  );
  $(".day").html(`${days} D`);
  $(".hour").html(`${hours} h`);
  $(".minuets").html(`${minutes} m`);
  $(".seconds").html(`${seconds} s`);
  setInterval(function () {
    countDownToTime(toTime);
  }, 1000);
}
const maxVal = 100;
$("textarea").keyup(function (e) {
  let length = e.target.value.length;
  if (length < maxVal) {
    $("#chars").text(maxVal - length);
    $(".btn").removeClass("disabled");
  } else {
    $("#chars").text("your available character finished");
    $(".btn").addClass("disabled");
  }
});
