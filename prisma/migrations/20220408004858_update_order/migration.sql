/*
  Warnings:

  - Added the required column `orders` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `total` on the `order` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE `order` ADD COLUMN `orders` JSON NOT NULL,
    DROP COLUMN `total`,
    ADD COLUMN `total` DOUBLE NOT NULL;
