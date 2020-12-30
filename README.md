### build
```sh
docker-compose build --no-cache --force-rm
docker-compose up -d
docker-compose exec php composer create-project --prefer-dist laravel/laravel .
docker-compose exec app php artisan key:generate
docker-compose exec app php artisan storage:link
```