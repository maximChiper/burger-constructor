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

function a(e, event) {
    const a = event.target.value
    console.log(a);
    fetch('http://localhost:3000/ingrediente')
        .then((response) => {
            return response.json()
        })
        .then((object) => {
            console.log(object);
            object.forEach(item => {
                const insertdiv = item.div.split('"');
                const divselect = document.getElementsByClassName(`${insertdiv}`);
                if (a === item.nume) {
                    const structure = `<div>
            <span class="image-description">${item.prescurtare}</span>
            <img src="img-burger/${item.arrow}" alt="">
            <img src="img-burger/${item.img}" class="component-img" alt="">
</div>`;
                        for (let i = 0; i < divselect.length; i++) {
                            if(divselect[i].innerHTML.length === 0){
                                divselect[i].innerHTML += structure;
                            }
                            else{
                                divselect[i].innerHTML = structure;
                            }
                        }
                }
            });
        })
}




