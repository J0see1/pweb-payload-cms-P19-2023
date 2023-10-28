import payload from 'payload';

/** @type {import('payload/types').CollectionConfig} */
const Category = {
  slug: 'Category',
  admin: {
    useAsTitle: 'name'
  },
  access: {
    read: () => true,
    update: () => true,
    delete: () => true,
    create: () => true,
  },

  hooks: {
    afterOperation: [
      async (args) => {
        console.dir(args.operation);
        if (args.operation === "create") {
          await payload.create({
            collection: "Logs",
            data: {
              name: args.result.name,
              log: args.result.id,
              timestamp: new Date(),
              action: "Category Created",
            },
          });
        } else if (args.operation === "deleteByID") {
          await payload.create({
            collection: "Logs",
            data: {
              name: args.result.name,
              log: args.result.id,
              timestamp: new Date(),
              action: "Category Deleted",
            },
          });
        } else if (args.operation === "updateByID") {
          await payload.create({
            collection: "Logs",
            data: {
              name: args.result.name,
              log: args.result.id,
              timestamp: new Date(),
              action: "Category Updated",
            },
          });
        }
      },
    ],
  },

  fields: [
    {
      name: 'name',
      label: 'Title',
      type: 'text',
      required: true,
    },
  ],
};

export default Category;
