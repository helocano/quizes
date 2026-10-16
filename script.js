
const results = {
  diglossa_brunneiventris: {
    title: "Diglossa brunneiventris",
    subtitle: "Fura-flor-de-garganta-preta · O estrategista independente",
    description: "Você gosta de encontrar suas próprias soluções e não costuma aceitar um jeito de fazer as coisas só porque é o mais comum. É prático, persistente e bom em perceber alternativas que outras pessoas deixam passar. Por outro lado, pode insistir um pouco demais numa ideia quando acredita que ela vai funcionar. Você escuta sugestões, mas prefere tirar suas próprias conclusões — e testar as coisas na prática."
  },

  mionectes_striaticollis: {
    title: "Mionectes striaticollis",
    subtitle: "Abre-asa-de-pescoço-estriado · O observador de detalhes",
    description: "Você costuma reparar em detalhes que outras pessoas não percebem, seja numa conversa, num ambiente ou numa situação que parece simples à primeira vista. Antes de tirar conclusões, prefere observar e reunir informações. Isso ajuda você a entender melhor o que está acontecendo, embora às vezes possa acabar pensando demais em coisas pequenas. Em geral, você tem mais a dizer do que deixa transparecer logo de início."
  },

  cyanomitra_olivacea: {
    title: "Cyanomitra olivacea",
    subtitle: "Beija-flor-oliváceo · A criaturinha curiosa",
    description: "Você se interessa por coisas novas e gosta de entender como elas funcionam. Quando algo chama sua atenção, é difícil não ir atrás para descobrir um pouco mais. Você tende a encontrar assuntos interessantes nos lugares mais inesperados e não precisa que tudo tenha uma utilidade imediata para valer a pena. Sua curiosidade, porém, pode fazer você começar várias coisas ao mesmo tempo — afinal, sempre aparece alguma outra coisa que parece interessante."
  },

  eurillas_virens: {
    title: "Eurillas virens",
    subtitle: "Tuta-verde-pequena · O explorador discreto",
    description: "Você gosta de explorar seus interesses no próprio ritmo, sem precisar compartilhar cada descoberta com todo mundo. Pode passar bastante tempo conhecendo um assunto, um lugar ou uma atividade por conta própria, simplesmente porque gosta disso. Não precisa de muita agitação para se divertir e nem sempre sente vontade de participar de tudo. Isso não significa falta de interesse: você só prefere escolher com cuidado onde coloca sua atenção."
  },

  atlapetes_rufinucha: {
    title: "Atlapetes rufinucha",
    subtitle: "Tico-tico-boliviano · O guardião do próprio cantinho",
    description: "Você valoriza ter uma rotina confortável, um espaço seu e tempo para fazer as coisas de que gosta. Não precisa estar sempre procurando novidades para se sentir bem, embora também saiba aproveitar uma mudança de planos de vez em quando. Ter uma base conhecida ajuda você a se organizar e a aproveitar melhor o restante. Seu ponto fraco talvez seja demorar um pouco para sair da zona de conforto, mesmo quando uma experiência nova parece promissora."
  },

  elaenia_pallatangae: {
    title: "Elaenia pallatangae",
    subtitle: "Elénia-andina · O improvisador de plantão",
    description: "Você consegue se adaptar quando os planos mudam e prefere procurar uma saída a ficar preso ao que deveria ter acontecido. Nem sempre precisa saber exatamente como tudo vai funcionar antes de começar: muitas vezes, entende o caminho enquanto faz. Essa flexibilidade ajuda bastante em situações inesperadas, mas também pode fazer você deixar algumas coisas para resolver na última hora. De algum jeito, costuma encontrar uma alternativa — mesmo que ela não fosse sua primeira escolha."
  },

  diglossa_cyanea: {
    title: "Diglossa cyanea",
    subtitle: "Fura-flor-de-mascarilha · O inventor de soluções estranhas",
    description: "Você gosta de questionar soluções óbvias e imaginar possibilidades que nem sempre passam pela cabeça dos outros. Faz associações inesperadas, experimenta ideias diferentes e nem sempre segue uma linha de raciocínio convencional. Isso pode ajudar você a encontrar saídas criativas para problemas, embora algumas ideias precisem de um pouco mais de planejamento antes de serem colocadas em prática. Para você, uma solução diferente merece ser considerada — mas não necessariamente adotada sem pensar."
  },

  phyllastrephus_cabanisi: {
    title: "Phyllastrephus cabanisi",
    subtitle: "Tuta-de-garganta-clara · O pequeno mistério da floresta",
    description: "Você não sente necessidade de participar de todas as conversas ou chamar atenção para o que está fazendo. Prefere conhecer as pessoas aos poucos e dedicar seu tempo ao que realmente desperta seu interesse. Quem não conhece você bem pode achar que é difícil de decifrar, mas isso não significa que faltem opiniões, interesses ou senso de humor. Você simplesmente não compartilha tudo com todo mundo — e gosta de poder escolher quando quer se abrir."
  }
};



