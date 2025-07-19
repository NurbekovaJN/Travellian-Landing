import { enableValidation } from "./validation.js"

const form = document.querySelector('.logIn')

function submitForm(event){
    event.preventDefault()
    const elements = [...form.elements].filter(item => item.tagName !== 'BUTTON')
    const obj = {}
    elements.forEach((input) => obj[input.name] = input.value)
    console.log(obj)
}

form.addEventListener('submit', submitForm)
enableValidation('.form__input', '.form__submit')

