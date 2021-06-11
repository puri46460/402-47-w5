let action = 0
input.onGesture(Gesture.Shake, function () {
    action = randint(0, 2)
    if (action == 0) {
        basic.showLeds(`
            . # # . .
            . # # # .
            . . # # #
            . # . # #
            # . . . .
            `)
        music.playMelody("C5 B A G F E D C ", 120)
    } else if (action == 1) {
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
        music.playMelody("C D E F G A B C5 ", 120)
    } else if (action == 2) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        music.playMelody("A F E F D G E F ", 120)
    }
    basic.clearScreen()
})
