function saveNamePlayer() {
    var namePlayer = document.getElementById("name_player").value;
    window.chrome.webview.postMessage("saveNamePlayer=" + namePlayer);
}

// ห้ามคลุมดำ โค้ดจาก: https://webblog2u.blogspot.com/2012/10/blog-post.html
function disableselect() {
    return false;
}

function reEnable() {
    return true;
}

document.onselectstart = new Function("return false");
if (window.sidebar) {
    document.onmousedown = disableselect();
    document.onclick = reEnable();
}

// ห้ามคลิกขวา โค้ดจาก: https://webblog2u.blogspot.com/2012/10/blog-post.html
function clickIE() {
    if (document.all) {
        alert(message);
        return false;
    }
}

function clickNS(e) {
    if (document.layers || (document.getElementById && !document.all)) {
        if (e.which == 2 || e.which == 3) {
            alert(message);
            return false;
        }
    }
}

if (document.layers) {
    document.captureEvents(Event.MOUSEDOWN);
    document.onmousedown = clickNS;
} else {
    document.onmouseup = clickNS;
    document.oncontextmenu = clickIE;
}

document.oncontextmenu = new Function("return false");

// ห้ามลากรูป
document.ondragstart = function() {
    return false;
};

var bar = document.querySelector(".progress-bar");

function MakeProgressValue(i) {
    if (i != '100%') {
        if (i.length > 4 || i.length == 4) {
            i = i.substring(0, 4) + '%';
        }
        if (i.length > 6 || i.length == 6) {
            i = i.substring(0, 5) + '%';
        }
    }
    bar.style.width = i;
    document.getElementById('ui_progressbar').innerHTML = i;
}

function calPercentag(percent, amount) {
    var discount = (percent / amount) * 100;
    MakeProgressValue(discount + "%");
}


// Notification เว็บ: https://sweetalert2.github.io/
function notification(_time, _icon, _message) {
    const Toast = Swal.mixin({
        toast: true,
        /*
                position: 'top-end',*/
        position: 'bottom-end',
        showConfirmButton: false,
        timer: _time,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })

    Toast.fire({
        icon: _icon,
        title: _message
    })
}