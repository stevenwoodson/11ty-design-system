module.exports = {
  title: 'Card',
  context: {
    headline: 'Headline First',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, esse nisi. Doloremque assumenda quas ullam ipsa ex quae, reiciendis voluptatum beatae officiis laudantium nesciunt qui rem perferendis eveniet sequi dignissimos.',
    image:
      'https://images.unsplash.com/photo-1688494929970-433dd6cab0dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400'
  },
  preview: 'wrapper',
  variants: [
    {
      title: 'Photo First',
      context: {
        headline: 'Photo First',
        image:
          'https://images.unsplash.com/photo-1686975284549-5c079539687e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
        option: 'photo-first'
      }
    },
    {
      title: 'Photo Last',
      context: {
        headline: 'Photo Last',
        image:
          'https://images.unsplash.com/photo-1664228581057-d7df1ecf7f14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
        option: 'photo-last'
      }
    },
    {
      title: 'No Photo',
      context: {
        headline: 'No Photo',
        image: null
      }
    },
    {
      title: 'No Content',
      context: {
        headline: 'No Content',
        content: null
      }
    },
    {
      title: 'No Headline',
      context: {
        headline: null
      }
    }
  ]
};
