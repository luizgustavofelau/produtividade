// --- AUDITORIA POO: Classes e Objetos ---

class Prato {
    // Copilot: O constructor inicializa o objeto com seus dados básicos
    constructor(nome, preco, descricao) {
        // Copilot: 'this' garante que as variáveis pertençam a ESTA instância do prato
        this.nome = nome;
        this.preco = preco;
        this.descricao = descricao;
    }

    // Método novo: Em vez de texto simples, retorna HTML formatado
    render() {
        return `
            <div class="prato-card">
                <h3>${this.nome}</h3>
                <p>${this.descricao}</p>
                <span class="preco">R$ ${this.preco.toFixed(2)}</span>
            </div>
        `;
    }
}

class Restaurante {
    constructor(nome) {
        this.nome = nome;
        this.cardapio = [];
    }

    adicionarPrato(prato) {
        if (prato instanceof Prato) {
            this.cardapio.push(prato);
        }
    }

    // Método que pega a lista de pratos e joga na tela (DOM)
    mostrarMenu() {
        const areaDoCardapio = document.getElementById('app');
        
        // Limpa a tela antes de adicionar
        areaDoCardapio.innerHTML = '';

        // Para cada prato, gera o HTML e adiciona na página
        this.cardapio.forEach(prato => {
            areaDoCardapio.innerHTML += prato.render();
        });
    }
}

// --- EXECUÇÃO DO SISTEMA ---

// 1. Criando o Restaurante
const restaurante = new Restaurante("Bistrô do Dev");

// 2. Criando os Pratos (Dados Mockados)
const p1 = new Prato("Hambúrguer Full-Stack", 35.90, "Pão brioche, blend de carne 180g, queijo cheddar e bacon crocante.");
const p2 = new Prato("Pizza Calabresa Java", 42.00, "Massa de fermentação natural, molho de tomate rústico e calabresa.");
const p3 = new Prato("Salada Python Light", 22.50, "Mix de folhas, tomate cereja, crótons e molho mostarda e mel.");

// 3. Adicionando ao Menu
restaurante.adicionarPrato(p1);
restaurante.adicionarPrato(p2);
restaurante.adicionarPrato(p3);

// 4. Mostrando na tela (Isso faz a mágica acontecer)
restaurante.mostrarMenu();

// Auditoria de DevOps (Segurança)
console.log("Sistema carregado com sucesso.");