class Hero{
    constructor(name, age, type){
        this.name = name
        this.age = age
        this.type = type
    }

    chooseattack(){
        var attackType
        switch(this.type){
            case "guerreiro":
                attackType = "espada"
                break

           case "mago":
                attackType = "magia"
                break

           case "monge":
                attackType = "artes marciais"
                break

           case "ninja":
                attackType = "shuriken"
                break     
       default:
            attackType = "Caiu no murro"         
            
        }
        return attackType
    }

    
    printAttack(){
        console.log(`O ${this.type} ${this.name} atacou usando ${this.chooseattack(this.attack)}`) 
    }
    
    attack(){
        this.chooseattack()
        this.printAttack()
    }
}

let guerreiro = new Hero("Schindler", 10000, "guerreiro")
guerreiro.attack()

let mago = new Hero("Albus Dumbledore", 124, "mago")
mago.attack()

let monge = new Hero("Aang", 17, "monge")
monge.attack()

let ninja = new Hero("Naruto", 27, "ninja")
ninja.attack()