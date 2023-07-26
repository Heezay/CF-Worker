import { createRouter } from '@trpc/server';

export const router = createRouter()
  .query('getPost', {
    input: z.string(),
    resolve: async ({ input }) => {
      // your logic here, e.g. fetch post from database
      const post = await getPostFromDatabase(input);
      return post;
    },
  });
