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
		$parent.find("h1").addClass('event-hidden').end().filter(target).find("h1").removeClass('event-hidden')
	}

	return this.each(function() {
		var $root = $(".the-event"),
			$panes = $(options.panes),
			$this = $(this),
			$tabs = $root.find("a"),
			$images = $root.find("img")

		$this.data("tabs", true)

		$panes.not(":first").add($images.last()).addClass("out")
		$panes.not(":first").find("h1").addClass('event-hidden')
		$tabs.first().addClass("current")

		$tabs.on("click", function(evt) {
			evt.preventDefault()
			var target = this.hash
			applyClasses($panes, target)
			applyClasses($images, idToDataAttr(target))
			switchHeadings($panes, target)

			/* use dark mode */
			$this.toggleClass("dark", target === "#the-party")

      var theThingWeClickedOn = this;
			$tabs.removeClass("current").filter(function() {
        return this.href === theThingWeClickedOn.href;
      }).addClass("current")
		})


	})
}

function setUpTabs() {
	var $el = $(".tab-switch")

	if($el.data("tabs")) return;
	$el.tabs({panes: ".the-event > section"})
}

function hideVideo() {
	$("#meetup-video").removeClass("in").hide();
	$("[role='banner'] .reveal").removeClass("out");
	player.api('unload');
}

$(function() {

	var video = $("#meetup-video-player")[0]
			player = $f(video);

	player.addEvent('ready', function() {
    player.addEvent('finish', hideVideo);
	});

	$(document).on("keyup", function(evt) {
		if(evt.keyCode === 27) hideVideo();
	})

	$("#watch-video").on("click", function() {
		$("#meetup-video").addClass("in").show();
		$("[role='banner'] .reveal").addClass("out");
		player.api('play');
	});

	$("#meetup-video .close").on("click", function(evt) {
		evt.preventDefault();
		hideVideo();
	});

	// set up tabs
	if(window.matchMedia) {
		var check = window.matchMedia("(min-width: 50em)")

		check.addListener(setUpTabs)

		if(check.matches){
			setUpTabs()
		}
	}
	else {
		setUpTabs()
	}

	// set up gallery
	$(".location-gallery a").magnificPopup({
		type: "image",
		zoom: {
			enabled: true
		},
		gallery: {
			enabled: true,
			tCounter: ""
		}
	})

	// smoothscroll
	$(".smooth").smoothScroll({
		speed: 1000
	})
})

/*
 * Vault button, epic as fuck
 */
$('#vault-button').click(function(e) {
  if (!$(this).data('inABankVault')) {
    $('p, h1, h2').append('<span class="in-a-bank-vault"> ...in a bank vault.</span>');
    $(this).data('inABankVault', true);
  } else {
    $('.in-a-bank-vault').remove();
    $(this).data('inABankVault', false);
  }
});
