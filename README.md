# Landing page. Yoga

Сайт "Yoga" - это простая целевая страница. Сайт является **тестовым заданиям от компании dZENcode**.

[Посетить сайт](http://yoga.technoninja-xp.h1n.ru/)

**Важно: В этом проекте я использую svg спрайты которые лежать отдельным файлом и подключения к которому происходит через `xlink:href`. Поэтому для нормальной работы нужен сервер. Помните об этом.**

## Пару слов бо этой работе

В этом проекте я применил подход **Mobile First**. Также большая часть мелких изображений собрана в спрайты. Backend сайта написан на PHP, для нормальной работы нужен сервер. Форма на сайте рабочая, все пишется в базу данных.

## Информация для базы данных MySQL

### Создать базу данных

```sql
CREATE DATABASE `bankruptcy`;
```

### Таблица

```sql
CREATE TABLE `yoga_client` (
  `id` int(10) NOT NULL,
  `user` varchar(50) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `userClass` varchar(20) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
```

### Индекс таблицы

```sql
ALTER TABLE `yoga_client`
  ADD PRIMARY KEY (`id`);
```

### Автоинкремент

```sql
ALTER TABLE `yoga_client`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;
COMMIT;
```
