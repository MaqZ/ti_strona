function prepare_header(){
				document.getElementById('header').innerHTML = 
												"			<h1>Witam na mojej stronie WWW!</h1>";
}

function prepare_nav(){
				document.getElementById('nav').innerHTML = 
												'<ul>\n\
												<li><a class="btn" href="index.html">Strona główna</a></li>\n\
												<li><a class="btn" href="about_me.html">O mnie</a>\n\
																<ul>\n\
																<a class="btn" href="imie.html">Imię i nazwisko</a>\n\
																<a class="btn" href="miasto.html">Moje miasto</a>\n\
																</ul>\n\
												</li>\n\
												<li><a class="btn" href="galeria.html">Galeria</a></li>\n\
												<li><a class="btn" href="#">Różne</a>\n\
<ul></li>\n\
				<li><a class="btn" href="matrix.html">Matrix</a></li>\n\
</ul>\n\
</ul>\n';
}

function prepare_sidebar(){
				document.getElementById('sidebar').innerHTML = '<h2>Pasek boczny</h2>\n\
				<p>Poniżej podane są podstrony:</p>\n\
				<ul>\n\
				<li><a href="index.html">Strona główna</a></li>\n\
				<li><a href="about_me.html">O mnie</a>\n\
								<ul>\n\
												<a href="imie.html">Imię i nazwisko</a><br/>\n\
												<a href="miasto.html">Moje miasto</a>\n\
								</ul>\n\
				</li>\n\
				<li><a href="galeria.html">Galeria</a></li>\n\
				<li><a href="#">Różne</a>\n\
								<ul><a href="matrix.html">Matrix</ul>\n\
				</li>\n\
				</ul>\n\
				</h2>';
}

function prepare_footer(){
				document.getElementById('footer').innerHTML = 
												'<p>Autor strony: Maksymilian Zytkiewicz</p>';
}

function prepare_site(){
				prepare_header();
				prepare_nav();
				prepare_sidebar();
				prepare_footer();
}

function wyswietl_tekst(){
				var text = document.getElementById("tekscik").value;
				document.getElementById("wyswietlone").innerHTML = "<br/>Wprowadzono: " + text;
}

function random_int(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function make_matrix_effect(){
				var matrix = document.getElementById("matrix");
				var max_height = matrix.offsetHeight;
				var max_width = matrix.offsetWidth;
				var chars = "!@#$%^&*()-=_+{}[]:\";\'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
				var h = matrix.offsetHeight;
				matrix.innerHTML = "";
				for(i = 0; i < 150; i++){
								var l = random_int(0, 100);
								var t = random_int(0, 70);
								
								var c = chars.charAt(random_int(0, chars.length - 1));
								var s = random_int(3,15);
								matrix.innerHTML += '<marquee style="height: ' + random_int(75, 150) + 'px; position: absolute; top: ' + t + '%; left:' + l + '%; marquee-speed="' + s + '" direction="down">' + c + '</marquee>';
				}
}