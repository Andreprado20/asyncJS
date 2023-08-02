const randomPromise = ()=> {
    const rand = Math.floor(Math.random() * 10)
    return new Promise((resolve, reject)=>{
        setTimeout(()=> {
            if(rand < 5){
                resolve(rand)
            } else if (rand == 5){
                reject(rand)
            } else {
                reject(rand)
            }
        }, 3000)
        })
} 

randomPromise()
.then(resultado => console.log(`Sucesso!! Seu número é ${resultado} e ele é menor que 5`))
.catch(error => console.log(`Erro!! Seu número é ${error} e ele não é menor que 5`))
.finally(()=> console.log("That's All Folks!!"))



