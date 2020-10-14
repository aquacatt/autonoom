let vooruit = false
basic.forever(function () {
    if (maqueen.sensor(PingUnit.Centimeters) < 20) {
        neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB).showColor(neopixel.colors(NeoPixelColors.Red))
        maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CCW, 128)
        maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CCW, 128)
        music.playTone(294, music.beat(BeatFraction.Whole))
        basic.pause(1000)
        maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CW, 128)
        maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CCW, 128)
        basic.pause(500)
    } else {
        vooruit = true
        neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB).showColor(neopixel.colors(NeoPixelColors.Green))
        maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CW, 128)
        maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CW, 128)
    }
})