const questions = [
  {
    question: "Você chegou a um lugar novo. Qual é a primeira coisa que você faz?",
    
    answers: [
      { text: "Fico quieto no meu canto, só observando", 
        points: [ 
          "mionectes_striaticollis",
          "phyllastrephus_cabanisi"
        ] },

      { text: "Saio para explorar imediatamente e tento descobrir alguma coisa interessante", 
        points: [
          "elaenia_pallatangae", 
          "diglossa_cyanea"
          
        ] },

      { text: "Analiso e escolho um bom ponto de partida, antes de começar a procurar por coisas novas", 
        points: [
          "atlapetes_rufinucha", 
          "eurillas_virens"
        ] },

      { text: "Vou atrás da primeira coisa que me chamar a atenção :D", 
        points: [
          "diglossa_brunneiventris", 
          "cyanomitra_olivacea"
        ] 
      }
    ]
  },
  {
    question: "Qual seria o seu cantinho ideal?",
    answers: [
      { text: "Um apartamento em uma cidade movimentada", 
        points: [
          "diglossa_brunneiventris", 
          "elaenia_pallatangae"
          
        ] },
      
      { text: "Uma casa com um jardim florido",
        points: [
          "eurillas_virens", 
          "cyanomitra_olivacea"
        ] },

      { text: "Um quarto confortável e só meu",
        points: [
          "mionectes_striaticollis", 
          "phyllastrephus_cabanisi"
          
        ] },

      { text: "Uma casa nas montanhas", 
        points: [
          "atlapetes_rufinucha", 
          "diglossa_cyanea"
        ] }
    ]
  },

  {
    question: "Você encontra uma oportunidade inesperada. O que você faz?",
    answers: [
      { text: "Agarro a oportunidade antes que ela desapareça", 
        points: [
          "elaenia_pallatangae",
          "cyanomitra_olivacea"
          
        ] },

      { text: "Paro para pensar se realmente vale a pena", 
        points: [
          "phyllastrephus_cabanisi", 
          "mionectes_striaticollis"
        ] },

      { text: "Penso em como posso fazer essa oportunidade funcionar do meu jeito", 
        points: [
          "diglossa_cyanea", 
          "diglossa_brunneiventris"
        ] },

      { text: "Vejo se consigo transformar isso em algo ainda melhor", 
        points: [
          "eurillas_virens", 
          "atlapetes_rufinucha"
        ] }
    ]
  },

  {
    question: "Em um grupo de pessoas, quem é você?",
    answers: [
      { text: 
        "Quem movimenta as coisas", 
        points: [
          "elaenia_pallatangae",
          "diglossa_cyanea"
          
        ] },

      { text: "Quem observa mais do que fala", 
        points: [
          "phyllastrephus_cabanisi", 
          "mionectes_striaticollis"
        ] },

      { text: "Quem está sempre preparado pra tudo", 
        points: [
          "diglossa_brunneiventris",
          "atlapetes_rufinucha"
          
        ] },

      { text: "Quem transita entre os grupos", 
        points: [
          "eurillas_virens", 
          "elaenia_pallatangae"
          
        ] }
    ]
  },

  {
    question: "Se o seu plano não der certo, o que você faz?",
    answers: [
      { text: "Improviso e vejo no que dá", 
        points: [
          "elaenia_pallatangae",
          "diglossa_brunneiventris"
        ] },

      { text: "Procuro entender o porquê de ter dado errado", 
        points: [
          "mionectes_striaticollis",
          "eurillas_virens"
        ] },

      { text: "Faço uma pausa e volto depois", 
        points: [
          "atlapetes_rufinucha",
          "phyllastrephus_cabanisi"
        ] },

      { text: "Procuro alguém que possa pensar comigo", 
        points: [
          "cyanomitra_olivacea", 
          "diglossa_cyanea"
        ] }
    ]
  },

  {
    question: "O que mais desperta a sua curiosidade?",
    answers: [
      { text: "Entender como as coisas funcionam", 
        points: [
          "diglossa_brunneiventris", 
          "cyanomitra_olivacea"
        ] },

      { text: "Conhecer lugares e culturas", 
        points: [
          "elaenia_pallatangae", 
          "atlapetes_rufinucha",
        ] },

      { text: "Investigar assuntos", 
        points: [ 
          "diglossa_cyanea",
          "phyllastrephus_cabanisi"
        ] },

      { text: "Descobrir coisas por acaso", 
        points: [
          "eurillas_virens",
          "mionectes_striaticollis"
          
        ] }
    ]
  },

  {
    question: "Se você pudesse passar uma semana em qualquer lugar, qual seria sua escolha?",
    answers: [
      { text: "Uma cidade grande que nunca visitei", 
        points: [
          "diglossa_brunneiventris", 
          "elaenia_pallatangae"
        ] },
    
      { text: "Uma cidade litorânea",
        points: [
          "eurillas_virens", 
          "cyanomitra_olivacea"
        ] },
  
      { text: "Uma cidade pequena no interior", 
        points: [
          "mionectes_striaticollis", 
          "diglossa_cyanea"
        ] },
    
      { text: "Um lugar com uma cultura muito diferente da minha", 
        points: [
          "atlapetes_rufinucha", 
          "phyllastrephus_cabanisi"
        ] }
    ]
  },

  {
    question: "Escolha um super-poder inútil:",
    answers: [
      { text: "Saber instantaneamente onde está qualquer coisa que eu perdi.", 
        points: [
          "elaenia_pallatangae", 
          "phyllastrephus_cabanisi"
        ] },
    
      { text: "Nunca mais derrubar comida na minha roupa.",
        points: [
          "diglossa_brunneiventris", 
          "cyanomitra_olivacea"
        ] },
  
      { text: "Saber exatamente quantos grãos de arroz tem em cada garfada.", 
        points: [
          "mionectes_striaticollis", 
          "atlapetes_rufinucha"
        ] },
    
      { text: "Ter uma torcida de três sapos que coaxam quando eu termino uma tarefa.", 
        points: [
          "diglossa_cyanea", 
          "eurillas_virens"
        ] }
    ]
  },

  {
    question: "Você foi amaldiçoado por uma bruxa não muito competente. Qual é a sua maldição?",
    answers: [
      { text: "Esqueço o que fui fazer ao entrar num cômodo.", 
        points: [
          "mionectes_striaticollis",
          "phyllastrephus_cabanisi"
          
        ] },
    
      { text: "Espirro sempre que tento parecer misterioso.",
        points: [
          "diglossa_brunneiventris", 
          "cyanomitra_olivacea"
        ] },
  
      { text: "Toda cadeira faz um barulho dramático quando me sento.", 
        points: [
          "elaenia_pallatangae",
          "eurillas_virens"
          
        ] },
    
      { text: "Sempre que minto, um pato aparece. E esse pato fica me julgando.", 
        points: [
          "diglossa_cyanea", 
          "atlapetes_rufinucha"
        ] }
    ]
  },

    {
    question: "Você foi escolhido para representar a humanidade numa competição alienígena. Qual é a sua estratégia?",
    answers: [
      { text: "Dou o meu melhor e confio no meu talento natural.", 
        points: [
          "diglossa_brunneiventris", 
          "cyanomitra_olivacea"
          
        ] },
    
      { text: "Estudo as regras e elaboro um plano infalível.",
        points: [
          "mionectes_striaticollis",
          "phyllastrephus_cabanisi"
          
        ] },
  
      { text: "Finjo que sei o que estou fazendo e torço pelo melhor.", 
        points: [
          "elaenia_pallatangae",
          "eurillas_virens"
          
        ] },
    
      { text: "Ofereço pão de queijo aos alienígenas.", 
        points: [
          "diglossa_cyanea", 
          "atlapetes_rufinucha"
        ] }
    ]
  },

  {
    question: "Você precisa escolher um mascote para te acompanhar pelo resto da vida. Qual seria?",
    answers: [
      { text: "Uma gralha tagarela que rouba objetos brilhantes.", 
        points: [
          "diglossa_brunneiventris", 
          "cyanomitra_olivacea"
          
        ] },
    
      { text: "Uma tartaruga ancestral que parece saber todos os segredos do universo.",
        points: [
          "mionectes_striaticollis",
          "phyllastrephus_cabanisi"
          
        ] },
  
      { text: "Um sapo minúsculo de chapéu que não faz absolutamente nada.", 
        points: [
          "elaenia_pallatangae",
          "atlapetes_rufinucha"
        ] },
    
      { text: "Uma mariposa dramática que aparece do nada e age como se mandasse na minha vida.", 
        points: [
          "diglossa_cyanea", 
          "eurillas_virens"
        ] }
    ]
  },

  {
    question: "Você acorda em um reino medieval totalmente falido. Qual é o seu emprego?",
    answers: [
      { text: "Explorador oficial de lugares desconhecidos", 
        points: [
          "elaenia_pallatangae",
          "diglossa_cyanea",
        ] },
    
      { text: "Bibliotecário do castelo, responsável por saber onde está tudo",
        points: [
          "mionectes_striaticollis",
          "atlapetes_rufinucha"
        ] },
  
      { text: "Inventor real de máquinas revolucionárias que funcionam perfeitamente. De vez em quando.", 
        points: [
          "diglossa_brunneiventris", 
          "eurillas_virens"
        ] },
    
      { text: "Conselheiro do rei, dando opiniões importantíssimas com uma confiança que não corresponde ao meu nível de preparo.", 
        points: [
           "cyanomitra_olivacea",
            "phyllastrephus_cabanisi"
        ] }
    ]
  },

  {
    question: "Se sua vida tivesse um narrador, como ele seria?",
    answers: [
      { text: "Um narrador de documentário da natureza, descrevendo minhas ações como se eu fosse uma criatura rara em seu habitat natural.", 
        points: [
          "phyllastrephus_cabanisi",
          "eurillas_virens"
        ] },
    
      { text: "Uma voz calma e sábia, que transforma até meus pensamentos mais estranhos em lições profundas.",
        points: [
          "mionectes_striaticollis",
          "atlapetes_rufinucha"
        ] },
  
      { text: "Um narrador de futebol que transforma lavar a louça numa final de campeonato mundial.", 
        points: [
          "diglossa_brunneiventris", 
          "elaenia_pallatangae",
          
        ] },
    
      { text: "Um narrador sarcástico que parece genuinamente decepcionado com cada decisão que tomo.", 
        points: [
           "cyanomitra_olivacea",
            "diglossa_cyanea",
        ] }
    ]
  },

  {
    question: "Você encontrou um botão mágico. Ninguém sabe o que ele faz. Você aperta o botão?",
    answers: [
      { text: "Claro. Se existe um botão, ele obviamente precisa ser apertado.", 
        points: [
          "cyanomitra_olivacea",
          "elaenia_pallatangae",
        ] },
    
      { text: "Nem pensar!",
        points: [
          "mionectes_striaticollis",
          "diglossa_cyanea",
        ] },
  
      { text: "Aperto, mas preparo um plano de emergência e rotas de fuga caso dê tudo errado.", 
        points: [
          "diglossa_brunneiventris", 
          "atlapetes_rufinucha"
          
        ] },
    
      { text: "Convenço outra pessoa a apertar enquanto fico a uma distância relativamente segura.", 
        points: [
           "eurillas_virens",
           "phyllastrephus_cabanisi"
        ] }
    ]
  },

];

