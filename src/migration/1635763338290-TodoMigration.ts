import {MigrationInterface, QueryRunner} from "typeorm";

export class TodoMigration1635763338290 implements MigrationInterface {
    name = 'TodoMigration1635763338290'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "todo" ("id" uniqueidentifier NOT NULL, "title" nvarchar(255) NOT NULL, "completed" tinyint NOT NULL, "createdAt" datetime2 NOT NULL CONSTRAINT "DF_25484e101f2898a2cb37d1e9273" DEFAULT getdate(), "updatedAt" datetime2 NOT NULL CONSTRAINT "DF_4e6d3e5bcdc2d27ae9ee82f21aa" DEFAULT getdate(), CONSTRAINT "PK_d429b7114371f6a35c5cb4776a7" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "todo"`);
    }

}
