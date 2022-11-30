import { HistoricoFrete } from "@/model/HistoricoFrete";
import axios, { AxiosInstance } from "axios";

export class HistoricoFreteClient {
    private axiosClient: AxiosInstance

    constructor() {
        this.axiosClient = axios.create({
            baseURL: 'http://localhost:8080/api/historicoFrete',
            headers: {
                'Content-type' : 'aplication/json'
            }
        })
    }

    public async findById(id: number) : Promise<HistoricoFrete> {
        try {
            return (await this.axiosClient.get<HistoricoFrete>(`/${id}`)).data
        }
        catch(error:any) {
            return Promise.reject(error.response)
        }

    }

    public async findAll() : Promise<HistoricoFrete[]> {
        try {
            return (await this.axiosClient.get<HistoricoFrete[]>(``)).data
        }
        catch(error:any) {
            return Promise.reject(error.response)
        }
    }

    public async cadastrar(historicoFrete: HistoricoFrete) : Promise<void> {
        try {
            return (await this.axiosClient.post(``, historicoFrete)).data
        }
        catch(error:any) {
            return Promise.reject(error.response)
        }
    }

    public async findByFrete(idFrete: number) : Promise<HistoricoFrete> {
        try {
            return (await this.axiosClient.get<HistoricoFrete>(`/${idFrete}`)).data
        }
        catch(error:any) {
            return Promise.reject(error.response)
        }
    }
}