let currentQuestion = 0;
let scores = {};

function resetScores() {
  scores = Object.fromEntries(Object.keys(results).map(species => [species, 0]));
}

function startQuiz() {
  currentQuestion = 0;
  resetScores();
  document.getElementById("intro").classList.add("hidden");
  document.getElementById("result").classList.add("hidden");
  document.getElementById("quiz").classList.remove("hidden");
  showQuestion();
}

function showQuestion() {
  const questionData = questions[currentQuestion];
  document.getElementById("question-number").textContent =
    `Pergunta ${currentQuestion + 1} de ${questions.length}`;
  document.getElementById("progress").style.width =
    `${(currentQuestion / questions.length) * 100}%`;
  document.getElementById("question").textContent = questionData.question;

  const answersContainer = document.getElementById("answers");
  answersContainer.replaceChildren();

  questionData.answers.forEach((answer, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "answer";

    const letter = document.createElement("span");
    letter.className = "answer-letter";
    letter.textContent = String.fromCharCode(65 + index);

    button.appendChild(letter);
    button.appendChild(document.createTextNode(answer.text));
    button.addEventListener("click", () => selectAnswer(index));
    answersContainer.appendChild(button);
  });
}

function selectAnswer(answerIndex) {
  const answer = questions[currentQuestion].answers[answerIndex];
  answer.points.forEach(species => {
    scores[species] += 1;
  });

  currentQuestion += 1;

  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  const highestScore = Math.max(...Object.values(scores));
  const winners = Object.keys(scores).filter(species => scores[species] === highestScore);
  const winningResult = winners[Math.floor(Math.random() * winners.length)];

  document.getElementById("quiz").classList.add("hidden");
  document.getElementById("result").classList.remove("hidden");
  document.getElementById("progress").style.width = "100%";

  document.getElementById("result-title").textContent = results[winningResult].title;
  document.getElementById("result-subtitle").textContent = results[winningResult].subtitle;
  document.getElementById("result-description").textContent = results[winningResult].description;

  const resultImage = document.getElementById("result-image");
  resultImage.hidden = false;
  resultImage.src = `img/${winningResult}.png`;
  resultImage.alt = results[winningResult].title;
  resultImage.onerror = () => {
    resultImage.hidden = true;
  };

  renderPercentages(winningResult);
}


