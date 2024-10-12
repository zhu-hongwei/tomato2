function delay_time (num: number) {
    for (let index = 0; index < num; index++) {
        for (let index = 0; index < 60; index++) {
            basic.pause(1000)
        }
    }
}
input.onButtonPressed(Button.A, function () {
    if (working == 0 && funing == 0) {
        working = 1
        funing = 0
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            . . . . .
            . . . . .
            `)
        delay_time(15)
        TIP_sound_and_zhendong()
        mins += 15
        working = 0
        funing = 1
        for (let index = 0; index < 100; index++) {
            basic.showLeds(`
                # # # # #
                # # # # #
                # # # # #
                . . . . .
                . . . . .
                `)
            basic.showIcon(IconNames.Yes)
        }
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
            # # # # #
            `)
        delay_time(25)
        TIP_sound_and_zhendong()
        mins += 25
        working = 0
        funing = 1
        for (let index = 0; index < 100; index++) {
            basic.showLeds(`
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                `)
            basic.showIcon(IconNames.Yes)
        }
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
for (let index = 0; index < 3; index++) {
    basic.showIcon(IconNames.SmallHeart)
    basic.showIcon(IconNames.Heart)
}
