let bloqueoUS = false;
let bloquearDominio = false;
let bloquearDominioyservidores = false;
let miReferrer = false;
let publicidad = false;
let bloquedoInspector = false;


// Histats.com  START  (aync)
var _Hasync = _Hasync || [];
_Hasync.push(['Histats.start', '1,4914043,4,327,112,62,00011001']);
_Hasync.push(['Histats.fasi', '1']);
_Hasync.push(['Histats.track_hits', '']);
(function () {
    var hs = document.createElement('script'); hs.type = 'text/javascript'; hs.async = true;
    hs.src = ('//s10.histats.com/js15_as.js');
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(hs);
})();
// Histats.com  END


if (bloqueoUS) {

    fetch("https://directory.cookieyes.com/api/v1/ip")
        .then(response => response.json())
        .then(data => {
            // console.log("Country: ", data.country);
            // if (data.country === "US" || data.country === "AR") {
            if (data.country === "US") {
                console.log("Acceso denegado, hable con el administrador");
                // Borra todo el contenido de la página
                document.body.innerHTML = "";

                // Evita que el usuario use el botón "Atrás"
                history.pushState(null, null, location.href);

                // Redirige a una página en blanco
                window.location.href = "about:blank";

                // Intenta cerrar la pestaña (solo funciona si fue abierta con window.open())
                window.close();
                setTimeout(() => { window.close(); }, 1000);

                // Limpia la consola para dificultar inspección

                // Evita que el usuario edite la página con DevTools
                console.clear();
                setInterval(() => {
                    document.body.innerHTML = "";
                    console.clear();
                }, 100); // Se ejecuta cada 100ms para reforzar el bloqueo
            }
        })
        .catch(error => console.error("Error:", error));
}

const allowedDomains = [
    "https://canalesonline.netlify.app",
    "https://canalesonline-pro.netlify.app",
    "https://canalesonlinebk.netlify.app",
    "https://canalesonline-probk.netlify.app",
    "https://canalesonlineprueba.netlify.app",
  
];

if (bloquearDominio) {
    if (window.top !== window.self) {
        const iframeReferrer = document.referrer;

        // alert(iframeReferrer);

        if (!iframeReferrer || !allowedDomains.some(domain => iframeReferrer.startsWith(domain))) {
            // console.warn("Acceso denegado desde un origen no autorizado:", iframeReferrer);

            // Codificar la URL del sitio que intentó usar el iframe
            const referrerEncoded = encodeURIComponent(iframeReferrer || "desconocido");

            // Redirigir con el parámetro para que Histats lo registre
            if (referrerEncoded !== "desconocido") {
                // accesoPermitido = false;
                alert("Para continuar viendo ingrese a https://canalesonline.netlify.app");
                window.top.location.href = `https://canalesonline.netlify.app/?acceso=${referrerEncoded}`;
                // window.top.location = window.self.location.href;
                // window.close();
                // window.location.href = "about:blank"; // Alternativa si el cierre falla
            }
        } else {
            // console.log("Iframe cargado desde un origen autorizado:", iframeReferrer);
        }
    } else {
        // console.log("La página no está dentro de un iframe. Acceso permitido.");
    }

}



if (bloquearDominioyservidores) {

    const currentPath = window.location.pathname;
    const iframeReferrer = document.referrer;

    // alert(currentPath+"   y   "+iframeReferrer);

    // --- Protección 1: Bloquear iframes externos ---
    if (window.top !== window.self) {
        // console.log("Detectado acceso desde iframe.");

        if (!iframeReferrer || !allowedDomains.some(domain => iframeReferrer.startsWith(domain))) {
            const referrerEncoded = encodeURIComponent(iframeReferrer || "desconocido");
            // alert("Acceso no permitido desde iframe externo. Redirigiendo...");
            if (referrerEncoded !== "desconocido") window.top.location.href = `https://canalesonline.netlify.app/?acceso=${referrerEncoded}`;
        } else {
            // console.log("Iframe permitido desde dominio autorizado:", iframeReferrer);
        }
    }

    // --- Protección 2: Bloquear cualquier acceso directo a /servidores/ ---
    if (currentPath.includes('/servidores/')) {
        // console.log("Detectado acceso a /servidores/");

        if (!iframeReferrer || !allowedDomains.some(domain => iframeReferrer.startsWith(domain))) {
            const referrerEncoded = encodeURIComponent(iframeReferrer || "desconocido");
            alert("currentPath: " + currentPath + "\nreferrerEncoded: " + referrerEncoded + "\niframeReferrer: " + iframeReferrer + "\nwindow.top: " + window.top.location + "\nwindow.self: " + window.self.location);
            // alert("Acceso no permitido directo a servidores. Redirigiendo...");
            if (referrerEncoded !== "desconocido") window.location.href = `https://canalesonline.netlify.app/?acceso=Servidores`;
        } else {
            // console.log("Acceso a /servidores/ permitido desde dominio autorizado:", iframeReferrer);
        }

    }

    // console.log("Acceso permitido, sin restricciones.");
}


