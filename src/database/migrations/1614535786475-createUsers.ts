import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createUsers1614535786475 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "users",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true
          },
          {
            name: "username",
            type: "varchar",
          },
          {
            name: "email",
            type: "varchar"
          },
          {
            name: "pass",
            type: "varchar"
          },
          {
            name: "created_at",
            type: "date",
            default: "now()"
          },
          {
            name: "updated_at",
            type: "date",
            default: "now()"
          }
        ]
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("users")
  }

}
