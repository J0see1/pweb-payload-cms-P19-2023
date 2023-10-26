/** @type {import('payload/types').CollectionConfig} */
const Categories = {
  slug: "Categories",
  admin: {
    useAsTitle : 'name'
  },
  access: {
    create: () => true,
    read: () => true,
    update: () => true,
    delete: () => true,
  },
  fields: [
    {
      name: "Category",
      type: "text",
      required: true,
      unique: true,
    },
  ],
};

export default Categories;
