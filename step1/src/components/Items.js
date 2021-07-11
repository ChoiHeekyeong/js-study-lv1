import Component from "../core/Component.js";




export default class Items extends Component{
   
    template() {
        const { todoItems} = this.$state;
        return `
        
        ${todoItems.map(({ id, content, isComplete }) =>`
            <li data-id="${id}">
            <p data-component="itmes" ${isComplete ? ' style="color: #09F"' : ''}>
            <input type="checkbox" class="toggle" ${isComplete ? `checked ` : ``}/>
            ${content}</p>
            <button type="button">취소</button>
            <button type="button" class="modifier">수정</button>
            <button type="button" class="deleter">삭제</button>
            </li>`.join(``))}`
    }
    
    setEvent() {
        const { deletItem, togggleItem, editItem } = this.$props;
        
        this.addEvent("click", ".deleter", ({ target }) => {
            deletItem(Number(target.closest('[data-id]').dataset.id));
        });
        this.addEvent("input", ".toggle", ({ target }) => {
            togggleItem(Number(target.closest('[data-id]').dataset.id));
        });
        this.addEvent("click", ".modifier", ({ target }) => {
            editItem(Number(target.closest('[data-id]').dataset.id));
        })
    }
        
}