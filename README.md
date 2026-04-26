# Merge «Брейнрот Мемы: Эволюция» — MVP

Простой HTML5 MVP (без бэкенда) под веб/Яндекс Игры:

- merge одинаковых мемов
- idle-доход
- апгрейды
- оффлайн доход
- ежедневки
- базовая интеграция Yandex Games SDK (реклама, игрок, облачные сохранения, локаль)

## Запуск локально

Откройте `index.html` в браузере или через любой простой static-server.

## Что реализовано по требованиям

- Core loop: спавн → drag&drop merge → награда лайками → пассивный доход → покупки
- Merge: только одинаковый уровень, базовый крит + апгрейд крита
- Спавн: бесплатный с кулдауном + платный с ростом цены
- Idle: доход за каждый мем по таблице уровней (1..12)
- Экономика:
  - доход уровней строго по ТЗ
  - merge reward = доход * 2
  - spawn price sequence + рост после 10-й покупки
  - скидка цены, если 30 секунд без покупки
  - продажа ~50% условной стоимости существа
- Retention:
  - первые 3 минуты буст дохода + скрытый крит
  - 3–10 минут ускоренный рост цен
  - 10+ минут ещё более жёсткий рост цен
  - rubber banding: при 90 сек без прогресса буст дохода и крита
  - оффлайн доход до 2 часов, 50% эффективности
  - возвратный буст +200% на 60 сек
  - ежедневные задачи и награда
- Реклама (rewarded-заглушки через SDK):
  - x2 доход 30 сек
  - 5 бесплатных мемов
  - мгновенный спавн

## Yandex SDK интеграция

Подключен `https://yandex.ru/games/sdk/v2` в `index.html`.

В `game.js`:

- `YaGames.init()`
- `getPlayer()` для имени/профиля
- `player.getData()` и `player.setData()` для облачных сохранений
- `adv.showRewardedVideo()` для rewarded ads
- `environment.i18n.lang` для локали

При локальном запуске без SDK игра работает с fallback-логикой (без падений).

## Нужные ассеты (добавите в архив)

Можно использовать любой пайплайн, но рекомендую такую структуру:

- `assets/sprites/meme_lv1.png` ... `assets/sprites/meme_lv12.png`
- `assets/sfx/merge.wav`
- `assets/sfx/crit.wav`
- `assets/sfx/spawn.wav`
- `assets/sfx/sell.wav`
- `assets/sfx/ui_click.wav`
- `assets/sfx/ambient_loop.mp3`
- `assets/sfx/glitch_impact.wav`
- `assets/ui/btn_create.png`
- `assets/ui/btn_upgrade.png`
- `assets/ui/panel_bg.png`
- `assets/ui/cell_frame.png`
- `assets/vfx/glitch_overlay.png`
- `assets/vfx/noise_overlay.png`

Если хотите, в следующем шаге переведу текущие emoji-плейсхолдеры на реальный рендер PNG-спрайтов, анимации (shake/scale/rotate) и аудио-слои.