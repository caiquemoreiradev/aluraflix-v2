const contents = [];

const DOM = {

    innerHtmlContent(arrayContent) {

        arrayContent.map((item, index) => {

            //Clonando modelo
            let contentItem = document.querySelector('.models .content').cloneNode(true);

            //Setando id
            contentItem.setAttribute('data-key', index);

            //Adicionando Imagem
            contentItem.querySelector('.poster__content').src = item.image;

            //Adicionando Nome
            contentItem.querySelector('.content__infos h2').innerHTML = item.nameContent;

            //Adicionando Infos
            contentItem.querySelector('.content__infos h4').innerHTML = `${item.type} | ${item.producer} | ${item.recomendation}`

            if (item.type == 'TV Show') {
                document.querySelector('.tvShows').append(contentItem);
            }

            else if (item.type == 'Action') {
                document.querySelector('.action').append(contentItem);
            }

            else if (item.type == 'Animation') {
                document.querySelector('.animation').append(contentItem);
            }

            else if (item.type == 'Comedy') {
                document.querySelector('.comedy').append(contentItem);
            }
        })
    },
}

const Filters = {

    filterContentAction() {

        let actionContent = [];

        contents.map(action => {
            if (action.type == 'Action') {
                actionContent.push(action)
            }
        })

        document.querySelector('.action').innerHTML = '';
        DOM.innerHtmlContent(actionContent);


        document.querySelector('section.tvShows__container').classList.add('hide');
        document.querySelector('section.comedy__container').classList.add('hide');
        document.querySelector('section.animations__container').classList.add('hide');
        document.querySelector('section.addContent').classList.add('hide');

        document.querySelector('section.action__container').classList.remove('hide');
    },

    filterTVShows() {

        let tvShowsContent = [];

        contents.map(tvShows => {
            if (tvShows.type == 'TV Show') {
                tvShowsContent.push(tvShows)
            }
        })

        console.log(tvShowsContent)


        document.querySelector('.tvShows').innerHTML = '';
        DOM.innerHtmlContent(tvShowsContent);

        document.querySelector('section.action__container').classList.add('hide');
        document.querySelector('section.comedy__container').classList.add('hide');
        document.querySelector('section.animations__container').classList.add('hide');
        document.querySelector('section.addContent').classList.add('hide');


        document.querySelector('section.tvShows__container').classList.remove('hide');
    },

    filterComedies() {

        let comedies = [];

        contents.map(content => {
            if (content.type == 'Comedy') {
                comedies.push(content)
            }
        })

        document.querySelector('.comedy').innerHTML = '';
        DOM.innerHtmlContent(comedies);

        document.querySelector('section.action__container').classList.add('hide');
        document.querySelector('section.tvShows__container').classList.add('hide');
        document.querySelector('section.animations__container').classList.add('hide');

        document.querySelector('section.addContent').classList.add('hide');

        document.querySelector('section.comedy__container').classList.remove('hide');

    },

    filterAnimations() {

        let animationsContents = [];

        contents.map(animation => {
            if (animation.type == 'Animation') {
                animationsContents.push(animation)
            }
        })

        document.querySelector('.animation').innerHTML = '';
        DOM.innerHtmlContent(animationsContents);

        document.querySelector('section.action__container').classList.add('hide');
        document.querySelector('section.comedy__container').classList.add('hide');
        document.querySelector('section.tvShows__container').classList.add('hide');

        document.querySelector('section.addContent').classList.add('hide');

        document.querySelector('section.animations__container').classList.remove('hide');
    },

    newContent() {
        document.querySelector('section.action__container').classList.add('hide');
        document.querySelector('section.comedy__container').classList.add('hide');
        document.querySelector('section.tvShows__container').classList.add('hide');
        document.querySelector('section.animations__container').classList.add('hide');

        document.querySelector('section.addContent').classList.remove('hide');
    },

    removeFilters() {
        document.querySelector('section.action__container').classList.remove('hide');
        document.querySelector('section.comedy__container').classList.remove('hide');
        document.querySelector('section.tvShows__container').classList.remove('hide');
        document.querySelector('section.animations__container').classList.remove('hide');

        document.querySelector('section.addContent').classList.add('hide');

        document.querySelector('.animation').innerHTML = '';
        document.querySelector('.tvShows').innerHTML = '';
        document.querySelector('.action').innerHTML = '';
        document.querySelector('.comedy').innerHTML = '';

        DOM.innerHtmlContent(contents);
    }
}

