import {Body, Controller, Delete, Get, Param, Post, Put, UseInterceptors} from '@nestjs/common';
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {DonorsService} from "./donors.service";
import {Donor} from "./donors.model";
import {DonorsDTO} from "../dto/donorsDTO";

@ApiTags('donors')
@Controller('donors')
export class DonorsController {
    constructor(private donorService: DonorsService) {
    }

    @ApiOperation({summary: 'Made new info about donor'})
    @ApiResponse({status: 200, type: Donor})
    @Post('/create')
    create(@Body() dto: DonorsDTO) {
        return this.donorService.createDonor(dto);
    }

    @ApiOperation({summary: 'To take all donors from database'})
    @ApiResponse({status: 200, type: [Donor]})
    @Get('/all')
    getAll() {
        return this.donorService.getAllDonor();
    }

    @ApiOperation({summary: 'To take one from base'})
    @ApiResponse({status: 200, type: Donor})
    @Get(':id')
    getOne(@Param('id') id: number) {
        return this.donorService.getOne(id);
    }

    @ApiOperation({summary: 'To update donor in database'})
    @ApiResponse({status: 200, type: Donor})
    @Put(':id/update')
    update(@Param('id') id: number, @Body() dto:DonorsDTO) {
        return this.donorService.updateDonor(id, dto);
    }


    @ApiOperation({summary: 'To remove donor from database'})
    @ApiResponse({status: 200, type: Donor})
    @Delete(':id/delete')
    remove(@Param('id') id: number) {
        return this.donorService.deleteDonor(id);
    }
}
