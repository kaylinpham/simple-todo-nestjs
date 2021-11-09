import {MigrationInterface, QueryRunner} from "typeorm";

export class TodoUserMigration1636260608940 implements MigrationInterface {
    name = 'TodoUserMigration1636260608940'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "todo" DROP COLUMN "completed"`);
        await queryRunner.query(`ALTER TABLE "todo" ADD "completed" bit NOT NULL CONSTRAINT "DF_904f910d94be1b9d952a043ae0b" DEFAULT 0`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "todo" DROP CONSTRAINT "DF_904f910d94be1b9d952a043ae0b"`);
        await queryRunner.query(`ALTER TABLE "todo" DROP COLUMN "completed"`);
        await queryRunner.query(`ALTER TABLE "todo" ADD "completed" tinyint NOT NULL`);
    }

}