const Form = {

    inputName: document.querySelector('#name__content'),
    inputRecomendation: document.querySelector('#recomendation__content'),
    inputProducer: document.querySelector('#producer__content'),
    inputImage: document.querySelector('#image__content'),
    inputType: document.querySelector('#type__content'),

    getValues() {
        return {
            inputName: Form.inputName.value,
            inputRecomendation: Form.inputRecomendation.value,
            inputProducer: Form.inputProducer.value,
            inputImage: Form.inputImage.value,
            inputType: Form.inputType.value,
        }
    },

    saveContent() {
        const {
            inputName,
            inputRecomendation,
            inputProducer,
            inputImage,
            inputType
        } = Form.getValues();

        let newContent = {
            nameContent: inputName,
            recomendation: inputRecomendation,
            producer: inputProducer,
            image: inputImage,
            type: inputType
        }
        
        contents.push(newContent);

        document.querySelector('#name__content').value = '';
        document.querySelector('#recomendation__content').value = '';
        document.querySelector('#producer__content').value = '';
        document.querySelector('#image__content').value = '';
        document.querySelector('#type__content').value = '0';

        DOM.innerHtmlContent(contents);

    }
}

console.log(contents)
DOM.innerHtmlContent(contents);


/*
    {
       image: 'https://www.themoviedb.org/t/p/original/sCGXFldnBkLz1u68EMogCYhP7PK.jpg',
        name: 'The Flash',
        type: 'TV Show',
        producer: 'CW',
        recomendation: '14+'
    },

    {
        image: 'https://www.themoviedb.org/t/p/original/jcQ5ez9AdJIq9IHVo61PqDPLQsS.jpg',
        name: 'Wanda Vision',
        type: 'TV Show',
        producer: 'Disney+',
        recomendation: '14+'
    },

    {
        image: 'https://www.themoviedb.org/t/p/original/y4odoG9qErFamUjdA3vbHvq7NoK.jpg',
        name: 'Cobra Kai',
        type: 'TV Show',
        producer: 'Netflix Orignal',
        recomendation: '12+'
    },

    {
        image: 'https://www.themoviedb.org/t/p/original/yvqCH0007LBLe9bjf0FFMKOptDt.jpg',
        name: 'Liga da Justiça de Zack Snyder',
        type: 'Action',
        producer: 'Warner',
        recomendation: '14+'
    },

    {
        image: 'https://www.themoviedb.org/t/p/original/yaRps1bMQLyz54M8ib5YdA2a2RZ.jpg',
        name: 'Os Vingadores: Ultimato ',
        type: 'Action',
        producer: 'Marvel Studios/Disney',
        recomendation: '14+'
    },

    {
        image: 'https://www.themoviedb.org/t/p/original/guF1RNIPHGfAIx8nD6OXsVcCmI9.jpg',
        name: 'Kingsman: Serviço Secreto',
        type: 'Action',
        producer: 'Century Fox',
        recomendation: '12+'
    },

    {
        image: 'https://www.themoviedb.org/t/p/original/dbmKYY48PohU6DAx75Iq1hxUVm2.jpg',
        name: 'Rick e Morty',
        type: 'Animation',
        producer: 'Netflix',
        recomendation: '16+'
    },

    {
        image: 'https://www.themoviedb.org/t/p/original/ue739Z2a3sYppHqJf5gDq3C4nt9.jpg',
        name: 'O incrível mundo de Gumball',
        type: 'Animation',
        producer: 'Cartoon Network',
        recomendation: '12+'
    },

    {
        image: 'https://www.themoviedb.org/t/p/original/oNyjhBxQsYKnKdhnm4nQqQ9gAuX.jpg',
        name: 'Gravity Falls: Um verão de mistérios',
        type: 'Animation',
        producer: 'Disney',
        recomendation: '12+'
    },

    {
        image: 'https://www.themoviedb.org/t/p/original/jv21e9X8t3m5s5S61hJx7GI3mCQ.jpg',
        name: 'The Big Bang Theory',
        type: 'Comedy',
        producer: 'Warner Bros',
        recomendation: '16+'
    },

    {
        image: 'https://www.themoviedb.org/t/p/original/xVO1aKyVQYbjAiV9nIqi0W3sm3E.jpg',
        name: 'Como eu conheci sua mãe',
        type: 'Comedy',
        producer: 'TBS',
        recomendation: '16+'
    },

    {
        image: 'https://www.themoviedb.org/t/p/original/vyO6EQ45gOaa65c3YCgqImQsxiG.jpg',
        name: 'Brooklyn Nine Nine',
        type: 'Comedy',
        producer: 'CBS',
        recomendation: '14+'
    },


     actionContent.push(
        {
            image: 'https://www.themoviedb.org/t/p/original/kXzwQdIBmzxfz8LCXI2h31EXYJf.jpg',
            name: 'Zona de Combate',
            type: 'Action',
            producer: 'Netflix Original',
            recomendation: '14+'
        },

        {
            image: 'https://www.themoviedb.org/t/p/original/wDDaOzp8d49YQ8H9fLOkiqW4JDo.jpg',
            name: 'Guardiões da Galáxia',
            type: 'Action',
            producer: 'Netflix Original',
            recomendation: '14+'
        },

        {
            image: 'https://www.themoviedb.org/t/p/original/zTqrLIFED5HYM8tmb7gCahUt4QF.jpg',
            name: 'Django',
            type: 'Action',
            producer: 'Netflix Original',
            recomendation: '14+'
        },
    )


        tvShowsContent.push(
        {
            image: 'https://www.themoviedb.org/t/p/original/f5pqnH5367jqVwdGWFvntKfe3MZ.jpg',
            name: 'The Umbrella Academy',
            type: 'TV Show',
            producer: 'Netflix Original',
            recomendation: '14+'
        },

        {
            image: 'https://www.themoviedb.org/t/p/original/kCx6Ij7hLRnfHbI93UOZxiAAUk3.jpg',
            name: 'Peaky Blinders',
            type: 'TV Show',
            producer: 'Netflix Original',
            recomendation: '14+'
        },

        {
            image: 'https://www.themoviedb.org/t/p/original/xxKgiJCNfkpapQl2ZYMh1bLLoRm.jpg',
            name: 'Feliz!',
            type: 'TV Show',
            producer: 'Netflix Original',
            recomendation: '14+'
        },
    )



     comedies.push(
        {
            image: 'https://www.themoviedb.org/t/p/original/cVFcnJsVoz8ENa2ygSzMsNZJtmU.jpg',
            name: 'Unbreakable Kimmy Schmidt',
            type: 'Comedy',
            producer: 'Netflix Original',
            recomendation: '14+'
        },

        {
            image: 'https://www.themoviedb.org/t/p/original/iL2NWqQugWzt87h7eZX0pRFaTzF.jpg',
            name: 'As Novas Aventuras do Rei Macaco ',
            type: 'Comedy',
            producer: 'Netflix Original',
            recomendation: '14+'
        },

        {
            image: 'https://www.themoviedb.org/t/p/original/fYQEasj0JTUX8RE6I6Knc0CQuqN.jpg',
            name: 'Freaky',
            type: 'Comedy',
            producer: 'Netflix Original',
            recomendation: '14+'
        },
    )

    animationsContents.push(
        {
            image: 'https://www.themoviedb.org/t/p/original/2vbE9ajftJ7dkqUAyxDS0WFILx8.jpg',
            name: 'Apenas um show',
            type: 'Animation',
            producer: 'Cartoon Network',
            recomendation: '12+'
        },

        {
            image: 'https://www.themoviedb.org/t/p/original/fyYBSS4cZYQGLl8BARALtKWINBH.jpg',
            name: 'Futurama',
            type: 'Animation',
            producer: 'Fox',
            recomendation: '14+'
        },

        {
            image: 'https://www.themoviedb.org/t/p/original/hHwEptckXUwZM7XO2lxZ8w8upuU.jpg',
            name: 'Os Jovens Titãs',
            type: 'Animation',
            producer: 'Netflix Original',
            recomendation: '14+'
        },
    )
    */