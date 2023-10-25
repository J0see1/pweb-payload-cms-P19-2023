/** @type {import('payload/types').CollectionConfig} */
const Todo = {
    slug : "todo",
    fields : [
      {
        name: "title",
        type: "text",
        required: true,
      },
    ]
  }
  
  export default Todo
  
  