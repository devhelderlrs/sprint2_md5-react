export const Clientes = {
    constructor (nome, sobrenome, email, telefone, cep, endereco1, endereco2, nascimento, cpf, renda) {
        this.nome = nome,
        this.sobrenome = sobrenome,
        this.email = email,
        this.telefone = telefone,
        this.cep = cep,
        this.endereco1 = endereco1,
        this.endereco2 = endereco2,
        this.nascimento = nascimento,
        this.cpf = cpf,
        this.renda = renda
    }
}

export const BancoClientes = [
{nome: 'arthur', sobrenome: 'pereira gomes', email: 'pg.arthur22@hotmail.com', telefone: '21975548401', cep: '25874004', endereco1: 'rua gonçalves dias n 23, centro, rio de janeiro - rj', endereco2: null, nascimento: '28-03-1988', cpf: '99143558567', renda: '1600,47'},
{nome: 'vanessa', sobrenome: 'lins souza', email: 'valinss@.gmailcom', telefone: '96975543101', cep: '36798005', endereco1: 'rua juazeiro de santana n 113, jardim paulista, macapa - ap', endereco2: null, nascimento: '21-09-1992', cpf: '10347751239', renda: '1974,13'},
{nome: 'ana paula', sobrenome: 'cruz silva santanna', email: 'anapcruz84@hotmail.com', telefone: '11975249814', cep: '15820366', endereco1: 'rua arlindo cruz n 482, luzes, santo andre - sp', endereco2: null, nascimento: '04-11-1991', cpf: '35685870140', renda: '3426,92'},
{nome: 'helio', sobrenome: 'figueira marinho', email: 'figueira_helio@bol.com.br', telefone: '21975113694', cep: '25874004', endereco1: 'rua hermengarda n 724, meier, rio de janeiro - rj', endereco2: 'rua thomaz filho n 554, posse, nova iguaçu - rj', nascimento: '14-05-1963', cpf: '43856780155', renda: '7469,56'}
]