$(function() {
    var inputs = $('.city_point');
    var nameValueElement = $('#cityValue');
    var signatureElement = $('.signature');
    var paras = $('.description-flex-container').find('.text-city');

    // Данные для точек
    var pointData = [
        {
            name: "Самара",
            content: [
                "В 2024 году Самара отмечает 438 лет со дня своего основания. Сейчас этот город занимает 9-е место по численности населения среди городов России, и его численность - 1,173 миллиона человек. Город с гордостью носит звание города трудовой и боевой славы, ведь именно сюда были эвакуированы военные предприятия, во время войны Самара стала крупнейшим промышленным центром.\n" +
                "Сейчас в городе расположено более 150 крупных и средних промышленных предприятий. Город славится своей набережной, протяженность которой составляет 5 километров, а также площадью Куйбышева, занимающей 17,4 гектара — самой большой площадью в Европе. Самара также является первым городом России по количеству торговых площадей на душу населения. В 2018 году на новом стадионе «Самара Арена» прошло 6 матчей чемпионата мира по футболу, что добавило городу международной известности. В городе представлены 7 конфессий, что отражает культурное и религиозное разнообразие города. "
            ],
            image: "images/cites/samara.png"
        },
        {
            name: "Тольятти",
            content: [
                "Тольятти — самый крупный город России, не являющийся центром субъекта Федерации, с населением 699,4 тысячи человек. Он был основан в начале XVIII века промышленником Василием Татищевым и долгое время назывался Ставрополем или Ставрополем-на-Волге, а в этом году отпраздновал свое 287-летие уже с другим именем - \"Тольятти\", которое получил в честь итальянского коммунистического деятеля Пальмиро Тольятти. На территории города есть градообразующее предприятие \"АвтоВАЗ\", которое более 55 лет является лидером в этой сфере в нашей стране. Протяжённость города вдоль Волги составляет 40 километров, а площадь лесов и парков в Тольятти достигает 25% процентов, что делает его одним из самых зелёных городов региона."
            ],
            image: "images/cites/tolyatti.png"
        },
        {
            name: "Сызрань",
            content: [
                "Город Сызрань, третий по величине в области, был основан в 1683 году, в этом году отмечает свое 341-летие. На месте, где сегодня располагается Сызрань, еще 3,5 тыс. лет до н. э. проживала высокоорганизованная цивилизация, о чем свидетельствуют археологические раскопки. На рубеже XIX-XX веков Сызрань занимала 4-е место в стране по переработке зерна, уступая лишь Нижнему Новгороду, Саратову и Самаре. Сейчас по величине промышленного потенциала Сызрань занимает 3-е место в Самарской области, специализируясь на машиностроении, нефтеперерабатывающей промышленности, на производстве товаров общего потребления. Сызрань также известна своими природными богатствами: на её территории расположены 4 охраняемых природных объекта, отнесённых к государственным памятникам природы местного значения. В 2010 году флаг Сызрани побывал в космосе благодаря бортинженеру корабля «Союз ТМА-18» Михаилу Корниенко, который является уроженцем этого города."
                // , на котором изображен черный бык в золотом поле, символизирующий успехи в торговле скотом и хлебом и учрежденный еще во времена правления Екатерины II,
            ],
            image: "images/cites/sizran.png"
        },

    ];

    function setDefaultText() {
        nameValueElement.text(" САМАРСКАЯ ОБЛАСТЬ – " + "СЕРДЦЕ РОССИИ");
        paras.eq(0).text("В этом году Самарской области, и к настоящему моменту она занимает "+"50-е место"+ " по площади среди регионов России. Её население составляет" +" более 3,18 миллиона "+ "человек. Её столицей является город " +"Самара" +". Этот регион считается самым космическим регион страны, ведь именно здесь расположены все ведущие предприятия этой отрасли. В Самарской области развиты области энергетики, промышленности, сельского хозяйства, науки и исследований. Нельзя не отметить культурных и научных деятелей, который внесли огромный вклад в развитие не только региона, но и всей страны."  +
            "\n" + "Самара, Тольятти и Сызрань – три самых крупных города Самарской области. Такие похожие и такие разные, они и сегодня сочетают неспешность и основательность купеческой самобытности с динамикой современных промышленных центров.");
        const cityImage = document.getElementById('cityImage');
        cityImage.src = 'images/sam_obl.png';

    }



    // Устанавливаем текст по умолчанию при загрузке страницы
    setDefaultText();

    inputs.click(function() {
        var t = $(this);
        var targetIndex = t.data('city');
        var pointInfo = pointData[targetIndex];

        nameValueElement.text(pointInfo.name);
        signatureElement.text(pointInfo.name)
        paras.each(function(index) {
            $(this).text(pointInfo.content[index] || "");
        });
        const cityImage = document.getElementById('cityImage');
        cityImage.src = pointInfo.image;
        if (targetIndex===0) {
            cityImage.style.width='70%';
        }
        else if (targetIndex===1) {
            cityImage.style.width='130%';
            cityImage.style.marginLeft='-15%';

        }
        else {
            cityImage.style.width='90%';
        }

    });
});
