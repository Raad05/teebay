import {
  createProduct,
  getAllProducts,
} from "../controller/product.controller.js";
import { createUser, loginUser } from "../controller/user.controller.js";

const resolvers = {
  // queries
  Query: {
    products: async () => {
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
    createUser: async (_, { input }) => {
      try {
        const response = await createUser(input);
        return response;
      } catch (e) {
        throw new Error(e);
      }
    },
    createProduct: async (_, { input }) => {
      try {
        const response = await createProduct(input);
        return response;
      } catch (e) {
        throw new Error(e);
      }
    },
    loginUser: async (_, { input }) => {
      try {
        const response = await loginUser(input);

        return response;
      } catch (e) {
        throw new Error(e);
      }
    },
  },
};

export default resolvers;
