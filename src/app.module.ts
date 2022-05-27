import {Module} from '@nestjs/common';
import {ConfigModule, ConfigService} from '@nestjs/config';
import {DonorModule} from './donors/donor.module';
import {SequelizeModule} from "@nestjs/sequelize";
import {Donor} from "./donors/donors.model";


@Module({
    controllers: [],
    providers: [],
    imports: [
        ConfigModule.forRoot({
            envFilePath: `.${process.env.NODE_ENV}.env`
        }),
        // ServeStaticModule.forRoot({
        //     rootPath: path.resolve(__dirname, 'static'),
        // }),
        SequelizeModule.forRoot({
            dialect: 'postgres',
            host: process.env.POSTGRES_HOST,
            port: Number(process.env.POSTGRES_PORT),
            username: process.env.POSTGRES_USER,
            password: process.env.POSTGRES_PASSWORD,
            database: process.env.POSTGRES_DB,
            models: [Donor],
            autoLoadModels: true,
        }),
        DonorModule,

    ],
})
export class AppModule {
}