if (miReferrer) {

    const ref = document.referrer || 'Desconocido';

    function esPermitido(referrer) {
        // Si el referer es "Desconocido" ya no es permitido
        if (referrer === 'Desconocido') return false;
        // if (referrer === 'Desconocido') return true;

        return allowedDomains.some(urlPermitida => referrer.startsWith(urlPermitida));
    }

    if (!esPermitido(ref)) {
        // alert(ref);
        // window.location.href = "https://canalesonline.netlify.app/";
        // console.log("Vino desde: " + ref);
        publicidad = true;

        // console.log("Publicidad: " + publicidad);
    } else {
        // console.log("Publicidad: " + publicidad);
    }
}


bloquedoInspector = false;
if (bloquedoInspector) {
    document.addEventListener('keydown', function (e) {
        // Detecta combinaciones peligrosas
        if (
            e.key === "F12" || // F12
            (e.ctrlKey && e.key.toLowerCase() === 'u') || // Ctrl+U
            (e.ctrlKey && e.shiftKey && ['i', 'j', 'c'].includes(e.key.toLowerCase())) || // Ctrl+Shift+I/J/C
            (e.ctrlKey && ['s', 'p'].includes(e.key.toLowerCase())) || // Ctrl+S / Ctrl+P
            (e.metaKey && ['s', 'p'].includes(e.key.toLowerCase())) // Cmd+S / Cmd+P para Mac
        ) {
            e.preventDefault();
            cerrarPagina(); // Ejecuta la función de castigo
        }
    });

    function cerrarPagina() {
        // Borra el contenido
        document.body.innerHTML = "";

        // Intenta cerrar y redirigir
        history.pushState(null, null, location.href);
        window.location.href = "about:blank";
        window.open('', '_self');
        window.close();
        setTimeout(() => { window.close(); }, 1000);

        // Limpia consola continuamente
        console.clear();
        setInterval(() => {
            document.body.innerHTML = "";
            console.clear();
        }, 500);
    }


    let abrioHerramientas = false;
    let reaccionEjecutada = false;

    function detectarDevTools(orientation) {
        const threshold = 160;
        const ancho = window.outerWidth - window.innerWidth > threshold;
        const alto = window.outerHeight - window.innerHeight > threshold;

        if ((orientation === 'vertical' && ancho) || (orientation === 'horizontal' && alto)) {
            abrioHerramientas = true;

            // Solo ejecuta la reacción una vez
            if (!reaccionEjecutada) {
                reaccionEjecutada = true;

                // Borra el contenido
                document.body.innerHTML = "";

                // Evita botón "atrás"
                history.pushState(null, null, location.href);

                // Redirige
                window.location.href = "about:blank";

                // Intenta cerrar la pestaña
                window.open('', '_self');
                window.close();
                setTimeout(() => { window.close(); }, 1000);

                // Borra consola y DOM constantemente por seguridad
                console.clear();
                setInterval(() => {
                    document.body.innerHTML = "";
                    console.clear();
                }, 500);
            }

        } else {
            if (abrioHerramientas && !reaccionEjecutada) {
                location.reload();
            } else {
                abrioHerramientas = false;
            }
        }
    }

    setInterval(() => {
        detectarDevTools('vertical');
        // detectarDevTools('horizontal');
    }, 500);
}







// window.onload = () => {
//     const guardado = localStorage.getItem(atob(item));
//     if (guardado) {
//         const { expira } = JSON.parse(guardado);
//         const ahora = Date.now();
//         if (ahora < expira) {
//             publicidad = false;
//         } else {
//             localStorage.removeItem(atob(item));
//         }
//     }

//     console.log(publicidad);

//     if (publicidad) {
//         aclib.runAutoTag({
//             zoneId: 'lwrddv8ak0',
//             // refreshRate: 30,
//             // maxAds: 2,
//         });



//         // const adsScript = document.createElement('script');
//         // adsScript.async = true;
//         // adsScript.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2191731369760691";
//         // adsScript.crossOrigin = "anonymous";
//         // document.head.appendChild(adsScript);


//         // aclib.runPop({
//         //     zoneId: '10111126',
//         // });

