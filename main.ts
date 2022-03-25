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
        music.playMelody("C D E F G A B C5 ", 120)
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
        music.playMelody("C D E F G A B C5 ", 120)
        working = 0
        funing = 0
    } else {
        basic.showIcon(IconNames.No)
        tip()
    }
})
function tip () {
    if (working == 1) {
        basic.showString("working")
    } else if (funing == 1) {
        basic.showString("funing")
    } else {
    	
    }
}
input.onGesture(Gesture.Shake, function () {
    if (working == 0 && funing == 0) {
        basic.clearScreen()
        basic.showString("" + (mins))
    } else {
        tip()
    }
})
input.onButtonPressed(Button.AB, function () {
    if (working == 0 && funing == 0) {
        mins += 10
    } else {
        tip()
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
        music.playMelody("C D E F G A B C5 ", 120)
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
        music.playMelody("C D E F G A B C5 ", 120)
        working = 0
        funing = 0
    } else {
        basic.showIcon(IconNames.No)
        tip()
    }
})
let mins = 0
let funing = 0
let working = 0
working = 0
funing = 0
mins = 0
basic.showIcon(IconNames.Happy)
music.setVolume(150)
music.playMelody("C D E F G A B C5 ", 200)
