const TelegramApi = require('node-telegram-bot-api');
const express = require('express');
const cors = require('cors');
const {botOptConfirmAuto,botOptSA_daewoo_matiz3,botOptSA_daewoo_matiz2,botOptSA_daewoo_matiz1,botOptSA_daewoo_matiz,botOptSA_daewoo,botOptSelectAuto,botOptLM_brakeback,botOptLM_brakefront,botOptLM_brake,botOptLM_suspback,botOptLM_suspfront,botOptLM_suspens,botOptLM_freezsys,botOptLM_enggrm,botOptLM_engine,botOptLM_strap,botOptLM_started,botOptLM_electric,botOptLM_steering,botOptLM_oilto_oillist,botOptLM_oilto,botOptionsStart, botOptGen, botOptListMain} = require('./options');
const token = '7090132496:AAG5KIRPaz97NhmRpaHEErwBqf-Y6C0l3nY';
const bot = new TelegramApi(token, {polling: true});
const app = express();
const dasd = "dsad";
app.use(express.json());
app.use(cors());

var UserData = {
    checkAuto: false,
    name:'none',
    id:'none',
    auto : {
       marka:'none',
       model:'none',
       vol: 'none'
    },
    part: {
        first_name:'none',
        last_name:'none'
    },

}

const start = () => {

    bot.on('message', async msg => {
        const text = msg.text;
        const messageId = msg.message_id;
        const chatId = msg.chat.id;


        try {
            if (text === '/start') {
                await bot.sendMessage(chatId, `Приветствую, ${msg.from.first_name}! Выберите режим работы.`, botOptionsStart)
                return bot.deleteMessage(chatId, messageId)
            }
            if (text === '/info') {
            }
            bot.sendMessage(chatId, `Ошибка ввода!`)
        } catch(e) {
            return bot.sendMessage(chatId, `Ошибка сервера!`)
            }
    })

    bot.on('callback_query', async msg => {
        const data = msg.data;
        const messageId = msg.message.message_id;
        const chatId = msg.message.chat.id;
        const textData = msg.message.text;


        try {
            console.log(UserData)
            console.log(msg)
            if (data === '/mainplace') {
                bot.deleteMessage(chatId, messageId)
                if (UserData.checkAuto === true) {
                    await bot.sendMessage(chatId, `Общий каталог`, botOptListMain)
                } else
                return  bot.sendMessage(chatId, `Выберите марку`, botOptSelectAuto)

            }
        if (data === '/completauto') {
            UserData.auto.vol = textData;
            checkAuto = true;
            bot.deleteMessage(chatId, messageId)
            await bot.sendMessage(chatId, `Общий каталог`, botOptListMain)
        }

        if (data === '/login') {
            bot.deleteMessage(chatId, messageId)
            await bot.sendMessage(chatId, `Введите пароль!`)
        }
        if (data === '/demo') {
            bot.deleteMessage(chatId, messageId)
            await bot.sendMessage(chatId, `Каталоги авто`, botOptGen)
        }
        if (data === '/oilto') {
            bot.deleteMessage(chatId, messageId)
            await bot.sendMessage(chatId, `Фильтра`, botOptLM_oilto)
        }

        if (data === '/oillist') {
            bot.deleteMessage(chatId, messageId)
            await bot.sendMessage(chatId, `Масла`, botOptLM_oilto_oillist)
        }
        if (data === '/steering') {
            bot.deleteMessage(chatId, messageId)
            await bot.sendMessage(chatId, `Рулевое управление`, botOptLM_steering)
        }
        if (data === '/electric') {
            bot.deleteMessage(chatId, messageId)
            await bot.sendMessage(chatId, `Электрика`, botOptLM_electric)
        }
        if (data === '/started') {
            bot.deleteMessage(chatId, messageId)
            await bot.sendMessage(chatId, `Зажигание`, botOptLM_started)
        }
        if (data === '/strap') {
            bot.deleteMessage(chatId, messageId)
            await bot.sendMessage(chatId, `Ремни`, botOptLM_strap)
        }
        if (data === '/engine') {
            bot.deleteMessage(chatId, messageId)
            await bot.sendMessage(chatId, `Двигатель`, botOptLM_engine)
        }
        if (data === '/enggrm') {
            bot.deleteMessage(chatId, messageId)
            await bot.sendMessage(chatId, `ГРМ`, botOptLM_enggrm)
        }
        if (data === '/freezsys') {
            bot.deleteMessage(chatId, messageId)
            await bot.sendMessage(chatId, `Охлаждение`, botOptLM_freezsys)
        }
        if (data === '/suspens') {
            bot.deleteMessage(chatId, messageId)
            await bot.sendMessage(chatId, `Подвеска`, botOptLM_suspens)
        }
        if (data === '/suspfront') {
            bot.deleteMessage(chatId, messageId)
            await bot.sendMessage(chatId, `Подвеска передняя`, botOptLM_suspfront)
        }
        if (data === '/suspback') {
            bot.deleteMessage(chatId, messageId)
            await bot.sendMessage(chatId, `Подвеска задняя`, botOptLM_suspback)
        }
        if (data === '/brake') {
            bot.deleteMessage(chatId, messageId)
            await bot.sendMessage(chatId, `Тормозная система`, botOptLM_brake)
        }
        if (data === '/brakefront') {
            bot.deleteMessage(chatId, messageId)
            await bot.sendMessage(chatId, `Тормоза передние`, botOptLM_brakefront)
        }
        if (data === '/brakeback') {
            bot.deleteMessage(chatId, messageId)
            await bot.sendMessage(chatId, `Тормоза задние`, botOptLM_brakeback)
        }
        if (data === '/daewoo') {

            bot.deleteMessage(chatId, messageId)
            await bot.sendMessage(chatId, `Daewoo`, botOptSA_daewoo)
        }
        if (data === '/matiz') {
            UserData.auto.marka = textData;
            bot.deleteMessage(chatId, messageId)
            await bot.sendMessage(chatId, `Matiz`, botOptSA_daewoo_matiz)
        }
        if (data === '/matiz1') {

            bot.deleteMessage(chatId, messageId)
            await bot.sendMessage(chatId, `Matiz 1`, botOptSA_daewoo_matiz1)
        }
        if (data === '/matiz2') {

            bot.deleteMessage(chatId, messageId)
            await bot.sendMessage(chatId, `Matiz 2`, botOptSA_daewoo_matiz2)
        }
        if (data === '/matiz3') {

            bot.deleteMessage(chatId, messageId)
            await bot.sendMessage(chatId, `Matiz 3`, botOptSA_daewoo_matiz3)
        }
        if (data === '/matiz108') {
            UserData.auto.model = textData;

            await bot.deleteMessage(chatId, messageId)
            await bot.sendMessage(chatId, `${UserData.auto.marka} ${UserData.auto.model} [0.8 л]`, botOptConfirmAuto)
        }
        if (data === '/matiz11') {
            UserData.auto.model = textData;
            await bot.deleteMessage(chatId, messageId)
            await bot.sendMessage(chatId, `${UserData.auto.marka} ${UserData.auto.model} [1.0 л]`, botOptConfirmAuto)
        }
        if (data === '/matiz208') {
            UserData.auto.model = textData;
            await bot.deleteMessage(chatId, messageId)
            await bot.sendMessage(chatId, `${UserData.auto.marka} ${UserData.auto.model} [0.8 л]`, botOptConfirmAuto)
        }
        if (data === '/matiz31') {
            UserData.auto.model = textData;
            await bot.deleteMessage(chatId, messageId)
            await bot.sendMessage(chatId, `${UserData.auto.marka} ${UserData.auto.model} [1.0 л]`, botOptConfirmAuto)
        }



        } catch(e) {
            return bot.sendMessage(chatId, `Ошибка сервера!`)
        }

        console.log(UserData)
        //
    })

}

app.post('/web-data', async (req, res) => {
    const {queryId, products = [], totalPrice} = req.body;
    try {
        await bot.answerWebAppQuery(queryId, {
            type: 'article',
            id: queryId,
            title: 'Успешная покупка',
            input_message_content: {
                message_text: ` Поздравляю с покупкой, вы приобрели товар на сумму ${totalPrice}, ${products.map(item => item.title).join(', ')}`
            }
        })
        return res.status(200).json({});
    } catch (e) {
        return res.status(500).json({})
    }
})

const PORT = 8000;

app.listen(PORT, () => console.log('server started on PORT ' + PORT))



start()
