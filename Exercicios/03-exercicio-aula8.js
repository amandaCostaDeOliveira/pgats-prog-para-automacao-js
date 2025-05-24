const listaDeBrinquedos=[
    'Bola',
    'Osso',
    'Corda',
    'Sino',
    'Chocalho',
    'Garrafa',
    'Pelúcia'
]
function entregandoBrinquedos (){
    listaDeBrinquedos.forEach (brinquedo => {
        console.log(`Entregando o brinquedo ${brinquedo} para o Dog!`)
    })

    console.log(`Todos os brinquedos foram entregues`)
}

entregandoBrinquedos(listaDeBrinquedos)