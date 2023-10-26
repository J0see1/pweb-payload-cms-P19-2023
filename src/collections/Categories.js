
/** @type {import('payload/types').CollectionConfig} */
const Category = {
  slug: 'Category', // Anda perlu menambahkan slug yang sesuai
  admin : {
    useAsTitle : 'name'
  },
  access: {
    read: () => true,
    update: () => true,
    delete: () => true,
    create: () => true,
  },

  fields: [
    {
      name: 'name',
      label: 'Name',
      type: 'text',
      required: true,
    },
  ],
};

export default Category;