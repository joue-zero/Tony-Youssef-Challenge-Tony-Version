var root = document.querySelector(":root");
var dark = true;
function toggleMode() {
    if (dark == false){
        dark = true;
        root.style.setProperty('--fade-white', 'rgba(255, 255, 255, .5');
        root.style.setProperty('--body-bg', 'hsl(217, 54%, 11%)');
        root.style.setProperty('--card-bg', 'hsl(216, 50%, 16%)');
        root.style.setProperty('--text-color', 'white');
        root.style.setProperty('--card-overflow', '#00fff74f');
        root.style.setProperty('--light-terqouise', '#00fff8');
        root.style.setProperty('--line-color', 'hsl(0deg 0% 100% / 20%)');
    }
    else {
        dark = false;
        root.style.setProperty('--fade-white', 'rgba(0, 0, 0, .7');
        root.style.setProperty('--body-bg', 'white');
        root.style.setProperty('--card-bg', '#deefed');
        root.style.setProperty('--text-color', 'rgba(0, 0, 0, .8');
        root.style.setProperty('--card-overflow', '#00fff74f');
        root.style.setProperty('--light-terqouise', '#007471');
        root.style.setProperty('--line-color', 'hsl(0deg 0% 100% / 20%)');
    }
    console.log(dark)
}