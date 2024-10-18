class heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome
      this.idade = idade
      this.tipo = tipo
    }
  
    atacar() {
      let ataque
  
      switch (this.tipo) {
        case "mago":
          ataque = "magia"
          break
        case "guerreiro":
          ataque = "espada"
          break
        case "monge":
          ataque = "artes marciais"
          break
        case "ninja":
          ataque = "shuriken"
          break
      }
  
      console.log(`O Herói ${this.tipo} ${this.nome} atacou usando ${ataque}.`)
      
    }
  }
  
  const heroi1 = new heroi("Merlin", 300, "mago")
  const heroi2 = new heroi("Kratos", 80, "guerreiro")
  const heroi3 = new heroi("Dhalsim", 200, "monge")
  const heroi4 = new heroi("Kenshin Himura", 40, "ninja")
  
  heroi1.atacar ()
  heroi2.atacar ()
  heroi3.atacar ()
  heroi4.atacar ()