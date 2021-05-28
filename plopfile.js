module.exports = function (plop) {
  plop.setGenerator('component', {
    description: 'Create React Component',

    prompts: [
      {
        type: 'input',
        name: 'ComponentName',
        message: 'Component Name?:',
      },
      {
        type: 'list',
        name: 'Granularity',
        message: 'Granularity?:',
        choices: ['Atoms', 'Molecules', 'Organisms'],
      },
      // {
      //   type: 'confirm',
      //   name: 'StoryBook',
      //   message: 'StoryBook? (defualt: yes):',
      //   default: true,
      // },
      // {
      //   type: 'confirm',
      //   name: 'Tests',
      //   message: 'Tests? (default: yes):',
      //   default: true,
      // },
      // {
      //   type: 'confirm',
      //   name: 'TypeScript',
      //   message: 'TypeScript? (default: yes):',
      //   default: true,
      // },
    ],

    /* eslint-disable @typescript-eslint/no-unused-vars */
    actions: function (data) {
      const actionsWithTypeScript = [
        function () {
          console.log('\nWith TypeScript')
        },
        {
          type: 'add',
          path:
            './src/components/{{Granularity}}/{{pascalCase ComponentName}}/index.tsx',
          templateFile: 'template/component/ts/component.hbs',
        },
        {
          type: 'add',
          path:
            './src/components/{{Granularity}}/{{pascalCase ComponentName}}/styles.ts',
          templateFile: 'template/component/ts/styles.hbs',
        },
        // {
        //   type: 'add',
        //   path:
        //     './src/components/{{Granularity}}/{{pascalCase ComponentName}}/stories.tsx',
        //   templateFile: 'template/component/ts/stories.hbs',
        //   skip: function () {
        //     if (!data.StoryBook) {
        //       return 'no stories'
        //     }
        //   },
        // },
        // {
        //   type: 'add',
        //   path:
        //     './src/components/{{Granularity}}/{{pascalCase ComponentName}}/tests.tsx',
        //   templateFile: 'template/component/ts/tests.hbs',
        //   skip: function () {
        //     if (!data.Tests) {
        //       return 'no tests'
        //     }
        //   },
        // },
      ]

      // const actionsWithNoTypeScript = [
      //   function () {
      //     console.log('No TypeScript')
      //   },
      // ]

      // const actions = data.TypeScript
      //   ? actionsWithTypeScript
      //   : actionsWithNoTypeScript

      const actions = actionsWithTypeScript

      return actions
    },
  })
}
