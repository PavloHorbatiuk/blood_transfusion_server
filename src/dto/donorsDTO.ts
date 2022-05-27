import {ApiProperty} from "@nestjs/swagger";

export class DonorsDTO {
    @ApiProperty({example: 'Biden', description: 'name'})
    readonly name: string;
    @ApiProperty({example: 'Vasia Pupkin', description: 'Real name'})
    readonly second_name: string;
    @ApiProperty({example: 'some lorem', description: 'just description'})
    readonly phone_number: string;
}