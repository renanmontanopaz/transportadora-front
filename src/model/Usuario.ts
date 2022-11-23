import {AbstractEntity} from "@/model/AbstractEntity";
import {Grupo} from "@/model/enum/Grupo";

export class Usuario extends AbstractEntity {

    percGanho!: number
    login!: string
    senha!: string
    grupo!: Grupo
    nome!: string
    cpf!: string
    telefone!: string
    dataNascimento!: Date
    endereco!: string
    observacao!: string

}