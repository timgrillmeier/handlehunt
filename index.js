let domains = [
	'com',
	'net',
	'org',
	'co',
	'io',
	'me',
	'ai',
	'app',
	'tech',
	'health',
	'agency',
	'media',
	'studio',
	'services',
];

let platforms = [
	['404','twitter','Twitter', 'https://twitter.com/', 'Account suspended'],
	['404','instagram','Instagram', 'https://www.instagram.com/'],
	['404','facebook','Facebook', 'https://www.facebook.com/'],
	// ['999','linkedin','LinkedIn', 'https://www.linkedin.com/company/'],
	['404','tiktok','TikTok', 'https://www.tiktok.com/@'],
	['404','youtube','YouTube', 'https://www.youtube.com/user/'],
	['404','pinterest','Pinterest', 'https://www.pinterest.com.au/'],
	//['200','reddit','Reddit u/', 'https://www.reddit.com/user/', 'Sorry, nobody on Reddit goes by that name.'],
	//['200','reddit','Reddit r/', 'https://www.reddit.com/r/',  'Sorry, there aren’t any communities on Reddit with that name.'],
	['404','quora','Quora', 'https://www.quora.com/profile/'],
	['404','dribbble','Dribbble', 'https://dribbble.com/'],
];

let svgs = [
	['dribbble','<svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 24 24" width="24" fill="currentColor"><path d="M10,0 C4.4794,0 0,4.4794 0,10 C0,15.5206 4.4794,20 10,20 C15.50976,20 20,15.5206 20,10 C20,4.4794 15.50976,0 10,0 Z M16.6052,4.60954 C17.79826,6.0629 18.5141,7.91758 18.5358,9.92408 C18.2538,9.86984 15.43384,9.29502 12.5922,9.65292 C12.52712,9.51194 12.47288,9.36008 12.40782,9.20824 C12.23428,8.7961 12.03904,8.3731 11.84382,7.9718 C14.98916,6.69198 16.42082,4.84816 16.6052,4.60954 Z M10,1.475054 C12.1692,1.475054 14.15402,2.2885 15.6616,3.62256 C15.50976,3.83948 14.21908,5.564 11.18222,6.70282 C9.78308,4.13232 8.2321,2.0282 7.9935,1.70282 C8.6334,1.550976 9.30586,1.475054 10,1.475054 Z M6.3666,2.27766 C6.59436,2.58134 8.1128,4.69632 9.53362,7.21258 C5.5423,8.27548 2.01736,8.25383331 1.637744,8.25383331 C2.19088,5.60738 3.98048,3.40564 6.3666,2.27766 Z M1.453362,10.01084 C1.453362,9.92408 1.453362,9.83732 1.453362,9.75054 C1.822126,9.76138 5.9653,9.81562 10.22776,8.5358 C10.47722,9.01302 10.70498,9.50108 10.9219,9.98916 C10.81344,10.0217 10.69414,10.05424 10.58568,10.08676 C6.18222,11.5076 3.83948,15.39046 3.64426,15.71584 C2.2885,14.20824 1.453362,12.20174 1.453362,10.01084 Z M10,18.54664 C8.02604,18.54664 6.2039,17.87418 4.76138,16.7462 C4.91324,16.43168 6.6486,13.0911 11.4642,11.40998 C11.4859,11.39914 11.49674,11.39914 11.51844,11.38828 C12.72234,14.50108 13.21042,17.11496 13.34056,17.86334 C12.3102,18.30802 11.18222,18.54664 10,18.54664 Z M14.7614,17.08244 C14.67462,16.56182 14.2191,14.06724 13.10196,10.99784 C15.78092,10.57484 18.12364,11.26898 18.41648,11.3666 C18.04772,13.74186 16.68112,15.79176 14.7614,17.08244 Z"></path></svg>'],
	['facebook','<svg xmlns="http://www.w3.org/2000/svg" viewBox="-7 -2 24 24" width="24" fill="currentColor"><path d="M2.046 3.865v2.748H.032v3.36h2.014v9.986H6.18V9.974h2.775s.26-1.611.386-3.373H6.197V4.303c0-.343.45-.805.896-.805h2.254V0H6.283c-4.34 0-4.237 3.363-4.237 3.865z"></path></svg>'],
	['instagram','<svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 24 24" width="24" fill="currentColor"><path d="M14.017 0h-8.07A5.954 5.954 0 0 0 0 5.948v8.07a5.954 5.954 0 0 0 5.948 5.947h8.07a5.954 5.954 0 0 0 5.947-5.948v-8.07A5.954 5.954 0 0 0 14.017 0zm3.94 14.017a3.94 3.94 0 0 1-3.94 3.94h-8.07a3.94 3.94 0 0 1-3.939-3.94v-8.07a3.94 3.94 0 0 1 3.94-3.939h8.07a3.94 3.94 0 0 1 3.939 3.94v8.07z"></path><path d="M9.982 4.819A5.17 5.17 0 0 0 4.82 9.982a5.17 5.17 0 0 0 5.163 5.164 5.17 5.17 0 0 0 5.164-5.164A5.17 5.17 0 0 0 9.982 4.82zm0 8.319a3.155 3.155 0 1 1 0-6.31 3.155 3.155 0 0 1 0 6.31z"></path><circle cx="15.156" cy="4.858" r="1.237"></circle></svg>'],
	['linkedin','<svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 24 24" width="24" fill="currentColor"><path d="M19.959 11.719v7.379h-4.278v-6.885c0-1.73-.619-2.91-2.167-2.91-1.182 0-1.886.796-2.195 1.565-.113.275-.142.658-.142 1.043v7.187h-4.28s.058-11.66 0-12.869h4.28v1.824l-.028.042h.028v-.042c.568-.875 1.583-2.126 3.856-2.126 2.815 0 4.926 1.84 4.926 5.792zM2.421.026C.958.026 0 .986 0 2.249c0 1.235.93 2.224 2.365 2.224h.028c1.493 0 2.42-.989 2.42-2.224C4.787.986 3.887.026 2.422.026zM.254 19.098h4.278V6.229H.254v12.869z"></path></svg>'],
	['pinterest','<svg xmlns="http://www.w3.org/2000/svg" viewBox="-4.5 -2 24 24" width="24" fill="currentColor"><path d="M6.17 13.097c-.506 2.726-1.122 5.34-2.95 6.705-.563-4.12.829-7.215 1.475-10.5-1.102-1.91.133-5.755 2.457-4.808 2.86 1.166-2.477 7.102 1.106 7.844 3.741.774 5.269-6.683 2.949-9.109C7.855-.272 1.45 3.15 2.238 8.163c.192 1.226 1.421 1.598.491 3.29C.584 10.962-.056 9.22.027 6.897.159 3.097 3.344.435 6.538.067c4.04-.466 7.831 1.527 8.354 5.44.59 4.416-1.823 9.2-6.142 8.855-1.171-.093-1.663-.69-2.58-1.265z"></path></svg>'],
	['quora','<svg xmlns="http://www.w3.org/2000/svg" viewBox="-2.5 -2 24 24" width="24" fill="currentColor"><path d="M17.495 15.682s-.097 1.434-1.39 1.434c-1 0-1.682-.768-2.32-1.765 1.814-1.597 2.966-3.982 2.966-6.646C16.751 3.897 13.001 0 8.377 0 3.752 0 .003 3.897.003 8.705s3.749 8.705 8.374 8.705c.84 0 1.65-.129 2.414-.368.967 1.55 2.195 2.943 4.117 2.943 3.912 0 4.074-4.303 4.074-4.303h-1.487zm-9.118.293c-2.696 0-4.882-3.255-4.882-7.27s2.186-7.27 4.882-7.27c2.696 0 4.882 3.255 4.882 7.27 0 1.597-.346 3.073-.932 4.272-.662-.953-1.456-1.764-2.592-2.022-2.015-.459-3.75.456-4.3.912l.517 1.076s.523-.303 1.82 0c.817.19 1.452 1.334 2.18 2.646a3.459 3.459 0 0 1-1.575.386z"></path></svg>'],
	['reddit','<svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -3 24 24" width="24" fill="currentColor"><path d="M19.986 8.029a2.51 2.51 0 0 0-4.285-1.771c-1.404-.906-3.197-1.483-5.166-1.573a2.734 2.734 0 0 1 1.028-2.139 2.735 2.735 0 0 1 2.315-.539l.112.025c0 .028-.004.056-.004.084a2.095 2.095 0 1 0 .328-1.121L14.113.95a3.812 3.812 0 0 0-3.228.752 3.812 3.812 0 0 0-1.433 2.983c-1.97.09-3.762.667-5.165 1.572a2.51 2.51 0 1 0-2.94 3.994c-.061.31-.093.628-.093.952 0 3.606 3.912 6.53 8.74 6.53 4.826 0 8.739-2.924 8.739-6.53 0-.324-.032-.641-.093-.952a2.508 2.508 0 0 0 1.346-2.222zm-3.905-6.925a1.013 1.013 0 0 1 0 2.025 1.013 1.013 0 0 1 0-2.025zM1.083 8.03c0-.787.64-1.427 1.427-1.427.337 0 .646.118.89.314-.763.655-1.354 1.425-1.721 2.27a1.423 1.423 0 0 1-.596-1.157zm14.442 6.923c-1.465 1.095-3.43 1.698-5.532 1.698s-4.067-.603-5.531-1.698c-1.37-1.023-2.125-2.355-2.125-3.75 0-1.394.754-2.725 2.125-3.75C5.926 6.359 7.89 5.757 9.993 5.757c2.103 0 4.067.602 5.532 1.697 1.37 1.024 2.125 2.355 2.125 3.75 0 1.394-.755 2.726-2.125 3.75zm2.782-5.767c-.367-.845-.958-1.614-1.721-2.269.244-.196.554-.314.89-.314.787 0 1.427.64 1.427 1.427 0 .476-.235.898-.596 1.156z"></path><circle cx="6.801" cy="9.678" r="1.143"></circle><circle cx="13.185" cy="9.678" r="1.143"></circle><path d="M12.701 12.455a4.357 4.357 0 0 1-2.94 1.138 4.325 4.325 0 0 1-3.195-1.39.541.541 0 1 0-.793.738 5.47 5.47 0 0 0 3.988 1.735 5.437 5.437 0 0 0 3.67-1.421.541.541 0 1 0-.73-.8z"></path></svg>'],
	['tiktok','<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"/></svg>'],
	['twitter','<svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -4 24 24" width="24" fill="currentColor"><path d="M20 1.907a8.292 8.292 0 0 1-2.356.637A4.07 4.07 0 0 0 19.448.31a8.349 8.349 0 0 1-2.607.98A4.12 4.12 0 0 0 13.846.015c-2.266 0-4.103 1.81-4.103 4.04 0 .316.036.625.106.92A11.708 11.708 0 0 1 1.393.754a3.964 3.964 0 0 0-.554 2.03c0 1.403.724 2.64 1.824 3.363A4.151 4.151 0 0 1 .805 5.64v.05c0 1.958 1.415 3.591 3.29 3.963a4.216 4.216 0 0 1-1.08.141c-.265 0-.522-.025-.773-.075a4.098 4.098 0 0 0 3.832 2.807 8.312 8.312 0 0 1-5.095 1.727c-.332 0-.658-.02-.979-.056a11.727 11.727 0 0 0 6.289 1.818c7.547 0 11.673-6.157 11.673-11.496l-.014-.523A8.126 8.126 0 0 0 20 1.907z"></path></svg>'],
	['youtube','<svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -5 24 24" width="24" fill="currentColor"><path d="M15.812.017H4.145C1.855.017 0 1.852 0 4.116v5.768c0 2.264 1.856 4.1 4.145 4.1h11.667c2.29 0 4.145-1.836 4.145-4.1V4.116c0-2.264-1.856-4.1-4.145-4.1zM13.009 7.28L7.552 9.855a.219.219 0 0 1-.314-.196V4.35c0-.161.173-.266.318-.193l5.458 2.735a.216.216 0 0 1-.005.389z"></path></svg>'],

	['close','<svg xmlns="http://www.w3.org/2000/svg" viewBox="-6 -6 24 24" width="24" fill="currentColor"><path d="M7.314 5.9l3.535-3.536A1 1 0 1 0 9.435.95L5.899 4.485 2.364.95A1 1 0 1 0 .95 2.364l3.535 3.535L.95 9.435a1 1 0 1 0 1.414 1.414l3.535-3.535 3.536 3.535a1 1 0 1 0 1.414-1.414L7.314 5.899z"></path></svg>'],
	['check','<svg xmlns="http://www.w3.org/2000/svg" viewBox="-5 -7 24 24" width="24" fill="currentColor"><path d="M5.486 9.73a.997.997 0 0 1-.707-.292L.537 5.195A1 1 0 1 1 1.95 3.78l3.535 3.535L11.85.952a1 1 0 0 1 1.415 1.414L6.193 9.438a.997.997 0 0 1-.707.292z"></path></svg>'],
	['loader','<?xml version="1.0" encoding="utf-8"?><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="122.315px" height="122.88px" viewBox="0 0 122.315 122.88" enable-background="new 0 0 122.315 122.88" xml:space="preserve"><g><path fill-rule="evenodd" clip-rule="evenodd" d="M94.754,14.534c8.844,0,16.014,7.17,16.014,16.012 c0,8.844-7.17,16.015-16.014,16.015c-8.843,0-16.013-7.17-16.013-16.015C78.741,21.704,85.911,14.534,94.754,14.534L94.754,14.534z M109.265,52.121c-7.205,0-13.049,5.844-13.049,13.048c0,7.207,5.844,13.049,13.049,13.051c7.207,0,13.051-5.844,13.051-13.051 C122.315,57.965,116.472,52.121,109.265,52.121L109.265,52.121z M94.135,89.903c-5.032,0-9.114,4.082-9.114,9.113 c0,5.032,4.082,9.114,9.114,9.114c5.031,0,9.113-4.082,9.113-9.114C103.248,93.985,99.166,89.903,94.135,89.903L94.135,89.903z M59.275,104.65c-5.032,0-9.114,4.081-9.114,9.113c0,5.034,4.082,9.116,9.114,9.116s9.113-4.082,9.113-9.116 C68.389,108.731,64.308,104.65,59.275,104.65L59.275,104.65z M23.652,90.86c-4.717,0-8.54,3.823-8.54,8.54 c0,4.715,3.823,8.54,8.54,8.54c4.714,0,8.538-3.825,8.538-8.54C32.19,94.684,28.366,90.86,23.652,90.86L23.652,90.86z M9.096,54.872C4.072,54.872,0,58.944,0,63.968c0,5.021,4.072,9.093,9.096,9.093c5.021,0,9.093-4.072,9.093-9.093 C18.189,58.944,14.116,54.872,9.096,54.872L9.096,54.872z M23.652,17.026c-6.354,0-11.508,5.155-11.508,11.509 s5.154,11.506,11.508,11.506s11.506-5.152,11.506-11.506S30.006,17.026,23.652,17.026L23.652,17.026z M59.341,0 c-7.651,0-13.858,6.205-13.858,13.855c0,7.651,6.207,13.856,13.858,13.856s13.856-6.205,13.856-13.856 C73.197,6.205,66.992,0,59.341,0L59.341,0z"/></g></svg>'],
];

