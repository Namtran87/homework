// class MemeContainer extends HTMLElement {
//     constructor() {
//         super();
//         this._shadowRoot = this.attachShadow({ mode: 'open' });
//         this.shadowRoot.innerHTML = `
//         <div class = "meme-container">
//            <div id = "name"></div>
//            <img src = ""/>
//            <div id = "date-modified"></div>
//         </div>
//         `;

//     }
//     static get observedAttributes(){
//         return['name','image','date-modified'];
//     }
//     /**
//  * được gọi  lần duy nhất
//  * Khi mà component được sinh ra trên trang web
//  */
//     connectedCallback() {
//         console.log("conponent has bonrned");
//     }
//     /**
//      * Được gọi khi attribute của component được thay đổi
//      * @param string name: tên thuộc tính thay đổi.
//      * @param string oldValue: giá trị cũ trước khi thay đổi
//      * @param string newValue: giá trị mới của thuộc tính
//      */
//     attributeChangedCallback(name, oldValue, newValue) {
//         if (name == "name") {
//             this._shadowRoot.querySelector('#name').innerHTML = newValue;
//         } else if (name == 'image') {
//             this._shadowRoot.querySelector('img').setAttribute('src', newValue);
//         } else if (name == 'date-modified') {
//             this._shadowRoot.querySelector('#date-modified').innerHTML = newValue;
//         }
//     }
//     /**
//      * Được gọi 1 lần duy nhất
//      * khi component bị xóa đi
//      */
//     disconnectedCallback() {
// console.log('conponent has ended');
//     }
// }
// // định nghĩa thẻ
// window.customElements.define('meme-container',MemeContainer)

import"./Task.js";