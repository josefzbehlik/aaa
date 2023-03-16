// let strip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
// strip.setPixelColor(0, neopixel.hsl(95,99,10))
// strip.setPixelColor(1, neopixel.hsl(0, 99, 10))
// strip.setPixelColor(2, neopixel.hsl(230, 99, 10))
// strip.setPixelColor(3, neopixel.hsl(310, 99, 10))
// strip.show();



// basic.forever (function (){
// strip.rotate(1)
// strip.show()
// basic.pause(110)
// })


function ping(
    trig: DigitalPin,
    echo: DigitalPin,
    maxCmDistance = 500) : number{
        pins.setPull(trig, PinPullMode.PullNone);
        pins.digitalWritePin(trig, 0)
        control.waitMicros(2)
        pins.digitalWritePin(trig,1)
        control.waitMicros(10)
        pins.digitalWritePin(trig,0)

        let duration = pins.pulseIn(echo, PulseValue.High,1/340 * 10)
        
        return Math.round(duration / 340 / 2 * 10)
    }

basic.forever(function() {
    console.logValue("d", ping(DigitalPin.P8,DigitalPin.P15))
})










