import { MigrationInterface, QueryRunner } from "typeorm";

export class DbCreation1732523584241 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      "CREATE TABLE IF NOT EXISTS id_number (uuid SERIAL PRIMARY KEY, id TEXT, last_digit TEXT)"
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query("DROP TABLE IF EXISTS id_number");
  }
}
