let tabelaClassificacao = document.querySelector('.tabela-classificacao');
let tabelaArtilheiros = document.querySelector('.artilheiros-container');
let partidasAndamento = document.querySelector('.partidas--andamento');
let partidasProximas = document.querySelector('.partidas--proximas');
let partidasFinalizadas = document.querySelector('.partidas--finalizadas');
let equipesURL = 'https://atlas.jifo.co/api/connectors/42ebd7dd-0c34-432a-af80-93ad3ae0e5fc';
let artilheirosURL = 'https://atlas.jifo.co/api/connectors/a5f4ee1f-2edd-445a-b109-1ac4663a5b6a';
let livescoreURL = 'https://www.cbf.com.br/api/livescore';

async function getEquipes(url) {
    await fetch(url).then(response=>response.json()).then(data=>{
        let dados = data.data[0];
        dados.shift();
        let equipes = dados;
        criaObjetoTime(equipes);
    }
    );
    alterarHeight();
    document.querySelector('body').style.opacity = '1';
}
function alterarHeight() {
    document.querySelector('.container2').style.height = getComputedStyle(document.querySelector('.tabela-container')).getPropertyValue('height');
}
function criaObjetoTime(equipes) {
    let listaEquipes = [];
    equipes.forEach(e=>{
        let time = [];
        time.posicao = e[0];
        time.nome = e[1];
        time.pontos = e[2];
        time.jogos = e[3];
        time.vitorias = e[4];
        time.empates = e[5];
        time.derrotas = e[6];
        time.golsPro = e[7];
        time.golsContra = e[8];
        time.saldoGols = e[9];
        time.porcentagem = e[10];
        listaEquipes.push(time);
    }
    );
    formataTabela(listaEquipes);
}
function formataNomeEquipe(nome) {
    nome = nome.toLowerCase();
    nome = nome.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    nome = nome.replaceAll(' ', '-');
    return nome;
}
function formataTabela(listaEquipes) {
    let tbody = tabelaClassificacao.childNodes[3];
    tbody.innerHTML = '';
    listaEquipes.forEach(equipe=>{
        tbody.innerHTML += (` <tr> <td class=' ${equipe.posicao <= 4 ? 'libertadores' : equipe.posicao > 4 && equipe.posicao <= 6 ? 'qualiLibertadores' : equipe.posicao > 6 && equipe.posicao <= 12 ? 'sulamericana' : equipe.posicao > 12 && equipe.posicao <= 16 ? '' : 'rebaixado'}'> ${equipe.posicao} </td> <td> <img style='width:20px' src='./images/equipes-escudos/${formataNomeEquipe(equipe.nome)}.png'> ${equipe.nome} </td> <td>${equipe.pontos}</td> <td>${equipe.jogos}</td> <td>${equipe.vitorias}</td> <td>${equipe.empates}</td> <td>${equipe.derrotas}</td> <td>${equipe.golsPro}</td> <td>${equipe.golsContra}</td> <td>${equipe.saldoGols}</td> <td>${equipe.porcentagem}</td> </tr> `);
    }
    );
}
async function getArtilheiros(url) {
    await fetch(url).then(response=>response.json()).then(data=>{
        let jogadores = data.data[0];
        jogadores.shift();
        formataArtilheirosHTML(jogadores);
    }
    );
}
function formataArtilheirosHTML(jogadores) {
    tabelaArtilheiros.innerHTML = (` <div class='artilheiros-titulo'> <p>Artilheiros</p> <i class="uil uil-football"></i> </div> `);
    jogadores.forEach(jogador=>{
        tabelaArtilheiros.innerHTML += (` <div class="jogador-block"> <div class="rank-jogador">${jogador[0]}</div> <div class="nome-jogador">${jogador[1]}</div> <div class="gols-jogador">${jogador[2]}</div> </div> `);
    }
    )
}
async function getLivescore(url) {
    await fetch(url).then(response=>response.json()).then(data=>{
        let andamento = data.filter(e=>e.ds_status == 'Em Andamento');
        let finalizadas = data.filter(e=>e.ds_status == 'Finalizado');
        let proximas = data.filter(e=>e.ds_status == '');
        finalizadas = verificaData(finalizadas);
        proximas = verificaData(proximas);
        if (andamento.length < 1 && finalizadas.length < 1 && proximas.length < 1) {
            tabelaPartidas.style.display = 'none';
            return;
        }
        formataPartidasHTML(andamento, finalizadas, proximas);
    }
    )
}
function verificaData(proximosJogos) {
    let dataAtual = new Date().toLocaleDateString().slice(0, 5);
    return proximosJogos.filter(jogo=>jogo.data == dataAtual);
}
function formataBlocoPartidasHTML(partida) {
    return (` <div class='partida-block'> <p class='competicao'>${partida.competicao.replace('Campeonato ', '')}</p> <div class='clubes-block'> <img src='${partida.mandante_imagem}'> <span>${partida.nm_curto_mandante}</span> <span>${partida.mandante}</span> - <span>${partida.visitante}</span> <span>${partida.nm_curto_visitante}</span> <img src='${partida.visitante_imagem}'> </div> <span class='hora-partida'>${partida.hora}</span> </div> `);
}
function formataPartidasHTML(andamento, finalizadas, proximas) {
    partidasAndamento.classList.add('hidden');
    partidasFinalizadas.classList.add('hidden');
    partidasProximas.classList.add('hidden');
    partidasAndamento.innerHTML = '<h4>Em andamento</h4>';
    partidasFinalizadas.innerHTML = '<h4>Finalizadas</h4>';
    partidasProximas.innerHTML = '<h4>Pr??ximas</h4>';
    andamento.forEach(partida=>{
        partidasAndamento.classList.remove('hidden');
        partidasAndamento.innerHTML += formataBlocoPartidasHTML(partida);
    }
    );
    finalizadas.forEach(partida=>{
        partidasFinalizadas.classList.remove('hidden');
        partidasFinalizadas.innerHTML += formataBlocoPartidasHTML(partida);
    }
    );
    proximas.forEach(partida=>{
        partidasProximas.classList.remove('hidden');
        partidasProximas.innerHTML += formataBlocoPartidasHTML(partida);
    }
    );
}
setInterval(()=>{
    getLivescore(livescoreURL);
    getEquipes(equipesURL);
    getArtilheiros(artilheirosURL);
}
, 30000);
getLivescore(livescoreURL);
getEquipes(equipesURL);
getArtilheiros(artilheirosURL);
