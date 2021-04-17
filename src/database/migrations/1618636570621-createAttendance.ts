import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createAttendance1618636570621 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "attendance",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "creator",
                        type: "varchar"
                    },
                    {
                        name: "title",
                        type: "varchar"
                    },
                    {
                        name: "description",
                        type: "text"
                    },
                    {
                        name: "created_at",
                        type: "timestamps",
                        default: "now()"
                    },
                    {
                        name: "updated_at",
                        type: "timestamps",
                        default: "now()"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
