const dev_players = [
    {
        perfil: 'https://avatars.githubusercontent.com/u/56305107?v=4',
        nome: 'Caique Moreira',
        vitorias: 5,
        derrotas: 2,
        empates: 2,
        pontos: 0
    },

    {
        perfil: 'https://avatars.githubusercontent.com/u/71636?v=4',
        nome: 'Paulo Silveira',
        vitorias: 7,
        derrotas: 2,
        empates: 2,
        pontos: 0
    },

    {
        perfil: 'https://media-exp1.licdn.com/dms/image/C4D03AQE3T9SwW5oPGw/profile-displayphoto-shrink_200_200/0/1612878972645?e=1622678400&v=beta&t=3W84l0ExILpKnnVD9-b2JCfruJMkJ7YFOekICl5a2jA',
        nome: 'Rafaella Ballerini',
        vitorias: 3,
        derrotas: 2,
        empates: 2,
        pontos: 0
    },

    {
        perfil: 'https://media-exp1.licdn.com/dms/image/C4D03AQGpSwZHEvR_4g/profile-displayphoto-shrink_200_200/0/1547049647105?e=1622678400&v=beta&t=-7uj3Xy3MSMAyiI6Zjt5yayXPr1JlxVBxrq5vlJ9wkc',
        nome: 'Guilherme Lima',
        vitorias: 1,
        derrotas: 2,
        empates: 2,
        pontos: 0
    }
]

const Actions = {

    calculatePoints(dev) {

        let points = (dev.vitorias * 3) + dev.empates;

        dev.pontos = points;
    },

    addVictorie(dev) {

       console.log(dev)
        
    },

    addDerrotas(derrotas) {
        console.log('Função chamada derrotas')
    
    },

    addEmpates(empates) {
        console.log('Função chamada Empate')
    
    },

    clickDev(dev) {
        console.log(dev);
    }
}

const DOM = {

    devsTable: document.querySelector('#data-table tbody'),

    addDev(dev, index) {
        
        const tr = document.createElement('tr');

        tr.innerHTML = DOM.innerHTMLDev(dev, index);
        tr.dataset.index = index;

        DOM.devsTable.appendChild(tr);
    },

    innerHTMLDev(dev, index) {

        const html = `
        <tr>
            <td>
                <img src="${dev.perfil}" alt="dev">
            </td>
            <td>${dev.nome}</td>
            <td>${dev.vitorias}</td>
            <td>${dev.empates}</td>
            <td>${dev.derrotas}</td>
            <td>${dev.pontos}</td>
            <td>
                <button onClick='Actions.addVictorie(${dev})' class='but_victory'>Nova vitória</button>
            </td>
            <td>
                <button onClick='Actions.addDerrotas(${dev.derrotas})' class='but_lost'>Nova derrota</button>
            </td>
            <td>
                <button onClick='Actions.addEmpates(${dev.empates})' class='but_tie'>Novo empate</button>
            </td>
        </tr>
        `;

        return html;
    }
}

const APP = {

    init() {
        dev_players.map((dev, index) => {
            Actions.calculatePoints(dev)
            DOM.addDev(dev, index)
        })
    }
}

APP.init();