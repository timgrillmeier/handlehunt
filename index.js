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
	['404','Twitter', 'https://twitter.com/'],
	['404','Instagram', 'https://www.instagram.com/'],
	['404','Facebook', 'https://www.facebook.com/'],
	// ['999','LinkedIn', 'https://www.linkedin.com/company/'],
	['404','TikTok', 'https://www.tiktok.com/@'],
	['404','YouTube', 'https://www.youtube.com/user/'],
	['404','Pinterest', 'https://www.pinterest.com.au/'],
	['200','Reddit u/', 'https://www.reddit.com/user/', 'Sorry, nobody on Reddit goes by that name.'],
	['200','Reddit r/', 'https://www.reddit.com/r/',  'Sorry, there aren’t any communities on Reddit with that name.'],
	['404','Quora', 'https://www.quora.com/profile/'],
	['404','Dribbble', 'https://dribbble.com/'],
]

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
			searchDomains(val);
			searchUsernames(val);
		}
	});
}

function searchDomains(searchTerm) {
	for (let i = 0; i < domains.length; i++) {
		// console.log('searching for https://' + searchTerm + '.' + domains[i] + ' ...');
		$.get('https://api.allorigins.win/get?url=' + encodeURIComponent('https://' + searchTerm + '.' + domains[i]), function(data) {
			console.log(data);
			if (data.status.error.code == 'ENOTFOUND') {
				$('#results-list-domains').append(
					'<strong>.' + domains[i] + '</strong> available - <a href="https://' + searchTerm + '.' + domains[i] + '" target="_blank">' + searchTerm + '.' + domains[i] + '</a><br>'
				);
			}
		})
		.fail(function(){
			
		});
	}
}


function searchUsernames(searchTerm) {
	for (let i = 0; i < platforms.length; i++) {
		console.log('searching for ' + platforms[i][2] + searchTerm + ' ...');
		$.get('https://api.allorigins.win/get?url=' + encodeURIComponent(platforms[i][2] + searchTerm), function(data) {
			console.log(data);
			if (data.status.http_code == platforms[i][0]) {
				
				if (platforms[i][1] == "Reddit u/" || platforms[i][1] == "Reddit r/") {
					console.log('Data contains: ' + data.contents.includes(platforms[i][3]));
					
					if (data.contents.includes(platforms[i][3])) {
						$('#results-list-usernames').append(
							'<strong>' + platforms[i][1] + '</strong> available - <a href="' + platforms[i][2] + searchTerm + '" target="_blank">@' + searchTerm + '</a><br>'
						);
					}

				} else {
					
					$('#results-list-usernames').append(
						'<strong>' + platforms[i][1] + '</strong> available - <a href="' + platforms[i][2] + searchTerm + '" target="_blank">@' + searchTerm + '</a><br>'
					);

				}
			}

				
		})
		.fail(function(){
			
		});
	}
}