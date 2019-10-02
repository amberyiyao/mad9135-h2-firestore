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
        document.querySelector('#editWindow .fa-check-circle').addEventListener('click', () => {
            let id = document.querySelector('#editWindow .fa-check-circle').getAttribute('data-id')
            let newId = document.querySelector('#editWindow input').value
            app.editInfor(id, "changeCat", newId)
            document.getElementById('editWindow').classList.add('hide')
        });
        document.querySelector('#editWindow .fa-times-circle').addEventListener('click', () => {
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
            span.addEventListener('click',()=>{
                
            })

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
        editCat.setAttribute("data-id", category)
        editCat.addEventListener('click', () => {
            document.getElementById('editWindow').classList.remove('hide')
            document.querySelector('#editWindow input').value = editCat.getAttribute("data-id")
            document.querySelector('#editWindow input').focus()
            document.querySelector('#editWindow .fa-check-circle').setAttribute('data-id', editCat.getAttribute("data-id"))
        })
        let trash = document.createElement('i')
        trash.className = "far fa-trash-alt"
        trash.setAttribute("data-id", category)
        trash.addEventListener('click', () => {
            app.deletCat(trash.getAttribute("data-id"))
        })

        divCat.appendChild(cat)
        divCat.appendChild(editCat)
        divCat.appendChild(trash)

        let sub = document.createElement('ul')
        sub.className = "sub " + category
        item.forEach(i => {
            let title = document.createElement('li')
            title.textContent = i;
            sub.appendChild(title)
        })
        let addItem = document.createElement('i')
        addItem.className = "far fa-plus-square"
        addItem.addEventListener('click',()=>{
            document.getElementById(`add${category}`).classList.remove('hide')
            addItem.classList.add('hide')
            document.querySelector(`#add${category} input`).focus()
        })
        sub.appendChild(addItem)

        let addDiv = document.createElement('div')
        addDiv.className = "hide"
        addDiv.setAttribute('id',`add${category}`)
        let input = document.createElement('input')
        input.setAttribute("type", "text")

        let checkI = document.createElement('i')
        checkI.className = "far fa-check-circle"
        checkI.addEventListener('click',()=>{
            app.editInfor(category, "addItem")
        })

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
    editInfor(id, ops, newId) {
        if (ops == "changeCat") {
            app.db.collection("snack").doc(id).get().then(function (doc) {
                if (doc && doc.exists) {
                    let data = doc.data();
                    app.db.collection("snack").doc(newId).set(data).then(() => {
                        app.db.collection("snack").doc(id).delete();
                    });
                }
            });
        } else if (ops == "addItem"){
            app.db.collection("snack").doc(id).get().then((doc)=>{
                let array = doc.data().items
                array.push(document.querySelector(`#add${id} input`).value)
                app.db.collection("snack").doc(id).set({
                    items: array
                })
            })
            document.getElementById(`add${id}`).classList.add('hide')
            document.querySelector(`.id .fa-plus-square`).classList.remove('hide')
        }
    },
    deletCat(id) {
        app.db.collection("snack").doc(id).delete();
    }
}

app.init()