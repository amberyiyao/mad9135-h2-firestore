var db = firebase.firestore()
var snackRef = db.collection("snack")


snackRef.doc("mySnacks").set({
    chocolate:["Ferrero Rocher", "Lindt & Sprüngli", "Toblerone"],
    cookies:["Oreo","Chips Ahoy","Nestlé"],
    coffee:["Starbucks","Maxwell House","Tim Hortons"]
})