import logo from '../../assets/logo.png';

import calca from '../../assets/frutas/calcanike.png';
import jaquetaadidas from '../../assets/frutas/jaquetaadidas.png';
import wildmoss from '../../assets/frutas/teniswildmoss.png';
import jaquetanike from '../../assets/frutas/jaquetanike.png';
import dunkmummy from '../../assets/frutas/tenisdunkmummy.png';

const cesta = {
  topo: {
    titulo: "Detalhes do tênis",
  },
  detalhes: {
    nome: "Tenis Adidas Forum X The Grinch low green",
    logoFazenda: logo,
    nomeFazenda: "Adidas",
    descricao: "Em comemoração ao natal e Adotado pela moda urbana, o tênis feito pela Adidas tem suas solas planas e aderentes, perfeitas para o skate.",
    preco: "R$ 700,00",
    botao: "Comprar",
  },
  itens: {
    titulo: "Mais itens",
    lista: [
      {
        nome: "Calça Nike",
        imagem: calca,
      },
      {
        nome: "Moletom Adidas",
        imagem: jaquetaadidas,
      },
      {
        nome: "Tênis Adidas wild moss",
        imagem: wildmoss,
      },
      {
        nome: "Jaqueta nike",
        imagem: jaquetanike,
      },
      {
        nome: "Tênis nike dunk mummy",
        imagem: dunkmummy,
      }
    ]
  }
}

export default cesta;