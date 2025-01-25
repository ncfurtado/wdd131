const themeSelector = document.querySelector('#modeSwitcher');
function changeTheme() {
const pageMode = themeSelector.value;
    if (pageMode === 'dark') {
        document.body.setAttribute('data-theme', 'dark_mode');
        document.querySelector('#logo').setAttribute('src', 'byui-logo_white.png');
        }
        else {
        document.body.setAttribute('data-theme', 'light_mode');
        document.querySelector('#logo').setAttribute('src', 'byui-logo_blue.webp');
        }
    }
    themeSelector.addEventListener('change', changeTheme);