import { BaseComponent } from "./BaseComponent.js"
class Task extends BaseComponent {
    constructor() {
        //vì nội dung của 1 task do thuộc tính quyết định
        //thuộc tính truyền từ ngoài vào là props
        super();
        this.props = {
            "content": '',
            "is-completed": false,
           "date-modified": null
        };
        }

        static get observedAttributes(){
            return ['content','is-completed','date-modified']
        }
        render(){
            this._shadowRoot.innerHTML = `
            <div class ="task">
            <div id = content>${this.props.content}</div>
            <div id = isComplted>${this.props["is-completed"]}</div>
            <div id = "date-modified">${this.props["date-modified"]}</>
            </div>
            `;
        }
       
}
window.customElements.define('task-contanier',Task)