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
        basic.pause(1000*60*10)
        basic.showArrow(ArrowNames.South)
        TIP_sound_and_zhendong()
        mins += 10
        working = 0
        funing = 1
        basic.showLeds(`
            # . . . .
            # . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.pause(1000*60*2)
        basic.showArrow(ArrowNames.North)
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
input.onGesture(Gesture.Shake, function () {
    if (working == 0 && funing == 0) {
        basic.clearScreen()
        basic.showString("" + (mins))
    } else {
    	
    }
})
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
        basic.pause(1000*60*20)
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
        basic.pause(1000*60*4)
        basic.showArrow(ArrowNames.North)
        TIP_sound_and_zhendong()
        working = 0
        funing = 0
    } else {
        tip()
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
