using Microsoft.EntityFrameworkCore.Migrations;

namespace AudioProject.Migrations
{
    public partial class form : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Synth",
                table: "Sounds",
                newName: "SynthType");

            migrationBuilder.AddColumn<string>(
                name: "BPMOutput",
                table: "Sounds",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Chords",
                table: "Sounds",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "DelayOutput",
                table: "Sounds",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "FilterOutput",
                table: "Sounds",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "OscillatorPartials",
                table: "Sounds",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "OscillatorType",
                table: "Sounds",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "ReverbOutput",
                table: "Sounds",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "BPMOutput",
                table: "Sounds");

            migrationBuilder.DropColumn(
                name: "Chords",
                table: "Sounds");

            migrationBuilder.DropColumn(
                name: "DelayOutput",
                table: "Sounds");

            migrationBuilder.DropColumn(
                name: "FilterOutput",
                table: "Sounds");

            migrationBuilder.DropColumn(
                name: "OscillatorPartials",
                table: "Sounds");

            migrationBuilder.DropColumn(
                name: "OscillatorType",
                table: "Sounds");

            migrationBuilder.DropColumn(
                name: "ReverbOutput",
                table: "Sounds");

            migrationBuilder.RenameColumn(
                name: "SynthType",
                table: "Sounds",
                newName: "Synth");
        }
    }
}
