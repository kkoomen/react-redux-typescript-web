module.exports = function(plop) {
  plop.setGenerator('React Component', {
    description: 'Create a new React component',
    prompts: [
      {
        type: 'prompt',
        name: 'componentName',
        message: 'Name of your component:',
      },
      {
        type: 'confirm',
        name: 'stateless',
        message: 'Do you want the component to be stateless?',
        default: true,
      },
      {
        type: 'confirm',
        name: 'connected',
        message: 'Do you want the component to be connected to Redux?',
        default: true,
      },
    ],
    actions: ({ stateless, connected }) => {
      const actions = [];

      if (stateless) {
        actions.push({
          type: 'add',
          templateFile: './config/plop/component/component.stateless.tsx.plop',
          path: './src/components/{{pascalCase componentName}}/{{pascalCase componentName}}.tsx',
        });
      } else {
        actions.push({
          type: 'add',
          templateFile: './config/plop/component/component.tsx.plop',
          path: './src/components/{{pascalCase componentName}}/{{pascalCase componentName}}.tsx',
        });
      }

      if (connected) {
        actions.push(
          {
            type: 'add',
            templateFile: './config/plop/component/index.connected.ts.plop',
            path: './src/components/{{pascalCase componentName}}/index.ts',
          },
          {
            type: 'add',
            templateFile: './config/plop/component/__tests__/component.connected.test.tsx.plop',
            path: './src/components/{{pascalCase componentName}}/__tests__/{{pascalCase componentName}}.connected.test.tsx',
          },
        );
      } else {
        actions.push(
          {
            type: 'add',
            templateFile: './config/plop/component/index.unconnected.ts.plop',
            path: './src/components/{{pascalCase componentName}}/index.ts',
          },
          {
            type: 'add',
            templateFile: './config/plop/component/__tests__/component.unconnected.test.tsx.plop',
            path: './src/components/{{pascalCase componentName}}/__tests__/{{pascalCase componentName}}.unconnected.test.tsx',
          },
        );
      }

      return actions;
    },
  });

  plop.setGenerator('React Container', {
    description: 'Create a new React container',
    prompts: [
      {
        type: 'prompt',
        name: 'containerName',
        message: 'Name of your container:',
      },
      {
        type: 'confirm',
        name: 'stateless',
        message: 'Do you want the container to be stateless?',
        default: true,
      },
      {
        type: 'confirm',
        name: 'connected',
        message: 'Do you want the container to be connected to Redux?',
        default: true,
      },
    ],
    actions: ({ stateless, connected }) => {
      const actions = [];

      if (stateless) {
        actions.push({
          type: 'add',
          templateFile: './config/plop/container/container.stateless.tsx.plop',
          path: './src/containers/{{pascalCase containerName}}/{{pascalCase containerName}}.tsx',
        });
      } else {
        actions.push({
          type: 'add',
          templateFile: './config/plop/container/container.tsx.plop',
          path: './src/containers/{{pascalCase containerName}}/{{pascalCase containerName}}.tsx',
        });
      }

      if (connected) {
        actions.push(
          {
            type: 'add',
            templateFile: './config/plop/container/index.connected.ts.plop',
            path: './src/containers/{{pascalCase containerName}}/index.ts',
          },
          {
            type: 'add',
            templateFile: './config/plop/container/__tests__/container.connected.test.tsx.plop',
            path: './src/containers/{{pascalCase containerName}}/__tests__/{{pascalCase containerName}}.connected.test.tsx',
          },
        );
      } else {
        actions.push(
          {
            type: 'add',
            templateFile: './config/plop/container/index.unconnected.ts.plop',
            path: './src/containers/{{pascalCase containerName}}/index.ts',
          },
          {
            type: 'add',
            templateFile: './config/plop/container/__tests__/container.unconnected.test.tsx.plop',
            path: './src/containers/{{pascalCase containerName}}/__tests__/{{pascalCase containerName}}.unconnected.test.tsx',
          },
        );
      }

      return actions;
    },
  });

  plop.setGenerator('Redux Reducer', {
    description: 'Generate a new Redux reducer (reducer, actions …)',
    prompts: [
      {
        type: 'prompt',
        name: 'reducerName',
        message: 'Name of your reducer (without the word "reducer" in it, such as "Calendar Event")',
      },
    ],
    actions: () => {
      const actions = [
        {
          type: 'add',
          templateFile: './config/plop/reducer/actions.ts.plop',
          path: './src/reducers/{{pascalCase reducerName}}/actions.ts',
        },
        {
          type: 'add',
          templateFile: './config/plop/reducer/__tests__/actions.test.tsx.plop',
          path: './src/reducers/{{pascalCase reducerName}}/__tests__/actions.test.tsx',
        },
        {
          type: 'add',
          templateFile: './config/plop/reducer/reducer.ts.plop',
          path: './src/reducers/{{pascalCase reducerName}}/reducer.ts',
        },
        {
          type: 'add',
          templateFile: './config/plop/reducer/__tests__/reducer.test.tsx.plop',
          path: './src/reducers/{{pascalCase reducerName}}/__tests__/reducer.test.tsx',
        },
        {
          type: 'add',
          templateFile: './config/plop/reducer/types.ts.plop',
          path: './src/reducers/{{pascalCase reducerName}}/types.ts',
        },
        {
          type: 'add',
          templateFile: './config/plop/reducer/index.ts.plop',
          path: './src/reducers/{{pascalCase reducerName}}/index.ts',
        },
      ];

      return actions;
    },
  });
};
