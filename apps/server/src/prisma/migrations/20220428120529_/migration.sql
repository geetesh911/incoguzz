-- CreateTable
CREATE TABLE `PostsTrainingData` (
    `id` VARCHAR(191) NOT NULL,
    `options` LONGBLOB NOT NULL,
    `trainedData` LONGBLOB NOT NULL,
    `docVectors` LONGBLOB NOT NULL,
    `processedDocs` LONGBLOB NOT NULL,

    UNIQUE INDEX `PostsTrainingData_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
