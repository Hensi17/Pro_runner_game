const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

ctx.fillRect(0, 0, 800, 150);
ctx.fillRect(0, 450, 800, 150);
var y = 430;
var dis = 0;
var count = 0;
var x = 0;
var points = 0;

function move() {
    Rand();
    x = 0;
    const size = 20;
    ctx.fillStyle = 'red';
    const id = setInterval(() => {
        ctx.clearRect(0, 150, 800, 300);
        x += size;
        points = points + (count * 80 + x * 0.1);
        document.getElementById("sc").innerText = points;
        ctx.fillStyle = 'red';
        ctx.fillRect(x, y, size, size);
        end_game();

        if (x >= canvas.width) {
            clearInterval(id);
            move();
            ctx.fillStyle = 'Black';
            ctx.fillRect(0, 450, 800, 150);
            ctx.fillRect(0, 0, 800, 150);
            Rand();
            count = count + 1;
        }
    }, 200);
}

function jump() {
    ctx.clearRect(0, 150, 800, 300);
    if (y == 430) {
        y = 150;
    } else {
        y = 430;
    }
}

var h1, h_1;
var h2, h_2;
var h3, h_3;
var h4, h_4;

/*function Rand() {
    h1 = Math.floor((Math.random() * 550) + 10);
    h_1 = Math.floor((Math.random() * 550) + 10);
    ctx.clearRect(h1, 430, 50, 170);
    if ((h_1 < (h1 - 50) || h_1 > (h1 + 50)) && (h_1 < (h2 - 50) || h_1 > (h2 + 50)) && (h_1 < (h3 - 50) || h_1 > (h3 + 50)) && (h_1 < (h4 - 50) || h_1 > (h4 + 50))) {
        ctx.clearRect(h_1, 0, 50, 150);
    }
    h2 = Math.floor((Math.random() * 550) + 10);
    h_2 = Math.floor((Math.random() * 550) + 10);
    ctx.clearRect(h2, 430, 50, 170);
    if ((h_2 < (h1 - 50) || h_2 > (h1 + 50)) && (h_2 < (h2 - 50) || h_2 > (h2 + 50)) && (h_2 < (h3 - 50) || h_2 > (h3 + 50)) && (h_2 < (h4 - 50) || h_2 > (h4 + 50))) {
        ctx.clearRect(h_2, 0, 50, 150);
    }
    h3 = Math.floor((Math.random() * 550) + 10);
    h_3 = Math.floor((Math.random() * 550) + 10);
    ctx.clearRect(h3, 430, 50, 170);
    if ((h_3 < (h1 - 50) || h_3 > (h1 + 50)) && (h_3 < (h2 - 50) || h_3 > (h2 + 50)) && (h_3 < (h3 - 50) || h_3 > (h3 + 50)) && (h_3 < (h4 - 50) || h_3 > (h4 + 50))) {
        ctx.clearRect(h_3, 0, 50, 150);
    }
    h4 = Math.floor((Math.random() * 550) + 10);
    h_4 = Math.floor((Math.random() * 550) + 10);
    ctx.clearRect(h4, 430, 50, 170);
    if ((h_4 < (h1 - 50) || h_4 > (h1 + 50)) && (h_4 < (h2 - 50) || h_4 > (h2 + 50)) && (h_4 < (h3 - 50) || h_4 > (h3 + 50)) && (h_4 < (h4 - 50) || h_4 > (h4 + 50))) {
        ctx.clearRect(h_4, 0, 50, 150);
    }
}*/
var h2_ch = 0;
var h_2_ch = 0;
var h3_ch = 0;
var h_3_ch = 0;
var h4_ch = 0;
var h_4_ch = 0;
var h_1_ch = 0;

