const addMeat = document.querySelector('#add-meat')
const meat = document.querySelector('.meat')
const addBottomSauce = document.querySelector('#add-bottom-sauce')
const bottomSauce = document.querySelector('.bottom-sauce')
const addTopSauce = document.querySelector('#add-top-sauce')
const topSauce = document.querySelector('.top-sauce')
const addCheese = document.querySelector('#add-cheese')
const cheese = document.querySelector('.cheese')
const addToppings = document.querySelector('#add-toppings')
const toppings = document.querySelector('.toppings')


addMeat.addEventListener('click', () => {
    const original = document.querySelector('#meat')
    const clone = original.cloneNode(true)
    meat.append(clone)
    const deleteItem = document.createElement('div')
    deleteItem.classList.add('del-item')
    clone.append(deleteItem)
    deleteItem.addEventListener('click', () => {
        clone.remove()
    })
})




addBottomSauce.addEventListener('click', () => {
    const original = document.querySelector('#bottom-sauce')
    const clone = original.cloneNode(true)
    bottomSauce.append(clone)
    const deleteItem = document.createElement('div')
    deleteItem.classList.add('del-item')
    clone.append(deleteItem)
    deleteItem.addEventListener('click', () => {
        clone.remove()
    })
})


addTopSauce.addEventListener('click', () => {
    const original = document.querySelector('#top-sauce')
    const clone = original.cloneNode(true)
    topSauce.append(clone)
    const deleteItem = document.createElement('div')
    deleteItem.classList.add('del-item')
    clone.append(deleteItem)
    deleteItem.addEventListener('click', () => {
        clone.remove()
    })
})


addCheese.addEventListener('click', () => {
    const original = document.querySelector('#cheese')
    const clone = original.cloneNode(true)
    cheese.append(clone)
    const deleteItem = document.createElement('div')
    deleteItem.classList.add('del-item')
    clone.append(deleteItem)
    original.append(deleteItem)
    deleteItem.addEventListener('click', () => {
        clone.remove()
    })
})


addToppings.addEventListener('click', () => {
    const original = document.querySelector('#toppings')
    const clone = original.cloneNode(true)
    toppings.append(clone)
    const deleteItem = document.createElement('div')
    deleteItem.classList.add('del-item')
    clone.append(deleteItem)
    deleteItem.addEventListener('click', () => {
        clone.remove()
    })
})

const meatImg = document.querySelector('.meat-img')
const patty = document.querySelector('#meat-selection')
patty.addEventListener('change',()=>{
    console.log('eeeeeeeeeeeeee')
})


