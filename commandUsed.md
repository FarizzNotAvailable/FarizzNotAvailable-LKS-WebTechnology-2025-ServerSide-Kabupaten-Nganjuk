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
