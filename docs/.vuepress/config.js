module.exports = {
  title: 'Vue Tree Table',
  description: 'Lightweight tree table Vue component',
  themeConfig: {
      sidebar: [
          'guide/installation',
          'guide/',
          'guide/customization',
          {
            title: 'Examples',
            collapsable: false,
            children: [
              'guide/examples/menu',
              'guide/examples/pagination',
              'guide/examples/search',
              'guide/examples/sorting',
              'guide/examples/food_calculator'
            ]
          }
      ]
  }
}
