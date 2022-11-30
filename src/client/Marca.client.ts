import { Marca } from "@/model/Marca";
import axios, { AxiosInstance } from "axios";

export class MarcaClient {
    private axiosClient: AxiosInstance

    constructor() {
        this.axiosClient = axios.create({
            baseURL: 'http://localhost:8081/api/marca',
            headers: {
                'Content-type' : 'aplication/json'
            }
        })
    }

    public async findById(id: number) : Promise<Marca> {
        try {
            return (await this.axiosClient.get<Marca>(`/${id}`)).data
        }
        catch(error:any) {
            return Promise.reject(error.response)
        }

    }

    public async findAll() : Promise<Marca[]> {
        try {
            return (await this.axiosClient.get<Marca[]>(``)).data
        }
        catch(error:any) {
            return Promise.reject(error.response)
        }
    }

    public async cadastrar(marca: Marca) : Promise<void> {
        try {
            return (await this.axiosClient.post(``, marca)).data
        }
        catch(error:any) {
            return Promise.reject(error.response)
        }
    }

    public async atualizar(marca: Marca) : Promise<void> {
        try {
            return (await this.axiosClient.put(`/${marca.id}`, marca)).data
        }
        catch(error:any) {
            return Promise.reject(error.response)
        }
    }

    public async excluir(marca: Marca) : Promise<void> {
        try {
            return (await this.axiosClient.put(`/${marca.id}`)).data
        }
        catch(error:any) {
            return Promise.reject(error.response)
        }
    }

}