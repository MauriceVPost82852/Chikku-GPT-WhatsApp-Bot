{
    "name": "WhatsDuplicated",
    "description": "Whatna project - Makes it easy and fun to use Whatsapp. World’s first pmade for WhatsApp.",
    "logo": "https://i.hiesim.com/6Bbj7i.jpg",
    "keywords": ["whatsapp", "wt"],
    "repository": "https://github.com/phaticusthiccy/Whaicated",
    "website":   "https://t.me/phthiccy",
    "success_url": "https://t.me/AaSupport",
    "stack": "container",
    "env": {
        "ASENA_SESSION": {
            "description": "Qr.Js ile oluşturduğunuz özel session kodu. Type here yours Asena Session.",
            "required": true
        },
        "SUDO": {
            "description": "Kullanıcılara tüm yetkileri verir. It gives all the privileges to the users. => 90xxx,0,90xxx,0,90xxx...",
            "required": false
        },
        "LANGUAGE": {
            "description": "Bot language. Azerice => az, English => en, Türkçe => tr, Malayalam => ml, Hindi => HI, Indonesia => ID, Español => ES, Portuguese => pt, Russian => ru",
            "required": true,
            "value": "TR"
        },
        "PROXY": {
            "description": "Proxy Adresi. Proxy Address => http://some-host:1234",
            "required": false,
            "value": "false"
        },
        "ANTI_LINK": {
            "description": "Link Engelleme Sistemi. Link Blocking System.",
            "required": true,
            "value": "false"
        },
        "AUTO_BIO": {
            "description": "Duruma otomatik tarih ve zaman eklemek için true yapın. Set true for auto date, time in biography.",
            "required": true,
            "value": "false"
        },
        "HANDLERS": {
            "description": "Komutlar için. For commands.",
            "required": true,
            "value": "^[.!;]"
        },
        "FULL_EVA": {
            "description": "Hesabınızı bir Chatbot'a Çevirin! Turn your account into a chatbot!",
            "required": true,
            "value": "false"
        },
        "NO_LOG": {
            "description": "Hata logu görmek istemiyorsanız true yapın. Set true if you don't want to see error log.",
            "required": true,
            "value": "false"
        },
        "SEND_READ": {
            "description": "Görüldü atmak istiyorsanız true yazın. Write true if you want to throw seen.",
            "required": true,
            "value": "true"
        },
        "HEROKU": {
            "description": "Herokuda çalışıyorsa true yazın. If it is running in Heroku, type true.",
            "required": true,
            "value": "true"
        },
        "HEROKU_API_KEY": {
            "description": "Herokuda API Keyiniz. Heroku API Key. ===> https://t.me/herokuapikeyscraper",
            "required": true
        },
        "MUTE_MESSAGE": {
            "description": "Düzenlenebilir Mute Mesajı. Customizable Mute Message! Use => default, to change back.",
            "required": false,
            "value": "default"
        },
        "BLOCK_CHAT": {
            "description": "Choose in which chat the bot won't work there. Ex: 905xxxx && 905xxxx-1xxx or 905xxxx,905xxx...",
            "required": false,
            "value": "false"
        },
        "UNMUTE_MESSAGE": {
            "description": "Düzenlenebilir Unmute Mesajı. Customizable Unmute Message! Use => default, to change back.",
            "required": false,
            "value": "default"
        },
        "BLOCK_MESSAGE": {
            "description": "Düzenlenebilir Block Mesajı. Customizable Block Message! Use => default, to change back.",
            "required": false,
            "value": "default"
        },
        "UNBLOCK_MESSAGE": {
            "description": "Düzenlenebilir Unblock Mesajı. Customizable Unblock Message! Use => default, to change back.",
            "required": false,
            "value": "default"
        },
        "WORK_TYPE": {
            "description": "WhatsAsena Working Type. If you use “public”, everyone can use the bot. Else if you use “private”, only you can use your bot.",
            "required": true,
            "value": "private"
        },
        "HEROKU_APP_NAME": {
            "description": "Herokuda uygulama adı. App Name ile aynı olmalıdır! Heroku APP Name. Must be the same as the App name!",
            "required": true
        },
        "DEBUG": {
            "description": "Geliştiricilere özeldir. For Developers => all, info, warn, fatal, error, debug, off",
            "required": true,
            "value": "false"
        },
        "REMOVE_BG_API_KEY": {
            "description": "Fotoğrafların arkaplanını kaldırır. https://remove.bg",
            "value": "false",
            "required": false
        },
        "DEEPAI_API_KEY": {
            "description": "DeepAI Komutu İçin API Key. For DeepAI Command ===> https://github.com/phaticusthiccy/WhatsAsenaDuplicated/wiki/DeepAI-API-Key",
            "value": "false",
            "required": false
        },
        "ALIVE_MESSAGE": {
            "description": "Customizable Alive Message! Use => default, to change back.",
            "required": false,
            "value": "default"
        },
        "BAN_MESSAGE": {
            "description": "Customizable Ban Message! Use => default, to change back.",
            "required": false,
            "value": "default"
        },
        "ADD_MESSAGE": {
            "description": "Customizable Add Message! Use => default, to change back.",
            "required": false,
            "value": "default"
        },
        "KICKME_MESSAGE": {
            "description": "Customizable Kickme Message! Use => default, to change back.",
            "required": false,
            "value": "default"
        },
        "PROMOTE_MESSAGE": {
            "description": "Customizable Promote Message! Use => default, to change back.",
            "required": false,
            "value": "default"
        },
        "DEMOTE_MESSAGE": {
            "description": "Customizable Demote Message! Use => default, to change back.",
            "required": false,
            "value": "default"
        },
        "AFK_MESSAGE": {
            "description": "Customizable AFK Message! Use => default, to change back.",
            "required": false,
            "value": "default"
        },
        "GAN_IMAGE": {
            "description": "Gan Style eklentisi için resim bağlantısı yazın. Type image link for Gan Style plugin.",
            "required": true,
            "value": "https://i.hizliresim.com/loUtAb.jpg"
        },
        "NO_ONLINE": {
            "description": "Çevrimiçi görünmek istemiyorsanız true yazın. Type true if you don't want to appear online.",
            "required": false,
            "value": "true"
        }
    },
    "buildpacks": [{
      "url": "heroku-community/apt"
      }]
  }
