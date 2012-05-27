var RETRY_COUNT = 5;
var count = 0;

var timer = function() {
	if (count < RETRY_COUNT) {
		window.setTimeout(draw, 1000 * (count + 1));
	}
}

var draw = function() {
	var $document = $(document);
	if ($("#canvas_frame").length > 0) {
		$document = $("#canvas_frame").contents();
	}

	var $ol = $document.find("#gbg > ol,#gbvg > ol");
	if ($ol.length == 0) {
		timer();
	} else {
		$document.find("#gbmpas > div:not(.gbp0) > a").each(function() {
			var $a = $(this);
			var href = $a.attr("href");
			var name = $a.find("span.gbps3").text();
			$ol.append("<li class='gbt' style='padding:0px 5px'><a href='" + href + "' class='gbgt'>" + name + "</a></li>");
		});
	}
};

timer();