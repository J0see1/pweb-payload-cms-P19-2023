
// const payload = require('payload')

import payload from 'payload';

/** @type {import('payload/types').CollectionConfig} */
const Todo = {
    slug: 'Todo',
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
        label: 'Title',
        type: 'text',
        required: true,
      },
      {
        name: 'Category',
        type: 'relationship',
        required: true,
        relationTo: 'Category',
      },
    ],
  };
  
  export default Todo;