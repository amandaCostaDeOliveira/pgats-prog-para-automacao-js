function darPetiscos(numeroDePetiscos){
    for(let petiscos=1; petiscos<=numeroDePetiscos; petiscos++){
        if(petiscos<numeroDePetiscos){
            console.log(`Dando o petisco nº${petiscos}.`)
        } else {
            console.log(`Dando o petisco nº${petiscos}. O Dog está satisfeito!`)
        }
    }
}

darPetiscos(5)