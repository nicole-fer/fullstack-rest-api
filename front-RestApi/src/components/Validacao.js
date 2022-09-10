import * as yup from 'yup'

export const userSchema = yup.object().shape({
    nome: yup.string().required(),
    nome_mae: yup.string().required(),
    cpf: yup.number().min(11).max(11).required() ,
    rg: yup.number().min(11).max(11).required() ,
    data_de_nascimento: yup.date().max(new Date(), 'Não é possível botar uma data futura').required(),
    data_de_cadastro: yup.date().max(new Date(), 'Não é possível botar uma data futura').required()
});