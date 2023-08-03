module.exports = {
  title: 'Alert',
  context: {
    headline: 'Error Alert',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, esse nisi. Doloremque assumenda quas ullam ipsa ex quae, reiciendis voluptatum beatae officiis laudantium nesciunt qui rem perferendis eveniet sequi dignissimos.',
    type: 'error'
  },
  preview: 'wrapper',
  variants: [
    {
      title: 'Info',
      context: {
        headline: 'Info Alert',
        type: 'info'
      }
    },
    {
      title: 'Success',
      context: {
        headline: 'Success Alert',
        type: 'success'
      }
    },
    {
      title: 'Warning',
      context: {
        headline: 'Warning Alert',
        type: 'warning'
      }
    }
  ]
};
