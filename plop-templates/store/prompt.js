// eslint-disable-next-line @typescript-eslint/no-var-requires
const { validName } = require('../utils.js')

module.exports = {
    description: 'generate store',
    prompts: [
        {
            type: 'input',
            name: 'name',
            message: 'store name please',
            validate: validName('name')
        }
    ],
    actions(data) {
        const { name } = data

        const actions = [
            {
                type: 'add',
                path: `src/store/${name}.ts`,
                templateFile: 'plop-templates/store/index.hbs',
                data: {
                    name
                }
            }
        ]
        return actions
    }
}
