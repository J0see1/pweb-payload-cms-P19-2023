/** @type {import('payload/types').CollectionConfig} */
const Todo = {
  slug: "todo",
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
      localized: false,
    },
    {
      name: "status",
      label: "ToDo Status",
      type: "select",
      options: ["Assigned", "On Progress", "Done"],
      required: true,
    },
  ],
};

export default Todo;
