// Lista dos arquivos .webp
const imagens = [
    "bulbasaur.webp",
    "charmander.webp",
    "pikachu.webp",
    "squirtle.webp"
  ];
  
  let i = 0;
  const img = document.querySelector('.pokemon');
  const prev = document.querySelector('.ctrl--left');
  const next = document.querySelector('.ctrl--right');
  
  function mostrar(n){
    i = (n + imagens.length) % imagens.length;
    img.src = imagens[i];
  }
  
  // Clique nos botões
  next.addEventListener('click', () => mostrar(i + 1));
  prev.addEventListener('click', () => mostrar(i - 1));
  
  // Setas do teclado
  document.addEventListener('keydown', e => {
    if (e.key === 'ArrowRight') mostrar(i + 1);
    if (e.key === 'ArrowLeft')  mostrar(i - 1);
  });
  
  // Debug: se a imagem não existir, avisa no console
  img.addEventListener('error', () => console.warn('Imagem não encontrada:', img.src));
  