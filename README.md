### build
Copy all this command and exec on terminal
```sh
rm -rf ./src/compose.lock && \
cp ./src/.env.example ./src/.env && \
docker-compose build --no-cache --force-rm && \
docker-compose up -d && \
docker-compose exec php composer self-update && \
docker-compose exec php composer install && \
docker-compose exec php php artisan vendor:publish --provider="Laravel\Sanctum\SanctumServiceProvider" && \
docker-compose exec php php artisan key:generate && \
docker-compose exec php php artisan migrate:refresh && \
docker-compose exec node npm install
```

### start
```sh
docker-compose up -d && docker-compose exec node npm run serve
```

### Page Access
- Access to `http://127.0.0.1` or `http://localhost`

### MEMO
```sh
# docker-compose exec php composer create-project --prefer-dist laravel/laravel .
# docker-compose exec node vue create .
# docker-compose exec node npm install sass-loader node-sass
```