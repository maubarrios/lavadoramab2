input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Square)
    basic.pause(500)
    basic.clearScreen()
    basic.showLeds(`
        . . . . .
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        `)
    for (let index = 0; index < 5; index++) {
        led.plot(4, 0)
        basic.pause(200)
        led.unplot(4, 0)
        led.plot(3, 1)
        basic.pause(200)
        led.unplot(3, 1)
        led.plot(2, 2)
        basic.pause(200)
        led.unplot(2, 2)
        led.plot(1, 3)
        basic.pause(200)
        led.unplot(1, 3)
    }
    basic.showIcon(IconNames.Square)
    for (let index = 0; index < 5; index++) {
        led.plot(1, 1)
        basic.pause(200)
        led.unplot(1, 1)
        led.plot(2, 2)
        basic.pause(200)
        led.unplot(2, 2)
        led.plot(3, 3)
        basic.pause(200)
        led.unplot(3, 3)
        led.plot(4, 4)
        basic.pause(200)
    }
    for (let index = 0; index < 5; index++) {
        basic.showIcon(IconNames.QuarterNote)
        basic.pause(100)
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . . # # #
            . . # # #
            `)
        basic.pause(100)
    }
    basic.showLeds(`
        # . . . #
        # # # # #
        . . . . .
        . . . . .
        . . . . .
        `)
    for (let index = 0; index < 5; index++) {
        basic.pause(200)
        led.unplot(2, 1)
        led.plot(2, 2)
        basic.pause(200)
        led.unplot(2, 2)
        led.plot(2, 3)
        basic.pause(200)
        led.unplot(2, 3)
        led.plot(2, 4)
        basic.pause(200)
        led.unplot(2, 4)
    }
    basic.showIcon(IconNames.Square)
    for (let index = 0; index < 5; index++) {
        led.plot(1, 1)
        basic.pause(200)
        led.unplot(1, 1)
        led.plot(2, 2)
        basic.pause(200)
        led.unplot(2, 2)
        led.plot(3, 3)
        basic.pause(200)
        led.unplot(3, 3)
        led.plot(4, 4)
        basic.pause(200)
    }
    for (let index = 0; index < 5; index++) {
        basic.showIcon(IconNames.QuarterNote)
        basic.pause(100)
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . . # # #
            . . # # #
            `)
        basic.pause(100)
    }
    basic.showLeds(`
        # . . . #
        # # # # #
        . . . . .
        . . . . .
        . . . . .
        `)
    for (let index = 0; index < 5; index++) {
        basic.pause(200)
        led.unplot(2, 1)
        led.plot(2, 2)
        basic.pause(200)
        led.unplot(2, 2)
        led.plot(2, 3)
        basic.pause(200)
        led.unplot(2, 3)
        led.plot(2, 4)
        basic.pause(200)
        led.unplot(2, 4)
    }
    for (let index = 0; index < 5; index++) {
        basic.showLeds(`
            . . # . #
            . . # # #
            . . # . .
            . . # # #
            . . # . #
            `)
        basic.pause(100)
        basic.showLeds(`
            # . # . .
            # # # . .
            . . # . .
            # # # . .
            # . # . .
            `)
        basic.pause(100)
    }
    basic.showIcon(IconNames.Square)
})
