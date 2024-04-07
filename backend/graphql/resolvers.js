import {
  createProduct,
  getAllProducts,
} from "../controller/product.controller.js";
import { createUser } from "../controller/user.controller.js";

const resolvers = {
  // queries
  Query: {
    products: async (_, __, ___) => {
      try {
        const response = await getAllProducts();

        return response;
      } catch (e) {
        throw new Error(e);
      }
    },
  },

  // mutations
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
