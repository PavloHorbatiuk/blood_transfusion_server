import {Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {Donor} from "./donors.model";
import {DonorsDTO} from "../dto/donorsDTO";

@Injectable()
export class DonorsService {
    constructor(
        @InjectModel(Donor) private donorRepository: typeof Donor,
    ) {
    }


    async createDonor(dto: DonorsDTO) {
        return await this.donorRepository.create({...dto});
    }

    async getAllDonor(): Promise<Donor[]> {
        return await this.donorRepository.findAll({
            // limit: 5,
            // offset: 0
        });
    }

    async getOne(id: number) {
        return await this.donorRepository.findOne({
            where: {id}
        });
    }


    async updateDonor(id: number, dto: DonorsDTO): Promise<Donor> {
        const donor = await this.donorRepository.findOne({where: {id}});
        return await donor.update({...dto},
            {
                where: {
                    id
                },
            })
    }

    async deleteDonor(id: number,): Promise<void> {
        const donor = await this.donorRepository.findOne({where: {id}})
        return await donor.destroy()
    }
}
