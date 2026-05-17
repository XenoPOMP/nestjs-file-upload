/*
  Warnings:

  - You are about to drop the column `filename` on the `file_uploads` table. All the data in the column will be lost.
  - You are about to drop the column `isPrivate` on the `file_uploads` table. All the data in the column will be lost.
  - Added the required column `filename_with_extension` to the `file_uploads` table without a default value. This is not possible if the table is not empty.
  - Added the required column `is_private` to the `file_uploads` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mime_type` to the `file_uploads` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "file_uploads" DROP COLUMN "filename",
DROP COLUMN "isPrivate",
ADD COLUMN     "filename_with_extension" TEXT NOT NULL,
ADD COLUMN     "is_private" BOOLEAN NOT NULL,
ADD COLUMN     "mime_type" TEXT NOT NULL;
