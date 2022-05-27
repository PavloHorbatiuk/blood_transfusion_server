import {Module} from '@nestjs/common';
import {DonorsService} from "./donors.service";
import {DonorsController} from "./donors.controller";
import {SequelizeModule} from "@nestjs/sequelize";
import {Donor} from "./donors.model";

@Module({
    providers: [DonorsService],
    controllers: [DonorsController],
    imports: [SequelizeModule.forFeature([Donor])],
})
export class DonorModule {
}
