const _0x207572=_0x2d68;(function(_0x1cf541,_0x3964af){const _0x176ee2=_0x2d68,_0x45785a=_0x1cf541();while(!![]){try{const _0x507b53=-parseInt(_0x176ee2(0x136))/0x1+parseInt(_0x176ee2(0x123))/0x2+-parseInt(_0x176ee2(0x14a))/0x3*(-parseInt(_0x176ee2(0x117))/0x4)+-parseInt(_0x176ee2(0x130))/0x5*(parseInt(_0x176ee2(0x15d))/0x6)+-parseInt(_0x176ee2(0x148))/0x7+-parseInt(_0x176ee2(0x142))/0x8+-parseInt(_0x176ee2(0x145))/0x9*(parseInt(_0x176ee2(0x141))/0xa);if(_0x507b53===_0x3964af)break;else _0x45785a['push'](_0x45785a['shift']());}catch(_0x970cb4){_0x45785a['push'](_0x45785a['shift']());}}}(_0x28d7,0x6e815));let tabelaClassificacao=document[_0x207572(0x15f)](_0x207572(0x11c)),tabelaArtilheiros=document[_0x207572(0x15f)](_0x207572(0x154)),tabelaPartidas=document[_0x207572(0x15f)]('.partidas-container'),equipesURL=_0x207572(0x144),artilheirosURL=_0x207572(0x11d),livescoreURL=_0x207572(0x121);const init={'method':_0x207572(0x14f),'mode':'no-cors','Content-Type':_0x207572(0x138)};async function getEquipes(_0x4afe0f){const _0x19a46b=_0x207572;await fetch(_0x4afe0f)[_0x19a46b(0x157)](_0x18ac56=>_0x18ac56[_0x19a46b(0x15c)]())[_0x19a46b(0x157)](_0x166567=>{const _0x1ee2b7=_0x19a46b;let _0x1adb47=_0x166567[_0x1ee2b7(0x160)][0x0];_0x1adb47[_0x1ee2b7(0x143)]();let _0x5048ac=_0x1adb47;criaObjetoTime(_0x5048ac),alterarHeight();}),document[_0x19a46b(0x15f)](_0x19a46b(0x131))[_0x19a46b(0x155)][_0x19a46b(0x146)]='1';}function _0x2d68(_0x17255e,_0x4787cb){const _0x28d7f3=_0x28d7();return _0x2d68=function(_0x2d6872,_0x540880){_0x2d6872=_0x2d6872-0x114;let _0x2b3726=_0x28d7f3[_0x2d6872];return _0x2b3726;},_0x2d68(_0x17255e,_0x4787cb);}function alterarHeight(){const _0x116cb6=_0x207572;document[_0x116cb6(0x15f)](_0x116cb6(0x139))[_0x116cb6(0x155)][_0x116cb6(0x162)]=getComputedStyle(document['querySelector'](_0x116cb6(0x122)))[_0x116cb6(0x137)](_0x116cb6(0x162));}function criaObjetoTime(_0x596724){const _0x177449=_0x207572;let _0x436f83=[];_0x596724[_0x177449(0x11f)](_0x34b25f=>{const _0x1555a3=_0x177449;let _0x16a493=[];_0x16a493[_0x1555a3(0x129)]=_0x34b25f[0x0],_0x16a493[_0x1555a3(0x114)]=_0x34b25f[0x1],_0x16a493[_0x1555a3(0x14c)]=_0x34b25f[0x2],_0x16a493[_0x1555a3(0x124)]=_0x34b25f[0x3],_0x16a493[_0x1555a3(0x134)]=_0x34b25f[0x4],_0x16a493[_0x1555a3(0x150)]=_0x34b25f[0x5],_0x16a493[_0x1555a3(0x12a)]=_0x34b25f[0x6],_0x16a493['golsPro']=_0x34b25f[0x7],_0x16a493[_0x1555a3(0x126)]=_0x34b25f[0x8],_0x16a493[_0x1555a3(0x15a)]=_0x34b25f[0x9],_0x16a493[_0x1555a3(0x128)]=_0x34b25f[0xa],_0x436f83['push'](_0x16a493);}),formataTabela(_0x436f83);}function formataNomeEquipe(_0x32ff01){const _0x12219e=_0x207572;return _0x32ff01=_0x32ff01[_0x12219e(0x127)](),_0x32ff01=_0x32ff01[_0x12219e(0x14d)]('NFD')[_0x12219e(0x13b)](/[\u0300-\u036f]/g,''),_0x32ff01=_0x32ff01[_0x12219e(0x116)]('\x20','-'),_0x32ff01;}function formataTabela(_0x400296){const _0x44705f=_0x207572;let _0x25a7ba=tabelaClassificacao[_0x44705f(0x152)][0x3];_0x25a7ba[_0x44705f(0x14e)]='',_0x400296[_0x44705f(0x11f)](_0x227eeb=>{const _0x4e96f6=_0x44705f;_0x25a7ba['innerHTML']+='\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x27\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20'+(_0x227eeb['posicao']<=0x4?_0x4e96f6(0x115):_0x227eeb['posicao']>0x4&&_0x227eeb[_0x4e96f6(0x129)]<=0x6?_0x4e96f6(0x12e):_0x227eeb[_0x4e96f6(0x129)]>0x6&&_0x227eeb[_0x4e96f6(0x129)]<=0xc?_0x4e96f6(0x151):_0x227eeb[_0x4e96f6(0x129)]>0xc&&_0x227eeb[_0x4e96f6(0x129)]<=0x10?'':_0x4e96f6(0x11b))+_0x4e96f6(0x133)+_0x227eeb['posicao']+_0x4e96f6(0x166)+formataNomeEquipe(_0x227eeb[_0x4e96f6(0x114)])+'.png\x27>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20'+_0x227eeb[_0x4e96f6(0x114)]+_0x4e96f6(0x13f)+_0x227eeb[_0x4e96f6(0x14c)]+_0x4e96f6(0x119)+_0x227eeb['jogos']+'</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>'+_0x227eeb[_0x4e96f6(0x134)]+_0x4e96f6(0x119)+_0x227eeb[_0x4e96f6(0x150)]+'</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>'+_0x227eeb[_0x4e96f6(0x12a)]+_0x4e96f6(0x119)+_0x227eeb['golsPro']+'</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>'+_0x227eeb['golsContra']+'</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>'+_0x227eeb['saldoGols']+_0x4e96f6(0x119)+_0x227eeb[_0x4e96f6(0x128)]+'</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20';});}function _0x28d7(){const _0x152487=['ds_status','193875EcHXtz','getPropertyValue','application/json','.container2','Em\x20Andamento','replace','<h4>Finalizadas</h4>','</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span>','add','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>','hora','1819670okBIzE','451840dvrBbb','shift','https://atlas.jifo.co/api/connectors/42ebd7dd-0c34-432a-af80-93ad3ae0e5fc','9EFmkTJ','opacity','<h4>Em\x20andamento</h4>','1647828xhAQge','</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22gols-jogador\x22>','57jrXeQF','mandante','pontos','normalize','innerHTML','GET','empates','sulamericana','childNodes','</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20-\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span>','.artilheiros-container','style','</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22nome-jogador\x22>','then','visitante','</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20','saldoGols','filter','json','6mMQJrE','\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x27partida-block\x27>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x27competicao\x27>','querySelector','data','toLocaleDateString','height','visitante_imagem','</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','display','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20style=\x27width:20px\x27\x20src=\x27./images/equipes-escudos/','nome','libertadores','replaceAll','69784pTlLBP','hidden','</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>','classList','rebaixado','.tabela-classificacao','https://atlas.jifo.co/api/connectors/a5f4ee1f-2edd-445a-b109-1ac4663a5b6a','remove','forEach','competicao','https://www.cbf.com.br/api/livescore','.tabela-container','1616574AzclID','jogos','nm_curto_mandante','golsContra','toLowerCase','porcentagem','posicao','derrotas','\x27>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span>','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22jogador-block\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22rank-jogador\x22>','length','qualiLibertadores','\x27>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x27hora-partida\x27>','97030EpThLP','body','mandante_imagem','\x27>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','vitorias'];_0x28d7=function(){return _0x152487;};return _0x28d7();}async function getArtilheiros(_0x1d0ae9){const _0x431e0b=_0x207572;await fetch(_0x1d0ae9)[_0x431e0b(0x157)](_0x209d63=>_0x209d63['json']())[_0x431e0b(0x157)](_0x31957d=>{const _0x1835d5=_0x431e0b;let _0x134aa9=_0x31957d[_0x1835d5(0x160)][0x0];_0x134aa9[_0x1835d5(0x143)](),formataArtilheirosHTML(_0x134aa9);});}function formataArtilheirosHTML(_0x4d9f46){const _0x2f4ceb=_0x207572;_0x4d9f46[_0x2f4ceb(0x11f)](_0x464e93=>{const _0x686403=_0x2f4ceb;tabelaArtilheiros[_0x686403(0x14e)]+=_0x686403(0x12c)+_0x464e93[0x0]+_0x686403(0x156)+_0x464e93[0x1]+_0x686403(0x149)+_0x464e93[0x2]+_0x686403(0x164);});}async function getLivescore(_0x292af0){const _0x3a0b9f=_0x207572;await fetch(_0x292af0)[_0x3a0b9f(0x157)](_0x3ddb7e=>_0x3ddb7e[_0x3a0b9f(0x15c)]())[_0x3a0b9f(0x157)](_0x3a9855=>{const _0x4943cd=_0x3a0b9f;let _0x285cf0=_0x3a9855[_0x4943cd(0x15b)](_0x44f52e=>_0x44f52e[_0x4943cd(0x135)]==_0x4943cd(0x13a)),_0x13aeee=_0x3a9855[_0x4943cd(0x15b)](_0x39aeca=>_0x39aeca[_0x4943cd(0x135)]=='Finalizado'),_0x5b6046=_0x3a9855['filter'](_0x411188=>_0x411188['ds_status']=='');_0x5b6046=verificaData(_0x5b6046);if(_0x285cf0[_0x4943cd(0x12d)]<0x1&&_0x13aeee[_0x4943cd(0x12d)]<0x1&&_0x5b6046[_0x4943cd(0x12d)]<0x1){tabelaPartidas[_0x4943cd(0x155)][_0x4943cd(0x165)]='none';return;}formataPartidasHTML(_0x285cf0,_0x13aeee,_0x5b6046);});}function verificaData(_0x4f850c){const _0x1df108=_0x207572;let _0x1ff9d9=new Date()[_0x1df108(0x161)]()['slice'](0x0,0x5);return _0x4f850c[_0x1df108(0x15b)](_0x44548a=>_0x44548a[_0x1df108(0x160)]==_0x1ff9d9);}function formataBlocoPartidasHTML(_0x3eccb9){const _0x253d1b=_0x207572;return _0x253d1b(0x15e)+_0x3eccb9[_0x253d1b(0x120)]+'</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x27clubes-block\x27>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x27'+_0x3eccb9[_0x253d1b(0x132)]+_0x253d1b(0x12b)+_0x3eccb9[_0x253d1b(0x125)]+'</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span>'+_0x3eccb9[_0x253d1b(0x14b)]+_0x253d1b(0x153)+_0x3eccb9[_0x253d1b(0x158)]+_0x253d1b(0x13d)+_0x3eccb9['nm_curto_visitante']+'</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x27'+_0x3eccb9[_0x253d1b(0x163)]+_0x253d1b(0x12f)+_0x3eccb9[_0x253d1b(0x140)]+_0x253d1b(0x159);}function formataPartidasHTML(_0x323e46,_0x362347,_0x4dc234){const _0x4aa9ef=_0x207572;let _0x26c67b=tabelaPartidas['childNodes'][0x3],_0x51f6af=tabelaPartidas['childNodes'][0x5],_0x13f39c=tabelaPartidas[_0x4aa9ef(0x152)][0x7];_0x26c67b[_0x4aa9ef(0x11a)]['add'](_0x4aa9ef(0x118)),_0x51f6af[_0x4aa9ef(0x11a)][_0x4aa9ef(0x13e)](_0x4aa9ef(0x118)),_0x13f39c['classList']['add'](_0x4aa9ef(0x118)),_0x26c67b[_0x4aa9ef(0x14e)]=_0x4aa9ef(0x147),_0x51f6af[_0x4aa9ef(0x14e)]=_0x4aa9ef(0x13c),_0x13f39c[_0x4aa9ef(0x14e)]='<h4>Ainda\x20vai\x20rolar</h4>',_0x323e46[_0x4aa9ef(0x11f)](_0xb3f49d=>{const _0xdc0d39=_0x4aa9ef;_0x26c67b[_0xdc0d39(0x11a)]['remove'](_0xdc0d39(0x118)),_0x26c67b[_0xdc0d39(0x14e)]+=formataBlocoPartidasHTML(_0xb3f49d);}),_0x362347['forEach'](_0x426b22=>{const _0x1f9d67=_0x4aa9ef;_0x51f6af[_0x1f9d67(0x11a)][_0x1f9d67(0x11e)](_0x1f9d67(0x118)),_0x51f6af[_0x1f9d67(0x14e)]+=formataBlocoPartidasHTML(_0x426b22);}),_0x4dc234[_0x4aa9ef(0x11f)](_0x314f1d=>{const _0x3d859=_0x4aa9ef;_0x13f39c[_0x3d859(0x11a)][_0x3d859(0x11e)](_0x3d859(0x118)),_0x13f39c[_0x3d859(0x14e)]+=formataBlocoPartidasHTML(_0x314f1d);});}setInterval(()=>{getLivescore(livescoreURL);},0x4e20),getLivescore(livescoreURL),getEquipes(equipesURL),getArtilheiros(artilheirosURL);