/*
	UI JS
	--------------

	By Johan, 2014.
	For GBG Startup Hack
 */

/*
	Tab switcher. Custom as fuck
 */
$.fn.tabs = function(options) {

	function applyClasses($elements, filter) {
		$elements.removeClass("out in").not(filter).addClass("out").filter(filter).addClass("in")
	}

	function idToDataAttr(id) {
		return "[data-id='"+id.slice(1)+"']"
	}

	function switchHeadings($parent, target) {
		$parent.find("h1").hide().end().filter(target).find("h1").show()
	}

	return this.each(function() {
		var $root = $(".the-event"),
			$panes = $(options.panes),
			$this = $(this),
			$tabs = $root.find("a"),
			$images = $root.find("img")

		$panes.not(":first").add($images.last()).addClass("out")
		$panes.not(":first").find("h1").hide()
		$tabs.first().addClass("current")

		$tabs.on("click", function(evt) {
			evt.preventDefault()
			var target = this.hash
			applyClasses($panes, target)
			applyClasses($images, idToDataAttr(target))
			switchHeadings($panes, target)

			/* use dark mode */
			$this.toggleClass("dark", target === "#the-party")

			$tabs.removeClass("current").filter(this).addClass("current")
		})


	})
}

$(function() {

	// set up tabs
	$(".tab-switch").tabs({panes: ".the-event > section"})

	// set up gallery
	$(".location-gallery a").magnificPopup({
		type: "image",
		gallery: {
			enabled: true,
			tCounter: ""
		}
	})

})
