function toggleMode(){
  const html = document.documentElement
  html.classList.toggle("light") //Faz tudo que tem ali *** =), ou melhor semelhante.

  //Pegar a tag img
  const img = document.querySelector('#profile img')
  //Substituir a imagem
  if(html.classList.contains('light')) {

    //Se estiver em light mode,add a imagem light
    img.setAttribute('src', './imagens/avatar-light.png')
    //Se   ''    sem  ''   '', manter a imagem normal
  } else{
    img.setAttribute('src', './imagens/avatar.png')
  }

  const alt = document.querySelector('#profile img')

  if(html.classList.contains('light')){
    alt.setAttribute(
      "alt",
      "Foto de mayk brito com óculos de verão, cabelo charmoso e sorriso extravagante, fundo azul."
    )
  } else{
    alt.setAttribute(
      "alt",
      "Foto de mayk brito com óculos, cabelo charmoso e sorriso extravagante, fundo azul."
    )
  }


  

  
  
  
}

//***if(html.classList.contains('light')) {
  //html.classList.remove('light');
  // } else {
  //  html.classList.add('light');
  // }***