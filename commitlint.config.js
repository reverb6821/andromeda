export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-enum': [2, 'always', ['tokens', 'components', 'storybook', 'repo', 'deps', 'release']],
    'subject-case': [2, 'never', ['start-case', 'pascal-case', 'upper-case']],
  },
};
