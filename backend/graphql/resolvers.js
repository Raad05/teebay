import { createProduct } from "../controller/product.controller.js";
import { createUser } from "../controller/user.controller.js";

const resolvers = {
  Mutation: {
    createUser: async (_, { input }, __) => {
      try {
        const response = await createUser(input);
        return response;
      } catch (e) {
        throw new Error(e);
      }
    },
    createProduct: async (_, { input }, __) => {
      try {
        const response = await createProduct(input);
        return response;
      } catch (e) {
        throw new Error(e);
      }
    },
  },
};

export default resolvers;
