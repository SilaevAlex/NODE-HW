import { users } from "./data";

export const listMain = document.querySelector('.list')


 export const createList= ({id, name, age, email, birthday, country, company}) => `
        <ul>
        <li> ID: ${id}</li>
        <li> Name: ${name}</li>
        <li> Age: ${age}</li>
        <li> Email: ${email}</li>
        <li> birthday: ${birthday}</li>
        <li> Country: ${country}</li>
        <li> Company: ${company}</li>
        </ul>
`;
