const openWindowButtons = document.querySelectorAll('[data-window-target]')
const closeWindowButtons = document.querySelectorAll("[data-close-button]")
const overlay = document.getElementById('overlay')

openWindowButtons.forEach(button => {
    button.addEventListener('click', () => {
        const window = document.querySelector(button.dataset.windowTarget)
        openWindow(window)
    })
})
// overlay.addEventListener('click', () => {
//     const windows = document.querySelectorAll(".window.active")
//     windows.forEach(window => {
//         closeWindow(window)
//     })
// })

closeWindowButtons.forEach(button => {
    button.addEventListener('click', () => {
        const window = button.closest('.window')
        closeWindow(window)
    })
})


function openWindow(window) {
    if (window == null) return
    window.classList.add('active')
    overlay.classList.add('active')
}

function closeWindow(window) {
    window.classList.remove('active')
    overlay.classList.remove('active')
}

function myFunction() {
    let x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}
