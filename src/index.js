import {menu} from "./menu.js"
import {layout} from "./inital.js"
import {home} from "./home.js"

layout.init()

home.init()

menu.init()



// const menu = {

//     init: function() {
//         this.cacheDom()
//         this.render()
//     },
//     cacheDom: function() {
//         this.cards = document.createElement('div')
//         this.cards.id = "cards"
//     },
//     render: function() {
//         layout.content.appendChild(this.cards)
//         for(i=0; i < 8; i++){
//             const newDiv = document.createElement('div');
//             newDiv.id = 'card'+i;
//             newDiv.className = 'food';
//             newDiv.textContent = "food"
//             this.cards.appendChild(newDiv);
//          }
//         layout.menu.style.color = "blue"
//     }
// }

// const contactUs = {

//     init: function() {
//         this.render()
//     },


//     render: function() {
//         layout.contactUs.style.color = "blue"
//     }
// }


