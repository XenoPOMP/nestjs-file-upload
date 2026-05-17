/*
  Warnings:

  - Added the required column `filename` to the `file_uploads` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isPrivate` to the `file_uploads` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "file_uploads_owner_id_key";

-- AlterTable
ALTER TABLE "file_uploads" ADD COLUMN     "filename" TEXT NOT NULL,
ADD COLUMN     "isPrivate" BOOLEAN NOT NULL;
