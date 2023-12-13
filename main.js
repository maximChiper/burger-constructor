const addMeat = document.querySelector('#add-meat')
const meat = document.querySelector('.meat')
addMeat.addEventListener('click', () => {
    const original = document.querySelector('#meat')
    const clone = original.cloneNode(true)
    meat.append(clone)
})

const addBottomSauce = document.querySelector('#add-bottom-sauce')
const bottomSauce = document.querySelector('.bottom-sauce')

addBottomSauce.addEventListener('click', () => {
    const original = document.querySelector('#bottom-sauce')
    const clone = original.cloneNode(true)
    bottomSauce.append(clone)
})

const addTopSauce = document.querySelector('#add-top-sauce')
const topSauce = document.querySelector('.top-sauce')

addTopSauce.addEventListener('click', () => {
    const original = document.querySelector('#top-sauce')
    const clone = original.cloneNode(true)
    topSauce.append(clone)
})

const addCheese = document.querySelector('#add-cheese')
const cheese = document.querySelector('.cheese')

addCheese.addEventListener('click', () => {
    const original = document.querySelector('#cheese')
    const clone = original.cloneNode(true)
    cheese.append(clone)
})


const addToppings = document.querySelector('#add-toppings')
const toppings = document.querySelector('.toppings')

addToppings.addEventListener('click', () => {
    const original = document.querySelector('#toppings')
    const clone = original.cloneNode(true)
    toppings.append(clone)
})


