<?php
	function getRandomStringRandomInt($length = 16) {
		$stringSpace = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
		$pieces = [];
		$max = mb_strlen($stringSpace, '8bit') - 1;
		for ($i = 0; $i < $length; ++ $i) {
		    $pieces[] = $stringSpace[random_int(0, $max)];
		}
		return implode('', $pieces);
	}

	session_start();
	if (empty($_SESSION['token'])) {
		$_SESSION['token'] = getRandomStringRandomInt();
	}
?>

<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<meta name="author" content="Tim Grillmeier">
		
		<link rel="stylesheet" href="/index.css">

		<link rel="preconnect" href="https://fonts.googleapis.com">
		<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
		<link href="https://fonts.googleapis.com/css2?family=Inter:wght@500&display=swap" rel="stylesheet">

		<!-- Primary Meta Tags -->
		<title>Handle Hunt | Domain & Username Search</title>
		<meta name="title" content="Handle Hunt | Domain & Username Search">
		<meta name="description" content="Domain & Username Search without the bull. Search for available usernames and domains across popular social media platforms and conventional domains.">

		<!-- Open Graph / Facebook -->
		<meta property="og:type" content="website">
		<meta property="og:url" content="https://metatags.io/">
		<meta property="og:title" content="Handle Hunt | Domain & Username Search">
		<meta property="og:description" content="Domain & Username Search without the bull. Search for available usernames and domains across popular social media platforms and conventional domains.">
		<!-- <meta property="og:image" content=""> -->

		<!-- Twitter -->
		<meta property="twitter:card" content="summary_large_image">
		<meta property="twitter:url" content="https://metatags.io/">
		<meta property="twitter:title" content="Handle Hunt | Domain & Username Search">
		<meta property="twitter:description" content="Domain & Username Search without the bull. Search for available usernames and domains across popular social media platforms and conventional domains.">
		<!-- <meta property="twitter:image" content=""> -->

		<link rel="apple-touch-icon" sizes="57x57" href="/assets/favicon/apple-icon-57x57.png">
		<link rel="apple-touch-icon" sizes="60x60" href="/assets/favicon/apple-icon-60x60.png">
		<link rel="apple-touch-icon" sizes="72x72" href="/assets/favicon/apple-icon-72x72.png">
		<link rel="apple-touch-icon" sizes="76x76" href="/assets/favicon/apple-icon-76x76.png">
		<link rel="apple-touch-icon" sizes="114x114" href="/assets/favicon/apple-icon-114x114.png">
		<link rel="apple-touch-icon" sizes="120x120" href="/assets/favicon/apple-icon-120x120.png">
		<link rel="apple-touch-icon" sizes="144x144" href="/assets/favicon/apple-icon-144x144.png">
		<link rel="apple-touch-icon" sizes="152x152" href="/assets/favicon/apple-icon-152x152.png">
		<link rel="apple-touch-icon" sizes="180x180" href="/assets/favicon/apple-icon-180x180.png">
		<link rel="icon" type="image/png" sizes="192x192"  href="/assets/favicon/android-icon-192x192.png">
		<link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon/favicon-32x32.png">
		<link rel="icon" type="image/png" sizes="96x96" href="/assets/favicon/favicon-96x96.png">
		<link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon/favicon-16x16.png">
		<link rel="manifest" href="/assets/favicon/manifest.json">
		<meta name="msapplication-TileColor" content="#FD4219">
		<meta name="msapplication-TileImage" content="/assets/favicon/ms-icon-144x144.png">
		<meta name="theme-color" content="#FD4219">

		<!-- Global site tag (gtag.js) - Google Analytics -->
		<script async src="https://www.googletagmanager.com/gtag/js?id=G-52L77NVN3F"></script>
		<script>
			window.dataLayer = window.dataLayer || [];
			function gtag(){dataLayer.push(arguments);}
			gtag('js', new Date());

			gtag('config', 'G-52L77NVN3F');

			let token = '<?php echo $_SESSION['token']; ?>';

			window.onload = (event) => {
				document.getElementById('token-field').value = token;
			};
		</script>
	</head>
	<body>
		<header>
			<div class="container-content">
				<div class="logo">
					<a href="https://handlehunt.com" alt="Handle Hunt Homepage Link">
						<img src="/assets/images/Handle-Hunt-logo-text-smallx4.png" alt="Handle Hunt Logo">
					</a>
				</div>
				<!-- <nav>
					<ul>
						<li>
							<a href=""></a>
						</li>
						<li>
							<a href=""></a>
						</li>
					</ul>
				</nav> -->
			</div>
		</header>
		<div class="container-banner">
			<div class="container-content">
				<div class="container-columns">
					<div class="column w-1-2">
						<div class="container-title">
							<h1>
								Find your<br>
								<span>perfect name.</span><br>
								<br>
								In all the<br>
								<span>right places.</span><br>
							</h1>
							<div class="sprite-wrap">

							</div>
						</div>
					</div>
					<div class="column right w-1-2">
						<h2>
							See what's available.
						</h2>
						<p>
							Simply enter your desired business name or social media username below. We’ll sort out the rest.
						</p>
						<form class="container-search-form" name="banner-form" onsubmit="searchName(event, true);">
							<input id="token-field" type="hidden" name="token" value="">
							<div class="container-text-field">
								<input type="text" name="name" placeholder="Enter search">
							</div>
							<div class="container-submit-button">
								<input type="submit" name="" value="Search">
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>




		<div class="container-body">
			<div class="container-content">
				<div id="search" class="container-search">
					<form>
						<input id="searchterms" type="text" placeholder="Enter search">
						<button type="submit">Search</button>
					</form>
				</div>
				<p class="disclaimer">This is still in beta. Availability indicators aren't 100% accurate for edge cases like user bans and unconventional domain configurations.<br>Always manually double check the availability.</p>
				<div id="results" class="container-results">
					<div class="container-results-lists">
						<div class="col col-1">
							<h2 style="display: none;" class="col-heading">Usernames</h2>
							<div id="results-list-usernames">
							</div>
						</div>
						<div class="col col-2">
							<h2 style="display: none;" class="col-heading">Domains</h2>
							<div id="results-list-domains">
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<footer>
			<div class="container-content">
				<p>Handle Hunt made with ❤️ by <a href="https://timgrillmeier.com" target="_blank">Tim Grillmeier</a> | Like Handle Hunt? <a href="https://www.buymeacoffee.com/timgrillmeier" target="_blank">Buy me a coffee</a> ☕</p>
			</div>
		</footer>

		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
		<script src="/index.js"></script>

	</body>
</html>