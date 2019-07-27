### Список использованных технологий
    "@babel/core": "^7.5.5",
    "@babel/preset-env": "^7.5.5",
    "autoprefixer": "^9.6.1",
    "babel-loader": "^8.0.6",
    "browser-sync": "^2.26.7",
    "clean-webpack-plugin": "^3.0.0",
    "copy-webpack-plugin": "^5.0.4",
    "css-loader": "^3.1.0",
    "css-mqpacker": "^7.0.0",
    "cssnano": "^4.1.10",
    "file-loader": "^4.1.0",
    "gulp": "^4.0.2",
    "gulp-autoprefixer": "^6.1.0",
    "gulp-babel": "^8.0.0",
    "gulp-clean": "^0.4.0",
    "gulp-clean-css": "^4.2.0",
    "gulp-concat": "^2.6.1",
    "gulp-imagemin": "^6.0.0",
    "gulp-plumber": "^1.2.1",
    "gulp-rename": "^1.4.0",
    "gulp-sass": "^4.0.2",
    "gulp-uglify": "^3.0.2",
    "html-loader": "^0.5.5",
    "html-webpack-plugin": "^3.2.0",
    "image-webpack-loader": "^5.0.0",
    "mini-css-extract-plugin": "^0.8.0",
    "node-sass": "^4.12.0",
    "path": "^0.12.7",
    "postcss": "^7.0.17",
    "postcss-loader": "^3.0.0",
    "sass-loader": "^7.1.0",
    "style-loader": "^0.23.1",
    "webpack": "^4.38.0",
    "webpack-cli": "^3.3.6",
    "webpack-dev-server": "^3.7.2",
    "webpack-merge": "^4.2.1",
    "webpack-stream": "^5.2.1"
### Состав участников проекта и какие задачи выполнял каждый
 - Sergey Vashchenko
   - Сверстать шапку сайта с верхним меню (включая выпадающее меню при малом разрешении экрана). 
   - Сверстать секцию `People Are Talking About Fork`.
   - Собрать проект с помощью сборщика `Gulp`
   - Собрать проект с помощью `Webpack`
 - Ramazan Khanbabaev
   - Сверстать блок `Revolutionary Editor`.
   - Светстать секцию `Here is what you get`.
   - Сверстать секцию `Fork Subscription Pricing`.
   - Настроить обработку ошибок, чтобы при ошибках в любой из задач (например, ошибка компиляции `scss` в `css`) процесс не завершался, а ошибка выводилась в консоль и на экран браузера
### Описание проекта
 > Сборка проекта возможна тремя способами:
   * `обычный gulp сборщик`, но с минусом сборка js файлов происходит по алфавитмному порядку или иерархии папок, из за этого могут быть ошибки
   * `gulp скрещенный с webpack`, через пакет webpack-stream, файл webpack.config.js заменен на объект со всеми настройками, что бы не путаться
   * `сборка происходит на чистом webpack`, файлы конфигов находяться в папке conf. В этой папке находиться три файла:
     - общая версия для `production` и `development`
     - конфиг который включает общий и настройки для `production` 
     - конфиг который включает общий и настройки для `development`
 
   * команды
      - `npm run dev` - запуск проекта в режиме `development` 
      - `npm run build` - запуск проекта в режиме `production` 
      - `gulp` - запуск проекта режим выбрать в переменной `isDevelopment`

### Запуск
 * gulp - все доп стили подключить к index.scss
 * webpack - все стили подключить через index.js (связано с особеностями сборщика)