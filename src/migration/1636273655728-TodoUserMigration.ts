import {MigrationInterface, QueryRunner} from "typeorm";

export class TodoUserMigration1636273655728 implements MigrationInterface {
    name = 'TodoUserMigration1636273655728'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "todo" DROP CONSTRAINT "FK_5748feca24ec2432fc99f68b9dd"`);
        await queryRunner.query(`EXEC sp_rename "Todo.dbo.app_user.userId", "id"`);
        await queryRunner.query(`EXEC sp_rename "Todo.dbo.app_user.PK_6ea20ce66257c9bfb9f6690d8d1", "PK_22a5c4a3d9b2fb8e4e73fc4ada1"`);
        await queryRunner.query(`EXEC sp_rename "Todo.dbo.todo.userUserId", "userId"`);
        await queryRunner.query(`ALTER TABLE "todo" ALTER COLUMN "userId" uniqueidentifier NOT NULL`);
        await queryRunner.query(`ALTER TABLE "todo" ADD CONSTRAINT "FK_1e982e43f63a98ad9918a86035c" FOREIGN KEY ("userId") REFERENCES "app_user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "todo" DROP CONSTRAINT "FK_1e982e43f63a98ad9918a86035c"`);
        await queryRunner.query(`ALTER TABLE "todo" ALTER COLUMN "userId" uniqueidentifier`);
        await queryRunner.query(`EXEC sp_rename "Todo.dbo.todo.userId", "userUserId"`);
        await queryRunner.query(`EXEC sp_rename "Todo.dbo.app_user.PK_22a5c4a3d9b2fb8e4e73fc4ada1", "PK_6ea20ce66257c9bfb9f6690d8d1"`);
        await queryRunner.query(`EXEC sp_rename "Todo.dbo.app_user.id", "userId"`);
        await queryRunner.query(`ALTER TABLE "todo" ADD CONSTRAINT "FK_5748feca24ec2432fc99f68b9dd" FOREIGN KEY ("userUserId") REFERENCES "app_user"("userId") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
