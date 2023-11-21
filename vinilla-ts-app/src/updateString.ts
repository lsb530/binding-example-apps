export function setupStringUpdate(inputElement: HTMLInputElement, displayElement: HTMLParagraphElement) {
    let myString: string = inputElement.value || 'Initial value'
    // let myString: string = "Hellozzzaa"

    // 사용자의 입력에 의한 업데이트인지 프로그래마틱 업데이트인지 구분
    let updatedByUser = false
    const updateString = (newString: string) => {
        myString = newString
        displayElement.textContent = myString
        if (updatedByUser) {
            console.log(`사용자 입력으로 '${myString}'로 업데이트 되었습니다.`)
        } else {
            console.log(`코드에서 '${myString}'로 업데이트 되었습니다.`)
        }

        // 다음 업데이트를 위해 플래그 초기화
        updatedByUser = false
    }

    inputElement.addEventListener('input', (event) => {
        updatedByUser = true
        updateString((event.target as HTMLInputElement).value)
    })

    updateString(myString)
}
