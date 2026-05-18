-- AlterTable
ALTER TABLE "file_uploads" ALTER COLUMN "updated_at" DROP DEFAULT;

-- AlterTable
ALTER TABLE "users" ALTER COLUMN "updated_at" DROP DEFAULT;
