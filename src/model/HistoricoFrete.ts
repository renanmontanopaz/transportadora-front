import {AbstractEntity} from "@/model/AbstractEntity";
import {Frete} from "@/model/Frete";
import {StatusFrete} from "@/model/enum/StatusFrete";
import {Usuario} from "@/model/Usuario";

export class HistoricoFrete extends AbstractEntity {

    data!: Date
    frete!: Frete
    statusFrete!: StatusFrete
    executor!: Usuario

}