$(document).ready(function() {
	init();
});

function init() {
	// TODO - check for search in slug

	// TODO - keyboard press checking and auto searching

	
	

	// Prevent default form, tidy search term/s, submit for search
	$('form').submit(function(e) {
		e.preventDefault();

		// Clear other search results
		$('#results-list-domains').html('');
		$('#results-list-usernames').html('');
		
		let val = $('#searchterms').val();

		val = val.replace(' ','-'); // replace whitespace
		val = val.replace(/[^a-zA-Z0-9-_]/g, ''); // replace garbage
		$('#searchterms').val(val);

		if (typeof val != 'undefined' && val != '') {
			$('.col-heading').each(function(){
				this.style.display = 'block';
			})
			searchDomains(val);
			searchUsernames(val);
		}
	});
}

function searchDomains(searchTerm) {
	for (let i = 0; i < domains.length; i++) {
		
		$('#results-list-domains').append(
			'<a class="availability domain" href="https://' + searchTerm + '.' + domains[i] + '" target="_blank">' + 
			'<div class="icon"><span>.' + domains[i] + '</span></div>' +
			'<div class="domain">' + searchTerm + '.' + domains[i] + '</div>' +
			'<div id="statusDomain' + i + '" class="status loading">' + getSVGCode('loader') + '</div>' +
			'</a>'
		);

		$.get('https://api.allorigins.win/get?url=' + encodeURIComponent('https://' + searchTerm + '.' + domains[i]), function(data) {
			
			$('#statusDomain'+i).removeClass('loading');

			if (data.status.error.code == 'ENOTFOUND') {
				$('#statusDomain'+i).addClass('available');
				$('#statusDomain'+i).html(getSVGCode('check'));
			} else {
				$('#statusDomain'+i).addClass('unavailable');
				$('#statusDomain'+i).html(getSVGCode('close'));
			}
		})
		.fail(function(){
			$('#statusDomain'+i).addClass('unavailable');
			$('#statusDomain'+i).html(getSVGCode('close'));
		});
	}
}


