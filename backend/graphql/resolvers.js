import { createUser } from "../controller/user.controller.js";

const resolvers = {
  Mutation: {
    createUser: async (_, { input }, { req, res }) => {
      const response = await createUser(input, req, res);
      return response.data;
    },
  },
};

export default resolvers;
