function enableScreen () {
    led.stopAnimation()
    basic.clearScreen()
    led.enable(true)
    led.setBrightness(Math.idiv(input.lightLevel(), 4) * 3 + 64)
}
function showTemperature () {
    temperature = input.temperature()
    enableScreen()
    basic.showNumber(input.temperature())
    basic.pause(500)
    basic.clearScreen()
    led.enable(false)
}
input.onButtonPressed(Button.A, function () {
    enableScreen()
    basic.showString("" + (Math.idiv(input.runningTime(), 86400000) + 1) + " days")
    led.enable(false)
})
input.onButtonPressed(Button.B, function () {
    showTemperature()
})
let temperature = 0
music.startMelody(music.builtInMelody(Melodies.BaDing), MelodyOptions.OnceInBackground)
basic.showIcon(IconNames.Yes)
basic.pause(1500)
basic.clearScreen()
basic.pause(1000)
basic.forever(function () {
    if (Math.abs(temperature - input.temperature()) > 1) {
        if (temperature != 0) {
            enableScreen()
            basic.showLeds(`
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                `)
            basic.pause(100)
            basic.clearScreen()
            basic.pause(500)
        }
        showTemperature()
    }
    basic.pause(60000)
})
