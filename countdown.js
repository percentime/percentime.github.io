function initTimer(a) {
    function k() {
        var a, b = new Date;
        b.setHours(0), b.setMinutes(h.min), b.setSeconds(h.sec);
        var c = Date.now() - j;
        console.log(c), cumulativeTime += c, console.log(cumulativeTime), j = Date.now();
        var d = new Date(b.valueOf() - c),
            e = d.toTimeString().split(" "),
            f = e[0].split(":");
        h.min = f[1], h.sec = f[2], cumulativeTime >= timeToChime ? (a = "0000", i = a.split(""), l(i), countdownFinished()) : (a = h.min + h.sec, i = a.split(""), l(i), setTimeout(k, 1e3))
    }

    function l(a) {
        m(f.firstNum, a[0]), m(f.secondNum, a[1]), m(g.firstNum, a[2]), m(g.secondNum, a[3])
    }

    function m(a, b) {
        TweenMax.killTweensOf(a.querySelector(".number-grp-wrp")), TweenMax.to(a.querySelector(".number-grp-wrp"), 1, {
            y: -a.querySelector(".num-" + b).offsetTop
        })
    }
    var i, c = document.querySelector(".timer"),
        d = c.querySelector(".minutes-group"),
        e = c.querySelector(".seconds-group"),
        f = {
            firstNum: d.querySelector(".first"),
            secondNum: d.querySelector(".second")
        },
        g = {
            firstNum: e.querySelector(".first"),
            secondNum: e.querySelector(".second")
        },
        h = {
            min: a.split(":")[0],
            sec: a.split(":")[1]
        },
        j = new Date;
    setTimeout(k, 1e3)
}

function countdownFinished() {
    setTimeout(function() {
        TweenMax.set(reloadBtn, {
            scale: .8,
            display: "block"
        }), TweenMax.to(timerEl, 1, {
            opacity: .2
        }), TweenMax.to(reloadBtn, .5, {
            scale: 1,
            opacity: 1
        })
    }, 1e3), countdownFinished && audio.play()
}
TweenLite.defaultEase = Expo.easeOut, initTimer("14:25");
var reloadBtn = document.querySelector(".reload"),
    timerEl = document.querySelector(".timer"),
    timeToChime = new Date(865e3),
    cumulativeTime = 0,
    audio = new Audio("http://soundbible.com/grab.php?id=1815&type=mp3");
reloadBtn.addEventListener("click", function() {
    TweenMax.to(this, .5, {
        opacity: 0,
        onComplete: function() {
            reloadBtn.style.display = "none"
        }
    }), TweenMax.to(timerEl, 1, {
        opacity: 1
    }), cumulativeTime = 0, window.location.reload()
});
