import {AbstractEntity} from "@/model/AbstractEntity";
import {Modelo} from "@/model/Modelo";
import {Cor} from "@/model/enum/Cor";

export class Caminhao extends AbstractEntity{

    placa!: string
    modelo!: Modelo
    cor!: Cor
    ano!: number
    observacao!: string

}