var db = firebase.firestore()
var chocolateRef = db.collection("chocolate")

chocolateRef.doc("Ferrero Rocher").set({
    title: "Ferrero Rocher",
    description: "The Ferrero Rocher was introduced in 1982 in Europe. Shortly after release, production was halted due to a problem with label printing.[1][2] Michele Ferrero, the credited inventor, named the chocolate after a grotto in the Roman Catholic shrine of Lourdes, Rocher de Massabielle.[3] Rocher comes from the French and means rock or boulder.[4]",
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Christmas_00443.jpg/440px-Christmas_00443.jpg"
})
chocolateRef.doc("Lindt & Sprüngli").set({
    title: "Lindt & Sprüngli",
    description: "Chocoladefabriken Lindt & Sprüngli AG, more commonly known as Lindt, is a Swiss chocolatier and confectionery company founded in 1845 and known for its chocolate truffles and chocolate bars, among other sweets.",
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Chocolates_bokeh.jpg/340px-Chocolates_bokeh.jpg"
})
chocolateRef.doc("Toblerone").set({
    title: "Toblerone",
    description: "Toblerone (/ˈtoʊbləroʊn/; German: [tobləˈroːnə]) is a Swiss chocolate bar brand[1] currently owned by US confectionery company Mondelēz International, Inc., which was formerly Kraft Foods, the company that acquired the product from former owner Jacobs Suchard in 1990. It is produced in the capital city of Switzerland, Bern,[2] and the bear symbol of the city is still visible in the logo. Toblerone is known for its distinctive shape, which involves a series of joined triangular prisms.",
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Toblerone_3362.jpg/440px-Toblerone_3362.jpg"
})