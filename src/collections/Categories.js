import Todo from './Todo'

/** @type {import('payload/types').CollectionConfig} */
const Categories = {
  slug : "Categories",
  fields : [
    {
      name: "Category",
      type: "text",
      required: true,
    },
    Todo,
    {
      name: "title",
      type: "text",
      required: true,
    },
    
  ]
}

export default Categories