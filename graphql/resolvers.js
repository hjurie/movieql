import { getCoins } from "./db";

const resolvers = {
  Query: {
    coins: (_, { quote }) => getCoins(quote)
  }
}



// import { getCoins, getByID, addCoin, deleteCoin } from "./db";


// const resolvers = {
//   Query: {
//     coin: (_, { id }) => getByID(id),
//     coins: getCoins
//   },
//   Mutation: {
//     addCoin: (_, {name, score}) => addCoin(name, score),
//     deleteCoin: (_, { id }) => deleteCoin(id)
//   }
// };

export default resolvers;