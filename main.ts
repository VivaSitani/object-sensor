let distance = 0
basic.forever(function () {
    distance = sonar.ping(
    DigitalPin.P0,
    DigitalPin.P1,
    PingUnit.Inches
    )
    if (distance <= 30 && distance >= 20) {
        music.playTone(349, music.beat(BeatFraction.Whole))
    }
})
