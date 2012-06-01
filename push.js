$(function() {
  //var BASE_URL = "./mp3/";
  var BASE_URL = "http://garaemon.net/mcz/mp3/";
  var FILES = {
    kanako: ["kanako0.mp3", "kanako1.mp3", "kanako2.mp3", "kanako3.mp3"],
    reni: ["reni0.mp3", "reni1.mp3", "reni2.mp3", "reni3.mp3"],
    shiori: ["shiori0.mp3", "shiori1.mp3", "shiori2.mp3", "shiori3.mp3"],
    ayaka: ["ayaka0.mp3", "ayaka1.mp3", "ayaka2.mp3", "ayaka3.mp3"],
    momoka: ["momoka0.mp3", "momoka1.mp3", "momoka2.mp3", "momoka3.mp3"],
  };
  var REGIONS = {
    kanako: [
      [0.287, 0.491],
      [0.398, 0.657]
    ],
    reni: [
      [0.495, 0.431],
      [0.624, 0.695]
    ],
    ayaka: [
      [0.524, 0.482],
      [0.635, 0.695]
    ],
    shiori: [
      [0.4, 0.4],
      [0.53, 0.61]
    ],
    momoka: [
      [0.56, 0.48],
      [0.675, 0.663]
    ]
  };
  for (var key in FILES) {
    var files = FILES[key];
    for (var i = 0; i < files.length; i++) {
      $("#images").append('<audio preload="auto" id="' + files[i] + '">'
                          + '<source src="' + BASE_URL + files[i] + '" type="audio/mp3">'
                          + "</audio>");
    }
  }
  
  $(".push").each(function(i) {
    $(this).click(function(e) {
      var w = $(this).width();
      var h = $(this).height();
      var x = e.pageX - $(this).position().left;
      var y = e.pageY - $(this).position().top;
      var rx = x / w;
      var ry = y / h;
      var region = REGIONS[$(this).attr("id")];
      var files = FILES[$(this).attr("id")];
      var file_num = files.length;
      if ((region[0][0] < rx && region[0][1] < ry)
          && (region[1][0] > rx && region[1][1] > ry)) {
        //alert($(this).attr("id"));
        var target_file = files[Math.floor(Math.random() * file_num)]
        document.getElementById(target_file).play();
      }
    });
  });
});
