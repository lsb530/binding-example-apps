export function setupLook() {
    let look = 'Not handsome'
    const lookDisplay = document.querySelector<HTMLHeadingElement>('#look-display')!
    const lookButton = document.querySelector<HTMLButtonElement>('#look-button')!

    const updateLook = () => {
        look = look === 'Not handsome' ? 'handsome' : 'Not handsome'
        lookDisplay.textContent = look
        lookDisplay.style.color = look === 'Not handsome' ? 'yellow' : 'green'
    }

    lookButton.addEventListener('click', updateLook)
}