require('colors');

const inquirer = require('inquirer');
const preguntas = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿Qué opción desea seleccionar?',
        choices: [
            {
                value: '1',
                name: '1.- Crear tarea'
            },
            {
                value: '2',
                name: '2.- Listar tarea'
            },
            {
                value: '3',
                name: '3.- Listar tareas completadas'
            },
            {
                value: '4',
                name: '4.- Listar tareas pendientes'
            },
            {
                value: '5',
                name: '5.- Completar Tarea(s)'
            },
            {
                value: '6',
                name: '6.- Borrar Tarea'
            },
            {
                value: '0',
                name: '0.- Salir'
            }
        ]
    }
];

const inquirerMenu = async() => {
    console.clear();
    console.log('================================'.green);
    console.log('     Seleccione una opción'.green);
    console.log('================================\n'.green);

    const { opcion } = await inquirer.prompt( preguntas );
    return opcion;
}

const pausa = async() => {
    const question = [
        {
            type: 'input',
            name: 'pausa',
            message: `Presione ${ 'ENTER'.green } para continuar\n`
        }
    ];

    console.log('\n')
    await inquirer.prompt( question );
};

module.exports = {
    inquirerMenu,
    pausa
}