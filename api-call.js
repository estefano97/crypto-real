function setValues(crypto) {
    const $itemValorUSD = document.getElementById(`valor${crypto}USD`);
    const $itemValorEUR = document.getElementById(`valor${crypto}EUR`);
    const $itemValorGBP = document.getElementById(`valor${crypto}GBP`);

        fetch(`https://min-api.cryptocompare.com/data/price?fsym=${crypto}&tsyms=USD,EUR,GBP`)
        .then(res => res.json())
        .then(json => {
            $itemValorUSD.innerHTML = `$ <b>${json.USD}</b>`;
            $itemValorEUR.innerHTML = `€ <b>${json.EUR}</b>`;
            $itemValorGBP.innerHTML = `£ <b>${json.GBP}</b>`;
        });
    setInterval(() => {
        fetch(`https://min-api.cryptocompare.com/data/price?fsym=${crypto}&tsyms=USD,EUR,GBP`)
        .then(res => res.json())
        .then(json => {
            $itemValorUSD.innerHTML = `$ <b>${json.USD}</b>`;
            $itemValorEUR.innerHTML = `€ <b>${json.EUR}</b>`;
            $itemValorGBP.innerHTML = `£ <b>${json.GBP}</b>`;
        });
    }, 1000);
}

setValues("BTC");
setValues("ETH");
setValues("SOL");
setValues("ADA");

document.addEventListener("click", e => {
    if(e.target.className === "after") {
        e.target.parentNode.parentNode.style.zIndex -= 1;
    }
    if(e.target.parentNode.className === "after"){
        e.target.parentNode.parentNode.parentNode.style.zIndex -= 1;
    }
})