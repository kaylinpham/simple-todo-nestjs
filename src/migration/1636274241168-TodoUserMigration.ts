import {MigrationInterface, QueryRunner} from "typeorm";

export class TodoUserMigration1636274241168 implements MigrationInterface {
    name = 'TodoUserMigration1636274241168'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "app_user" ADD CONSTRAINT "UQ_c480e576dd71729addbc2d51b67" UNIQUE ("username")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "app_user" DROP CONSTRAINT "UQ_c480e576dd71729addbc2d51b67"`);
    }

}
