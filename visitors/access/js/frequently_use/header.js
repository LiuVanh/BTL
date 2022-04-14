// Start: scroll transparent on/off
$(window).on("scroll", function() {
  var height = $('header').height();
    if($(window).scrollTop() >  $('header').height()) {
        $("header").addClass("active");
    } else {
       $("header").removeClass("active");
    }
});
// End: scroll transparent on/off

function lightbox_open() {
  var lightBoxVideo = document.getElementById("wiacrn");
  document.getElementById('light').style.display = 'block';
  document.getElementById('fade').style.display = 'block';
  lightBoxVideo.play();
}

function lightbox_close() {
  var lightBoxVideo = document.getElementById("wiacrn");
  document.getElementById('light').style.display = 'none';
  document.getElementById('fade').style.display = 'none';
  lightBoxVideo.pause();
}