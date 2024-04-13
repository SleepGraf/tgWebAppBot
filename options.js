const webAppUrl = "https://playful-conkies-359119.netlify.app/";


module.exports = {
    botOptListMain : {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text:'Главное меню', callback_data:'/demo'}],
                [{text:'ТО + Масло', callback_data:'/oilto'}],
                [{text:'Двигатель', callback_data:'/engine'}],
                [{text:'Ремни', callback_data:'/strap'}],
                [{text:'Зажигание', callback_data:'/started'}],
                [{text:'Электрика', callback_data:'/electric'}],
                [{text:'Охлаждение', callback_data:'/freezsys'}],
                [{text:'Подвеска', callback_data:'/suspens'}],
                [{text:'Тормозная система', callback_data:'/brake'}],
                [{text:'Рулевое управление', callback_data:'/steering'}],



            ]
        })
    },

    botOptConfirmAuto : {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text:'Потвердить [auto]', callback_data:'/completauto'}],
                [{text:'Назад', callback_data:'/mainplace'}],
            ]
        })


    },

    botOptGen : {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text:'Vin-код', callback_data:'/vinkod'}],
                [{text:'Общий каталог', callback_data:'/mainplace'}],
            ]
        })


    },



    botOptSelectAuto : {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text:'Daewoo', callback_data:'/daewoo'}],
                [{text:'Chevrolet', callback_data:'/сhevrolet'}],
                [{text:'Hyundai', callback_data:'/hyundai'}],
                [{text:'Назад', callback_data:'/demo'}],
            ]
        })
    },

    botOptSA_daewoo : {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text:'Matiz', callback_data:'/matiz'}],
                [{text:'Nexia', callback_data:'/nexia'}],
                [{text:'Lanos', callback_data:'/lanos'}],
                [{text:'Sens', callback_data:'/sens'}],
                [{text:'Gentra', callback_data:'/gentra'}],
                [{text:'Lacetti', callback_data:'/lacetti'}],
                [{text:'Nubira', callback_data:'/nubira'}],
                [{text:'Tico', callback_data:'/tico'}],
                [{text:'Назад', callback_data:'/mainplace'}],
            ]
        })
    },

    botOptSA_daewoo_matiz : {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text:'Matiz 1[M100/M150] 1998 - наст. время', callback_data:'/matiz1'}],
                [{text:'Matiz 2[M200/M250] 2005 - 2010', callback_data:'/matiz2'}],
                [{text:'Matiz 3[M300] 2009 - 2011', callback_data:'/matiz3'}],
                [{text:'Назад', callback_data:'/daewoo'}],
            ]
        })
    },

    botOptSA_daewoo_matiz2 : {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text:'0.8 л[3 цилиндра]', callback_data:'/matiz208'}],
                [{text:'Назад', callback_data:'/matiz'}],
            ]
        })
    },
    botOptSA_daewoo_matiz3 : {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text:'1.0 л[4 цилиндра]', callback_data:'/matiz31'}],
                [{text:'Назад', callback_data:'/matiz'}],
            ]
        })
    },
    botOptSA_daewoo_matiz1 : {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text:'0.8 л[3 цилиндра]', callback_data:'/matiz108'}],
                [{text:'1.0 л[4 цилиндра]', callback_data:'/matiz11'}],
                [{text:'Назад', callback_data:'/matiz'}],
            ]
        })
    },


    botOptLM_oilto : {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text:'Масляный', callback_data:'/oilfil'}],
                [{text:'Воздушный', callback_data:'/engfil'}],
                [{text:'Салонный', callback_data:'/salfil'}],
                [{text:'Топливный', callback_data:'/salfil'}],
                [{text:'Масла и жидкости', callback_data:'/oillist'}],
                [{text:'Назад', callback_data:'/mainplace'}],
            ]
        })


    },

    botOptLM_oilto_oillist : {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text:'ДВС', callback_data:'/oildvs'}],
                [{text:'КПП', callback_data:'/oilkpp'}],
                [{text:'ГУР', callback_data:'/oilgur'}],
                [{text:'Тормоза', callback_data:'/oilbrake'}],
                [{text:'Антифриз', callback_data:'/oilfreez'}],
                [{text:'Назад', callback_data:'/oilto'}],
            ]
        })


    },

    botOptLM_steering : {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text:'Рулевая рейка к-кт', callback_data:'/steer'}],
                [{text:'Наконечники', callback_data:'/steerend'}],
                [{text:'Тяги', callback_data:'/steerlink'}],
                [{text:'Пыльник тяги', callback_data:'/steerant'}],
                [{text:'Насос ГУРа', callback_data:'/steergur'}],
                [{text:'Назад', callback_data:'/mainplace'}],
            ]
        })


    },


    botOptLM_electric : {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text:'Датчики', callback_data:'/sensor'}],
                [{text:'Генератор', callback_data:'/elgen'}],
                [{text:'Стартер', callback_data:'/elstar'}],
                [{text:'Назад', callback_data:'/mainplace'}],
            ]
        })


    },

    botOptLM_started : {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text:'Катушка', callback_data:'/starkat'}],
                [{text:'Свечи', callback_data:'/starsv'}],
                [{text:'Свеч.провода', callback_data:'/starsvpr'}],
                [{text:'Назад', callback_data:'/mainplace'}],
            ]
        })


    },


    botOptLM_strap : {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text:'Генератора', callback_data:'/strapgen'}],
                [{text:'Кондиционера', callback_data:'/strapkon'}],
                [{text:'Гура', callback_data:'/strapgur'}],
                [{text:'Назад', callback_data:'/mainplace'}],
            ]
        })


    },


    botOptLM_engine : {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text:'ГРМ', callback_data:'/enggrm'}],
                [{text:'Прокладки', callback_data:'/engprok'}],
                [{text:'Сальники', callback_data:'/engsal'}],
                [{text:'Назад', callback_data:'/mainplace'}],
            ]
        })


    },


    botOptLM_enggrm : {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text:'ГРМ к-кт', callback_data:'/grmkt'}],
                [{text:'Ремень/Цепь ГРМ', callback_data:'/grmrem'}],
                [{text:'Натяжитель', callback_data:'/grmnat'}],
                [{text:'Ролик натяжной', callback_data:'/grmnatrol'}],
                [{text:'Ролик обводной', callback_data:'/grmobvrol'}],
                [{text:'Назад', callback_data:'/engine'}],
            ]
        })
    },


    botOptLM_freezsys : {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text:'Радиатор', callback_data:'/freezrad'}],
                [{text:'Патрубки', callback_data:'/freezpat'}],
                [{text:'Помпа', callback_data:'/freezpomp'}],
                [{text:'Термостат', callback_data:'/freezterm'}],
                [{text:'Вентилятор', callback_data:'/freezvent'}],
                [{text:'Назад', callback_data:'/mainplace'}],
            ]
        })
    },

    botOptLM_suspens : {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text:'Передняя', callback_data:'/suspfront'}],
                [{text:'Задняя', callback_data:'/suspback'}],
                [{text:'Назад', callback_data:'/mainplace'}],
            ]
        })
    },

    botOptLM_suspfront : {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text:'Амортизация', callback_data:'/suspfronta'}],
                [{text:'Рычаги', callback_data:'/suspfrontr'}],
                [{text:'Ступица', callback_data:'/suspfronts'}],
                [{text:'Подшипник', callback_data:'/suspfrontp'}],
                [{text:'Назад', callback_data:'/suspens'}],
            ]
        })
    },

    botOptLM_suspback : {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text:'Амортизация', callback_data:'/suspbacka'}],
                [{text:'Рычаги', callback_data:'/suspbackr'}],
                [{text:'Ступица', callback_data:'/suspbacks'}],
                [{text:'Подшипник', callback_data:'/suspbackp'}],
                [{text:'Назад', callback_data:'/suspens'}],
            ]
        })
    },

    botOptLM_brake : {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text:'Передняя', callback_data:'/brakefront'}],
                [{text:'Задняя', callback_data:'/brakeback'}],
                [{text:'Назад', callback_data:'/mainplace'}],
            ]
        })
    },

    botOptLM_brakefront : {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text:'Колодки', callback_data:'/bfkol'}],
                [{text:'Диски', callback_data:'/bfdis'}],
                [{text:'Назад', callback_data:'/brake'}],
            ]
        })
    },

    botOptLM_brakeback : {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text:'Колодки', callback_data:'/bbkol'}],
                [{text:'Диски', callback_data:'/bbdis'}],
                [{text:'Барабаны', callback_data:'/bbbar'}],
                [{text:'Троса ручника', callback_data:'/bbtros'}],
                [{text:'Назад', callback_data:'/brake'}],
            ]
        })
    },







    botOptionsStart : {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text:'Демо', callback_data:'/demo'},{text:'Авторизация', callback_data:'/login'},{text:'WebApp', web_app: {url: webAppUrl}}]
            ]
        })



    }

}