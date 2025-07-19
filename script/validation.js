function Validation(input, button, inputs){
    const errorMessage = input.nextElementSibling // обращается к следующему элементу после инпута (сообщение об ошибке)
    if(input.validity.patternMismatch){ // проверка на соответствие паттерна
        errorMessage.textContent = errorMessage.getAttribute('data-error-pattern') // вывод соответствующего сообщения об ошибке
    }
    else if(input.validity.tooLong || input.validity.tooShort){ // проверка длины
        errorMessage.textContent = errorMessage.getAttribute('data-error-length')
    }
    else if(input.validity.valueMissing){ // проверка на пустое поле
        errorMessage.textContent = 'это поле обязательно для заполнения'
    }
    else{
        errorMessage.textContent = ''
    }
    button.disabled = ![...inputs].every(input => input.validity.valid) // проверка на валидность всех инпутов формы, 
                                                                       // блокировка кнопки в противном случае
}

export function enableValidation(inputSelector, buttonSelector){
    const inputs = document.querySelectorAll(inputSelector)
    const button = document.querySelector(buttonSelector)
    inputs.forEach((input) => input.addEventListener('input', () => Validation(input, button, inputs)))
}

