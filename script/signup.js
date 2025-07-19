import { enableValidation } from "./validation.js"


const signForm = document.querySelector('.signUp')

function submitForm(event){
    event.preventDefault()
    const elements = [...signForm.elements].filter(item => item.tagName !== 'BUTTON')
    const obj = {}
    elements.forEach((input) => obj[input.name] = input.value)
    console.log(obj)
}

signForm.addEventListener('submit', submitForm)
enableValidation('.form__input__signUp', '.signUp__button')


