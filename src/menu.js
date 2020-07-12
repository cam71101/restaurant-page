const menu = {
    init: function(selector) {
        this.cacheDom()
        this.manipulateDOM()
    },
    cacheDom: function() {
        this.tab = document.querySelector("#menuText")
    },
    manipulateDOM: function() {
        this.tab.textContent = "Primi Piatti (First Course):" +

        "Pasta alla Carbonara (Mezze Maniche)"
    }
}

export {
    menu
}