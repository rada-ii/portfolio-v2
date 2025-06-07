export default Promise.resolve({
  db: () => ({
    collection: () => ({
      insertOne: () => Promise.resolve({ insertedId: "placeholder" }),
      find: () => ({
        sort: () => ({
          limit: () => ({
            toArray: () => Promise.resolve([]),
          }),
        }),
      }),
    }),
  }),
});
