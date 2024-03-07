let pgto = prompt('Qual será a forma de pagamento? Cartão ou PIX?')

if (pgto === 'PIX' || pgto === 'Pix' || pgto === 'pix'){
    console.log(`PIX: 1 x R$ 10.000,00`)

} else if (pgto === 'Cartão' || pgto === 'cartão' || pgto === 'Cartao' || pgto === 'cartao'){
    let parcela = parseInt(prompt('Digite o número de parcelas (máximo 10) ou digite 11 para saber o valor total dos parcelamentos:'))

    switch (parcela){
        case 1:
        console.log ('1 x R$ 11.000,00')
        break;
        case 2:
        console.log ('2 x R$ 5.527,50 = R$ 11.055,00')
        break;
        case 3:
        console.log ('3 x R$ 3.703,34 = R$ 11.110,00')
        break;
        case 4:
        console.log ('4 x R$ 2.791,25 = R$ 11.165,00')
        break;
        case 5:
        console.log ('5 x R$ 2.244,00 = R$ 11.220,00')
        break;
        case 6:
        console.log ('6 x R$ 1.879,17 = R$ 11.275,00')
        break;
        case 7:
        console.log ('7 x R$ 1.618,57 = R$ 11.330,00')
        break;
        case 8:
        console.log ('8 x R$ 1.423,13 = R$ 11.385,00')
        break;
        case 9:
        console.log ('9 x R$ 1.271,11 = R$ 11.440,00')
        break;
        case 10:
        console.log ('10 x R$ 1.149,50 = R$ 11.495,00')
        break;
        case 11:
            for (let todos = 1; todos <= 1.045; todos += 0.005){
                let valor = 11000 * todos
            
                console.log(`${new Intl.NumberFormat('de-DE', {style:'currency', currency: 'brl'}).format(valor)}`)}}
}
