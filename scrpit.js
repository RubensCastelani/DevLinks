function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")

  // substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem gnomesunglasses
    //img.setAttribute("src", "./assets/gnome_sunglasses.gif")
    img.setAttribute(
      "alt",
      "Um gnomo respirando usando um chapeu verde, barba longa branca, camisa roxa e um oculos de sol"
    )
  } else {
    // se nao tiver light mode, manter a imagem original
    //img.setAttribute("src", "./assets/gnome.gif")
    img.setAttribute(
      "alt",
      "Um gnomo respirando usando um chapeu verde, barba longa branca, camisa roxa e um oculos de grau elevado"
    )
  }
}
