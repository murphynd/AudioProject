using Microsoft.EntityFrameworkCore.Migrations;

namespace AudioProject.Migrations
{
    public partial class adsr : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "attack",
                table: "Sounds",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "decay",
                table: "Sounds",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "release",
                table: "Sounds",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "sustain",
                table: "Sounds",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "attack",
                table: "Sounds");

            migrationBuilder.DropColumn(
                name: "decay",
                table: "Sounds");

            migrationBuilder.DropColumn(
                name: "release",
                table: "Sounds");

            migrationBuilder.DropColumn(
                name: "sustain",
                table: "Sounds");
        }
    }
}
