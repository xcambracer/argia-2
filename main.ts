basic.forever(function () {
	
})
basic.forever(function () {
    if (input.lightLevel() > 200) {
        basic.showNumber(5)
    } else if (input.lightLevel() > 130) {
        basic.showNumber(4)
    } else if (input.lightLevel() > 60) {
        basic.showNumber(3)
    } else if (input.lightLevel() > 10) {
        basic.showNumber(2)
    } else {
        basic.showNumber(1)
    }
})
