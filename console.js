$(document).ready(function() {
	// Make a custom log for mobile devices
	if (isMobile()) {
		$("body").append('<div id="CBTN" style="width: 30px;height:20px;background-color: #000;position:fixed;top:0; left:0;z-index: 999999;color: #fff;text-align: center;">C</div>');


		$("body").append($('<ul id="console-log" style="display: none;z-index: 999999; direction: ltr;position:fixed; top:0; left:0; width:100%; list-style-type:none; margin:0; padding:0; padding-top:10px; font-size:10px; background:rgba(0,0,0,0.85); color:white; font-family: monospace;"><li>Mobile console.log</li></ul>'));
		$('#CBTN').on('click', function(event) {
			event.preventDefault();
			$("#console-log").show();
			$(this).hide();
		});
		$('#console-log').on('click', function(event) {
			console.info('asfas');
			event.preventDefault();
			$("#CBTN").show();
			$(this).hide();
		});

		console.log = function(message, message2) {
			console.info(message, message2);

			if (message2) {
				if (typeof message2 == 'object') {
					$("#console-log").append($('<li style="margin-left:none;word-wrap: break-word;">' + message + JSON.stringify(message2) + '</li>'));
				} else {
					$("#console-log").append($('<li style="margin-left:none;word-wrap: break-word;">' + message + message2 + '</li>'));
				}
			} else {
				$("#console-log").append($('<li style="margin-left:none;word-wrap: break-word;">' + message + '</li>'));
			}
		}
	}
});

function isMobile() {
	var useragent = navigator.userAgent;
	return useragent.indexOf('Android') != -1 || useragent.indexOf('iPhone') != -1 || useragent.indexOf('iPod') != -1 || useragent.indexOf('iPad') != -1;
}