function Rand() {
    var minGap = 50;
    var bottomHeight = 170;
    var topHeight = 150;
    var bottomY = 430;
    var topY = 0;

    h1 = Math.floor((Math.random() * 550) + 50);
    //console.log("h1:"+h1);
    h_1 = h1 - 80; //Math.floor((Math.random() * 550) + 10);
    ctx.clearRect(h1, bottomY, minGap, bottomHeight);
    if (h_1 > 0 && h_1 < 800) {
        ctx.clearRect(h_1, topY, minGap, topHeight);
        h_1_ch = 1;
    }

    h2 = h1 + 80; //Math.floor((Math.random() * 550) + 10);	
    h_2 = h2 + 90; //Math.floor((Math.random() * 550) + 10);
    if (h2 > 0 && h2 < 800) {
        ctx.clearRect(h2, bottomY, minGap, bottomHeight);
        h2_ch = 1;

    }
    if (h_2 > 0 && h_2 < 800) {
        ctx.clearRect(h_2, topY, minGap, topHeight);
        h_2_ch = 1;
    }

    h3 = h_2 + 110; //Math.floor((Math.random() * 550) + 10);
    h_3 = h3 + 120; //Math.floor((Math.random() * 550) + 10);

    ctx.clearRect(h_3, topY, minGap, topHeight);
    if (h3 > 0 && h3 < 800) {
        ctx.clearRect(h3, bottomY, minGap, bottomHeight);
        h3_ch = 1;
    }
    if (h_3 > 0 && h_3 < 800) {
        ctx.clearRect(h_3, topY, minGap, topHeight);
        h3_ch = 1;
    }

    h4 = h_3 + 90; //Math.floor((Math.random() * 550) + 10);
    h_4 = h4 + 100; //Math.floor((Math.random() * 550) + 10);
    if (h4 > 0 && h4 < 800) {
        ctx.clearRect(h4, bottomY, minGap, bottomHeight);
        h4_ch = 1;
    }
    if (h_4 > 0 && h_4 < 800) {
        ctx.clearRect(h_4, topY, minGap, topHeight);
        h_4_ch = 1;
    }
}

function end_game() {
    if (y == 430) {

        if (x > h1 && x < (h1 + 50)) {
            document.getElementById("sc").innerText = points;
            alert("Congratulations!! Match over!! POINTS = " + points);
            document.getElementById("sc").innerText = "0";
            points = 0;
            x = 0;
        }
        if (h2_ch == 1) {
            if (x > h2 && x < (h2 + 50)) {
                document.getElementById("sc").innerText = points;
                alert("Congratulations!! Match over!! POINTS = " + points);
                document.getElementById("sc").innerText = "0";
                points = 0;
                x = 0;
            }
        }
        if (h3_ch == 1) {
            if (x > h3 && x < (h3 + 50)) {
                document.getElementById("sc").innerText = points;
                alert("Congratulations!! Match over!! POINTS = " + points);
                document.getElementById("sc").innerText = "0";
                points = 0;
                x = 0;
            }
        }
        if (h4_ch == 1) {
            if (x > h4 && x < (h4 + 50)) {
                document.getElementById("sc").innerText = points;
                alert("Congratulations!! Match over!! POINTS = " + points);
                document.getElementById("sc").innerText = "0";
                points = 0;
                x = 0;
            }
        }
    } else {
        if (h_1_ch == 1) {
            if (x > h_1 && x < (h_1 + 50)) {
                document.getElementById("sc").innerText = points;
                alert("Congratulations!! Match over!! POINTS = " + points);
                document.getElementById("sc").innerText = "0";
                points = 0;
                x = 0;
            }
        }
        if (h_2_ch == 1) {
            if (x > h_2 && x < (h_2 + 50)) {
                document.getElementById("sc").innerText = points;
                alert("Congratulations!! Match over!! POINTS = " + points);
                document.getElementById("sc").innerText = "0";
                points = 0;
                x = 0;
            }
        }
        if (h_3_ch == 1) {
            if (x > h_3 && x < (h_3 + 50)) {
                document.getElementById("sc").innerText = points;
                alert("Congratulations!! Match over!! POINTS = " + points);
                document.getElementById("sc").innerText = "0";
                points = 0;
                x = 0;
            }
        }
        if (h_4_ch == 1) {
            if (x > h_4 && x < (h_4 + 50)) {
                document.getElementById("sc").innerText = points;
                alert("Congratulations!! Match over!! POINTS = " + points);
                document.getElementById("sc").innerText = "0";
                points = 0;
                x = 0;
            }
        }
    }
}