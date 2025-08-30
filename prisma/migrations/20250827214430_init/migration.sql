-- CreateTable
CREATE TABLE `Nacionalidades` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NULL,
    `primer_apellido` VARCHAR(191) NULL,
    `segundo_apellido` VARCHAR(191) NULL,
    `nacionalidad` VARCHAR(191) NULL,
    `n_expediente` VARCHAR(191) NULL,
    `n_documento` VARCHAR(191) NULL,
    `fecha_examen` VARCHAR(191) NULL,
    `fecha_presentacion` VARCHAR(191) NULL,
    `donde_vive` VARCHAR(191) NULL,
    `telefono` INTEGER NULL,
    `estado` VARCHAR(191) NULL,
    `consulta` INTEGER NULL,
    `pago_total` INTEGER NULL,
    `primer_pago` INTEGER NULL,
    `segundo_pago` INTEGER NULL,
    `tercer_pago` INTEGER NULL,
    `saldo` INTEGER NULL,
    `notas` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `NacionalidadesOpcion` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,
    `primer_apellido` VARCHAR(191) NOT NULL,
    `segundo_apellido` VARCHAR(191) NOT NULL,
    `telefono` INTEGER NOT NULL,
    `nacionalidad` VARCHAR(191) NOT NULL,
    `progrenitor` VARCHAR(191) NOT NULL,
    `datos_hijos` VARCHAR(191) NOT NULL,
    `nif` VARCHAR(191) NOT NULL,
    `lugar` VARCHAR(191) NOT NULL,
    `consultado` VARCHAR(191) NOT NULL,
    `enviado` BOOLEAN NOT NULL,
    `saldo` INTEGER NOT NULL,
    `primer_pago` INTEGER NOT NULL,
    `segundo_pago` INTEGER NOT NULL,
    `tercer_pago` INTEGER NOT NULL,
    `saldo_restante` INTEGER NOT NULL,
    `notas` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Arraigados` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,
    `primer_apellido` VARCHAR(191) NOT NULL,
    `segundo_apellido` VARCHAR(191) NOT NULL,
    `telefono` INTEGER NOT NULL,
    `nacionalidad` VARCHAR(191) NOT NULL,
    `tipo_arraigado` VARCHAR(191) NOT NULL,
    `persona__arraigado` VARCHAR(191) NOT NULL,
    `lugar` VARCHAR(191) NOT NULL,
    `n_expediente` VARCHAR(191) NOT NULL,
    `fecha_presentacion` VARCHAR(191) NOT NULL,
    `saldo` INTEGER NOT NULL,
    `primer_pago` INTEGER NOT NULL,
    `segundo_pago` INTEGER NOT NULL,
    `tercer_pago` INTEGER NOT NULL,
    `saldo_restante` INTEGER NOT NULL,
    `notas` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Renovaciones` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,
    `primer_apellido` VARCHAR(191) NOT NULL,
    `segundo_apellido` VARCHAR(191) NOT NULL,
    `telefono` INTEGER NOT NULL,
    `nacionalidad` VARCHAR(191) NOT NULL,
    `renovacion` VARCHAR(191) NOT NULL,
    `n_expediente` VARCHAR(191) NOT NULL,
    `fecha_presentacion` VARCHAR(191) NOT NULL,
    `saldo` INTEGER NOT NULL,
    `primer_pago` INTEGER NOT NULL,
    `segundo_pago` INTEGER NOT NULL,
    `tercer_pago` INTEGER NOT NULL,
    `saldo_restante` INTEGER NOT NULL,
    `notas` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Reagrupaciones` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,
    `primer_apellido` VARCHAR(191) NOT NULL,
    `segundo_apellido` VARCHAR(191) NOT NULL,
    `telefono` INTEGER NOT NULL,
    `nacionalidad` VARCHAR(191) NOT NULL,
    `tipo_reagrupacion` VARCHAR(191) NOT NULL,
    `persona_reagrupacion` VARCHAR(191) NOT NULL,
    `lugar` VARCHAR(191) NOT NULL,
    `n_expediente` VARCHAR(191) NOT NULL,
    `fecha_presentacion` VARCHAR(191) NOT NULL,
    `saldo` INTEGER NOT NULL,
    `primer_pago` INTEGER NOT NULL,
    `segundo_pago` INTEGER NOT NULL,
    `tercer_pago` INTEGER NOT NULL,
    `saldo_restante` INTEGER NOT NULL,
    `notas` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TarjetaComunitaria` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,
    `primer_apellido` VARCHAR(191) NOT NULL,
    `segundo_apellido` VARCHAR(191) NOT NULL,
    `telefono` INTEGER NOT NULL,
    `nacionalidad` VARCHAR(191) NOT NULL,
    `persona_reagrupacion` VARCHAR(191) NOT NULL,
    `n_expediente` VARCHAR(191) NOT NULL,
    `fecha_presentacion` VARCHAR(191) NOT NULL,
    `saldo` INTEGER NOT NULL,
    `primer_pago` INTEGER NOT NULL,
    `segundo_pago` INTEGER NOT NULL,
    `tercer_pago` INTEGER NOT NULL,
    `saldo_restante` INTEGER NOT NULL,
    `notas` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
