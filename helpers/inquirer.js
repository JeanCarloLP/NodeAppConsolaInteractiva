require('colors');

const inquirer = require('inquirer');

const preguntas = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿Qué opción desea seleccionar?',
        choices: ['opt1','opt2','opt3','opt4','opt5','opt6','opt0']
    }
];
const inquirerMenu = async() => {
    //console.clear();
    console.log('================================'.green);
    console.log('     Seleccione una opción'.green);
    console.log('================================\n'.green);


    const opt = await inquirer.prompt( preguntas );

    return opt;
    // console.log(`${ '1.'.green } Crear tarea`);
    // console.log(`${ '2.'.green } Listar tareas`);
    // console.log(`${ '3.'.green } Listar tareas completadas`);
    // console.log(`${ '4.'.green } Listar tareas pendientes`);
    // console.log(`${ '5.'.green } Completar Tarea(s)`);
    // console.log(`${ '6.'.green } Borrar Tarea`);
    // console.log(`${ '0.'.green } Salir\n`);

}

module.exports = {
    inquirerMenu
}