/*
  Warnings:

  - Added the required column `image` to the `Subject` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Subject" ADD COLUMN     "image" TEXT NOT NULL;
