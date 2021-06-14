const API_KEY = 'f25fd7cefbb5a234257eab50cccde2d6187ef71bebe20c56fbe493926422d07d'

const tickerHandlers = new Map(); // {};

export const loadTickers = () => {
    if (tickerHandlers.size === 0) {
        return;
    }

    fetch(`https://min-api.cryptocompare.com/data/pricemulti?fsyms=${[...tickerHandlers.keys()].join(',')}&tsyms=USD&api_key=${API_KEY}`).then((res) => {
        return res.json();
    }).then((rowData) => {
        // rowData  === {BTC: {…}, BCH: {…}, DOGE: {…}}
        console.log("rowData",rowData);

        const updatePrices = Object.fromEntries(
            Object.entries(rowData).map(([key, value]) => [key, value.USD])
        );

        // updatePrices {BTC: 31969.08, BCH: 565.11, DOGE: 0.3157}
        console.log("updatePrices",updatePrices);


        Object.entries(updatePrices).forEach(([currency, newPrice]) => {
            const handlers = tickerHandlers.get(currency) ?? [];

            handlers.forEach(fn => fn(newPrice));
        })

    });
}

setInterval(loadTickers,5000)

export const subscribeToTicker = (ticker, cb) => {
    const subscribers = tickerHandlers.get(ticker) || []
    tickerHandlers.set(ticker, [...subscribers, cb]);
};

export const unsubscribeFromTicker = ticker => {
    tickerHandlers.delete(ticker)
}


export const getPosts = () => {
    return fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10`).then((res) =>  res.json() )
};

export const getPostsDetail = (id) =>{
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then((res) =>  res.json() )
}