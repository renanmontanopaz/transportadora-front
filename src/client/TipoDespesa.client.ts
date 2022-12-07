import { TipoDespesa } from "@/model/TipoDespesa";
import axios, { AxiosInstance } from "axios";

export class TipoDespesaClient {
    private axiosClient: AxiosInstance

    constructor() {
        this.axiosClient = axios.create({
            baseURL: 'http://localhost:8081/api/tipoDespesa',
            headers: {
                'Content-type' : 'application/json'
            }
        })
    }

    public async findById(id: number) : Promise<TipoDespesa> {
        try {
            return (await this.axiosClient.get<TipoDespesa>(`/${id}`)).data
        }
        catch(error:any) {
            return Promise.reject(error.response)
        }

    }

    public async findAll() : Promise<TipoDespesa[]> {
        try {
            return (await this.axiosClient.get<TipoDespesa[]>(``)).data
        }
        catch(error:any) {
            return Promise.reject(error.response)
        }
    }

    public async cadastrar(tipoDespesa: TipoDespesa) : Promise<void> {
        try {
            return (await this.axiosClient.post(``, tipoDespesa)).data
        }
        catch(error:any) {
            return Promise.reject(error.response)
        }
    }

    public async atualizar(tipoDespesa: TipoDespesa) : Promise<void> {
        try {
            return (await this.axiosClient.put(`/${tipoDespesa.id}`, tipoDespesa)).data
        }
        catch(error:any) {
            return Promise.reject(error.response)
        }
    }

    public async excluir(tipoDespesa: TipoDespesa) : Promise<void> {
        try {
            return (await this.axiosClient.put(`/${tipoDespesa.id}`)).data
        }
        catch(error:any) {
            return Promise.reject(error.response)
        }
    }

}