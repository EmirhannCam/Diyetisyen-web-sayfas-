// Recipe data
const recipes = [
    {
        id: 1,
        title: 'Protein Kinoa Kasesi',
        description: 'Yüksek proteinli, düşük kalorili besleyici kase',
        image: '../../public/images/kinoakasesi.jpg',
        category: 'Vejetaryen',
        healthCategories: ['kilo-verme', 'kas-yapma', 'enerji-artisi', 'bagisiklik'],
        prepTime: '25 dk',
        calories: '320 kcal',
        ingredients: [
            '1 su bardağı kinoa',
            '200g ızgara tofu',
            '2 su bardağı karışık yeşillik',
            '1/2 avokado',
            'Limon suyu'
        ],
        instructions: [
            'Kinoayı suda haşlayın',
            'Tofuyu baharatlarla marine edip ızgarada pişirin',
            'Yeşillikleri yıkayıp hazırlayın',
            'Tüm malzemeleri kasede birleştirip limon suyu ekleyin'
        ]
    },
    {
        id: 2,
        title: 'Fırında Somon',
        description: 'Omega-3 ve protein açısından zengin, düşük yağlı somon',
        image: '../../public/images/fırındasomon.jpg',
        category: 'Deniz Ürünleri',
        healthCategories: ['kalp-sagligi', 'zihin-acikligi', 'yaslanma-karsiti', 'kemik'],
        prepTime: '20 dk',
        calories: '280 kcal',
        ingredients: [
            '150g yağsız somon fileto',
            'Taze biberiye',
            'Limon dilimi',
            'Deniz tuzu',
            'Karabiber'
        ],
        instructions: [
            'Somonu baharatlarla marine edin',
            'Fırın kağıdına sarın',
            'Fırında 180 derecede 15 dakika pişirin',
            'Limon dilimleriyle servis yapın'
        ]
    },
    {
        id: 3,
        title: 'Protein Salatası',
        description: 'Yumurta ve ton balıklı protein salatası',
        image: '../../public/images/proteinsalatası.jpg',
        category: 'Protein',
        healthCategories: ['kas-yapma', 'kilo-verme', 'spor', 'enerji-artisi'],
        prepTime: '15 dk',
        calories: '250 kcal',
        ingredients: [
            'Karışık yeşillik',
            '2 haşlanmış yumurta',
            '100g ton balığı',
            'Kiraz domates',
            'Light zeytinyağı'
        ],
        instructions: [
            'Yeşillikleri yıkayıp doğrayın',
            'Yumurtaları haşlayıp dilimleyin',
            'Ton balığını ekleyin',
            'Light zeytinyağı ve limon ile servis yapın'
        ]
    },
    {
        id: 4,
        title: 'Sebze Çorbası',
        description: 'Düşük kalorili sebze çorbası',
        image: '../../public/images/sebzeçorbası.jpg',
        category: 'Çorbalar',
        healthCategories: ['detoks', 'sindirim', 'bagisiklik', 'iltihap'],
        prepTime: '30 dk',
        calories: '120 kcal',
        ingredients: [
            'Karnabahar',
            'Brokoli',
            'Havuç',
            'Kereviz',
            'Zencefil'
        ],
        instructions: [
            'Sebzeleri küp küp doğrayın',
            'Zencefil ile birlikte haşlayın',
            'Blenderdan geçirin',
            'Karabiber ile servis yapın'
        ]
    },
    {
        id: 5,
        title: 'Hindi Burger',
        description: 'Yağsız hindi etli sağlıklı burger',
        image: '../../public/images/hindiburger.jpg',
        category: 'Et Yemekleri',
        healthCategories: ['kas-yapma', 'spor', 'kolesterol', 'kilo-verme'],
        prepTime: '25 dk',
        calories: '320 kcal',
        ingredients: [
            '150g hindi kıyma',
            'Tam buğday ekmeği',
            'Roka',
            'Domates',
            'Light sos'
        ],
        instructions: [
            'Hindi kıymayı baharatlarla yoğurun',
            'Izgara tavada pişirin',
            'Tam buğday ekmeğini ısıtın',
            'Sebzelerle servis yapın'
        ]
    },
    {
        id: 6,
        title: 'Izgara Tavuk Göğsü',
        description: 'Protein açısından zengin yağsız tavuk',
        image: '../../public/images/ızgaratavukgöğsü.jpg',
        category: 'Et Yemekleri',
        healthCategories: ['kas-yapma', 'spor', 'kilo-verme'],
        prepTime: '20 dk',
        calories: '200 kcal',
        ingredients: [
            'Tavuk göğsü',
            'Kekik',
            'Limon',
            'Sarımsak',
            'Karabiber'
        ],
        instructions: [
            'Tavuğu marine edin',
            'Izgara tavada pişirin',
            'Dilimleyin',
            'Yeşilliklerle servis yapın'
        ]
    },
    {
        id: 7,
        title: 'Kabak Spagetti',
        description: 'Düşük karbonhidratlı sebze makarna',
        image: '../../public/images/kabakspagetti.jpg',
        category: 'Vejetaryen',
        healthCategories: ['kilo-verme', 'seker-kontrolu', 'diyabet', 'sindirim'],
        prepTime: '20 dk',
        calories: '150 kcal',
        ingredients: [
            '2 adet kabak',
            'Cherry domates',
            'Fesleğen',
            'Sarımsak',
            'Light zeytinyağı'
        ],
        instructions: [
            'Kabakları spiral kesici ile kesin',
            'Domatesleri ikiye bölün',
            'Tavada hafifçe ısıtın',
            'Fesleğen ile servis yapın'
        ]
    },
    {
        id: 8,
        title: 'Protein Smoothie',
        description: 'Yüksek proteinli düşük kalorili içecek',
        image: '../../public/images/proteinsmoti.jpg',
        category: 'İçecekler',
        healthCategories: ['kas-yapma', 'spor', 'enerji-artisi', 'stres'],
        prepTime: '10 dk',
        calories: '150 kcal',
        ingredients: [
            'Yağsız süt',
            'Whey protein',
            'Yaban mersini',
            'Ispanak',
            'Buz'
        ],
        instructions: [
            'Tüm malzemeleri blendera ekleyin',
            'Pürüzsüz olana kadar karıştırın',
            'Gerekirse su ekleyin',
            'Hemen servis yapın'
        ]
    },
    {
        id: 9,
        title: 'Light Humus',
        description: 'Düşük yağlı protein açısından zengin humus',
        image: '../../public/images/lighthumus.jpg',
        category: 'Mezeler',
        healthCategories: ['sindirim', 'bagisiklik', 'hormon', 'kolesterol'],
        prepTime: '20 dk',
        calories: '180 kcal',
        ingredients: [
            'Haşlanmış nohut',
            'Light tahin',
            'Limon suyu',
            'Sarımsak',
            'Kimyon'
        ],
        instructions: [
            'Nohutları robottan geçirin',
            'Diğer malzemeleri ekleyin',
            'Pürüzsüz olana kadar karıştırın',
            'Kimyon ile süsleyin'
        ]
    },
    {
        id: 10,
        title: 'Protein Muffin',
        description: 'Şekersiz protein muffin',
        image: '../../public/images/proteinmuffin.jpg',
        category: 'Tatlılar',
        prepTime: '25 dk',
        calories: '150 kcal',
        ingredients: [
            'Yulaf unu',
            'Whey protein',
            'Yumurta beyazı',
            'Muz',
            'Stevia'
        ],
        instructions: [
            'Kuru malzemeleri karıştırın',
            'Yaş malzemeleri ekleyin',
            'Muffin kalıbına dökün',
            '180 derecede 20 dk pişirin'
        ]
    },
    {
        id: 11,
        title: 'Zeytinyağlı Enginar',
        description: 'Lif ve antioksidan açısından zengin, düşük kalorili klasik diyet yemeği.',
        image: '../../public/images/placeholder.jpg',
        category: 'Sebze Yemekleri',
        healthCategories: ['kilo-verme', 'detoks', 'bagisiklik', 'sindirim'],
        prepTime: '35 dk',
        calories: '180 kcal',
        ingredients: [
            '4 adet enginar',
            '1 adet havuç',
            '1 adet patates',
            '1 su bardağı bezelye',
            '1 adet soğan',
            'Yarım çay bardağı zeytinyağı',
            '1 limon',
            'Tuz'
        ],
        instructions: [
            'Enginarları limonlu suda bekletin.',
            'Soğanı ve havucu doğrayıp zeytinyağında kavurun.',
            'Patates ve bezelyeyi ekleyin, karıştırın.',
            'Enginarları tencereye yerleştirip içlerini doldurun.',
            'Üzerine limon suyu ve tuz ekleyip kısık ateşte pişirin.'
        ]
    },
    {
        id: 12,
        title: 'Fırında Kabak Mücver',
        description: 'Kızartmadan, fırında yapılan hafif ve sağlıklı mücver.',
        image: '../../public/images/placeholder.jpg',
        category: 'Sebze Yemekleri',
        healthCategories: ['kilo-verme', 'sindirim', 'detoks'],
        prepTime: '30 dk',
        calories: '120 kcal',
        ingredients: [
            '3 adet kabak',
            '2 yumurta',
            'Yarım demet dereotu',
            '1 çay bardağı lor peyniri',
            '2 yemek kaşığı tam buğday unu',
            'Tuz, karabiber'
        ],
        instructions: [
            'Kabakları rendeleyip suyunu sıkın.',
            'Tüm malzemeleri karıştırın.',
            'Yağlı kağıt serili tepsiye dökün.',
            '180 derecede 25 dakika pişirin.'
        ]
    },
    {
        id: 13,
        title: 'Yoğurtlu Semizotu Salatası',
        description: 'Probiyotik ve lif kaynağı, ferahlatıcı diyet salatası.',
        image: '../../public/images/placeholder.jpg',
        category: 'Salatalar',
        healthCategories: ['kilo-verme', 'sindirim', 'bagisiklik'],
        prepTime: '10 dk',
        calories: '90 kcal',
        ingredients: [
            '1 demet semizotu',
            '1 su bardağı yoğurt',
            '1 diş sarımsak',
            'Tuz'
        ],
        instructions: [
            'Semizotunu yıkayıp doğrayın.',
            'Yoğurt ve ezilmiş sarımsakla karıştırın.',
            'Tuz ekleyip servis edin.'
        ]
    },
    {
        id: 14,
        title: 'Kinoalı Tavuk Salatası',
        description: 'Yüksek proteinli, tok tutan, düşük kalorili salata.',
        image: '../../public/images/placeholder.jpg',
        category: 'Salatalar',
        healthCategories: ['kilo-verme', 'kas-yapma', 'enerji-artisi'],
        prepTime: '25 dk',
        calories: '220 kcal',
        ingredients: [
            '1 su bardağı haşlanmış kinoa',
            '100g haşlanmış tavuk göğsü',
            '1/2 avokado',
            '1/2 limon suyu',
            'Karışık yeşillik',
            'Tuz, karabiber'
        ],
        instructions: [
            'Kinoayı haşlayın ve soğutun.',
            'Tavuk göğsünü didikleyin.',
            'Tüm malzemeleri karıştırıp limon suyu ekleyin.'
        ]
    },
    {
        id: 15,
        title: 'Fırında Somon ve Sebzeler',
        description: 'Omega-3 ve protein kaynağı, düşük kalorili ana yemek.',
        image: '../../public/images/placeholder.jpg',
        category: 'Deniz Ürünleri',
        healthCategories: ['kilo-verme', 'kalp-sagligi', 'enerji-artisi'],
        prepTime: '30 dk',
        calories: '250 kcal',
        ingredients: [
            '150g somon fileto',
            '1 adet kabak',
            '1 adet havuç',
            '1 adet kırmızı biber',
            '1 yemek kaşığı zeytinyağı',
            'Tuz, karabiber, limon'
        ],
        instructions: [
            'Sebzeleri doğrayıp fırın tepsisine dizin.',
            'Üzerine somon filetoları yerleştirin.',
            'Zeytinyağı, tuz ve baharat ekleyin.',
            '180 derecede 20-25 dakika pişirin.'
        ]
    },
    {
        id: 16,
        title: 'Izgara Hindi Şiş',
        description: 'Yüksek proteinli, düşük yağlı kas yapımını destekleyen ana yemek.',
        image: '../../public/images/placeholder.jpg',
        category: 'Et Yemekleri',
        healthCategories: ['kas-yapma', 'spor', 'kilo-verme'],
        prepTime: '30 dk',
        calories: '210 kcal',
        ingredients: [
            '200g hindi göğüs eti',
            '1 adet kırmızı biber',
            '1 adet yeşil biber',
            '1 yemek kaşığı zeytinyağı',
            'Tuz, karabiber, kekik'
        ],
        instructions: [
            'Hindi etini ve biberleri küp doğrayın.',
            'Şişlere dizin, zeytinyağı ve baharatlarla marine edin.',
            'Izgarada veya fırında pişirin.'
        ]
    },
    {
        id: 17,
        title: 'Yumurta Beyazı Omlet',
        description: 'Kas gelişimi için saf protein kaynağı, hafif omlet.',
        image: '../../public/images/placeholder.jpg',
        category: 'Kahvaltılıklar',
        healthCategories: ['kas-yapma', 'spor', 'enerji-artisi'],
        prepTime: '10 dk',
        calories: '110 kcal',
        ingredients: [
            '4 yumurta beyazı',
            '1 yemek kaşığı lor peyniri',
            'Maydanoz',
            'Tuz, karabiber'
        ],
        instructions: [
            'Yumurta beyazlarını çırpın.',
            'Lor peyniri ve maydanozu ekleyin.',
            'Yapışmaz tavada pişirin.'
        ]
    },
    {
        id: 18,
        title: 'Ton Balıklı Nohut Salatası',
        description: 'Bitkisel protein ve omega-3 kaynağı, kas yapımına destek.',
        image: '../../public/images/placeholder.jpg',
        category: 'Salatalar',
        healthCategories: ['kas-yapma', 'enerji-artisi', 'bagisiklik'],
        prepTime: '15 dk',
        calories: '230 kcal',
        ingredients: [
            '1 su bardağı haşlanmış nohut',
            '1 kutu ton balığı',
            '1/2 kırmızı soğan',
            '1/2 limon suyu',
            'Maydanoz',
            'Tuz, karabiber'
        ],
        instructions: [
            'Nohutları ve ton balığını karıştırın.',
            'Soğan, limon suyu ve baharatları ekleyin.',
            'Maydanozla süsleyin.'
        ]
    },
    {
        id: 19,
        title: 'Fırında Tatlı Patates ve Tavuk',
        description: 'Kompleks karbonhidrat ve protein kaynağı, kas gelişimi için ideal.',
        image: '../../public/images/placeholder.jpg',
        category: 'Fırın Yemekleri',
        healthCategories: ['kas-yapma', 'enerji-artisi', 'spor'],
        prepTime: '35 dk',
        calories: '320 kcal',
        ingredients: [
            '150g tavuk göğsü',
            '1 adet tatlı patates',
            '1 yemek kaşığı zeytinyağı',
            'Tuz, karabiber, kekik'
        ],
        instructions: [
            'Tatlı patatesi ve tavuğu doğrayın.',
            'Baharat ve zeytinyağı ile harmanlayın.',
            'Fırında 200 derecede 25-30 dakika pişirin.'
        ]
    },
    {
        id: 20,
        title: 'Mercimekli Kinoa Bowl',
        description: 'Bitkisel protein ve lif kaynağı, kas yapımını destekler.',
        image: '../../public/images/placeholder.jpg',
        category: 'Kase Yemekleri',
        healthCategories: ['kas-yapma', 'kilo-verme', 'enerji-artisi'],
        prepTime: '25 dk',
        calories: '210 kcal',
        ingredients: [
            '1/2 su bardağı kinoa',
            '1/2 su bardağı haşlanmış yeşil mercimek',
            '1/2 avokado',
            'Karışık yeşillik',
            'Limon suyu',
            'Tuz, karabiber'
        ],
        instructions: [
            'Kinoayı ve mercimeği haşlayın.',
            'Tüm malzemeleri karıştırıp limon suyu ekleyin.'
        ]
    },
    {
        id: 21,
        title: 'Yulaf Lapası',
        description: 'Yavaş sindirilen karbonhidrat ve lif kaynağı, uzun süreli enerji sağlar.',
        image: '../../public/images/placeholder.jpg',
        category: 'Kahvaltılıklar',
        healthCategories: ['enerji-artisi', 'kilo-verme', 'spor'],
        prepTime: '10 dk',
        calories: '180 kcal',
        ingredients: [
            '1/2 su bardağı yulaf ezmesi',
            '1 su bardağı süt (veya bitkisel süt)',
            '1 tatlı kaşığı bal',
            '1/2 muz',
            'Tarçın'
        ],
        instructions: [
            'Yulafı sütle pişirin.',
            'Muz ve balı ekleyin.',
            'Tarçınla süsleyin.'
        ]
    },
    {
        id: 22,
        title: 'Chia Tohumlu Smoothie',
        description: 'Omega-3 ve lif kaynağı, hızlı enerji veren sağlıklı içecek.',
        image: '../../public/images/placeholder.jpg',
        category: 'İçecekler',
        healthCategories: ['enerji-artisi', 'kilo-verme', 'bagisiklik'],
        prepTime: '5 dk',
        calories: '140 kcal',
        ingredients: [
            '1 su bardağı badem sütü',
            '1 yemek kaşığı chia tohumu',
            '1/2 muz',
            '1/2 avokado',
            '1 tatlı kaşığı bal'
        ],
        instructions: [
            'Tüm malzemeleri blenderda karıştırın.',
            'Soğuk servis edin.'
        ]
    },
    {
        id: 23,
        title: 'Enerji Barı',
        description: 'Ev yapımı, rafine şekersiz, sağlıklı enerji barı.',
        image: '../../public/images/placeholder.jpg',
        category: 'Atıştırmalıklar',
        healthCategories: ['enerji-artisi', 'spor', 'kilo-verme'],
        prepTime: '15 dk',
        calories: '160 kcal',
        ingredients: [
            '1 su bardağı yulaf',
            '1/2 su bardağı kuru üzüm',
            '1/2 su bardağı fındık',
            '2 yemek kaşığı bal',
            '1 yemek kaşığı fıstık ezmesi'
        ],
        instructions: [
            'Tüm malzemeleri karıştırın.',
            'Küçük dikdörtgenler halinde şekil verin.',
            'Buzdolabında 1 saat dinlendirin.'
        ]
    },
    {
        id: 24,
        title: 'Avokadolu Tam Tahıllı Tost',
        description: 'Sağlıklı yağ ve lif kaynağı, uzun süreli enerji için ideal.',
        image: '../../public/images/placeholder.jpg',
        category: 'Kahvaltılıklar',
        healthCategories: ['enerji-artisi', 'kilo-verme', 'zihin-acikligi'],
        prepTime: '10 dk',
        calories: '210 kcal',
        ingredients: [
            '2 dilim tam tahıllı ekmek',
            '1/2 avokado',
            '1 tatlı kaşığı limon suyu',
            'Tuz, karabiber'
        ],
        instructions: [
            'Ekmeği kızartın.',
            'Avokadoyu ezin, limon ve baharat ekleyin.',
            'Ekmeğin üzerine sürüp servis edin.'
        ]
    },
    {
        id: 25,
        title: 'Muzlu Fıstık Ezmeli Sandviç',
        description: 'Doğal şeker ve sağlıklı yağ kaynağı, spor öncesi enerji için ideal.',
        image: '../../public/images/placeholder.jpg',
        category: 'Atıştırmalıklar',
        healthCategories: ['enerji-artisi', 'spor', 'kilo-verme'],
        prepTime: '5 dk',
        calories: '200 kcal',
        ingredients: [
            '2 dilim tam buğday ekmeği',
            '1 yemek kaşığı fıstık ezmesi',
            '1/2 muz'
        ],
        instructions: [
            'Ekmeğe fıstık ezmesi sürün.',
            'Muz dilimlerini ekleyin.',
            'Sandviç yapıp servis edin.'
        ]
    },
    {
        id: 26,
        title: 'Zencefilli Tavuk Çorbası',
        description: 'Bağışıklık sistemini güçlendiren, antioksidan ve protein kaynağı çorba.',
        image: '../../public/images/placeholder.jpg',
        category: 'Çorbalar',
        healthCategories: ['bagisiklik', 'sindirim', 'iltihap'],
        prepTime: '35 dk',
        calories: '140 kcal',
        ingredients: [
            '100g tavuk göğsü',
            '1 küçük havuç',
            '1 küçük patates',
            '1 küçük soğan',
            '1 diş sarımsak',
            '1 tatlı kaşığı taze zencefil',
            '1 yemek kaşığı zeytinyağı',
            'Tuz, karabiber'
        ],
        instructions: [
            'Tüm sebzeleri ve tavuğu doğrayın.',
            'Zeytinyağında soğan ve sarımsağı kavurun.',
            'Diğer malzemeleri ekleyip üzerini geçecek kadar su koyun.',
            'Kısık ateşte pişirin, blenderdan geçirin.'
        ]
    },
    {
        id: 27,
        title: 'Limonlu Ispanak Salatası',
        description: 'C vitamini ve demir kaynağı, bağışıklık dostu salata.',
        image: '../../public/images/placeholder.jpg',
        category: 'Salatalar',
        healthCategories: ['bagisiklik', 'kilo-verme', 'detoks'],
        prepTime: '10 dk',
        calories: '70 kcal',
        ingredients: [
            '1 demet taze ıspanak',
            '1/2 limon suyu',
            '1 yemek kaşığı zeytinyağı',
            'Tuz'
        ],
        instructions: [
            'Ispanakları yıkayıp doğrayın.',
            'Limon suyu, zeytinyağı ve tuz ile karıştırın.'
        ]
    },
    {
        id: 28,
        title: 'Yoğurtlu Brokoli Salatası',
        description: 'Probiyotik ve vitamin kaynağı, bağışıklık sistemini destekler.',
        image: '../../public/images/placeholder.jpg',
        category: 'Salatalar',
        healthCategories: ['bagisiklik', 'sindirim', 'kilo-verme'],
        prepTime: '15 dk',
        calories: '90 kcal',
        ingredients: [
            '1 küçük brokoli',
            '1 su bardağı yoğurt',
            '1 diş sarımsak',
            'Tuz'
        ],
        instructions: [
            'Brokoliyi haşlayıp doğrayın.',
            'Yoğurt ve ezilmiş sarımsakla karıştırın.',
            'Tuz ekleyip servis edin.'
        ]
    },
    {
        id: 29,
        title: 'Sarımsaklı Mercimek Çorbası',
        description: 'Bağışıklık güçlendirici, lif ve protein kaynağı çorba.',
        image: '../../public/images/placeholder.jpg',
        category: 'Çorbalar',
        healthCategories: ['bagisiklik', 'sindirim', 'iltihap'],
        prepTime: '30 dk',
        calories: '120 kcal',
        ingredients: [
            '1 su bardağı kırmızı mercimek',
            '1 küçük soğan',
            '1 diş sarımsak',
            '1 havuç',
            '1 yemek kaşığı zeytinyağı',
            'Tuz, kimyon'
        ],
        instructions: [
            'Tüm malzemeleri doğrayıp tencereye alın.',
            'Üzerini geçecek kadar su ekleyin.',
            'Kısık ateşte pişirin, blenderdan geçirin.'
        ]
    },
    {
        id: 30,
        title: 'Portakallı Havuç Salatası',
        description: 'C vitamini ve beta-karoten kaynağı, bağışıklık sistemini destekler.',
        image: '../../public/images/placeholder.jpg',
        category: 'Salatalar',
        healthCategories: ['bagisiklik', 'detoks', 'cilt-bakimi'],
        prepTime: '10 dk',
        calories: '80 kcal',
        ingredients: [
            '2 adet havuç',
            '1 adet portakal',
            '1 yemek kaşığı zeytinyağı',
            'Tuz'
        ],
        instructions: [
            'Havuçları rendeleyin.',
            'Portakalı doğrayın.',
            'Zeytinyağı ve tuz ile karıştırın.'
        ]
    },
    {
        id: 31,
        title: 'Yoğurtlu Kabak Salatası',
        description: 'Probiyotik ve lif kaynağı, sindirimi kolaylaştıran hafif salata.',
        image: '../../public/images/placeholder.jpg',
        category: 'Salatalar',
        healthCategories: ['sindirim', 'kilo-verme', 'bagisiklik'],
        prepTime: '15 dk',
        calories: '90 kcal',
        ingredients: [
            '2 adet kabak',
            '1 su bardağı yoğurt',
            '1 diş sarımsak',
            'Dereotu',
            'Tuz'
        ],
        instructions: [
            'Kabakları rendeleyip az yağda soteleyin.',
            'Soğuyunca yoğurt, sarımsak ve dereotu ile karıştırın.',
            'Tuz ekleyip servis edin.'
        ]
    },
    {
        id: 32,
        title: 'Elmalı Yulaf Lapası',
        description: 'Lif ve prebiyotik kaynağı, bağırsak sağlığını destekler.',
        image: '../../public/images/placeholder.jpg',
        category: 'Kahvaltılıklar',
        healthCategories: ['sindirim', 'enerji-artisi', 'kilo-verme'],
        prepTime: '10 dk',
        calories: '120 kcal',
        ingredients: [
            '1/2 su bardağı yulaf',
            '1 su bardağı süt (veya bitkisel süt)',
            '1 küçük elma',
            'Tarçın',
            '1 tatlı kaşığı bal'
        ],
        instructions: [
            'Yulafı sütle pişirin.',
            'Elmayı rendeleyip ekleyin.',
            'Tarçın ve bal ile tatlandırın.'
        ]
    },
    {
        id: 33,
        title: 'Pancar Salatası',
        description: 'Lif ve antioksidan kaynağı, sindirimi destekler.',
        image: '../../public/images/placeholder.jpg',
        category: 'Salatalar',
        healthCategories: ['sindirim', 'detoks', 'kilo-verme'],
        prepTime: '20 dk',
        calories: '80 kcal',
        ingredients: [
            '2 adet haşlanmış pancar',
            '1 yemek kaşığı zeytinyağı',
            '1 tatlı kaşığı limon suyu',
            'Tuz'
        ],
        instructions: [
            'Pancarları doğrayın.',
            'Zeytinyağı, limon ve tuz ile karıştırın.'
        ]
    },
    {
        id: 34,
        title: 'Zeytinyağlı Enginar Kalbi',
        description: 'Sindirim dostu, lif ve antioksidan kaynağı hafif yemek.',
        image: '../../public/images/placeholder.jpg',
        category: 'Sebze Yemekleri',
        healthCategories: ['sindirim', 'detoks', 'kilo-verme'],
        prepTime: '30 dk',
        calories: '110 kcal',
        ingredients: [
            '4 adet enginar kalbi',
            '1 havuç',
            '1 patates',
            '1 su bardağı bezelye',
            '1 yemek kaşığı zeytinyağı',
            'Tuz, limon suyu'
        ],
        instructions: [
            'Sebzeleri doğrayıp zeytinyağında soteleyin.',
            'Enginar kalplerini ekleyin.',
            'Tuz ve limon suyu ile pişirin.'
        ]
    },
    {
        id: 35,
        title: 'Kefirli Meyve Salatası',
        description: 'Probiyotik ve vitamin kaynağı, bağırsak sağlığını destekler.',
        image: '../../public/images/placeholder.jpg',
        category: 'Tatlılar',
        healthCategories: ['sindirim', 'bagisiklik', 'kilo-verme'],
        prepTime: '10 dk',
        calories: '100 kcal',
        ingredients: [
            '1 su bardağı kefir',
            '1 küçük muz',
            '1 küçük elma',
            '1 küçük armut',
            'Tarçın'
        ],
        instructions: [
            'Meyveleri doğrayın.',
            'Kefir ve tarçın ile karıştırın.'
        ]
    },
    {
        id: 36,
        title: 'Karnabahar Pilavı',
        description: 'Düşük karbonhidratlı, glisemik indeksi düşük, kan şekeri dostu pilav alternatifi.',
        image: '../../public/images/placeholder.jpg',
        category: 'Sebze Yemekleri',
        healthCategories: ['seker-kontrolu', 'kilo-verme', 'diyabet'],
        prepTime: '20 dk',
        calories: '70 kcal',
        ingredients: [
            '1 küçük karnabahar',
            '1 yemek kaşığı zeytinyağı',
            'Tuz, karabiber'
        ],
        instructions: [
            'Karnabaharı rondodan geçirin.',
            'Zeytinyağında soteleyin.',
            'Tuz ve karabiber ekleyip servis edin.'
        ]
    },
    {
        id: 37,
        title: 'Fırında Kabak Cipsi',
        description: 'Düşük kalorili, kan şekeri dostu sağlıklı atıştırmalık.',
        image: '../../public/images/placeholder.jpg',
        category: 'Atıştırmalıklar',
        healthCategories: ['seker-kontrolu', 'kilo-verme', 'diyabet'],
        prepTime: '25 dk',
        calories: '60 kcal',
        ingredients: [
            '2 adet kabak',
            '1 yemek kaşığı zeytinyağı',
            'Tuz, pul biber'
        ],
        instructions: [
            'Kabakları ince dilimleyin.',
            'Zeytinyağı ve baharatlarla harmanlayın.',
            'Fırında 180 derecede 20 dakika pişirin.'
        ]
    },
    {
        id: 38,
        title: 'Chia Puding',
        description: 'Lif ve protein kaynağı, kan şekeri dengesi için ideal tatlı.',
        image: '../../public/images/placeholder.jpg',
        category: 'Tatlılar',
        healthCategories: ['seker-kontrolu', 'diyabet', 'kilo-verme'],
        prepTime: '10 dk + 2 saat bekleme',
        calories: '120 kcal',
        ingredients: [
            '2 yemek kaşığı chia tohumu',
            '1 su bardağı badem sütü',
            '1 tatlı kaşığı bal',
            '1/2 muz (isteğe bağlı)'
        ],
        instructions: [
            'Chia tohumunu süt ve bal ile karıştırın.',
            'Buzdolabında 2 saat bekletin.',
            'Üzerine muz dilimleri ekleyin.'
        ]
    },
    {
        id: 39,
        title: 'Fırında Somon',
        description: 'Omega-3 kaynağı, insülin duyarlılığını artıran sağlıklı ana yemek.',
        image: '../../public/images/placeholder.jpg',
        category: 'Deniz Ürünleri',
        healthCategories: ['seker-kontrolu', 'kalp-sagligi', 'diyabet'],
        prepTime: '25 dk',
        calories: '220 kcal',
        ingredients: [
            '150g somon fileto',
            '1 yemek kaşığı zeytinyağı',
            'Limon',
            'Tuz, karabiber'
        ],
        instructions: [
            'Somonu zeytinyağı, limon ve baharatlarla marine edin.',
            'Fırında 180 derecede 20 dakika pişirin.'
        ]
    },
    {
        id: 40,
        title: 'Kinoalı Sebze Salatası',
        description: 'Düşük glisemik indeksli, lif ve protein kaynağı salata.',
        image: '../../public/images/placeholder.jpg',
        category: 'Salatalar',
        healthCategories: ['seker-kontrolu', 'kilo-verme', 'diyabet'],
        prepTime: '20 dk',
        calories: '130 kcal',
        ingredients: [
            '1 su bardağı haşlanmış kinoa',
            '1 küçük salatalık',
            '1 küçük domates',
            '1/2 limon suyu',
            'Tuz, zeytinyağı'
        ],
        instructions: [
            'Tüm malzemeleri doğrayıp karıştırın.',
            'Limon suyu ve zeytinyağı ekleyin.'
        ]
    },
    {
        id: 41,
        title: 'Zeytinyağlı Akdeniz Salatası',
        description: 'Kalp dostu yağlar ve antioksidanlarla dolu, taze Akdeniz salatası.',
        image: '../../public/images/placeholder.jpg',
        category: 'Salatalar',
        healthCategories: ['kalp-sagligi', 'kilo-verme', 'yaslanma-karsiti'],
        prepTime: '10 dk',
        calories: '110 kcal',
        ingredients: [
            '1 domates',
            '1 salatalık',
            '1/2 kırmızı soğan',
            '1/2 avokado',
            '1 yemek kaşığı zeytinyağı',
            '1 tatlı kaşığı limon suyu',
            'Tuz, kekik'
        ],
        instructions: [
            'Tüm malzemeleri doğrayın.',
            'Zeytinyağı, limon ve baharatlarla karıştırın.'
        ]
    },
    {
        id: 42,
        title: 'Fırında Uskumru',
        description: 'Omega-3 kaynağı, kalp sağlığını destekleyen fırında balık.',
        image: '../../public/images/placeholder.jpg',
        category: 'Deniz Ürünleri',
        healthCategories: ['kalp-sagligi', 'yaslanma-karsiti', 'kolesterol'],
        prepTime: '30 dk',
        calories: '180 kcal',
        ingredients: [
            '2 adet uskumru',
            '1 limon',
            '1 yemek kaşığı zeytinyağı',
            'Tuz, karabiber'
        ],
        instructions: [
            'Balıkları temizleyip dilimleyin.',
            'Limon, zeytinyağı ve baharatlarla marine edin.',
            'Fırında 200 derecede 20 dakika pişirin.'
        ]
    },
    {
        id: 43,
        title: 'Cevizli Ispanak Salatası',
        description: 'Omega-3 ve antioksidan kaynağı, kalp dostu salata.',
        image: '../../public/images/placeholder.jpg',
        category: 'Salatalar',
        healthCategories: ['kalp-sagligi', 'bagisiklik', 'yaslanma-karsiti'],
        prepTime: '10 dk',
        calories: '120 kcal',
        ingredients: [
            '1 demet ıspanak',
            '1/2 avokado',
            '1/2 limon suyu',
            '1 yemek kaşığı ceviz içi',
            'Tuz, zeytinyağı'
        ],
        instructions: [
            'Ispanakları yıkayıp doğrayın.',
            'Avokado, ceviz ve diğer malzemelerle karıştırın.'
        ]
    },
    {
        id: 44,
        title: 'Fırında Sebzeli Somon',
        description: 'Kalp sağlığı için ideal, omega-3 ve lif kaynağı ana yemek.',
        image: '../../public/images/placeholder.jpg',
        category: 'Deniz Ürünleri',
        healthCategories: ['kalp-sagligi', 'kilo-verme', 'yaslanma-karsiti'],
        prepTime: '30 dk',
        calories: '210 kcal',
        ingredients: [
            '150g somon fileto',
            '1 kabak',
            '1 havuç',
            '1 yemek kaşığı zeytinyağı',
            'Tuz, karabiber, limon'
        ],
        instructions: [
            'Sebzeleri doğrayıp fırın tepsisine dizin.',
            'Üzerine somonları yerleştirin.',
            'Zeytinyağı ve baharat ekleyin.',
            'Fırında 200 derecede 20-25 dakika pişirin.'
        ]
    },
    {
        id: 45,
        title: 'Tam Tahıllı Avokadolu Tost',
        description: 'Lif ve sağlıklı yağ kaynağı, kalp dostu kahvaltı.',
        image: '../../public/images/placeholder.jpg',
        category: 'Kahvaltılıklar',
        healthCategories: ['kalp-sagligi', 'kilo-verme', 'yaslanma-karsiti'],
        prepTime: '10 dk',
        calories: '160 kcal',
        ingredients: [
            '2 dilim tam tahıllı ekmek',
            '1/2 avokado',
            '1 tatlı kaşığı limon suyu',
            'Tuz, karabiber'
        ],
        instructions: [
            'Ekmeği kızartın.',
            'Avokadoyu ezin, limon ve baharat ekleyin.',
            'Ekmeğin üzerine sürüp servis edin.'
        ]
    },
    {
        id: 46,
        title: 'Avokadolu Smoothie',
        description: 'Cilt yenileyici vitaminler ve sağlıklı yağlar içeren ferahlatıcı smoothie.',
        image: '../../public/images/placeholder.jpg',
        category: 'İçecekler',
        healthCategories: ['cilt-bakimi', 'bagisiklik', 'detoks'],
        prepTime: '5 dk',
        calories: '140 kcal',
        ingredients: [
            '1/2 avokado',
            '1 küçük muz',
            '1 su bardağı badem sütü',
            '1 tatlı kaşığı bal'
        ],
        instructions: [
            'Tüm malzemeleri blenderda karıştırın.',
            'Soğuk servis edin.'
        ]
    },
    {
        id: 47,
        title: 'Havuçlu Portakallı Salata',
        description: 'Beta-karoten ve C vitamini kaynağı, cilt sağlığını destekler.',
        image: '../../public/images/placeholder.jpg',
        category: 'Salatalar',
        healthCategories: ['cilt-bakimi', 'bagisiklik', 'detoks'],
        prepTime: '10 dk',
        calories: '80 kcal',
        ingredients: [
            '2 havuç',
            '1 portakal',
            '1 yemek kaşığı zeytinyağı',
            'Tuz'
        ],
        instructions: [
            'Havuçları rendeleyin.',
            'Portakalı doğrayın.',
            'Zeytinyağı ve tuz ile karıştırın.'
        ]
    },
    {
        id: 48,
        title: 'Yaban Mersinli Yoğurt',
        description: 'Antioksidan ve probiyotik kaynağı, cilt yenilenmesini destekler.',
        image: '../../public/images/placeholder.jpg',
        category: 'Tatlılar',
        healthCategories: ['cilt-bakimi', 'bagisiklik', 'yaslanma-karsiti'],
        prepTime: '5 dk',
        calories: '100 kcal',
        ingredients: [
            '1 su bardağı yoğurt',
            '1/2 su bardağı yaban mersini',
            '1 tatlı kaşığı bal'
        ],
        instructions: [
            'Yoğurt ve yaban mersinini karıştırın.',
            'Bal ile tatlandırın.'
        ]
    },
    {
        id: 49,
        title: 'Cevizli Ispanak Salatası',
        description: 'Omega-3 ve E vitamini kaynağı, cilt sağlığını destekler.',
        image: '../../public/images/placeholder.jpg',
        category: 'Salatalar',
        healthCategories: ['cilt-bakimi', 'kalp-sagligi', 'yaslanma-karsiti'],
        prepTime: '10 dk',
        calories: '120 kcal',
        ingredients: [
            '1 demet ıspanak',
            '1 yemek kaşığı ceviz içi',
            '1/2 limon suyu',
            'Tuz, zeytinyağı'
        ],
        instructions: [
            'Ispanakları yıkayıp doğrayın.',
            'Ceviz ve diğer malzemelerle karıştırın.'
        ]
    },
    {
        id: 50,
        title: 'Kırmızı Biberli Humus',
        description: 'C vitamini ve sağlıklı yağ kaynağı, cilt yenilenmesini destekler.',
        image: '../../public/images/placeholder.jpg',
        category: 'Mezeler',
        healthCategories: ['cilt-bakimi', 'bagisiklik', 'detoks'],
        prepTime: '15 dk',
        calories: '110 kcal',
        ingredients: [
            '1 su bardağı haşlanmış nohut',
            '1 kırmızı biber',
            '1 yemek kaşığı tahin',
            '1 diş sarımsak',
            '1 yemek kaşığı zeytinyağı',
            'Tuz, limon suyu'
        ],
        instructions: [
            'Kırmızı biberi közleyin ve doğrayın.',
            'Tüm malzemeleri blenderda çekin.',
            'Servis edin.'
        ]
    },
    {
        id: 51,
        title: 'Cevizli Yaban Mersinli Yulaf',
        description: 'Omega-3 ve antioksidan kaynağı, beyin fonksiyonlarını destekler.',
        image: '../../public/images/placeholder.jpg',
        category: 'Kahvaltılıklar',
        healthCategories: ['zihin-acikligi', 'enerji-artisi', 'yaslanma-karsiti'],
        prepTime: '10 dk',
        calories: '180 kcal',
        ingredients: [
            '1/2 su bardağı yulaf',
            '1 su bardağı süt',
            '1/2 su bardağı yaban mersini',
            '1 yemek kaşığı ceviz içi',
            '1 tatlı kaşığı bal'
        ],
        instructions: [
            'Yulafı sütle pişirin.',
            'Yaban mersini, ceviz ve bal ekleyin.'
        ]
    },
    {
        id: 52,
        title: 'Somonlu Avokadolu Salata',
        description: 'Omega-3 ve sağlıklı yağlar ile beyin sağlığını destekler.',
        image: '../../public/images/placeholder.jpg',
        category: 'Salatalar',
        healthCategories: ['zihin-acikligi', 'kalp-sagligi', 'kolesterol'],
        prepTime: '15 dk',
        calories: '210 kcal',
        ingredients: [
            '100g somon füme',
            '1/2 avokado',
            'Karışık yeşillik',
            '1 tatlı kaşığı limon suyu',
            'Tuz, karabiber'
        ],
        instructions: [
            'Tüm malzemeleri doğrayıp karıştırın.'
        ]
    },
    {
        id: 53,
        title: 'Yumurta ve Ispanaklı Omlet',
        description: 'B12 vitamini ve demir kaynağı, zihinsel performansı artırır.',
        image: '../../public/images/placeholder.jpg',
        category: 'Kahvaltılıklar',
        healthCategories: ['zihin-acikligi', 'enerji-artisi', 'hormon'],
        prepTime: '10 dk',
        calories: '140 kcal',
        ingredients: [
            '2 yumurta',
            '1 avuç ıspanak',
            '1 tatlı kaşığı zeytinyağı',
            'Tuz, karabiber'
        ],
        instructions: [
            'Ispanakları zeytinyağında soteleyin.',
            'Çırpılmış yumurtayı ekleyip pişirin.'
        ]
    },
    {
        id: 54,
        title: 'Bademli Muzlu Smoothie',
        description: 'Magnezyum ve potasyum kaynağı, odaklanmayı artırır.',
        image: '../../public/images/placeholder.jpg',
        category: 'İçecekler',
        healthCategories: ['zihin-acikligi', 'enerji-artisi', 'stres'],
        prepTime: '5 dk',
        calories: '130 kcal',
        ingredients: [
            '1 küçük muz',
            '1 su bardağı badem sütü',
            '1 yemek kaşığı badem',
            '1 tatlı kaşığı bal'
        ],
        instructions: [
            'Tüm malzemeleri blenderda karıştırın.'
        ]
    },
    {
        id: 55,
        title: 'Kabaklı Kinoa Salatası',
        description: 'Lif ve mineral kaynağı, beyin sağlığını destekler.',
        image: '../../public/images/placeholder.jpg',
        category: 'Salatalar',
        healthCategories: ['zihin-acikligi', 'kilo-verme', 'enerji-artisi'],
        prepTime: '15 dk',
        calories: '120 kcal',
        ingredients: [
            '1 su bardağı haşlanmış kinoa',
            '1 küçük kabak',
            '1/2 limon suyu',
            'Tuz, zeytinyağı'
        ],
        instructions: [
            'Kabağı rendeleyin ve hafif soteleyin.',
            'Kinoa ve diğer malzemelerle karıştırın.'
        ]
    },
    {
        id: 56,
        title: 'Fırında Sebzeli Tavuk',
        description: 'Protein, vitamin ve mineral kaynağı, hamileler için dengeli ana yemek.',
        image: '../../public/images/placeholder.jpg',
        category: 'Fırın Yemekleri',
        healthCategories: ['hamile', 'bagisiklik', 'kemik'],
        prepTime: '35 dk',
        calories: '220 kcal',
        ingredients: [
            '150g tavuk göğsü',
            '1 havuç',
            '1 patates',
            '1 kabak',
            '1 yemek kaşığı zeytinyağı',
            'Tuz, kekik'
        ],
        instructions: [
            'Sebzeleri doğrayın.',
            'Tavuk ve sebzeleri baharatlarla harmanlayın.',
            'Fırında 200 derecede 30 dakika pişirin.'
        ]
    },
    {
        id: 57,
        title: 'Yoğurtlu Tam Buğdaylı Salata',
        description: 'Kalsiyum ve lif kaynağı, hamileler için sağlıklı salata.',
        image: '../../public/images/placeholder.jpg',
        category: 'Salatalar',
        healthCategories: ['hamile', 'kemik', 'bagisiklik'],
        prepTime: '15 dk',
        calories: '110 kcal',
        ingredients: [
            '1 su bardağı haşlanmış tam buğday',
            '1 su bardağı yoğurt',
            '1 küçük salatalık',
            'Dereotu',
            'Tuz'
        ],
        instructions: [
            'Tüm malzemeleri doğrayıp karıştırın.'
        ]
    },
    {
        id: 58,
        title: 'Mercimekli Sebze Çorbası',
        description: 'Potasyum ve lif kaynağı, tansiyon düzenleyici çorba.',
        image: '../../public/images/placeholder.jpg',
        category: 'Çorbalar',
        healthCategories: ['tansiyon', 'bagisiklik', 'sindirim'],
        prepTime: '25 dk',
        calories: '100 kcal',
        ingredients: [
            '1/2 su bardağı yeşil mercimek',
            '1 havuç',
            '1 patates',
            '1 küçük soğan',
            '1 yemek kaşığı zeytinyağı',
            'Tuz'
        ],
        instructions: [
            'Tüm sebzeleri doğrayın.',
            'Mercimek ve sebzeleri tencereye alın.',
            'Üzerini geçecek kadar su ekleyip pişirin.'
        ]
    },
    {
        id: 59,
        title: 'Fırında Somon ve Brokoli',
        description: 'Omega-3 ve potasyum kaynağı, tansiyon dostu ana yemek.',
        image: '../../public/images/placeholder.jpg',
        category: 'Fırın Yemekleri',
        healthCategories: ['tansiyon', 'kemik', 'bagisiklik'],
        prepTime: '30 dk',
        calories: '180 kcal',
        ingredients: [
            '150g somon fileto',
            '1 küçük brokoli',
            '1 yemek kaşığı zeytinyağı',
            'Tuz, limon'
        ],
        instructions: [
            'Brokoliyi haşlayın.',
            'Somon ve brokoliyi fırın kabına alın.',
            'Zeytinyağı, tuz ve limon ekleyip 180 derecede 20 dakika pişirin.'
        ]
    },
    {
        id: 60,
        title: 'Peynirli Ispanaklı Omlet',
        description: 'Protein, kalsiyum ve potasyum kaynağı, tansiyon dostu kahvaltı.',
        image: '../../public/images/placeholder.jpg',
        category: 'Kahvaltılıklar',
        healthCategories: ['tansiyon', 'kemik', 'bagisiklik'],
        prepTime: '10 dk',
        calories: '130 kcal',
        ingredients: [
            '2 yumurta',
            '1 avuç ıspanak',
            '1 yemek kaşığı beyaz peynir',
            'Tuz, karabiber'
        ],
        instructions: [
            'Ispanakları soteleyin.',
            'Çırpılmış yumurta ve peyniri ekleyip pişirin.'
        ]
    },
    {
        id: 61,
        title: 'Muzlu Yulaf Lapası',
        description: 'Magnezyum ve B6 vitamini kaynağı, stres azaltıcı kahvaltı.',
        image: '../../public/images/placeholder.jpg',
        category: 'Kahvaltılıklar',
        healthCategories: ['stres', 'enerji-artisi', 'zihin-acikligi'],
        prepTime: '10 dk',
        calories: '150 kcal',
        ingredients: [
            '1/2 su bardağı yulaf',
            '1 su bardağı süt',
            '1 küçük muz',
            '1 tatlı kaşığı bal',
            'Tarçın'
        ],
        instructions: [
            'Yulafı sütle pişirin.',
            'Muz, bal ve tarçın ekleyin.'
        ]
    },
    {
        id: 62,
        title: 'Bademli Ispanak Salatası',
        description: 'Magnezyum ve folat kaynağı, stres yönetimine yardımcı salata.',
        image: '../../public/images/placeholder.jpg',
        category: 'Salatalar',
        healthCategories: ['stres', 'bagisiklik', 'zihin-acikligi'],
        prepTime: '10 dk',
        calories: '110 kcal',
        ingredients: [
            '1 demet ıspanak',
            '1 yemek kaşığı badem',
            '1/2 limon suyu',
            'Tuz, zeytinyağı'
        ],
        instructions: [
            'Ispanakları yıkayıp doğrayın.',
            'Badem ve diğer malzemelerle karıştırın.'
        ]
    },
    {
        id: 63,
        title: 'Yoğurtlu Meyve Kasesi',
        description: 'Kalsiyum ve vitamin kaynağı, kemik sağlığını destekler.',
        image: '../../public/images/placeholder.jpg',
        category: 'Tatlılar',
        healthCategories: ['kemik', 'bagisiklik', 'enerji-artisi'],
        prepTime: '5 dk',
        calories: '100 kcal',
        ingredients: [
            '1 su bardağı yoğurt',
            '1 küçük muz',
            '1 küçük elma',
            '1 tatlı kaşığı bal'
        ],
        instructions: [
            'Meyveleri doğrayın.',
            'Yoğurt ve bal ile karıştırın.'
        ]
    },
    {
        id: 64,
        title: 'Fırında Tatlı Patates',
        description: 'Kompleks karbonhidrat ve potasyum kaynağı, stres azaltıcı atıştırmalık.',
        image: '../../public/images/placeholder.jpg',
        category: 'Atıştırmalıklar',
        healthCategories: ['stres', 'enerji-artisi', 'kilo-verme'],
        prepTime: '25 dk',
        calories: '120 kcal',
        ingredients: [
            '1 adet tatlı patates',
            '1 tatlı kaşığı zeytinyağı',
            'Tuz, kekik'
        ],
        instructions: [
            'Tatlı patatesi dilimleyin.',
            'Zeytinyağı ve baharatlarla harmanlayın.',
            'Fırında 200 derecede 20 dakika pişirin.'
        ]
    },
    {
        id: 65,
        title: 'Cevizli Muzlu Smoothie',
        description: 'Omega-3 ve magnezyum kaynağı, stres yönetimine yardımcı içecek.',
        image: '../../public/images/placeholder.jpg',
        category: 'İçecekler',
        healthCategories: ['stres', 'zihin-acikligi', 'enerji-artisi'],
        prepTime: '5 dk',
        calories: '130 kcal',
        ingredients: [
            '1 küçük muz',
            '1 su bardağı süt',
            '1 yemek kaşığı ceviz içi',
            '1 tatlı kaşığı bal'
        ],
        instructions: [
            'Tüm malzemeleri blenderda karıştırın.'
        ]
    },
    {
        id: 66,
        title: 'Keten Tohumlu Yoğurt',
        description: 'Omega-3 ve lif kaynağı, hormon dengesini destekler.',
        image: '../../public/images/placeholder.jpg',
        category: 'Tatlılar',
        healthCategories: ['hormon', 'kilo-verme', 'bagisiklik'],
        prepTime: '5 dk',
        calories: '90 kcal',
        ingredients: [
            '1 su bardağı yoğurt',
            '1 yemek kaşığı keten tohumu',
            '1 tatlı kaşığı bal'
        ],
        instructions: [
            'Yoğurt ve keten tohumunu karıştırın.',
            'Bal ile tatlandırın.'
        ]
    },
    {
        id: 67,
        title: 'Somonlu Avokadolu Salata',
        description: 'Omega-3 ve sağlıklı yağlar ile hormon dengesini destekler.',
        image: '../../public/images/placeholder.jpg',
        category: 'Salatalar',
        healthCategories: ['hormon', 'kalp-sagligi', 'zihin-acikligi'],
        prepTime: '15 dk',
        calories: '210 kcal',
        ingredients: [
            '100g somon füme',
            '1/2 avokado',
            'Karışık yeşillik',
            '1 tatlı kaşığı limon suyu',
            'Tuz, karabiber'
        ],
        instructions: [
            'Tüm malzemeleri doğrayıp karıştırın.'
        ]
    },
    {
        id: 68,
        title: 'Yumurta ve Ispanaklı Omlet',
        description: 'B12 vitamini ve demir kaynağı, hormon dengesini destekler.',
        image: '../../public/images/placeholder.jpg',
        category: 'Kahvaltılıklar',
        healthCategories: ['hormon', 'enerji-artisi', 'zihin-acikligi'],
        prepTime: '10 dk',
        calories: '140 kcal',
        ingredients: [
            '2 yumurta',
            '1 avuç ıspanak',
            '1 tatlı kaşığı zeytinyağı',
            'Tuz, karabiber'
        ],
        instructions: [
            'Ispanakları zeytinyağında soteleyin.',
            'Çırpılmış yumurta ve peyniri ekleyip pişirin.'
        ]
    },
    {
        id: 69,
        title: 'Bademli Muzlu Smoothie',
        description: 'Magnezyum ve potasyum kaynağı, hormon dengesini destekler.',
        image: '../../public/images/placeholder.jpg',
        category: 'İçecekler',
        healthCategories: ['hormon', 'enerji-artisi', 'stres'],
        prepTime: '5 dk',
        calories: '130 kcal',
        ingredients: [
            '1 küçük muz',
            '1 su bardağı badem sütü',
            '1 yemek kaşığı badem',
            '1 tatlı kaşığı bal'
        ],
        instructions: [
            'Tüm malzemeleri blenderda karıştırın.'
        ]
    },
    {
        id: 70,
        title: 'Kabaklı Kinoa Salatası',
        description: 'Lif ve mineral kaynağı, hormon dengesini destekler.',
        image: '../../public/images/placeholder.jpg',
        category: 'Salatalar',
        healthCategories: ['hormon', 'kilo-verme', 'enerji-artisi'],
        prepTime: '15 dk',
        calories: '120 kcal',
        ingredients: [
            '1 su bardağı haşlanmış kinoa',
            '1 küçük kabak',
            '1/2 limon suyu',
            'Tuz, zeytinyağı'
        ],
        instructions: [
            'Kabağı rendeleyin ve hafif soteleyin.',
            'Kinoa ve diğer malzemelerle karıştırın.'
        ]
    },
    {
        id: 71,
        title: 'Yulaflı Elmalı Kahvaltı',
        description: 'Beta-glukan ve lif kaynağı, kolesterol düşürmeye yardımcı kahvaltı.',
        image: '../../public/images/placeholder.jpg',
        category: 'Kahvaltılıklar',
        healthCategories: ['kolesterol', 'kilo-verme', 'kalp-sagligi'],
        prepTime: '10 dk',
        calories: '120 kcal',
        ingredients: [
            '1/2 su bardağı yulaf',
            '1 küçük elma',
            '1 su bardağı süt',
            'Tarçın',
            '1 tatlı kaşığı bal'
        ],
        instructions: [
            'Yulafı sütle pişirin.',
            'Elmayı rendeleyip ekleyin.',
            'Tarçın ve bal ile tatlandırın.'
        ]
    },
    {
        id: 72,
        title: 'Fırında Somon',
        description: 'Omega-3 kaynağı, kolesterol düşürmeye yardımcı ana yemek.',
        image: '../../public/images/placeholder.jpg',
        category: 'Deniz Ürünleri',
        healthCategories: ['kolesterol', 'kalp-sagligi', 'yaslanma-karsiti'],
        prepTime: '25 dk',
        calories: '220 kcal',
        ingredients: [
            '150g somon fileto',
            '1 yemek kaşığı zeytinyağı',
            'Limon',
            'Tuz, karabiber'
        ],
        instructions: [
            'Somonu zeytinyağı, limon ve baharatlarla marine edin.',
            'Fırında 180 derecede 20 dakika pişirin.'
        ]
    },
    {
        id: 73,
        title: 'Cevizli Ispanak Salatası',
        description: 'Omega-3 ve lif kaynağı, kolesterol düşürmeye yardımcı salata.',
        image: '../../public/images/placeholder.jpg',
        category: 'Salatalar',
        healthCategories: ['kolesterol', 'kalp-sagligi', 'yaslanma-karsiti'],
        prepTime: '10 dk',
        calories: '120 kcal',
        ingredients: [
            '1 demet ıspanak',
            '1 yemek kaşığı ceviz içi',
            '1/2 limon suyu',
            'Tuz, zeytinyağı'
        ],
        instructions: [
            'Ispanakları yıkayıp doğrayın.',
            'Ceviz ve diğer malzemelerle karıştırın.'
        ]
    },
    {
        id: 74,
        title: 'Karnabahar Pilavı',
        description: 'Düşük karbonhidratlı, lif kaynağı, kolesterol dostu pilav alternatifi.',
        image: '../../public/images/placeholder.jpg',
        category: 'Sebze Yemekleri',
        healthCategories: ['kolesterol', 'kilo-verme', 'diyabet'],
        prepTime: '20 dk',
        calories: '70 kcal',
        ingredients: [
            '1 küçük karnabahar',
            '1 yemek kaşığı zeytinyağı',
            'Tuz, karabiber'
        ],
        instructions: [
            'Karnabaharı rondodan geçirin.',
            'Zeytinyağında soteleyin.',
            'Tuz ve karabiber ekleyip servis edin.'
        ]
    },
    {
        id: 75,
        title: 'Kinoalı Sebze Salatası',
        description: 'Düşük glisemik indeksli, lif ve protein kaynağı salata.',
        image: '../../public/images/placeholder.jpg',
        category: 'Salatalar',
        healthCategories: ['kolesterol', 'kilo-verme', 'diyabet'],
        prepTime: '20 dk',
        calories: '130 kcal',
        ingredients: [
            '1 su bardağı haşlanmış kinoa',
            '1 küçük salatalık',
            '1 küçük domates',
            '1/2 limon suyu',
            'Tuz, zeytinyağı'
        ],
        instructions: [
            'Tüm malzemeleri doğrayıp karıştırın.',
            'Limon suyu ve zeytinyağı ekleyin.'
        ]
    },
    {
        id: 76,
        title: 'Fırında Sebzeli Tavuk',
        description: 'Protein, vitamin ve mineral kaynağı, kemik sağlığını destekler.',
        image: '../../public/images/placeholder.jpg',
        category: 'Fırın Yemekleri',
        healthCategories: ['kemik', 'bagisiklik', 'tansiyon'],
        prepTime: '35 dk',
        calories: '220 kcal',
        ingredients: [
            '150g tavuk göğsü',
            '1 havuç',
            '1 patates',
            '1 kabak',
            '1 yemek kaşığı zeytinyağı',
            'Tuz, kekik'
        ],
        instructions: [
            'Sebzeleri doğrayın.',
            'Tavuk ve sebzeleri baharatlarla harmanlayın.',
            'Fırında 200 derecede 30 dakika pişirin.'
        ]
    },
    {
        id: 77,
        title: 'Yoğurtlu Tam Buğdaylı Salata',
        description: 'Kalsiyum ve lif kaynağı, tansiyon dostu salata.',
        image: '../../public/images/placeholder.jpg',
        category: 'Salatalar',
        healthCategories: ['tansiyon', 'kemik', 'bagisiklik'],
        prepTime: '15 dk',
        calories: '110 kcal',
        ingredients: [
            '1 su bardağı haşlanmış tam buğday',
            '1 su bardağı yoğurt',
            '1 küçük salatalık',
            'Dereotu',
            'Tuz'
        ],
        instructions: [
            'Tüm malzemeleri doğrayıp karıştırın.'
        ]
    },
    {
        id: 78,
        title: 'Mercimekli Sebze Çorbası',
        description: 'Potasyum ve lif kaynağı, tansiyon düzenleyici çorba.',
        image: '../../public/images/placeholder.jpg',
        category: 'Çorbalar',
        healthCategories: ['tansiyon', 'bagisiklik', 'sindirim'],
        prepTime: '25 dk',
        calories: '100 kcal',
        ingredients: [
            '1/2 su bardağı yeşil mercimek',
            '1 havuç',
            '1 patates',
            '1 küçük soğan',
            '1 yemek kaşığı zeytinyağı',
            'Tuz'
        ],
        instructions: [
            'Tüm sebzeleri doğrayın.',
            'Mercimek ve sebzeleri tencereye alın.',
            'Üzerini geçecek kadar su ekleyip pişirin.'
        ]
    },
    {
        id: 79,
        title: 'Fırında Somon ve Brokoli',
        description: 'Omega-3 ve potasyum kaynağı, tansiyon dostu ana yemek.',
        image: '../../public/images/placeholder.jpg',
        category: 'Fırın Yemekleri',
        healthCategories: ['tansiyon', 'kemik', 'bagisiklik'],
        prepTime: '30 dk',
        calories: '180 kcal',
        ingredients: [
            '150g somon fileto',
            '1 küçük brokoli',
            '1 yemek kaşığı zeytinyağı',
            'Tuz, limon'
        ],
        instructions: [
            'Brokoliyi haşlayın.',
            'Somon ve brokoliyi fırın kabına alın.',
            'Zeytinyağı, tuz ve limon ekleyip 180 derecede 20 dakika pişirin.'
        ]
    },
    {
        id: 80,
        title: 'Peynirli Ispanaklı Omlet',
        description: 'Protein, kalsiyum ve potasyum kaynağı, tansiyon dostu kahvaltı.',
        image: '../../public/images/placeholder.jpg',
        category: 'Kahvaltılıklar',
        healthCategories: ['tansiyon', 'kemik', 'bagisiklik'],
        prepTime: '10 dk',
        calories: '130 kcal',
        ingredients: [
            '2 yumurta',
            '1 avuç ıspanak',
            '1 yemek kaşığı beyaz peynir',
            'Tuz, karabiber'
        ],
        instructions: [
            'Ispanakları soteleyin.',
            'Çırpılmış yumurta ve peyniri ekleyip pişirin.'
        ]
    },
    {
        id: 81,
        title: 'Yoğurtlu Tam Buğdaylı Salata',
        description: 'Kalsiyum ve lif kaynağı, kemik sağlığını destekler.',
        image: '../../public/images/placeholder.jpg',
        category: 'Salatalar',
        healthCategories: ['kemik', 'tansiyon', 'bagisiklik'],
        prepTime: '15 dk',
        calories: '110 kcal',
        ingredients: [
            '1 su bardağı haşlanmış tam buğday',
            '1 su bardağı yoğurt',
            '1 küçük salatalık',
            'Dereotu',
            'Tuz'
        ],
        instructions: [
            'Tüm malzemeleri doğrayıp karıştırın.'
        ]
    },
    {
        id: 82,
        title: 'Fırında Somon ve Brokoli',
        description: 'Omega-3 ve kalsiyum kaynağı, kemik sağlığını destekler.',
        image: '../../public/images/placeholder.jpg',
        category: 'Fırın Yemekleri',
        healthCategories: ['kemik', 'tansiyon', 'bagisiklik'],
        prepTime: '30 dk',
        calories: '180 kcal',
        ingredients: [
            '150g somon fileto',
            '1 küçük brokoli',
            '1 yemek kaşığı zeytinyağı',
            'Tuz, limon'
        ],
        instructions: [
            'Brokoliyi haşlayın.',
            'Somon ve brokoliyi fırın kabına alın.',
            'Zeytinyağı, tuz ve limon ekleyip 180 derecede 20 dakika pişirin.'
        ]
    },
    {
        id: 83,
        title: 'Peynirli Ispanaklı Omlet',
        description: 'Protein, kalsiyum ve folik asit kaynağı, kemik sağlığını destekler.',
        image: '../../public/images/placeholder.jpg',
        category: 'Kahvaltılıklar',
        healthCategories: ['kemik', 'tansiyon', 'bagisiklik'],
        prepTime: '10 dk',
        calories: '130 kcal',
        ingredients: [
            '2 yumurta',
            '1 avuç ıspanak',
            '1 yemek kaşığı beyaz peynir',
            'Tuz, karabiber'
        ],
        instructions: [
            'Ispanakları soteleyin.',
            'Çırpılmış yumurta ve peyniri ekleyip pişirin.'
        ]
    },
    {
        id: 84,
        title: 'Yoğurtlu Meyve Kasesi',
        description: 'Kalsiyum ve vitamin kaynağı, kemik sağlığını destekler.',
        image: '../../public/images/placeholder.jpg',
        category: 'Tatlılar',
        healthCategories: ['kemik', 'bagisiklik', 'enerji-artisi'],
        prepTime: '5 dk',
        calories: '100 kcal',
        ingredients: [
            '1 su bardağı yoğurt',
            '1 küçük muz',
            '1 küçük elma',
            '1 tatlı kaşığı bal'
        ],
        instructions: [
            'Meyveleri doğrayın.',
            'Yoğurt ve bal ile karıştırın.'
        ]
    },
    {
        id: 85,
        title: 'Fırında Sebzeli Tavuk',
        description: 'Protein, vitamin ve mineral kaynağı, kemik sağlığını destekler.',
        image: '../../public/images/placeholder.jpg',
        category: 'Fırın Yemekleri',
        healthCategories: ['kemik', 'bagisiklik', 'tansiyon'],
        prepTime: '35 dk',
        calories: '220 kcal',
        ingredients: [
            '150g tavuk göğsü',
            '1 havuç',
            '1 patates',
            '1 kabak',
            '1 yemek kaşığı zeytinyağı',
            'Tuz, kekik'
        ],
        instructions: [
            'Sebzeleri doğrayın.',
            'Tavuk ve sebzeleri baharatlarla harmanlayın.',
            'Fırında 200 derecede 30 dakika pişirin.'
        ]
    },
    {
        id: 86,
        title: 'Kalsiyumlu Chia Puding',
        description: 'Kalsiyum, omega-3 ve lif kaynağı, hamileler için sağlıklı tatlı.',
        image: '../../public/images/placeholder.jpg',
        category: 'Tatlılar',
        healthCategories: ['hamile', 'kemik', 'bagisiklik'],
        prepTime: '10 dk + 2 saat bekleme',
        calories: '130 kcal',
        ingredients: [
            '2 yemek kaşığı chia tohumu',
            '1 su bardağı süt (veya badem sütü)',
            '1 tatlı kaşığı bal',
            '1/2 muz (isteğe bağlı)'
        ],
        instructions: [
            'Chia tohumunu süt ve bal ile karıştırın.',
            'Buzdolabında 2 saat bekletin.',
            'Üzerine muz dilimleri ekleyin.'
        ]
    },
    {
        id: 87,
        title: 'Fırında Kabak Mücver',
        description: 'Fırında pişen, hafif ve vitamin-mineral açısından zengin hamile dostu mücver.',
        image: '../../public/images/placeholder.jpg',
        category: 'Sebze Yemekleri',
        healthCategories: ['hamile', 'sindirim', 'kilo-verme'],
        prepTime: '30 dk',
        calories: '120 kcal',
        ingredients: [
            '3 adet kabak',
            '2 yumurta',
            'Yarım demet dereotu',
            '1 çay bardağı lor peyniri',
            '2 yemek kaşığı tam buğday unu',
            'Tuz, karabiber'
        ],
        instructions: [
            'Kabakları rendeleyip suyunu sıkın.',
            'Tüm malzemeleri karıştırın.',
            'Yağlı kağıt serili tepsiye dökün.',
            '180 derecede 25 dakika pişirin.'
        ]
    },
    {
        id: 88,
        title: 'Mercimekli Bulgur Pilavı',
        description: 'Demir ve lif kaynağı, hamileler için sağlıklı ana yemek.',
        image: '../../public/images/placeholder.jpg',
        category: 'Ana Yemekler',
        healthCategories: ['hamile', 'sindirim', 'bagisiklik'],
        prepTime: '30 dk',
        calories: '180 kcal',
        ingredients: [
            '1 su bardağı yeşil mercimek',
            '1 su bardağı pilavlık bulgur',
            '1 küçük soğan',
            '2 yemek kaşığı zeytinyağı',
            'Tuz, karabiber'
        ],
        instructions: [
            'Mercimeği haşlayın.',
            'Soğanı zeytinyağında kavurun.',
            'Bulgur ve mercimeği ekleyin, üzerini geçecek kadar su ekleyin.',
            'Kısık ateşte suyunu çekene kadar pişirin.'
        ]
    },
    {
        id: 89,
        title: 'Yoğurtlu Semizotu Salatası',
        description: 'Omega-3, folik asit ve probiyotik kaynağı, hamileler için ferahlatıcı salata.',
        image: '../../public/images/placeholder.jpg',
        category: 'Salatalar',
        healthCategories: ['hamile', 'sindirim', 'bagisiklik'],
        prepTime: '10 dk',
        calories: '90 kcal',
        ingredients: [
            '1 demet semizotu',
            '1 su bardağı yoğurt',
            '1 diş sarımsak',
            'Tuz'
        ],
        instructions: [
            'Semizotunu yıkayıp doğrayın.',
            'Yoğurt ve ezilmiş sarımsakla karıştırın.',
            'Tuz ekleyip servis edin.'
        ]
    },
    {
        id: 90,
        title: 'Fırında Somon ve Sebzeler',
        description: 'Omega-3, protein ve vitamin kaynağı, hamileler için sağlıklı ana yemek.',
        image: '../../public/images/placeholder.jpg',
        category: 'Fırın Yemekleri',
        healthCategories: ['hamile', 'kemik', 'bagisiklik'],
        prepTime: '30 dk',
        calories: '220 kcal',
        ingredients: [
            '150g somon fileto',
            '1 adet kabak',
            '1 adet havuç',
            '1 adet kırmızı biber',
            '1 yemek kaşığı zeytinyağı',
            'Tuz, karabiber, limon'
        ],
        instructions: [
            'Sebzeleri doğrayıp fırın tepsisine dizin.',
            'Üzerine somon filetoları yerleştirin.',
            'Zeytinyağı, tuz ve baharat ekleyin.',
            '180 derecede 20-25 dakika pişirin.'
        ]
    }
];

