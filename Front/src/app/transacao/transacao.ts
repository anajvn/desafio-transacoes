export class Transacao{
    id?: number|null;
    data?: string;
    valor?: number|null;
    categoria?: string|null;
    
    constructor(id?:number|null, data: string = "0001-01-01", valor?: number|null, categoria?: string|null){
        this.id = id;
        this.data = data;
        this.valor = valor;
        this.categoria = categoria;
    }
}