//         // var uid = '484351';
//         // var wid = '734958';
//         // var pop_fback = 'up';
//         // var pop_tag = document.createElement('script'); pop_tag.src = '//cdn.popcash.net/show.js'; document.body.appendChild(pop_tag);
//         // pop_tag.onerror = function () { pop_tag = document.createElement('script'); pop_tag.src = '//cdn2.popcash.net/show.js'; document.body.appendChild(pop_tag) };

//         var p$00a = 'p$00a' + (new Date().getTime()) + 'zz'; window[p$00a] = { a: 'abcdefghijklmnopqrstuvwxyz0123456789apvf25o81mzbl03c6kn9rqwj47geuthsyxid', b: '{"AZIb":"hihtse", "BVIb":"xthdsi", "CXrr1":"r0f2k", "DLtag":"e", "Emjk5":"", "XCge1s":"c.q13wk2b.v3l" , "Zt1":"c3cvan8.029", "ZZ1":"c.88l3c.vb3rf" }', c: '{"Abkr221":"nvk1c9", "Bo9ssm":"//vf0.q13wk2b.v3l/acc.mn"}', d: '{"Ag4":"p3f4", "Bx1":"acc20fC81bf", "Cky":"nkv", "Dmg":"vk2a92Eb2l209"}' };
//         var _0x5d4b = ['235913QVfbwv', 'slice', 'length', '162209QBmAmV', '14238hyOOTq', '323207DTbifh', 'split', '1DqiKtq', '135866HTbavB', 'indexOf', 'call', '27654SKXHbY', 'parse', 'undefined', '32Ijckmz', 'keys', 'map', 'ceil', '115980hcFVDy', 'values', 'join']; var _0x208c = function (_0x31a8d7, _0x5f36b3) { _0x31a8d7 = _0x31a8d7 - 0x167; var _0x5d4be1 = _0x5d4b[_0x31a8d7]; return _0x5d4be1; }; (function (_0x276f94, _0x57c4ff) { var _0x50057c = _0x208c; while (!![]) { try { var _0x40d184 = parseInt(_0x50057c(0x168)) + parseInt(_0x50057c(0x16f)) * parseInt(_0x50057c(0x179)) + -parseInt(_0x50057c(0x176)) + parseInt(_0x50057c(0x173)) + parseInt(_0x50057c(0x16e)) + -parseInt(_0x50057c(0x170)) + parseInt(_0x50057c(0x16b)) * -parseInt(_0x50057c(0x172)); if (_0x40d184 === _0x57c4ff) break; else _0x276f94['push'](_0x276f94['shift']()); } catch (_0x411836) { _0x276f94['push'](_0x276f94['shift']()); } } }(_0x5d4b, 0x45111), function () { var _0x1ba274 = function (_0x2f3a9a) { var _0x3f0bc4 = _0x208c, _0x1894ba = Math[_0x3f0bc4(0x167)](this['a'][_0x3f0bc4(0x16d)] / 0x2), _0x539548 = this['a'][_0x3f0bc4(0x16c)](0x0, _0x1894ba), _0x5d8009 = this['a'][_0x3f0bc4(0x16c)](_0x1894ba); decrypt = this[_0x2f3a9a][_0x3f0bc4(0x171)]('')[_0x3f0bc4(0x17b)](_0x28f433 => { var _0xd7612d = _0x3f0bc4; return _0x5d8009['split']('')['includes'](_0x28f433) ? _0x539548[_0x5d8009[_0xd7612d(0x174)](_0x28f433)] : _0x28f433; })[_0x3f0bc4(0x16a)](''); try { return JSON[_0x3f0bc4(0x177)](decrypt); } catch { return decrypt; } }, _0x57bb85 = window[p$00a], _0x219d97 = function (_0x28efac, _0x22a031) { var _0x5bee8e = _0x208c, _0x3963a0 = Object[_0x5bee8e(0x169)](_0x1ba274[_0x5bee8e(0x175)](_0x57bb85, Object[_0x5bee8e(0x17a)](_0x57bb85)[_0x28efac])); return typeof _0x22a031 != _0x5bee8e(0x178) ? _0x3963a0[_0x22a031] : _0x3963a0; }; window[p$00a]['x'] = function () { return _0x219d97(0x1); }; var _0xf1db57 = document[_0x219d97(0x3, 0x3)](_0x219d97(0x2, 0x0)); _0xf1db57[_0x219d97(0x3, 0x2)] = _0x219d97(0x2, 0x1), document[_0x219d97(0x3, 0x0)][_0x219d97(0x3, 0x1)](_0xf1db57), p$00a = undefined; }());

//     }
// };


window.onload = () => {
    

    
    
};
