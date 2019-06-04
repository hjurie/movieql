import axios from "axios";
const API_URL = "https://api-cloud.huobi.co.kr/v2/beta/common/symbols"

export const getCoins = async (quote) => {
  const { data: { data }} = await axios(API_URL)
  return quote ? data.filter(item => item.quote_currency === quote) : data
}




// let coins = [
//   {
//     id: 0,
//     name: "Super Mario",
//     score: 9
//   },
//   {
//     id: 1,
//     name: "Drak Soul",
//     score: 9
//   },
//   {
//     id: 2,
//     name: "Zelda",
//     score: 9
//   },
//   {
//     id: 3,
//     name: "Tekken",
//     score: 7
//   },
//   {
//     id: 4,
//     name: "Castlevania",
//     score: 8
//   },
//   {
//     id: 5,
//     name: "The King of fighters",
//     score: 6
//   }
// ];

// export const getCoins = () => coins;

// export const getByID = id => coins.filter(coin => coin.id === id)[0];

// export const deleteCoin = (id) => {
//   const cleanedCoins = coins.filter(coin => coin.id !== id);
//   if (coins.length > cleanedCoins.length) {
//     coins = cleanedCoins;
//     return true;
//   } else {
//     return false;
//   }
// }

// export const addCoin = (name, score) => {
//   const newCoin = {
//     id: coins.length + 1,
//     name,
//     score
//   };
//   coins.push(newCoin);
//   return newCoin;
// }
