export default function (plop) {
    plop.setGenerator('create-page', {
        description: 'Create a new React Page',
        prompts: [
            {
                type: 'input',
                name: 'page',
                message: 'Page name:',
            },
        ],
        actions: [
            {
                type: 'add',
                path: '../src/pages/{{pascalCase page}}/{{pascalCase page}}.tsx',
                templateFile: './templates/createPage/page.tsx.hbs'
            },
            {
                type: 'add',
                path: '../src/pages/{{pascalCase page}}/__tests__/{{pascalCase page}}.test.tsx',
                templateFile: './templates/createPage/test.tsx.hbs',
            },
        ],
    }),
    plop.setGenerator('create-route', {
        description: 'Create a new React route',
        prompts: [
            {
                type: 'input',
                name: 'route',
                message: 'Route name:',
            },
        ],
        actions: [
            {
                type: 'add',
                path: '../src/routes/{{pascalCase route}}/{{pascalCase route}}.tsx',
                templateFile: './templates/createRoutes/routes.tsx.hbs'
            },
            {
                type: 'modify',
                path: '../src/routes/Router.tsx',
                pattern: /(\/\/! route:import)/g,
                template: 'const {{pascalCase route}} = React.lazy(()=> import(\'@/routes/{{pascalCase route}}/{{pascalCase route}}.tsx\'))\n$1',
            },
            {
                type: 'modify',
                path: '../src/routes/Router.tsx',
                pattern: /(\/\/! route:component)/g,
                template: '<Route path="/{{dashCase route}}" element={<React.Suspense fallback={<div>Loading...</div>}><{{pascalCase route}}/></React.Suspense>} />\n$1',
            },
            {
                type: 'add',
                path: '../src/routes/{{pascalCase route}}/__tests__/{{pascalCase route}}.test.tsx',
                templateFile: './templates/createRoutes/test.tsx.hbs',
            },
        ],
    }),
    plop.setGenerator('create-component', {
        description: 'Create a new React component',
        prompts: [
            {
                type: 'input',
                name: 'component',
                message: 'Component name:',
            },
        ],
        actions: [
            {
                type: 'add',
                path: '../src/components/{{pascalCase component}}/{{pascalCase component}}.tsx',
                templateFile: './templates/createComponent/component.tsx.hbs'
            },
            {
                type: 'add',
                path: '../src/components/{{pascalCase component}}/{{pascalCase component}}.properties.tsx',
                templateFile: './templates/createComponent/properties.tsx.hbs',
            },
            {
                type: 'add',
                path: '../src/components/{{pascalCase component}}/__tests__/{{pascalCase component}}.test.tsx',
                templateFile: './templates/createComponent/test.tsx.hbs',
            },
        ],
    });
    plop.setGenerator('generate-hook', {
        description: 'Create a new Custom Hook',
        prompts: [
          {
            type: 'input',
            name: 'name',
            message: 'Hook Name:',
          },
        ],
        actions: [
          {
            type: 'add',
            path: '../src/hooks/{{camelCase name}}.ts',
            templateFile: './templates/createCustomHook/hook.tsx.hbs',
          },
        ],
      })
}