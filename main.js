function CreateObject(path) {
    this.play = new Audio(path).play()

}
path = ''
function applyListener() {
    function onClick() {
        for (var i = 0; i < 8; i++) {
            document.querySelectorAll('img')[i].addEventListener('click', function () {
                path = './sounds/' + this.alt + '.wav'
                CreateObject(path).play()
            })
        }
    }
    let keyPath = ''
    function onKeyPress() {
        document.addEventListener('keydown', function (event) {
            if (event.key === 'l')
                keyPath = 'crash'
            else if (event.key === 's')
                keyPath = 'highHat'
            else if (event.key === 'a')
                keyPath = 'ride'
            else if (event.key === 'd')
                keyPath = 'snare'
            else if (event.key === 'n')
                keyPath = 'lowTom'
            else if (event.key === 'c')
                keyPath = 'bass'
            else if (event.key === 'j')
                keyPath = 'highTom'
            else if (event.key === 'k')
                keyPath = 'floorTom'
            else
                keyPath = ''


            path = './sounds/' + keyPath + '.wav'
            new CreateObject(path).play()
        })
    }
    onClick()
    onKeyPress()

}
applyListener()