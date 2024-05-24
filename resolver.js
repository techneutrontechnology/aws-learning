import { quotes, users } from "./fakeDb.js";
import {randomBytes} from "crypto"
const resolvers = {
    Query: {
      greet: () => "Hello world",
  
      users: () => users,
  
      quotes: () => quotes,
  
      quotesByUserId: (_, { userId }) => {
        return quotes.filter((quote) => quote.by === userId);
      },
  
      userById: (_, { id }) => {
        return users.find((user) => user.id === id);
      },
    },
  
    User: {
      quotes: (parent) => {
        return quotes.filter((quote) => quote.by === parent.id);
      },
    },
    Mutation:{
        signupUser:(_,{userNew})=>{
            const id=randomBytes(5).toString("hex")

users.push({
    id,
    ...userNew

})
return users.find(user=>user.id==id)
        }
    }
  };
  export default resolvers