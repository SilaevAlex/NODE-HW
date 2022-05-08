import {listMain , createList} from "./create";
import { users } from "./data";

export const tableRender = () => {
    


   const rows = users.map((user) => {
        const row = document.createElement('ul')
        row.className = 'list'

        row.innerHTML = createList(user);

        row.onclick = function(){
            if(this.className != "active"){
                this.className = "active";
            }else{
                this.className = "";
            }
        } 


        row.ondblclick = function(){
            alert(`Выбран: ${this.textContent}`)
        }

        return row;

        
    });

    listMain.append(...rows)

    

    console.log(rows)
};

