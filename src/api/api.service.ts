import { Injectable } from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {Api} from './api.entity';
import {DTO} from "./api.interface";

@Injectable()
export class ApiService {
    constructor(@InjectRepository(Api) private readonly apiRepository: Repository<Api>) {}

   async create(dto: DTO): Promise<any> {
        const api = this.apiRepository.create(dto)
        const result: any =  this.apiRepository.save(api)
        return result.ID
    }

    findMany() {
        return this.apiRepository.find()
    }

    async remove(ID) {
        const object: any = this.apiRepository.findOne({where: {ID: ID}})
        if (object) {
            const x = await this.apiRepository.remove(object)

            return x
        } else {
            console.log("Cannot find to object")
        }
    }
}
