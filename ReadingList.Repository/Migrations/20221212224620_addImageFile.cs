using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ReadingList.Repository.Migrations
{
    public partial class addImageFile : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Image",
                table: "Books",
                newName: "ImageName");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "ImageName",
                table: "Books",
                newName: "Image");
        }
    }
}