function searchUsernames(searchTerm) {
	for (let i = 0; i < platforms.length; i++) {

		$('#results-list-usernames').append(
			'<a class="availability username" href="' + platforms[i][3] + searchTerm + '" target="_blank">' + 
			'<div class="icon">' + getSVGCode(platforms[i][1]) + '</div>' +
			'<div class="username">' + platforms[i][3].replace('www.','').replace('https://','') + searchTerm + '</div>' +
			'<div id="statusUsername' + i + '" class="status loading">' + getSVGCode('loader') + '</div>' +
			'</a>'
		);

		$.get('https://api.allorigins.win/get?url=' + encodeURIComponent(platforms[i][3] + searchTerm), function(data) {
			
			$('#statusUsername'+i).removeClass('loading');

			console.log(platforms[i][3] + ' ' + data.status.http_code);

			let match = false;

			if (data.status.http_code == platforms[i][0]) {



				if ((platforms[i][1] == "reddit") && data.contents.includes(platforms[i][4])) {
					
					match = true;

				} else if ((platforms[i][1] == "twitter") && !data.contents.includes(platforms[i][4])) {

					match = true;

				} else {
					
					match = true;

				}
			}

			

			if (match) {
				$('#statusUsername'+i).addClass('available');
				$('#statusUsername'+i).html(getSVGCode('check'));
			} else {
				$('#statusUsername'+i).addClass('unavailable');
				$('#statusUsername'+i).html(getSVGCode('close'));
			}
		})
		.fail(function(){
			
		});
	}
}

function getSVGCode(slug) {
	for (let i = 0; i < svgs.length; i++) {
		if (svgs[i][0] == slug) {
			return svgs[i][1];
		}
	}
}