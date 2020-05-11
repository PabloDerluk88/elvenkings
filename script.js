/*Este proyecto consiste en una web(decorada innecesariamente) que contenga una galeria de imagenes las cuales puedan descargarse,
con sus botones respectivos, haciendo un request y mostrando una barra de progreso en velocidades similares 
al 3g. (LEER ABAJO DE TODO)*/
var _OBJECT_URL;
/*BOTON 1*/
document.querySelector('#download-button1').addEventListener('click', function() {
	var request = new XMLHttpRequest();
    request.addEventListener('readystatechange', function(e) {
    	if(request.readyState == 2 && request.status == 200) {
    		document.querySelector('#start-download1').style.display = 'block';
    		document.querySelector('#download-button1').style.display = 'none';
    	}
    	else if(request.readyState == 3) {
    		document.querySelector('#download-progress-container1').style.display = 'block';
    		document.querySelector('#start-download1').style.display = 'none';
    	}
    	else if(request.readyState == 4) {
    		_OBJECT_URL = URL.createObjectURL(request.response);

    		document.querySelector('#save-file1').setAttribute('href', _OBJECT_URL);
    		document.querySelector('#save-file1').setAttribute('download', 'finwe.jpg');
    		
    		document.querySelector('#save-file1').style.display = 'block';
    		document.querySelector('#download-progress-container1').style.display = 'none';

    		setTimeout(function() {
    			window.URL.revokeObjectURL(_OBJECT_URL);

    			document.querySelector('#download-button1').style.display = 'block';
    			document.querySelector('#save-file1').style.display = 'none';
    		}, 60*1000);
    	}
    });
    request.addEventListener('progress', function(e) {
    	var percent_complete = (e.loaded / e.total)*100;
    	document.querySelector('#download-progress1').style.width = percent_complete + '%';
    });
    request.responseType = 'blob';
    request.open('get', 'finwe.jpg'); 
    request.send(); 
});
/*BOTON 2*/
document.querySelector('#download-button2').addEventListener('click', function() {
	var request = new XMLHttpRequest();
    request.addEventListener('readystatechange', function(e) {
    	if(request.readyState == 2 && request.status == 200) {
    		document.querySelector('#start-download2').style.display = 'block';
    		document.querySelector('#download-button2').style.display = 'none';
    	}
    	else if(request.readyState == 3) {
    		document.querySelector('#download-progress-container2').style.display = 'block';
    		document.querySelector('#start-download2').style.display = 'none';
    	}
    	else if(request.readyState == 4) {
    		_OBJECT_URL = URL.createObjectURL(request.response);

    		document.querySelector('#save-file2').setAttribute('href', _OBJECT_URL);
    		document.querySelector('#save-file2').setAttribute('download', 'manwe.jpg');
    		
    		document.querySelector('#save-file2').style.display = 'block';
    		document.querySelector('#download-progress-container2').style.display = 'none';

    		setTimeout(function() {
    			window.URL.revokeObjectURL(_OBJECT_URL);

    			document.querySelector('#download-button2').style.display = 'block';
    			document.querySelector('#save-file2').style.display = 'none';
    		}, 60*1000);
    	}
    });
    request.addEventListener('progress', function(e) {
    	var percent_complete = (e.loaded / e.total)*100;
    	document.querySelector('#download-progress2').style.width = percent_complete + '%';
    });
    request.responseType = 'blob';
    request.open('get', 'manwe.jpg'); 
    request.send(); 
});
/*BOTON 3*/
document.querySelector('#download-button3').addEventListener('click', function() {
	var request = new XMLHttpRequest();
    request.addEventListener('readystatechange', function(e) {
    	if(request.readyState == 2 && request.status == 200) {
    		document.querySelector('#start-download3').style.display = 'block';
    		document.querySelector('#download-button3').style.display = 'none';
    	}
    	else if(request.readyState == 3) {
    		document.querySelector('#download-progress-container3').style.display = 'block';
    		document.querySelector('#start-download3').style.display = 'none';
    	}
    	else if(request.readyState == 4) {
    		_OBJECT_URL = URL.createObjectURL(request.response);

    		document.querySelector('#save-file3').setAttribute('href', _OBJECT_URL);
    		document.querySelector('#save-file3').setAttribute('download', 'Ingwe.jpg');
    		
    		document.querySelector('#save-file3').style.display = 'block';
    		document.querySelector('#download-progress-container3').style.display = 'none';

    		setTimeout(function() {
    			window.URL.revokeObjectURL(_OBJECT_URL);

    			document.querySelector('#download-button3').style.display = 'block';
    			document.querySelector('#save-file3').style.display = 'none';
    		}, 60*1000);
    	}
    });
    request.addEventListener('progress', function(e) {
    	var percent_complete = (e.loaded / e.total)*100;
    	document.querySelector('#download-progress3').style.width = percent_complete + '%';
    });
    request.responseType = 'blob';
    request.open('get', 'Ingwe.jpg'); 
    request.send(); 
});


/*BOTON GLOBAL...
Profe como va? arranque tarde con el TP y no me dio el tiempo para descifrar como hacer para crear un boton
que englobe todas las resquest en un solo listener de click en un boton, como asi tampoco pude optimizar el 
codigo en una funcion a la cual pasarle parametros de img/src apesar de intentarlo algunas veces...
seria mucha molestia preguntarle como se podria lograr? cualquier cosa(por si no aparece en el drive) 
mi mail es: pablo.derluk@gmail.com
muchas gracias!

*/
