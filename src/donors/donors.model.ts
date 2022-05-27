import {ApiProperty} from '@nestjs/swagger';
import {Column, DataType, Model, Table} from 'sequelize-typescript';

interface DonorCreationAttrs {
    name: string;
    second_name: string;
    phone_number: string;
}

@Table({tableName: 'donors'})
export class Donor extends Model<Donor, DonorCreationAttrs> {
    @ApiProperty({example: '1', description: 'Unique identification'})
    @Column({
        type: DataType.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number;

    @ApiProperty({example: 'Petro', description: 'Імя донора'})
    @Column({type: DataType.STRING, unique: false, allowNull: false})
    name: string;

    @ApiProperty({example: 'Biden', description: 'Прізвіще донора'})
    @Column({type: DataType.STRING, unique: false, allowNull: false})
    second_name: string;

    @ApiProperty({example: '+380985841297', description: 'Номер телефону донора'})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    phone_number: string;

}