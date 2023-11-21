export function setupStringUpdate(inputElement: HTMLInputElement, displayElement: HTMLParagraphElement) {
    let myString: string = inputElement.value || "Initial value"
    const updateString = (newString: string) => {
        myString = newString
        displayElement.textContent = myString
    }

    inputElement.addEventListener('input', (event) => {
        updateString((event.target as HTMLInputElement).value)
    })

    updateString(myString)
}
