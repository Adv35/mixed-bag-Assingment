input.onButtonPressed(Button.A, function () {
    basic.showNumber(randint(230, 432))
})
serial.writeValue("y", 0)
basic.forever(function () {
    if (input.lightLevel() <= 100 && input.isGesture(Gesture.LogoUp)) {
        serial.writeLine("Dim-Up")
        serial.redirectToUSB()
    } else if (input.lightLevel() > 100 && (input.compassHeading() > 70 && input.compassHeading() < 110)) {
        serial.writeLine("Bright-East")
        serial.redirectToUSB()
    } else {
        basic.clearScreen()
    }
})
