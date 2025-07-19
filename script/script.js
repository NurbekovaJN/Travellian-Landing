import { enableValidation } from "./validation.js"

const form = document.querySelector('.main__form') // находим по селектору форму
const links = document.querySelectorAll('.header__link')
const subscribeForm = document.querySelector('.news__frame')

function submitForm(event){
    event.preventDefault() // сбрасываем настройки отправки формы
    const elements = [...form.elements].filter(item => item.tagName !== 'BUTTON') // избавляемся от кнопок среди элементов формы
    const obj = {} // создаем пустой объект
    elements.forEach((inp) => obj[inp.name] = inp.value) // наполняем объект значениями из инпутов
    console.log(obj)
}

function clickLinks(event){
    console.log(event);
    const selector = event.target.getAttribute('data-finish')
    const finish = document.querySelector(selector)
    window.scroll({
        top: finish.offsetTop - 100,
        behavior: 'smooth'
    })
}

function submitSubscribe(event){
    event.preventDefault()
    const elems = [...subscribeForm.elements].filter(item => item.tagName !== 'BUTTON')
    const objects = {}
    elems.forEach((input) => objects[input.name] = input.value)
    console.log(objects)
}


form.addEventListener('submit', submitForm) // вешаем слушатель события, который запускает 
                                            // функцию в ответ на отправку формы (перехватчик)

enableValidation('.form__input', '.main__button')
enableValidation('.input__email', '.subscribe')

links.forEach(link => link.addEventListener('click', clickLinks))
subscribeForm.addEventListener('submit', submitSubscribe)




const settingSlider = {
    leftBtnSelector : '.left__button',
    rightBtnSelector : '.right__button',
    containerSelector : '.dest__slider',
    distant : 32
}

function initSlider({leftBtnSelector, rightBtnSelector, containerSelector, distant}){

    const leftButton = document.querySelector(leftBtnSelector)
    const rightButton = document.querySelector(rightBtnSelector)
    const slideContainer = document.querySelector(containerSelector)
    console.log(slideContainer);
    const slide = slideContainer.children[0] // находим первый слайд
    const gap = window.screen.width > 500 ? distant : 0 // если ширина окна больше 500пк то дистанция между слайдами 32 или 0
    const delay = Math.floor(slideContainer.clientWidth / (slide.clientWidth + gap)) // разница для счетчика
    let count = 0

    leftButton.addEventListener('click', () => {
        count  === 0 ? count : count -- // если кол равно 0, то слайд остается на месте, если нет то кол уменьшается
        sliderScroll()
    })
    rightButton.addEventListener('click', () => {
        count + delay === slideContainer.children.length - 1 ? count : count ++ // если общий счетчик равен кол слайдов, 
                                                     // то счетчик не увеличивается, иначе увеличивается
        sliderScroll()
    })

    function sliderScroll(){
        const slideWidth = slide.clientWidth // свойство хранит ширину дом элемента
        slideContainer.scroll({
            left : (slideWidth + gap) * count, // сумма ширины слайда и гэп умноженное на количество кликов
            behavior : 'smooth'
        })
    }
}

const settingSpecialSlider = {
    leftBtnSelector : '.special .left__button',
    rightBtnSelector : '.special .right__button',
    containerSelector : '.special__content',
    distant : 32
}

const settingGallerySlider = {
    leftBtnSelector : '.gallery .left__button',
    rightBtnSelector : '.gallery .right__button',
    containerSelector : '.photo__container',
    distant : 32
}

const settingExpSlider = {
    leftBtnSelector : '.experience .left__button',
    rightBtnSelector : '.experience .right__button',
    containerSelector : '.exp__content',
    distant : 32
}


initSlider(settingSlider)
initSlider(settingSpecialSlider)
initSlider(settingGallerySlider)
initSlider(settingExpSlider)
