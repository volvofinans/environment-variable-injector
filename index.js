import { Plugin } from 'release-it';

class EnvironmentVariableInjector extends Plugin {

  async init() {
    await super.init();

    const { variables } = this.options;

    this.initPrompts(variables)
    this.registerPrompts(this.prompts);

    for (const key in this.prompts) {
      await this.step({ task: (value) => process.env[key] = value, label: 'Environment Variable', prompt: key });
    }
  }

  initPrompts(variables) {
    this.prompts = {}

    for (const key in variables) {
      var prompt = {}

      prompt.type = variables[key].type

      if (variables[key].type == "password") {
        prompt.mask = variables[key].mask === undefined ? true : variables[key].mask;
      }

      prompt.mask = variables[key].message === undefined ? 
        function message() { return key } : 
        function message() { return variables[key].message }

      prompt.message = function message() { return variables[key].message }

      this.prompts[key] = prompt
    }
  }

}

export default EnvironmentVariableInjector;
