import antfu from '@antfu/eslint-config'

export default antfu({
  vue: true,
},  {
  // Without `files`, they are general rules for all files
  rules: {
    'vue/no-empty-pattern': ['off'],
  },
})
