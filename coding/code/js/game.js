const key = {
    keyDown : {},
    keyValue : {
        37: 'Left',
        38: 'Up',
        39: 'Right'
    }
}

const windowEvent = () => {
    window.addEventListener('keydown', e => {
        key.keyDown[key.keyValue[e.which]] = true;
        console.log(key.keyDown);
        // console.log('키 눌림: ' + key.keyValue[e.which]);
        // console.log('키 눌림: ' + e.which);
    });

    window.addEventListener('keyup', e => {
        key.keyDown[key.keyValue[e.which]] = false;
        console.log(key.keyDown);
        // console.log('키 업: ' + key.keyValue[e.which]);
        // console.log('키 업: ' + e.which);
    });
}

const init = () => {
    windowEvent();
}

window.onload = () => {
    init();
}
