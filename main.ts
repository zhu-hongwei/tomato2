input.onButtonPressed(Button.A, function () {
    if (working == 0 && funing == 0) {
        working = 1
        funing = 0
        basic.showLeds(`
            # # # # #
            # # # # #
            . . . . .
            . . . . .
            . . . . .
            `)
        for (let index = 0; index < 600; index++) {
            basic.pause(1000)
        }
        TIP_sound_and_zhendong()
        mins += 10
        working = 0
        funing = 1
        for (let index = 0; index < 600; index++) {
            basic.showLeds(`
                # # # # #
                # # # # #
                . . . . .
                . . . . .
                . . . . .
                `)
            basic.showIcon(IconNames.Heart)
        }
        basic.pause(1000)
        TIP_sound_and_zhendong()
        working = 0
        funing = 0
    } else {
        tip()
    }
})
function tip () {
    if (working == 1) {
        basic.showString("w")
    } else if (funing == 1) {
        basic.showString("f")
    } else {
    	
    }
}
function TIP_sound_and_zhendong () {
    music.playMelody("C D E F G A B C5 ", 120)
    pins.digitalWritePin(DigitalPin.P12, 1)
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.P12, 0)
}
input.onButtonPressed(Button.AB, function () {
    if (working == 0 && funing == 0) {
        mins += 10
    } else {
    	
    }
})
input.onButtonPressed(Button.B, function () {
    if (working == 0 && funing == 0) {
        working = 1
        funing = 0
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            . . . . .
            `)
        for (let index = 0; index < 600; index++) {
            basic.pause(1000)
        }
        basic.showArrow(ArrowNames.South)
        TIP_sound_and_zhendong()
        mins += 20
        working = 0
        funing = 1
        basic.showLeds(`
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            . . . . .
            `)
        basic.pause(null)
        basic.showArrow(ArrowNames.North)
        TIP_sound_and_zhendong()
        working = 0
        funing = 0
    } else {
        tip()
    }
})
input.onGesture(Gesture.Shake, function () {
    if (working == 0 && funing == 0) {
        basic.clearScreen()
        basic.showString("" + (mins))
    } else {
    	
    }
})
let mins = 0
let funing = 0
let working = 0
working = 0
funing = 0
mins = 0
music.setVolume(150)
pins.digitalWritePin(DigitalPin.P12, 0)
basic.showIcon(IconNames.Happy)
