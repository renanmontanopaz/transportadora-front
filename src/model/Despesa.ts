import {AbstractEntity} from "@/model/AbstractEntity";
import {TipoDespesa} from "@/model/TipoDespesa";
import {Usuario} from "@/model/Usuario";
import {Frete} from "@/model/Frete";

export class Despesa extends AbstractEntity {

    tipoDespesa!: TipoDespesa
    valor!: number
    motorista!: Usuario
    data!: Date
    aprovador!: Usuario
    frete!: Frete

}