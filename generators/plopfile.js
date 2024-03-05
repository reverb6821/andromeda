export default function (plop) {
    plop.setGenerator('generate-rest-service', {
        description: 'Create a new Axios Call',
        prompts: [
            {
                type: 'input',
                name: 'service',
                message: 'Service Name:',
            },
            {
                type: 'input',
                name: 'path',
                message: 'URL path:',
            },
        ],
        actions: [
            {
                type: 'add',
                path: '../src/api/services/{{pascalCase service}}/{{pascalCase service}}.service.ts',
                templateFile: './templates/createAxiosService/service.ts.hbs'
            },
            {
                type: 'add',
                path: '../src/api/services/{{pascalCase service}}/{{pascalCase service}}.properties.ts',
                templateFile: './templates/createAxiosService/properties.ts.hbs'
            },
            {
                type: 'add',
                path: '../src/store/reducer/{{pascalCase service}}.reducer.ts',
                templateFile: './templates/createAxiosService/reducer.ts.hbs'
            },
            {
                type: 'modify',
                path: '../src/store/store.ts',
                pattern: /(\/\/reducer setter)/g,
                template: '{{lowerCase service}}: {{pascalCase service}}Reducer\n$1',
            },
            {
                type: 'modify',
                path: '../src/store/store.ts',
                pattern: /(\/\/REDUCER IMPORT)/g,
                template: 'import {{pascalCase service}}Reducer from \'@/store/reducer/{{pascalCase service}}.reducer.ts\'\n$1',
            },
        ]
    }),
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
      }),
    plop.setGenerator('create-layout', {
        description: 'Create a new React Layout',
        prompts: [
            {
                type: 'input',
                name: 'layout',
                message: 'Layout name:',
            },
        ],
        actions: [
            {
                type: 'add',
                path: '../src/views/{{pascalCase layout}}/{{pascalCase layout}}.tsx',
                templateFile: './templates/createLayout/layout.tsx.hbs'
            },
            // {
            //     type: 'modify',
            //     path: '../src/routes/Container.tsx',
            //     pattern: /(\/\/ LAYOUT)/g,
            //     template: 'element={<{{pascalCase layout}} />}\n$1',
            // },
            {
                type: 'add',
                path: '../src/routes/{{pascalCase route}}/tests/{{pascalCase route}}.test.tsx',
                templateFile: './templates/createRoute/test.tsx.hbs',
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
                templateFile: './templates/createRoute/route.tsx.hbs'
            },
            {
                type: 'modify',
                path: '../src/routes/Container.tsx',
                pattern: /(\/\/ COMPONENTS ROUTES)/g,
                template: '<Route path="/{{dashCase route}}" element={<{{pascalCase route}} />} />\n$1',
            },
            {
                type: 'modify',
                path: '../src/routes/Container.tsx',
                pattern: /(\/\/ ROUTES IMPORT)/g,
                template: 'const {{pascalCase route}} = React.lazy(()=> import(\'@/routes/{{pascalCase route}}/{{pascalCase route}}.tsx\'))\n$1',
                // template: 'import {{pascalCase route}} from \'@/routes/{{pascalCase route}}/{{pascalCase route}}.tsx\'\n$1',
            },
            {
                type: 'add',
                path: '../src/routes/{{pascalCase route}}/__tests__/{{pascalCase route}}.test.tsx',
                templateFile: './templates/createRoute/test.tsx.hbs',
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
            {
                type: 'add',
                path: '../src/components/{{pascalCase component}}/stories/{{pascalCase component}}.stories.tsx',
                templateFile: './templates/createComponent/stories.tsx.hbs',
            },
            {
                type: 'add',
                path: '../src/components/{{pascalCase component}}/stories/{{pascalCase component}}.mdx',
                templateFile: './templates/createComponent/stories.mdx.hbs',
            },
        ],
    });
}
