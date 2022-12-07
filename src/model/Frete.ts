import {AbstractEntity} from "@/model/AbstractEntity";
import {Produto} from "@/model/Produto";
import {Cidade} from "@/model/Cidade";
import {Caminhao} from "@/model/Caminhao";
import {Usuario} from "@/model/Usuario";
import {StatusFrete} from "@/model/enum/StatusFrete";

export class Frete extends AbstractEntity {

    produto!: Produto
    cidadeOrigem!: Cidade
    cidadeDestino!: Cidade
    motorista!: Usuario
    caminhao!: Caminhao
    statusFrete!: StatusFrete
    quilometragemIni!: number
    quilometragemFim!: number
    totalBrutoRecebidoNota!: number
    totalLiquidoRecebido!: number
    pesoInicial!: Date
    pesoFinal!: Date
    pesoFinalTransportado!: number
    dataInicio!: Date
    dataFim!: Date
    precoTonelada!: number
    observacao!: string

    /*constructor() {
        super();
        this.cidadeOrigem = new Cidade()
        this.cidadeDestino = new Cidade()
        this.produto = new Produto()
        this.caminhao = new Caminhao()
        this.motorista = new Usuario()
    }*/
}