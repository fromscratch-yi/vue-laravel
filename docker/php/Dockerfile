FROM php:7.2-fpm
COPY php.ini /usr/local/etc/php/

RUN apt-get update \
  && apt-get install -y vim zlib1g-dev libpq-dev\
  && docker-php-ext-install zip pdo_pgsql

#Composer install
COPY --from=composer /usr/bin/composer /usr/bin/composer
ENV COMPOSER_ALLOW_SUPERUSER 1
ENV COMPOSER_HOME /composer
ENV PATH $PATH:/composer/vendor/bin

ENV COMPOSER_ALLOW_SUPERUSER 1

ENV COMPOSER_HOME /composer

ENV PATH $PATH:/composer/vendor/bin

WORKDIR /var/www

RUN composer global require "laravel/installer"
