const home = {
    init: function(selector) {
        this.cacheDom()
        this.manipulateDOM()
    },
    cacheDom: function() {
        this.tab = document.querySelector("#homeText")
        this.img = document.createElement("img")
        this.para = document.createElement("p")
        this.img.src = "images/angry-wife.jpg"
    },
    manipulateDOM: function() {
        this.tab.textContent = "Ce Vole Er Guanciale is a restaurant specialized in recipes using a pork cut called Guanciale." +
        "The most famous meal of the house is the classical chef's Gustavo Tonin Pasta Alla Carbonara. Some say people only start living after tasting it."
        this.tab.appendChild(this.img)
        this.para.textContent = "'Guanciale' is a traditional italian cured meat. Pronounced gwan-chee-AH-lay the" +
        "name refers to one of the few cuts taken from the head of the pig, the jowl or cheek: 'guancia' - Italian for cheek, hence, Guanciale!"
        this.tab.appendChild(this.para)
    }
}

export {
    home
}