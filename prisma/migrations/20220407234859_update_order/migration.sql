/*
  Warnings:

  - You are about to drop the column `name` on the `order` table. All the data in the column will be lost.
  - Added the required column `customerName` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `order` DROP COLUMN `name`,
    ADD COLUMN `customerName` VARCHAR(191) NOT NULL;
