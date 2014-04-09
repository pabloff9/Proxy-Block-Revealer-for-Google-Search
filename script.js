// ==UserScript==
// @name        Proxy Assíncrono
// @include     https://www.google.com*
// @version     1
// @grant       GM_xmlhttpRequest


// ==/UserScript==
var myCustomClass = 'minhaClasseCustomizadaQueNinguemDeveTer';
function myFunction() {
    if (document.getElementById('rcnt') !== null) {
        resultados = document.getElementsByClassName('r');
        for (var i = 0; i < resultados.length; i++) {
            (function (i) {
                link = resultados[i].firstChild;
                link.className = link.className + ' ' + myCustomClass + i;
                destino = link.href;
                GM_xmlhttpRequest({
                    method: 'HEAD',
                    url: destino,
                    onload: (function (response) {
                        link = document.getElementsByClassName(myCustomClass + i) [0];
                        if (response.status === 403) {
                            link.style.color = 'red';
                        }
                    })
                });
            }) (i);
        }
    }
}
window.addEventListener('load', myFunction, false);
window.addEventListener('hashchange', myFunction, false);
