// eslint-disable-next-line @typescript-eslint/no-var-requires
const { validName } = require('../utils.js')

module.exports = {
    description: 'generate vue component',
    prompts: [
        {
            type: 'input',
            name: 'name',
            message: 'component name please',
            validate: validName('name')
        }
    ],
    actions: () => {
        const name = '{{properCase name}}'
        const actions = [
            {
                type: 'add',
                path: `src/components/${name}/index.vue`,
                templateFile: 'plop-templates/component/index.hbs',
                data: {
                    name: name
                }
            }
        ]

        return actions
    }
}
