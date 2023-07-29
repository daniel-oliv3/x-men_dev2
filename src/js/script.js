/* Script.js */

/* Passo 1 */
const personagens = document.querySelectorAll('.personagem');


/* Passo 2 */
personagens.forEach((personagem) => {
    // console.log(personagem);
    personagem.addEventListener('mouseenter', () => {
        // console.log('mouse entrou na li');
        
        /* Passo 3 */
        const personagemSelecionado = document.querySelector('.selecionado');
        // console.log(personagemSelecionado);
        personagemSelecionado.classList.remove('selecionado');
        
        personagem.classList.add('selecionado');

        /* Passo 4 */
        const imagemPersonagemGrande = document.querySelector('.personagem-grande');
        // console.log(imagemPersonagemGrande);
        
        /* Passo 5 */
        const idPersonagem = personagem.attributes.id.value;
        // console.log(idPersonagem);
        // console.log(idPersonagemSelecionado);
        imagemPersonagemGrande.src = `./src/img/card-${idPersonagem}.png`;


        /* Passo 6 */
        const nomePersonagem = document.getElementById('nome-personagem');
        nomePersonagem.innerText = personagem.getAttribute('data-name');

        /* Passo 7 */
        const descricaoPersonagem = document.getElementById('descricao-personagem');
        descricaoPersonagem.innerText = personagem.getAttribute('data-description');
    });
    
}); 

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               































/* 
O que precisamos fazer? - quando passar o mouse em cima do personagem na lista temos 
que adicionar a borda azul de seleção na imagem pequena do personagem e mostrar a 
imagem, o nome e o texto grande do personagem que esta selecionado



OBJETIVO 1 - quando passar o mouse em cima do personagem na listagem, devemos
seleciona-lo
    Passo 1 - pegar os personagensno JS para poder verificar quando o usuario
        passa o mouse em cima de um deles

    Passo 2 - adicionar a classe  selecionado no personagem que o usuario passar 
        o cursor do mouse
    
    Passo 3 - verificar se ja existe um personagem selecionado, se sim, devemos
        remover a seleção dele

OBJETIVO 2 - quando passar o mouse em cima do personagem na listagem, trocar a 
imagem, o nome e a descrição do personagem grande
    Passo 4 - pegar o elemento do personagem grande para adicionar as informações 
        neles

    Passo 5 - alterar a imagem do personagem grande
        
    Passo 6 - alterar a nome do personagem grande
    
    Passo 7 - alterar a descrição do personagem grande

*/




