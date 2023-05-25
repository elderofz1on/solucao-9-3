let tempo = 5000
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P0, 1)
    basic.pause(tempo)
    pins.digitalWritePin(DigitalPin.P0, 0)
    basic.pause(tempo)
    tempo += -250
})
