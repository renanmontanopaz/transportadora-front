import {AbstractEntity} from "@/model/AbstractEntity";
import {Estado} from "@/model/Estado";

export class Cidade extends AbstractEntity {

    nome!: string
    estado!: Estado

}