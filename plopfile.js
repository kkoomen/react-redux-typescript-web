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
      const actions = [
        {
          type: 'add',
          path: './src/components/{{properCase componentName}}/{{properCase componentName}}.test.tsx',
          templateFile: './config/plop/component/component.test.tsx.plop',
        },
      ];

      if (stateless) {
        actions.push({
          type: 'add',
          path: './src/components/{{properCase componentName}}/{{properCase componentName}}.tsx',
          templateFile: './config/plop/component/component.stateless.tsx.plop',
        });
      } else {
        actions.push({
          type: 'add',
          path: './src/components/{{properCase componentName}}/{{properCase componentName}}.tsx',
          templateFile: './config/plop/component/component.tsx.plop',
        });
      }

      if (connected) {
        actions.push({
          type: 'add',
          path: './src/components/{{properCase componentName}}/index.tsx',
          templateFile: './config/plop/component/index.connected.tsx.plop',
        });
      } else {
        actions.push({
          type: 'add',
          path: './src/components/{{properCase componentName}}/index.tsx',
          templateFile: './config/plop/component/index.unconnected.tsx.plop',
        });
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
      const actions = [
        {
          type: 'add',
          path: './src/containers/{{properCase containerName}}/{{properCase containerName}}.test.tsx',
          templateFile: './config/plop/container/container.test.tsx.plop',
        },
      ];

      if (stateless) {
        actions.push({
          type: 'add',
          path: './src/containers/{{properCase containerName}}/{{properCase containerName}}.tsx',
          templateFile: './config/plop/container/container.stateless.tsx.plop',
        });
      } else {
        actions.push({
          type: 'add',
          path: './src/containers/{{properCase containerName}}/{{properCase containerName}}.tsx',
          templateFile: './config/plop/container/container.tsx.plop',
        });
      }

      if (connected) {
        actions.push({
          type: 'add',
          path: './src/containers/{{properCase containerName}}/index.tsx',
          templateFile: './config/plop/container/index.connected.tsx.plop',
        });
      } else {
        actions.push({
          type: 'add',
          path: './src/containers/{{properCase containerName}}/index.tsx',
          templateFile: './config/plop/container/index.unconnected.tsx.plop',
        });
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
        message: 'Name of your reducer (e.g. "Calendar Event" or "Vehicle")',
      },
    ],
    actions: () => {
      const actions = [
        {
          type: 'add',
          path: './src/store/{{camelCase reducerName}}/actions.tsx',
          templateFile: './config/plop/reducer/actions.tsx.plop',
        },
        {
          type: 'add',
          path: './src/store/{{camelCase reducerName}}/actions.test.tsx',
          templateFile: './config/plop/reducer/actions.test.tsx.plop',
        },
        {
          type: 'add',
          path: './src/store/{{camelCase reducerName}}/reducer.tsx',
          templateFile: './config/plop/reducer/reducer.tsx.plop',
        },
        {
          type: 'add',
          path: './src/store/{{camelCase reducerName}}/reducer.test.tsx',
          templateFile: './config/plop/reducer/reducer.test.tsx.plop',
        },
        {
          type: 'add',
          path: './src/store/{{camelCase reducerName}}/types.tsx',
          templateFile: './config/plop/reducer/types.tsx.plop',
        },
      ];

      return actions;
    },
  });
};
