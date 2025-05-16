$(window).on("load", function () {
  $("button").click(function () {
    $("#" + this.id).toggleClass("active");
    $("#" + this.id + "_content").toggle(this.id);
    $('html, body').animate({scrollTop: '0px'}, 100);
  });
});