// DOM Elements
document.addEventListener('DOMContentLoaded', () => {
    // Kategori filtreleme işlemleri
    const categoryButtons = document.querySelectorAll('.category-btn');
    let selectedCategory = 'all';

    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Aktif buton sınıfını güncelle
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Seçilen kategoriyi güncelle ve tarifleri filtrele
            selectedCategory = button.dataset.category;
            displayRecipes();
        });
    });
    const recipesGrid = document.getElementById('recipesGrid');
    const modal = document.getElementById('recipeModal');
    const closeModal = document.getElementById('closeModal');
    const recipeDetails = document.getElementById('recipeDetails');

    // Render recipe cards
    function displayRecipes() {
        recipesGrid.innerHTML = '';
        
        // Tarifleri filtreleme ve sıralama
        const filteredRecipes = recipes.filter(recipe => {
            if (selectedCategory === 'all') return true;
            return recipe.healthCategories && recipe.healthCategories.includes(selectedCategory);
        });

        // Seçili kategorideki tarifleri önce göster
        const sortedRecipes = filteredRecipes.sort((a, b) => {
            const aHasCategory = a.healthCategories && a.healthCategories.includes(selectedCategory);
            const bHasCategory = b.healthCategories && b.healthCategories.includes(selectedCategory);
            return bHasCategory - aHasCategory;
        });

        recipesGrid.innerHTML = sortedRecipes.map(recipe => `
            <div class="recipe-card natural-card" onclick="showRecipeDetails(${recipe.id})">
                <div class="natural-image-wrapper">
                    <img src="${recipe.image}" alt="${recipe.title}" class="natural-image">
                    <span class="natural-category-badge">${recipe.category}</span>
                </div>
                <div class="natural-content">
                    <h2 class="natural-title">${recipe.title}</h2>
                    <p class="natural-desc">${recipe.description.length > 80 ? recipe.description.slice(0, 80) + '...' : recipe.description}</p>
                    <div class="natural-tags">
                        <span class="natural-tag"><i class="fas fa-clock"></i> ${recipe.prepTime}</span>
                        <span class="natural-tag"><i class="fas fa-fire"></i> ${recipe.calories}</span>
                    </div>
                </div>
            </div>
        `).join('');
        
        // Grid yapısını ayarla
        const mediaQuery = window.matchMedia('(max-width: 768px)');
        function handleScreenChange(e) {
            if (e.matches) {
                // Mobil görünüm (1 sütun)
                // Mobil görünüm (2 sütun)
                recipesGrid.style.gridTemplateColumns = 'repeat(2, 1fr)';
            } else {
                // Masaüstü görünüm (5 sütun)
                recipesGrid.style.gridTemplateColumns = 'repeat(5, 1fr)';
            }
        }
        mediaQuery.addListener(handleScreenChange);
        handleScreenChange(mediaQuery);
    }

    // Show recipe details in modal
    window.showRecipeDetails = function(recipeId) {
        const recipe = recipes.find(r => r.id === recipeId);
        recipeDetails.innerHTML = `
            <img src="${recipe.image}" alt="${recipe.title}">
            <h2>${recipe.title}</h2>
            <p>${recipe.description}</p>
            <div class="recipe-tags">
                <span class="recipe-tag">${recipe.category}</span>
                <span class="recipe-tag">${recipe.prepTime}</span>
                <span class="recipe-tag">${recipe.calories}</span>
            </div>
            <h3>Malzemeler</h3>
            <ul class="ingredients-list">
                ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
            </ul>
            <h3>Hazırlanışı</h3>
            <ol class="instructions-list">
                ${recipe.instructions.map(instruction => `<li>${instruction}</li>`).join('')}
            </ol>
        `;
        modal.style.display = 'block';
    }

    // Close modal
    if (closeModal) {
        closeModal.onclick = function() {
            modal.style.display = 'none';
        }
    }

    // Close modal when clicking outside
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    }

    // Initial render
    displayRecipes();
});