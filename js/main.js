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
        
    },
    db:firebase.firestore(),
    getInfor(id) {
        app.db.collection("snack").doc("coffee").onSnapshot(res => {
            console.log(res.data().items)
        })
    },
    editInfor() {

    }
}

app.init()