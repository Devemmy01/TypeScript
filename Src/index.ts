import { Invoice } from "./classes/Invoice.js"
import { ListTemplate } from "./classes/ListTemplate.js"
import { payment } from "./classes/payment.js"
import { HasFormater } from "./Interfaces/HasFormater.js"


const form = document.querySelector('.new-item-form') as HTMLFormElement

// input

const type = document.querySelector('#type') as HTMLSelectElement
const tofrom = document.querySelector('#tofrom') as HTMLInputElement
const details = document.querySelector('#details') as HTMLInputElement
const amount = document.querySelector('#amount') as HTMLInputElement

// list template instance

const ul = document.querySelector('ul') as HTMLUListElement
const list = new ListTemplate(ul)

form.addEventListener('submit', (e: Event) => {
    e.preventDefault()

    let doc: HasFormater

    let values: [string, string, number]
    values = [tofrom.value, details.value, amount.valueAsNumber]

    if (type.value === 'invoice'){
        doc = new Invoice (...values)
    } else {
        doc = new payment (...values)
    }

    list.render(doc, type.value, 'end')
})