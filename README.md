### build
```sh
docker-compose build --no-cache --force-rm
docker-compose up -d
# docker-compose exec php composer create-project --prefer-dist laravel/laravel .
docker-compose exec php php artisan key:generate

docker-compose exec node vue create .
docker-compose exec node npm install sass-loader node-sass
```

### start
```sh
docker-compose up -d
docker-compose exec node npm run serve
````

