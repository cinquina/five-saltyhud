var toggled = true

window.addEventListener('message', (event) => {
    if (event.data.type === 'toggle') {
        toggled = !toggled;
        document.getElementsByClassName('container').style.display = toggled ? 'flex' : 'none';
    }
});