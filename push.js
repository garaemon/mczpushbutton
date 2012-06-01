$(function() {
  var REGIONS = {
    kanako: [
      [0.287, 0.491],
      [0.398, 0.657]
    ],
    reni: [
      [0.495, 0431],
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
  $(".push").each(function(i) {
    $(this).click(function(e) {
      var w = $(this).width();
      var h = $(this).height();
      var x = e.pageX - $(this).position().left;
      var y = e.pageY - $(this).position().top;
      var rx = x / w;
      var ry = y / h;
      var region = REGIONS[$(this).attr("id")];
      if ((region[0][0] < rx && region[0][1] < ry)
          && (region[1][0] > rx && region[1][1] > ry)) {
        alert($(this).attr("id"));
      }
      console.log(rx + ", " + ry);
    });
  });
});