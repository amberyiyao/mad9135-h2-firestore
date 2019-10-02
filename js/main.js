// var db = firebase.firestore()
// var snackRef = db.collection("snack")


// snackRef.doc("chocolate").set({
//     items: ["Ferrero Rocher", "Lindt & Sprüngli", "Toblerone"]
// })

// snackRef.doc("cookies").set({
//     items: ["Oreo", "Chips Ahoy", "Nestlé"]
// })

// snackRef.doc("coffee").set({
//     items: ["Starbucks", "Maxwell House", "Tim Hortons"]
// })


const app = {
    init() {
        app.addListeners()
        app.getInfor()
    },
    addListeners() {
        document.querySelector('#editWindow .fa-check-circle').addEventListener('click', app.editInfor);
        document.querySelector('#editWindow .fa-times-circle').addEventListener('click', ()=>{
            document.getElementById('editWindow').classList.add('hide')
        });
    },
    db: firebase.firestore(),
    getInfor() {
        app.db.collection("snack").onSnapshot(res => {
            let categories = document.querySelector(".categories")
            categories.innerHTML = ""
            let documentFragment = new DocumentFragment
            res.forEach(doc => {
                documentFragment.appendChild(app.createList(doc.id, doc.data().items))
            })
            
            let span = document.createElement('span')
            let addItem = document.createElement('i')
            addItem.className = "far fa-plus-square add-cat"
            let spanSub = document.createElement('span')
            spanSub.textContent = "Add New Categorie"
            span.appendChild(addItem)
            span.appendChild(spanSub)
            let addCat = document.createElement('div')
            addCat.className = "hide"
            let input = document.createElement('input')
            input.setAttribute("type", "text")
            let checkI = document.createElement('i')
            checkI.className = "far fa-check-circle"
            let closeI = document.createElement('i')
            closeI.className = "far fa-window-close"

            addCat.appendChild(input)
            addCat.appendChild(checkI)
            addCat.appendChild(closeI)

            documentFragment.appendChild(span)
            documentFragment.appendChild(addCat)

            categories.appendChild(documentFragment)
        })
    },
    createList(category, item) {
        let listAll = document.createElement('li')
        let divCat = document.createElement('div')
        let cat = document.createElement('p')
        cat.textContent = category

        let editCat = document.createElement('i')
        editCat.className = "fas fa-edit"
        editCat.setAttribute("data-id",category)
        editCat.addEventListener('clicl',()=>{
            console.log('dd')
            document.getElementById('editWindow').classList.remove('hide')
            document.querySelector('#editWindow input').value = editCat.getAttribute("data-id")
        })
        let trash = document.createElement('i')
        trash.className = "far fa-trash-alt"

        divCat.appendChild(cat)
        divCat.appendChild(editCat)
        divCat.appendChild(trash)

        let sub = document.createElement('ul')
        sub.className = "sub"
        item.forEach(i => {
            let title = document.createElement('li')
            title.textContent = i;
            sub.appendChild(title)
        })
        let addItem = document.createElement('i')
        addItem.className = "far fa-plus-square"
        sub.appendChild(addItem)

        let addDiv = document.createElement('div')
        addDiv.className = "hide"
        let input = document.createElement('input')
        input.setAttribute("type", "text")

        let checkI = document.createElement('i')
        checkI.className = "far fa-check-circle"
        let closeI = document.createElement('i')
        closeI.className = "far fa-window-close"

        addDiv.appendChild(input)
        addDiv.appendChild(checkI)
        addDiv.appendChild(closeI)

        sub.appendChild(addDiv)
        listAll.appendChild(divCat)
        listAll.appendChild(sub)

        return listAll
    },
    editInfor() {

    }
}

app.init()