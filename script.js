
/*VARIABLES*/
let _OBJECT_URL;
let imagenes = document.querySelectorAll(".imagen")
let [img1, img2, img3] = imagenes
let sds = document.querySelectorAll(".start-download")
let [sd1, sd2, sd3] = sds
let dbs = document.querySelectorAll(".download-button")
let [db1, db2, db3] = dbs
let dpcs = document.querySelectorAll(".download-progress-container")
let [dpc1, dpc2, dpc3] = dpcs
let dps = document.querySelectorAll(".download-progress")
let [dp1, dp2, dp3] = dps
let sfs = document.querySelectorAll(".save-file")
let [sf1, sf2, sf3] = sfs

/*BOTON 1*/
document.querySelector('#download-button1').addEventListener('click', function () {
	var request = new XMLHttpRequest();
	request.addEventListener('readystatechange', function (e) {
		if (request.readyState == 2 && request.status == 200) {
			readystate2(sd1, db1);
		}
		else if (request.readyState == 3) {
			readystate3(dpc1, sd1);
		}
		else if (request.readyState == 4) {
			_OBJECT_URL = URL.createObjectURL(request.response);
			readystate4(sf1, img1, dpc1, db1)
		}
	});
	request.addEventListener('progress', function (e) {
		progress(e, dp1);
	})
	request.responseType = 'blob';
	request.open('get', 'finwe.jpg');
	request.send();
});
/*BOTON 2*/
document.querySelector('#download-button2').addEventListener('click', function () {
	var request = new XMLHttpRequest();
	request.addEventListener('readystatechange', function (e) {
		if (request.readyState == 2 && request.status == 200) {
			readystate2(sd2, db2);
		}
		else if (request.readyState == 3) {
			readystate3(dpc2, sd2);
		}
		else if (request.readyState == 4) {
			_OBJECT_URL = URL.createObjectURL(request.response);
			readystate4(sf2, img2, dpc2, db2)
		}
	});
	request.addEventListener('progress', function (e) {
		progress(e, dp2);
	});
	request.responseType = 'blob';
	request.open('get', 'manwe.jpg');
	request.send();
});

/*BOTON 3*/
document.querySelector('#download-button3').addEventListener('click', function () {
	var request = new XMLHttpRequest();
	request.addEventListener('readystatechange', function (e) {
		if (request.readyState == 2 && request.status == 200) {
			readystate2(sd3, db3);
		}
		else if (request.readyState == 3) {
			readystate3(dpc3, sd3);
		}
		else if (request.readyState == 4) {
			_OBJECT_URL = URL.createObjectURL(request.response);
			readystate4(sf3, img3, dpc3, db3)
		}
	});
	request.addEventListener('progress', function (e) {
		progress(e, dp3);
	});
	request.responseType = 'blob';
	request.open('get', 'Ingwe.jpg');
	request.send();
});

/*BOTON GLOBAL USANDO FETCH API*/
document.querySelector('#download-buttonG').addEventListener('click', function () {

	let pedido1 = fetch("manwe.jpg")

		.then((resultado) => {
			return resultado.blob()

		})
		.then((resultado) => {
			return URL.createObjectURL(resultado)
		})

	let pedido2 = fetch("finwe.jpg")

		.then((resultado) => {
			return resultado.blob()

		})
		.then((resultado) => {
			return URL.createObjectURL(resultado)
		})

	let pedido3 = fetch("Ingwe.jpg")

		.then((resultado) => {
			return resultado.blob()
		})
		.then((resultado) => {
			return URL.createObjectURL(resultado)
		})

	Promise.all([pedido1, pedido2, pedido3])

		.then(res => {
			var pedidoscombinados = []
			pedidoscombinados = res
			downloadAll(pedidoscombinados)

		})

})

/*FUNCIONES*/
function readystate2(sd, db) {
	sd.style.display = 'block';
	db.style.display = 'none';
}

function readystate3(dpc, sd) {
	dpc.style.display = 'block';
	sd.style.display = 'none';
}

function readystate4(sf, img, dpc, db) {

	sf.setAttribute('href', _OBJECT_URL);
	sf.setAttribute('download', img);
	sf.style.display = 'block';
	dpc.style.display = 'none';

	setTimeout(function () {
		window.URL.revokeObjectURL(_OBJECT_URL);
		db.style.display = 'block';
		sf.style.display = 'none';
	}, 60 * 1000);
}
function progress(e, dp) {

	var percent_complete = (e.loaded / e.total) * 100;
	dp.style.width = percent_complete + '%';

}

function downloadAll(urls) {
	var link = document.createElement('a');

	link.setAttribute('download', 'imagen');
	link.style.display = 'none';

	document.body.appendChild(link);

	for (var i = 0; i < urls.length; i++) {
		link.setAttribute('href', urls[i]);
		link.click();
	}

	document.body.removeChild(link);
}

/****funciones de prueba****/

async function catchimg(imagenurl) {
	const response = await fetch(imagenurl);
	const blob = await response.blob();
	_OBJECT_URL = URL.createObjectURL(blob);

	document.querySelector("#save-fileG").setAttribute('href', _OBJECT_URL);
	document.querySelector("#save-fileG").setAttribute('download', 'manwe.jpg');
	document.querySelector("#download-buttonG").style.display = 'none';
	document.querySelector("#save-fileG").style.display = 'block';
}

/**
* Download a list of files.
*/
function download_files(files) {
	function download_next(i) {
		if (i >= files.length) {
			return;
		}
		var a = document.createElement('a');
		a.href = files[i].download;
		a.target = '_parent';
		// Use a.download if available, it prevents plugins from opening.
		if ('download' in a) {
			a.download = files[i].filename;
		}
		// Add a to the doc for click to work.
		(document.body || document.documentElement).appendChild(a);
		if (a.click) {
			a.click(); // The click method is supported by most browsers.
		} else {
			$(a).click(); // Backup using jquery
		}
		// Delete the temporary link.
		a.parentNode.removeChild(a);
		// Download the next file with a small timeout. The timeout is necessary
		// for IE, which will otherwise only download the first file.
		setTimeout(function () {
			download_next(i + 1);
		}, 500);
	}
	// Initiate the first download.
	download_next(0);
}

function do_dl() {
    download_files([
      { download: "", filename: "" },
      { download: "", filename: "" },
      { download: "", filename: "" },
    ]);
  };
