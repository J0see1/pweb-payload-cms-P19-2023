/** @type {import('payload/types').CollectionConfig} */
const Todo = {
  slug: "todo",
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "category",
      type: "relationship",
      relationTo: "Categories",
      label: "Category",
      required: true,
    },
  ],
};

export default Todo;
