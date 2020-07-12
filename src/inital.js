const layout = {

    init: function(selector) {
        this.cacheDom()
        this.manipulateDOM()
        this.render(selector)
    },
    clearPage: function() {
        content.innerHTML = ''
    },
    cacheDom: function() {
        this.content = document.querySelector("#content")
        this.restaurantName = document.createElement('div')
    },
    manipulateDOM: function() {
        this.restaurantName.id = "restaurantName"
        this.restaurantName.textContent = "Ce Vole Er Guanciale"
    },
    render: function(selector) {
        this.content.insertBefore(this.restaurantName, this.content.firstChild)
    }
}

export {
    layout
}