function renderPercentages(winningResult) {
  const container = document.getElementById("result-percentages");
  container.replaceChildren();

  const sortedSpecies = Object.keys(results).sort((a, b) => {
    if (scores[b] !== scores[a]) {
      return scores[b] - scores[a];
    }

    return results[a].title.localeCompare(results[b].title);
  });

  sortedSpecies.forEach(species => {
    const percentage = Math.round(
      (scores[species] / questions.length) * 100
    );

    const item = document.createElement("div");
    item.className =
      "percentage-item" +
      (species === winningResult ? " winner" : "");

    const top = document.createElement("div");
    top.className = "percentage-top";

    // Miniatura e nome da espécie
    const label = document.createElement("div");
    label.className = "percentage-label";

    const image = document.createElement("img");
    image.className = "percentage-image";
    image.src = `img/${species}.png`;
    image.alt = "";
    image.loading = "lazy";
    image.onerror = () => {
      image.hidden = true;
    };

    const name = document.createElement("span");
    name.className = "percentage-name";
    name.textContent =
      results[species].title +
      (species === winningResult ? " ✿" : "");

    label.append(image, name);

    // Percentual
    const value = document.createElement("span");
    value.className = "percentage-value";
    value.textContent = `${percentage}%`;

    top.append(label, value);

    // Barra de afinidade
    const track = document.createElement("div");
    track.className = "percentage-track";
    track.setAttribute("role", "progressbar");
    track.setAttribute(
      "aria-label",
      `Afinidade com ${results[species].title}`
    );
    track.setAttribute("aria-valuemin", "0");
    track.setAttribute("aria-valuemax", "100");
    track.setAttribute("aria-valuenow", String(percentage));

    const fill = document.createElement("div");
    fill.className = "percentage-fill";
    fill.style.width = `${percentage}%`;

    track.appendChild(fill);
    item.append(top, track);
    container.appendChild(item);
  });
}


function restartQuiz() {
  document.getElementById("result").classList.add("hidden");
  document.getElementById("quiz").classList.add("hidden");
  document.getElementById("intro").classList.remove("hidden");
  currentQuestion = 0;
  resetScores();
}
