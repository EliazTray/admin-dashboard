// eslint-disable-next-line @typescript-eslint/no-var-requires
const { validName } = require('../utils.js')

module.exports = {
    description: 'generate a view',
    prompts: [
        {
            type: 'input',
            name: 'name',
            message: 'view name please',
            validate: validName('name')
        }
    ],
    actions: () => {
        const name = '{{name}}'
        const actions = [
            {
                type: 'add',
                path: `src/views/${name}/index.vue`,
                templateFile: 'plop-templates/view/index.hbs',
                data: {
                    name: name
                }
            }
        ]

        return actions
    }
}
