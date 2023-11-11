
export const data = {
    snacks: [
            {
                name:'Мясное ассорти',
                description:"ассортимент мясных специалитетов собственного производства.Пикантный говяжий ростбиф, нежный телячий язык и буженина от шефа. Холодный",
                weight:"210/100/100гр",
                price:890
            },
            {
                name:"Сырное ассорти",
                description:"ассортимент благородных сыров: дорблю, пармезан, бри. Гарнируется фруктами и орехами по сезону. Холодный",
                weight:'180/100/50гр',
                img:require('./menuImg/snacks/Сырное ассорти.jpg'),
                price:720
            },
            {
                name:"Фруктовое ассорти",
                description:"сезонные фрукты и ягоды в нарезку. Холодный",
                weight:"900гр",
                img:require('./menuImg/snacks/Фруктовое ассорти.jpg'),
                price:680
            },
            {
                name:'Севиче из лосося',
                description:"Нежные ломтики лосося в цитрусовом маринаде в аккомпанементе сливочного сыра и гренок из цельно зернового хлебаю. Холодный",
                weight:"100/40/100гр",
                price:680
            },
            {
                name:'Карпаччо из говядины',
                description:"с оливковым маслом и каперсами. Холодный",
                weight:"120гр",
                price:640
            },
            {
                name:"Нежный тар тар из тунца",
                description:"с муссом из сыра. Холодный",
                weight:"150гр",
                img:require('./menuImg/snacks/нежный тартар из тунца.jpg'),
                price:540
            },
            {
                name:"Тар тар из телятины",
                description:"с маринованным огурчиком и перепелиным яйцом. Холодный",
                img:require("./menuImg/snacks/Тар тар из телятины.jpg"),
                weight:"150гр",
                price:420
            },
            {
                name:"Сет из трех брускетт",
                description:"с лососем, с ростбифом, с сыром «Бри». Холодный",
                weight:"120/120/120гр",
                price:640
            },
            {
                name:"Грибы собственного посола",
                description:"с луком и зеленью. Холодный",
                weight:"290гр",
                price:380,
            },
            {
                name:"Ассорти домашних солений",
                description:"Холодный",
                weight:"400гр",
                price:360
            },
            {
                name:"Тигровые креветки",
                description:"в сливочно-чесночном соусе. Горячий",
                weight:"500гр",
                price:1880
            },
            {
                name:'Сыр камамбер',
                description:"в хрустящей кунжутной панировке с гранатовым соусом. Горячий",
                weight:'100/50/50гр',
                img:require("./menuImg/snacks/Сыр камамбер.jpg"),
                price:320
            },
            {
                name:"Пикантные крылья фри",
                description:"в азиатском стиле под кислосладким соусом. Горячий",
                weight:"250/50гр",
                img:require("./menuImg/snacks/Пикантные крылья фри.jpg"),
                price:380
            },
            {
                name:"Креветки темпура",
                description:'с соусом свит-чили. Горячий',
                weight:"150/50гр",
                img:require("./menuImg/snacks/Креветки темпура.jpg"),
                price:590
            },
            {
                name:"Бон марроу из говядины",
                description:"с тостами из цельно зернового хлеба и печеным чесноком. Горячий",
                weight:"300/50/100гр",
                price:380
            },
            {
                name:"Гренки бородинские",
                description:"с чесночным соусом и сыром пармезан. Горячий",
                weight:"180/20/50гр",
                img:require('./menuImg/snacks/Гренки бородинские.jpg'),
                price:190
            },
            {
                name:"Пивная тарелка",
                description:"Куриные крылья в кисло сладком соусе, гренки из бородинского хлеба, брезаола , балык из птичьей грудки, охотничьи сыровяленые колбаски, смесь орехов в авторской панировке. Горячий",
                weight:"900гр",
                price:1100
            },
        ] ,     
    salads:[
        {
            name:"Хрустящий овощной салат",
            description:"с оливками и муссом из рассольной брынзы в средиземноморском стиле.",
            weight:"300гр",
            img:require("./menuImg/меню/салаты/хрустящий овощной салат.jpg"),
            price:420
        },
        {
            name:"Салат с говяжьим ростбифом",
            description:'спелыми томатами и битыми огурцами.',
            weight:"280гр",
            img:require("./menuImg/меню/салаты/Салат с говяжьим ростбифом.jpg"),
            price:580
        },
        {
            name:"Нежный салат с индейкой",
            description:"стручковой фасолью и сезонными овощами в теплой сливочно - горчичной заправке.",
            weight:"300гр",
            img:require("./menuImg/меню/салаты/нежный салат с индейкой.jpg"),
            price:420
        },
        {
            name:"Тёплый мясной салат",
            description:"с кунжутной заправкой.",
            weight:"320гр",
            price:480
        },
        {
            name:"Нисуаз с тунцом гриль",
            description:"перепелиным яйцом, авокадо и медово – горчичным дрессингом.",
            weight:"320гр",
            img:require("./menuImg/меню/салаты/Нисуаз с тунцом гриль.jpg"),
            price:580
        },
        {
            name:"Классический салат «Цезарь»",
            description:'с топингом на ваш вкус: курица / креветка/лосось.',
            weight:"340гр",
            price:"420/540/590",
            img:require("./menuImg/меню/салаты/классический салат Цезарь с лососем слабой соли.jpg")
        }
    ],
    soups:[
        {
            name:'Том ям',
            description:"с морепродуктами и азиатскими грибами.",
            weight:"300гр",
            price:590,
            img:require("./menuImg/меню/супы/том ям.jpg")
        },
        {
            name:'Тыквенный крем',
            description:'суп с тигровыми креветками и муссом из сливочного сыра',
            weight:"300гр",
            price:380,
            img:require("./menuImg/меню/супы/Тыквенный крем суп.jpg")
        },
        {
            name:'Борщ с черносливом',
            description:"разварной говядиной подается с салом и сметаной.",
            weight:"340/100гр",
            img:require('./menuImg/меню/супы/Борщ с черносливом.jpg'),
            price:480
        },
        {
            name:'Классическое куриное консоме',
            description:'с домашней лапшой.',
            weight:"340гр",
            price:280,
            img:require('./menuImg/меню/супы/Классическое куриное консоме.jpg')
        },
        {
            name:'Мисо суп',
            description:"с тофу и каменными грибами.",
            weight:"340гр",
            price:380
        }
    ],
    pasta:[
        {
            name:"Картофельные ньокки",
            description:'под сыром.',
            weight:"200гр",
            price:380,
            img:require("./menuImg/меню/пасты/картофельные ньокки.jpg")
        },
        {
            name:'Спагетти с креветками и петрушкой',
            description:null,
            weight:"240гр",
            price:640,
            img:require("./menuImg/меню/пасты/спагетти с морепродуктами.jpg")
        },
        {
            name:'Феттучинни с телятиной',
            description:"под соусом из печеных овощей.",
            weight:"290гр",
            price:520,
            img:require('./menuImg/меню/пасты/феттучинни с телятиной .jpg')
        },
        {
            name:'Классическая паста «Карбонара»',
            description:"с беконом и яйцом.",
            weight:"290гр",
            price:420
        },
        {
            name:"Птитим с цыпленком",
            description:"бобами эдаме и шпинатом.",
            weight:"240гр",
            price:380,
            img:require("./menuImg/меню/пасты/птитим с цыпленком.jpg")
        },
        {
            name:"Паста балоньезе",
            description:null,
            weight:"280гр",
            price:440
        },
    ],
    meat:[
        {
            name:"Стейк миньон",
            description:"с соусом из свежий зелени и красного перца и кабачками гриль.",
            weight:"250/100/50гр",
            price:1200,
            img:require("./menuImg/меню/Мясо/Стейк миньон.jpg")
        },
        {
            name:"Бефстроганов из говяжьей вырезки",
            description:"с картофельным пюре.",
            weight:"320гр",
            img:require("./menuImg/меню/Мясо/Бефтроганов из говяжьей вырезки.jpg"),
            price:820,
        },
        {
            name:"Томленые щечки бычка",
            description:"с кукурузным пюре и соусом демигляс.",
            weight:"340гр",
            price:680,
            img:require('./menuImg/меню/Мясо/Томленые щечки бычка.jpg')
        },
        {
            name:"Стриплоин",
            description:"с овощами гриль и соусом чимичури.",
            weight:"250/150/50гр",
            price:1320,
            img:require('./menuImg/меню/Мясо/Стриплойн.jpg')
        },
        {
            name:'Свиная спинка на гавайский манер',
            description:"с гарниром из ананаса чили и батата",
            weight:"200/150/50гр",
            price:680
        },
        {
            name:"Филе индюшки гриль",
            description:"с феттучинни из припущенного цуккини.",
            weight:"340гр",
            price:520,
            img:require("./menuImg/меню/Мясо/Филе индюшки гриль.jpg")
        },
        {
            name:"Рулет из говяжьей грудинки",
            description:"с пюре из зелёного горошка.",
            weight:"200/150/50гр",
            price:620
        }
    ],
    fish:[
        {
            name:"Дорадо гриль",
            description:"с гарниром из цветной капусты на восточный манер.",
            weight:"300/150/50гр",
            img:require('./menuImg/меню/рыба/Дорадо гриль.jpg'),
            price:780
        },
        {
            name:'Стейк норвежского лосося',
            description:"со стручковой фасолью и соусом кокосовый биск.",
            weight:"180/120/50гр",
            img:require('./menuImg/меню/рыба/Стейк норвежского лосося.jpg'),
            price:920
        },
        {
            name:'Мидии томленые',
            description:'в пикантном соусе на выбор (том-ям, сырный) с теплыми пшеничными гренками.',
            weight:'300/100гр',
            img:require('./menuImg/меню/рыба/Мидии томленные в пикантном соусе.jpg'),
            price:580
        },
        {
            name:'Ванголе',
            description:"под соусом дорблю и хрустящие гренками.",
            weight:"280/100/50гр",
            price:620
        },
        {
            name:"Синекорый палтус",
            description:"с печеной морковью под икорным соусом.",
            weight:"190/100/50гр",
            price:740
        }
    ],
    trimmings:[
        {
            name:'Овощи гриль',
            weight:"300гр",
            price:280
        },
        {
            name:'Картофель молодой дольками с розмарином',
            weight:"150гр",
            price:180
        },
        {
            name:"Картофельное пюре с пармезаном",
            weight:"150гр",
            price:240
        },
        {
            name:'Картофель фри',
            weight:"150гр",
            price:180
        },
        {
            name:'Цветная капуста',
            weight:"150гр",
            price:160
        }
    ],
    burgers:[
        {
            name:"Классический бургер",
            description:'с котлетой из мраморной говядины, овощами, сыром чеддер и соусом барбекю.',
            weight:"380гр",
            img:require("./menuImg/snacks/Классический бургер.jpg"),
            price:540
        },
        {
            name:'Чикен бургер',
            description:"с беконом и ананасом.",
            weight:"380гр",
            price:480
        }
    ],
    rolls:[
            {
                name:'Калифорния Маки',
                description:'Снежный краб, авокадо, икра капеллана, рис. Фирменные',
                weight:"300гр",
                price:480
            },
            {
                name:'Канада Маки',
                description:"Угорь, лосось, сливочный сыр, авокадо, огурец, рис. Фирменные",
                weight:"300гр",
                price:560
            },
            {
                name:'Филадельфия Маки',
                description:'Лосось, огурец, нори, сливочный сыр, рис. Фирменные',
                weight:'320гр',
                price:580
            },
            {
                name:'Футомаки',
                description:'Лосось, рис, нори, сливочный сыр, угорь, перец болгарский. Фирменные',
                weight:"320гр",
                price:520
            },
            {
                name:'Эби филадельфия',
                description:'Креветка, сливочный сыр, огурец, рис. Фирменные',
                weight:'320гр',
                price:560
            },
            {
                name:"Авакадо Маки",
                description:'Классические',
                weight:'140гр',
                price:200
            },
            {
                name:"Капа Маки",
                description:'Классические',
                weight:'140гр',
                price:200
            },
            {
                name:"Сяке Маки",
                description:'Классические',
                weight:'140гр',
                price:270
            },
            {
                name:"Унаги Маки",
                description:'Классические',
                weight:'140гр',
                price:270
            },
            {
                name:"Тека Маки",
                description:'Классические',
                weight:'140гр',
                price:270
            },
            {
                name:"Эби Маки",
                description:'Классические',
                weight:'140гр',
                price:270
            },
    ],
    dessert:[
        {
            name:'Шоколадный трюфель',
            description:'это непревзойденный десерт, который восхищает своим шоколадным вкусом и нежной текстурой',
            weight:'160гр',
            img:require("./menuImg/меню/десерты/Шоколадный трюфель.jpg"),
            price:340
        },
        {
            name:"Тарт сицилийский лимон",
            description:"это идеальное сочетание хрустящего слоистого теста и нежного, освежающего крема с лимонным акцентом",
            weight:"140гр",
            img:require('./menuImg/меню/десерты/Тарт сицилийский лимон.jpg'),
            price:360
        },
        {
            name:"Муссовое пирожное клубника личи",
            description:'это истинное удовольствие для любителей фруктовых десертов. Оно сочетает в себе свежесть и сочность клубники с экзотическим шармом личи, обернутые в нежную текстуру пирожного',
            weight:"110гр"
        },
        {
            name:"Чизкейк с орехами и шоколадом",
            description:"аппетитные орехи добавляют нотку хруста и глубокий аромат, а шоколадные нотки сливаются с нежностью сыра, создавая идеальный баланс вкусов",
            weight:"130гр",
            price:390
        }
    ],
}