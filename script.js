var el_up = document.getElementById("GFG_UP");
var el_down = document.getElementById("GFG_DOWN");
var str = 'No key pressed';
	
function gfg_Run() {
    el_down.innerHTML = str;
}
document.onkeydown = function(e) {
    switch (e.keyCode) {
        case 37:
            str = 'Left Key pressed!';
            break;
        case 38:
            str = 'Up Key pressed!';
            break;
        case 39:
            str = 'Right Key pressed!';
            break;
        case 40:
            str = 'Down Key pressed!';
            break;
    }
};