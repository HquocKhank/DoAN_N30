/*!
 * Font Awesome Free 6.0.0-beta2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 */
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
		typeof define === 'function' && define.amd ? define(factory) :
			(global['fontawesome-free-shims'] = factory());
}(this, (function () {
	'use strict';

	var _WINDOW = {};
	var _DOCUMENT = {};

	try {
		if (typeof window !== 'undefined') {
			_WINDOW = window;
		}
		if (typeof document !== 'undefined') {
			_DOCUMENT = document;
		}
	}
	catch (e) {
	}

	var _ref = _WINDOW.navigator || {},
		_ref$userAgent = _ref.userAgent,
		userAgent = _ref$userAgent === void 0 ? '' : _ref$userAgent;
	var WINDOW = _WINDOW;
	var DOCUMENT = _DOCUMENT;
	var IS_BROWSER = !!WINDOW.document;
	var IS_DOM = !!DOCUMENT.documentElement && !!DOCUMENT.head && typeof DOCUMENT.addEventListener === 'function' && typeof DOCUMENT.createElement === 'function';
	var IS_IE = ~userAgent.indexOf('MSIE') || ~userAgent.indexOf('Trident/');

	var NAMESPACE_IDENTIFIER = '___FONT_AWESOME___';
	var PRODUCTION = function () {
		try {
			return process.env.NODE_ENV === 'production';
		}
		catch (e) {
			return false;
		}
	}();

	function bunker(fn) {
		try {
			for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
				args[_key - 1] = arguments[_key];
			}

			fn.apply(void 0, args);
		}
		catch (e) {
			if (!PRODUCTION) {
				throw e;
			}
		}
	}

	var w = WINDOW || {};
	if (!w[NAMESPACE_IDENTIFIER]) {
		w[NAMESPACE_IDENTIFIER] = {};
	}
	if (!w[NAMESPACE_IDENTIFIER].styles) {
		w[NAMESPACE_IDENTIFIER].styles = {};
	}
	if (!w[NAMESPACE_IDENTIFIER].hooks) {
		w[NAMESPACE_IDENTIFIER].hooks = {};
	}
	if (!w[NAMESPACE_IDENTIFIER].shims) {
		w[NAMESPACE_IDENTIFIER].shims = [];
	}
	var namespace = w[NAMESPACE_IDENTIFIER];

	var shims = [["glass", null, "martini-glass-empty"], ["envelope-o", "far", "envelope"], ["star-o", "far", "star"], ["remove", null, "xmark"], ["close", null, "xmark"], ["gear", null, "gear"], ["trash-o", "far", "trash-can"], ["home", null, "house"], ["file-o", "far", "file"], ["clock-o", "far", "clock"], ["arrow-circle-o-down", "far", "circle-down"], ["arrow-circle-o-up", "far", "circle-up"], ["play-circle-o", "far", "circle-play"], ["repeat", null, "arrow-rotate-right"], ["rotate-right", null, "arrow-rotate-right"], ["refresh", null, "arrows-rotate"], ["list-alt", "far", "rectangle-list"], ["dedent", null, "outdent"], ["video-camera", null, "video"], ["picture-o", "far", "image"], ["photo", "far", "image"], ["image", "far", "image"], ["map-marker", null, "location-dot"], ["pencil-square-o", "far", "pen-to-square"], ["edit", "far", "pen-to-square"], ["share-square-o", "far", "share-from-square"], ["check-square-o", "far", "square-check"], ["arrows", null, "up-down-left-right"], ["times-circle-o", "far", "circle-xmark"], ["check-circle-o", "far", "circle-check"], ["mail-forward", null, "share"], ["expand", null, "up-right-and-down-left-from-center"], ["compress", null, "down-left-and-up-right-to-center"], ["eye", "far", null], ["eye-slash", "far", null], ["warning", null, "triangle-exclamation"], ["calendar", null, "calendar-days"], ["arrows-v", null, "up-down"], ["arrows-h", null, "left-right"], ["bar-chart", "far", "chart-bar"], ["bar-chart-o", "far", "chart-bar"], ["twitter-square", "fab", null], ["facebook-square", "fab", null], ["gears", null, "gears"], ["thumbs-o-up", "far", "thumbs-up"], ["thumbs-o-down", "far", "thumbs-down"], ["heart-o", "far", "heart"], ["sign-out", null, "right-from-bracket"], ["linkedin-square", "fab", "linkedin"], ["thumb-tack", null, "thumbtack"], ["external-link", null, "up-right-from-square"], ["sign-in", null, "right-to-bracket"], ["github-square", "fab", null], ["lemon-o", "far", "lemon"], ["square-o", "far", "square"], ["bookmark-o", "far", "bookmark"], ["twitter", "fab", null], ["facebook", "fab", "facebook-f"], ["facebook-f", "fab", "facebook-f"], ["github", "fab", null], ["credit-card", "far", null], ["feed", null, "rss"], ["hdd-o", "far", "hard-drive"], ["hand-o-right", "far", "hand-point-right"], ["hand-o-left", "far", "hand-point-left"], ["hand-o-up", "far", "hand-point-up"], ["hand-o-down", "far", "hand-point-down"], ["arrows-alt", null, "maximize"], ["group", null, "users"], ["chain", null, "link"], ["scissors", null, "scissors"], ["cut", null, "scissors"], ["files-o", "far", "copy"], ["floppy-o", "far", "floppy-disk"], ["save", "far", "floppy-disk"], ["navicon", null, "bars"], ["reorder", null, "bars"], ["pinterest", "fab", null], ["pinterest-square", "fab", null], ["google-plus-square", "fab", null], ["google-plus", "fab", "google-plus-g"], ["money", "far", "money-bill-1"], ["unsorted", null, "sort"], ["sort-desc", null, "sort-down"], ["sort-asc", null, "sort-up"], ["linkedin", "fab", "linkedin-in"], ["rotate-left", null, "arrow-rotate-left"], ["legal", null, "gavel"], ["dashboard", null, "gauge-simple"], ["comment-o", "far", "comment"], ["comments-o", "far", "comments"], ["flash", null, "bolt"], ["clipboard", "far", null], ["paste", "far", "clipboard"], ["lightbulb-o", "far", "lightbulb"], ["exchange", null, "right-left"], ["cloud-download", null, "cloud-arrow-down"], ["cloud-upload", null, "cloud-arrow-up"], ["bell-o", "far", "bell"], ["cutlery", null, "utensils"], ["file-text-o", "far", "file-lines"], ["building-o", "far", "building"], ["hospital-o", "far", "hospital"], ["tablet", null, "tablet-screen-button"], ["mobile", null, "mobile-screen-button"], ["mobile-phone", null, "mobile-screen-button"], ["circle-o", "far", "circle"], ["mail-reply", null, "reply"], ["github-alt", "fab", null], ["folder-o", "far", "folder"], ["folder-open-o", "far", "folder-open"], ["smile-o", "far", "face-smile"], ["frown-o", "far", "face-frown"], ["meh-o", "far", "face-meh"], ["keyboard-o", "far", "keyboard"], ["flag-o", "far", "flag"], ["mail-reply-all", null, "reply-all"], ["star-half-o", "far", "star-half"], ["star-half-empty", "far", "star-half"], ["star-half-full", "far", "star-half"], ["code-fork", null, "code-branch"], ["chain-broken", null, "link-slash"], ["unlink", null, "link-slash"], ["shield", null, "shield-blank"], ["calendar-o", "far", "calendar"], ["maxcdn", "fab", null], ["html5", "fab", null], ["css3", "fab", null], ["ticket", null, "ticket-simple"], ["minus-square-o", "far", "square-minus"], ["level-up", null, "turn-up"], ["level-down", null, "turn-down"], ["pencil-square", null, "square-pen"], ["external-link-square", null, "square-up-right"], ["compass", "far", null], ["caret-square-o-down", "far", "square-caret-down"], ["toggle-down", "far", "square-caret-down"], ["caret-square-o-up", "far", "square-caret-up"], ["toggle-up", "far", "square-caret-up"], ["caret-square-o-right", "far", "square-caret-right"], ["toggle-right", "far", "square-caret-right"], ["eur", null, "euro-sign"], ["euro", null, "euro-sign"], ["gbp", null, "sterling-sign"], ["usd", null, "dollar-sign"], ["dollar", null, "dollar-sign"], ["inr", null, "rupee-sign"], ["rupee", null, "rupee-sign"], ["jpy", null, "yen-sign"], ["cny", null, "yen-sign"], ["rmb", null, "yen-sign"], ["yen", null, "yen-sign"], ["rub", null, "ruble-sign"], ["ruble", null, "ruble-sign"], ["rouble", null, "ruble-sign"], ["krw", null, "won-sign"], ["won", null, "won-sign"], ["btc", "fab", null], ["bitcoin", "fab", "btc"], ["file-text", null, "file-lines"], ["sort-alpha-asc", null, "arrow-down-a-z"], ["sort-alpha-desc", null, "arrow-down-z-a"], ["sort-amount-asc", null, "arrow-down-wide-short"], ["sort-amount-desc", null, "arrow-down-short-wide"], ["sort-numeric-asc", null, "arrow-down-1-9"], ["sort-numeric-desc", null, "arrow-down-9-1"], ["youtube-square", "fab", null], ["youtube", "fab", null], ["xing", "fab", null], ["xing-square", "fab", null], ["youtube-play", "fab", "youtube"], ["dropbox", "fab", null], ["stack-overflow", "fab", null], ["instagram", "fab", null], ["flickr", "fab", null], ["adn", "fab", null], ["bitbucket", "fab", null], ["bitbucket-square", "fab", "bitbucket"], ["tumblr", "fab", null], ["tumblr-square", "fab", null], ["long-arrow-down", null, "down-long"], ["long-arrow-up", null, "up-long"], ["long-arrow-left", null, "left-long"], ["long-arrow-right", null, "right-long"], ["apple", "fab", null], ["windows", "fab", null], ["android", "fab", null], ["linux", "fab", null], ["dribbble", "fab", null], ["skype", "fab", null], ["foursquare", "fab", null], ["trello", "fab", null], ["gratipay", "fab", null], ["gittip", "fab", "gratipay"], ["sun-o", "far", "sun"], ["moon-o", "far", "moon"], ["vk", "fab", null], ["weibo", "fab", null], ["renren", "fab", null], ["pagelines", "fab", null], ["stack-exchange", "fab", null], ["arrow-circle-o-right", "far", "circle-right"], ["arrow-circle-o-left", "far", "circle-left"], ["caret-square-o-left", "far", "square-caret-left"], ["toggle-left", "far", "square-caret-left"], ["dot-circle-o", "far", "circle-dot"], ["vimeo-square", "fab", null], ["try", null, "lira-sign"], ["turkish-lira", null, "lira-sign"], ["plus-square-o", "far", "square-plus"], ["slack", "fab", null], ["wordpress", "fab", null], ["openid", "fab", null], ["institution", null, "bank"], ["bank", null, "bank"], ["mortar-board", null, "graduation-cap"], ["yahoo", "fab", null], ["google", "fab", null], ["reddit", "fab", null], ["reddit-square", "fab", null], ["stumbleupon-circle", "fab", null], ["stumbleupon", "fab", null], ["delicious", "fab", null], ["digg", "fab", null], ["pied-piper-pp", "fab", null], ["pied-piper-alt", "fab", null], ["drupal", "fab", null], ["joomla", "fab", null], ["spoon", null, "spoon"], ["behance", "fab", null], ["behance-square", "fab", null], ["steam", "fab", null], ["steam-square", "fab", null], ["automobile", null, "car"], ["cab", null, "taxi"], ["spotify", "fab", null], ["deviantart", "fab", null], ["soundcloud", "fab", null], ["file-pdf-o", "far", "file-pdf"], ["file-word-o", "far", "file-word"], ["file-excel-o", "far", "file-excel"], ["file-powerpoint-o", "far", "file-powerpoint"], ["file-image-o", "far", "file-image"], ["file-photo-o", "far", "file-image"], ["file-picture-o", "far", "file-image"], ["file-archive-o", "far", "file-zipper"], ["file-zip-o", "far", "file-zipper"], ["file-audio-o", "far", "file-audio"], ["file-sound-o", "far", "file-audio"], ["file-video-o", "far", "file-video"], ["file-movie-o", "far", "file-video"], ["file-code-o", "far", "file-code"], ["vine", "fab", null], ["codepen", "fab", null], ["jsfiddle", "fab", null], ["life-ring", "far", null], ["life-bouy", "far", "life-ring"], ["life-buoy", "far", "life-ring"], ["life-saver", "far", "life-ring"], ["support", "far", "life-ring"], ["circle-o-notch", null, "circle-notch"], ["rebel", "fab", null], ["ra", "fab", "rebel"], ["resistance", "fab", "rebel"], ["empire", "fab", null], ["ge", "fab", "empire"], ["git-square", "fab", null], ["git", "fab", null], ["hacker-news", "fab", null], ["y-combinator-square", "fab", "hacker-news"], ["yc-square", "fab", "hacker-news"], ["tencent-weibo", "fab", null], ["qq", "fab", null], ["weixin", "fab", null], ["wechat", "fab", "weixin"], ["send", null, "paper-plane"], ["paper-plane-o", "far", "paper-plane"], ["send-o", "far", "paper-plane"], ["circle-thin", "far", "circle"], ["header", null, "heading"], ["sliders", null, "sliders"], ["futbol-o", "far", "futbol"], ["soccer-ball-o", "far", "futbol"], ["slideshare", "fab", null], ["twitch", "fab", null], ["yelp", "fab", null], ["newspaper-o", "far", "newspaper"], ["paypal", "fab", null], ["google-wallet", "fab", null], ["cc-visa", "fab", null], ["cc-mastercard", "fab", null], ["cc-discover", "fab", null], ["cc-amex", "fab", null], ["cc-paypal", "fab", null], ["cc-stripe", "fab", null], ["bell-slash-o", "far", "bell-slash"], ["trash", null, "trash-can"], ["copyright", "far", null], ["eyedropper", null, "eye-dropper"], ["area-chart", null, "chart-area"], ["pie-chart", null, "chart-pie"], ["line-chart", null, "chart-line"], ["lastfm", "fab", null], ["lastfm-square", "fab", null], ["ioxhost", "fab", null], ["angellist", "fab", null], ["cc", "far", "closed-captioning"], ["ils", null, "shekel-sign"], ["shekel", null, "shekel-sign"], ["sheqel", null, "shekel-sign"], ["meanpath", "fab", "font-awesome"], ["buysellads", "fab", null], ["connectdevelop", "fab", null], ["dashcube", "fab", null], ["forumbee", "fab", null], ["leanpub", "fab", null], ["sellsy", "fab", null], ["shirtsinbulk", "fab", null], ["simplybuilt", "fab", null], ["skyatlas", "fab", null], ["diamond", "far", "gem"], ["intersex", null, "transgender"], ["transgender-alt", null, "transgender"], ["facebook-official", "fab", "facebook"], ["pinterest-p", "fab", null], ["whatsapp", "fab", null], ["hotel", null, "bed"], ["viacoin", "fab", null], ["medium", "fab", null], ["y-combinator", "fab", null], ["yc", "fab", "y-combinator"], ["optin-monster", "fab", null], ["opencart", "fab", null], ["expeditedssl", "fab", null], ["battery-4", null, "battery-full"], ["battery", null, "battery-full"], ["battery-3", null, "battery-three-quarters"], ["battery-2", null, "battery-half"], ["battery-1", null, "battery-quarter"], ["battery-0", null, "battery-empty"], ["object-group", "far", null], ["object-ungroup", "far", null], ["sticky-note-o", "far", "note-sticky"], ["cc-jcb", "fab", null], ["cc-diners-club", "fab", null], ["clone", "far", null], ["hourglass-o", "far", "hourglass"], ["hourglass-1", null, "hourglass-start"], ["hourglass-2", null, "hourglass"], ["hourglass-3", null, "hourglass-end"], ["hand-rock-o", "far", "hand-back-fist"], ["hand-grab-o", "far", "hand-back-fist"], ["hand-paper-o", "far", "hand"], ["hand-stop-o", "far", "hand"], ["hand-scissors-o", "far", "hand-scissors"], ["hand-lizard-o", "far", "hand-lizard"], ["hand-spock-o", "far", "hand-spock"], ["hand-pointer-o", "far", "hand-pointer"], ["hand-peace-o", "far", "hand-peace"], ["registered", "far", null], ["creative-commons", "fab", null], ["gg", "fab", null], ["gg-circle", "fab", null], ["tripadvisor", "fab", null], ["odnoklassniki", "fab", null], ["odnoklassniki-square", "fab", null], ["get-pocket", "fab", null], ["wikipedia-w", "fab", null], ["safari", "fab", null], ["chrome", "fab", null], ["firefox", "fab", null], ["opera", "fab", null], ["internet-explorer", "fab", null], ["television", null, "tv"], ["contao", "fab", null], ["500px", "fab", null], ["amazon", "fab", null], ["calendar-plus-o", "far", "calendar-plus"], ["calendar-minus-o", "far", "calendar-minus"], ["calendar-times-o", "far", "calendar-xmark"], ["calendar-check-o", "far", "calendar-check"], ["map-o", "far", "map"], ["commenting", null, "comment-dots"], ["commenting-o", "far", "comment-dots"], ["houzz", "fab", null], ["vimeo", "fab", "vimeo-v"], ["black-tie", "fab", null], ["fonticons", "fab", null], ["reddit-alien", "fab", null], ["edge", "fab", null], ["credit-card-alt", null, "credit-card"], ["codiepie", "fab", null], ["modx", "fab", null], ["fort-awesome", "fab", null], ["usb", "fab", null], ["product-hunt", "fab", null], ["mixcloud", "fab", null], ["scribd", "fab", null], ["pause-circle-o", "far", "circle-pause"], ["stop-circle-o", "far", "circle-stop"], ["bluetooth", "fab", null], ["bluetooth-b", "fab", null], ["gitlab", "fab", null], ["wpbeginner", "fab", null], ["wpforms", "fab", null], ["envira", "fab", null], ["wheelchair-alt", "fab", "accessible-icon"], ["question-circle-o", "far", "circle-question"], ["volume-control-phone", null, "phone-volume"], ["asl-interpreting", null, "hands-asl-interpreting"], ["deafness", null, "ear-deaf"], ["hard-of-hearing", null, "ear-deaf"], ["glide", "fab", null], ["glide-g", "fab", null], ["signing", null, "hands"], ["viadeo", "fab", null], ["viadeo-square", "fab", null], ["snapchat", "fab", null], ["snapchat-ghost", "fab", "snapchat"], ["snapchat-square", "fab", null], ["pied-piper", "fab", null], ["first-order", "fab", null], ["yoast", "fab", null], ["themeisle", "fab", null], ["google-plus-official", "fab", "google-plus"], ["google-plus-circle", "fab", "google-plus"], ["font-awesome", "fab", null], ["fa", "fab", "font-awesome"], ["handshake-o", "far", "handshake"], ["envelope-open-o", "far", "envelope-open"], ["linode", "fab", null], ["address-book-o", "far", "address-book"], ["vcard", null, "address-card"], ["address-card-o", "far", "address-card"], ["vcard-o", "far", "address-card"], ["user-circle-o", "far", "circle-user"], ["user-o", "far", "user"], ["id-badge", "far", null], ["drivers-license", null, "id-card"], ["id-card-o", "far", "id-card"], ["drivers-license-o", "far", "id-card"], ["quora", "fab", null], ["free-code-camp", "fab", null], ["telegram", "fab", null], ["thermometer-4", null, "temperature-full"], ["thermometer", null, "temperature-full"], ["thermometer-3", null, "temperature-three-quarters"], ["thermometer-2", null, "temperature-half"], ["thermometer-1", null, "temperature-quarter"], ["thermometer-0", null, "temperature-empty"], ["bathtub", null, "bath"], ["s15", null, "bath"], ["window-maximize", "far", null], ["window-restore", "far", null], ["times-rectangle", null, "rectangle-xmark"], ["window-close-o", "far", "rectangle-xmark"], ["times-rectangle-o", "far", "rectangle-xmark"], ["bandcamp", "fab", null], ["grav", "fab", null], ["etsy", "fab", null], ["imdb", "fab", null], ["ravelry", "fab", null], ["eercast", "fab", "sellcast"], ["snowflake-o", "far", "snowflake"], ["superpowers", "fab", null], ["wpexplorer", "fab", null], ["meetup", "fab", null]];
	bunker(function () {
		if (typeof namespace.hooks.addShims === 'function') {
			namespace.hooks.addShims(shims);
		}
		else {
			var _namespace$shims;

			(_namespace$shims = namespace.shims).push.apply(_namespace$shims, shims);
		}
	});

	return shims;

})));
