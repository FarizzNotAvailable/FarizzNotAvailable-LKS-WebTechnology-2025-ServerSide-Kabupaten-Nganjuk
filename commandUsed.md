laravel new BackendCarInstallment

npm create vite@latest

php artisan install:api

npm install axios react-router-dom

php artisan make:model regional

php artisan make:model society

php artisan make:controller Auth/LoginController

php artisan migrate // Memasukkan tabel personal_token laravel versi 13

SQL Command
ALTER TABLE `societies` ADD `updated_at` VARCHAR(512) NULL AFTER `login_tokens`;

php artisan make:model Validator

php artisan make:model Validation

php artisan make:controller Validations/RequestValidationController

SQL Command
ALTER TABLE `validations` ADD `updated_at` VARCHAR(512) NULL AFTER `validator_notes`;
ALTER TABLE `validations` ADD `created_at` VARCHAR(512) NULL AFTER `validator_notes`;

php artisan make:controller Validations/GetValidationController

php artisan make:model Brand

php artisan make:model Installment

php artisan make:model AvailableMonth

php artisan make:model InstallmentApplySocieties // Lupa naruh yang ini di commit sebelumnya jir

php artisan make:model InstallmentApplyStatus // Lupa naruh yang ini di commit sebelumnya jir

php artisan make:controller Installment/PostInstallmentController.php

ALTER TABLE `installment_apply_societies` ADD `updated_at` VARCHAR(512) NULL;
ALTER TABLE `installment_apply_societies` ADD `created_at` VARCHAR(512) NULL;

ALTER TABLE `installment_apply_statuses` ADD `updated_at` VARCHAR(512) NULL;
ALTER TABLE `installment_apply_statuses` ADD `created_at` VARCHAR(512) NULL;