const runningButton = document.getElementById("running-button")
const offset = 50

runningButton.addEventListener("click", () => {
    alert("Nice lol")
    window.close()
})

document.addEventListener("mousemove", (e) => {
    const x = e.pageX
    const y = e.pageY
    buttonBox = runningButton.getBoundingClientRect()
    const horizontalDistance = distanceFromCenter(buttonBox.x, x, buttonBox.width)
    const verticalDistance = distanceFromCenter(buttonBox.y, y, buttonBox.height)
    const horizontalOffset = buttonBox.width / 2 + offset
    const verticalOffset = buttonBox.height / 2 + offset
    if (Math.abs(horizontalDistance) < horizontalOffset && Math.abs(verticalDistance) < verticalOffset) {
        setButton(
            buttonBox.x + horizontalOffset / horizontalDistance * 20,
            buttonBox.y + verticalOffset / verticalDistance * 20
        )
    }
})

function distanceFromCenter(buttonTopLeft, mouse, buttonSize) {
    return buttonTopLeft - mouse + buttonSize / 2
}

function setButton(left, top) {
    const windowBox = document.body.getBoundingClientRect()
    const buttonBox = runningButton.getBoundingClientRect()
    const halfWidth = buttonBox.width / 2
    const halfHeight = buttonBox.height / 2
    var newLeft = left
    var newTop = top

    // On border
    if (distanceFromCenter(left, windowBox.left, buttonBox.width) <= 0) {
        newLeft = windowBox.right - buttonBox.width - 1.2 * offset
    }
    if (distanceFromCenter(left, windowBox.right, buttonBox.width) >= 0) {
        newLeft = windowBox.left + buttonBox.width + 1.2 * offset
    }
    if (distanceFromCenter(top, windowBox.top, buttonBox.height) <= 0) {
        newTop = windowBox.bottom - buttonBox.height - 1.2 * offset
    }
    if (distanceFromCenter(top, windowBox.bottom, buttonBox.height) >= 0) {
        newTop = windowBox.top + buttonBox.height + 1.2 * offset
    }

    // Set button position
    runningButton.style.left = `${newLeft}px`
    runningButton.style.top = `${newTop}px`
}
