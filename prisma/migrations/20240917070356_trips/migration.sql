/*
  Warnings:

  - You are about to drop the `trip` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `trip` DROP FOREIGN KEY `trip_accomodationId_fkey`;

-- DropForeignKey
ALTER TABLE `trip` DROP FOREIGN KEY `trip_categoryTripId_fkey`;

-- DropForeignKey
ALTER TABLE `trip` DROP FOREIGN KEY `trip_regionId_fkey`;

-- DropTable
DROP TABLE `trip`;

-- CreateTable
CREATE TABLE `trips` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `categoryTripId` INTEGER NOT NULL,
    `accomodationId` INTEGER NOT NULL,
    `regionId` INTEGER NULL,
    `duration` VARCHAR(191) NOT NULL,
    `price` INTEGER NOT NULL,
    `quota` INTEGER NOT NULL,
    `image` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `trips` ADD CONSTRAINT `trips_categoryTripId_fkey` FOREIGN KEY (`categoryTripId`) REFERENCES `categoryTrip`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `trips` ADD CONSTRAINT `trips_accomodationId_fkey` FOREIGN KEY (`accomodationId`) REFERENCES `accomodation`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `trips` ADD CONSTRAINT `trips_regionId_fkey` FOREIGN KEY (`regionId`) REFERENCES `region`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
