class Prato {
  constructor(nome, preco, descricao) {
    this.nome = String(nome);
    this.preco = Number(preco);
    this.descricao = String(descricao || '');
  }

  detalhes() {
    const precoFormatado = Number.isFinite(this.preco) ? this.preco.toFixed(2) : '0.00';
    return `${this.nome} — R$ ${precoFormatado}: ${this.descricao}`;
  }
}

class Restaurante {
  constructor(nome) {
    this.nome = String(nome);
    this.cardapio = [];
  }

  adicionarPrato(item) {
    if (!(item instanceof Prato)) {
      throw new TypeError('O item deve ser uma instância de Prato');
    }
    this.cardapio.push(item);
  }

  mostrarMenu() {
    if (this.cardapio.length === 0) {
      console.log(`${this.nome} — Cardápio vazio.`);
      return;
    }
    console.log(`${this.nome} — Cardápio:`);
    this.cardapio.forEach((p, i) => console.log(`${i + 1}. ${p.detalhes()}`));
  }
}

// Instância de teste
const restauranteTeste = new Restaurante('Restaurante Teste');

restauranteTeste.adicionarPrato(new Prato('Bife à Parmegiana', 28.5, 'Bife empanado com molho e queijo'));
restauranteTeste.adicionarPrato(new Prato('Salada Caesar', 16.0, 'Alface, parmesão e croutons'));

console.log('--- Saída de teste ---');
restauranteTeste.mostrarMenu();

// Expor classes no escopo global caso seja útil no navegador
if (typeof window !== 'undefined') {
  window.Prato = Prato;
  window.Restaurante = Restaurante;
}
