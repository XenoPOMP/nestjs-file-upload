/*
  Warnings:

  - You are about to drop the `file_uploads` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "file_uploads" DROP CONSTRAINT "file_uploads_owner_id_fkey";

-- DropTable
DROP TABLE "file_uploads";
