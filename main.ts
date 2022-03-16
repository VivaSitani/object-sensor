let distance = 0
basic.forever(function () {
    distance = sonar.ping(
    DigitalPin.P0,
    DigitalPin.P1,
    PingUnit.Inches
    )
    if (distance <= 30 && distance > 20) {
        music.setVolume(130)
        music.setTempo(100)
        music.playTone(698, music.beat(BeatFraction.Half))
    } else if (distance <= 20 && distance > 10) {
        music.setVolume(140)
        music.setTempo(116)
        music.playTone(698, music.beat(BeatFraction.Half))
    } else if (distance <= 10) {
        music.setVolume(150)
        music.setTempo(125)
        music.playTone(698, music.beat(BeatFraction.Half))
    } else {
        music.stopAllSounds()
    }
})
