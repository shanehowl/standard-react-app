// eslint-disable-next-line func-names
module.exports = function (plop) {
  plop.setGenerator('page', {
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Enter page name. This will create an index,css and unit test file',
      },
    ],
    description: 'Create a new layout page that includes a plain react file,css and unit test',
    actions() {
      const actions = []
      actions.push({
        type: 'add',
        path: 'src/pages/{{lowerCase name}}/index.ts',
        templateFile: 'src/plop/templates/page/index.tsx.hbs',
      })
      actions.push({
        type: 'add',
        path: 'src/pages/{{lowerCase name}}/{{lowerCase name}}.css',
      })
      actions.push({
        type: 'add',
        path: 'src/pages/{{lowerCase name}}/{{lowerCase name}}.test.tsx',
        templateFile: 'src/plop/templates/page/test.ts.hbs',
      })
      return actions
    },
  })
}
