/*
  Warnings:

  - The values [LIKED] on the enum `Activity_type` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterTable
ALTER TABLE `Activity` MODIFY `type` ENUM('REACTED', 'COMMENTED', 'POSTED', 'SHARED', 'VIEWED', 'BOOKMARKED') NOT NULL;
