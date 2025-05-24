
function passearComDog (voltasSatisfeito){

    let voltasAtual = 1

    while (voltasAtual<=voltasSatisfeito) {
        if (voltasAtual<voltasSatisfeito){
            console.log(`Estamos na volta nº${voltasAtual}`)
        } else {
            console.log(`O Dog está satisfeito pois estamos na volta nº${voltasAtual}`)
        }
        voltasAtual++
    }

}
passearComDog(5)



