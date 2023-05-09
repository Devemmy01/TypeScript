import { HasFormater } from "../Interfaces/HasFormater.js"

export class Invoice implements HasFormater{
    constructor(
        readonly clients: string,
        private details: string,
        public amount: number
    ){}
    format(){
        return `${this.clients} owes $${this.amount} for ${this.details}`
    }
}