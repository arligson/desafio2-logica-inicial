let rankingDoPersonagem

function ranking (vitorias = 80, derrotas = 3){
   saldoDasRankeadas = vitorias - derrotas

    if (saldoDasRankeadas < 10){
        return  "Ferro"
    }
    else if (saldoDasRankeadas >= 11 && saldoDasRankeadas<=20) {
        return  "Bronze"
    }
    else if (saldoDasRankeadas >= 21 && saldoDasRankeadas<=50) {
        return  "Prata"
    }
    else if (saldoDasRankeadas >= 51 && saldoDasRankeadas<=80) {
        return  "Ouro"
    }
    else if (saldoDasRankeadas >= 81 && saldoDasRankeadas<=90) {
        return  "Diamante"
    }
    else if (saldoDasRankeadas >= 91 && saldoDasRankeadas<=100) {
        return  "Lendário"
    }
    else {
        return  "Imortal"
    }
        
}
rankingDoPersonagem = ranking()
console.log(`O héroi tem um saldo de ${saldoDasRankeadas} vitórias e está no nível ${rankingDoPersonagem}`)