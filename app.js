require('colors');

const { guardarDB, leerDB } = require('./helpers/guardarArchivo');
const { inquirerMenu,
        leerInput,
        listadoBorrarTareas,
        pausa
    } = require('./helpers/inquirer');

const Tareas = require('./models/tareas');
//const Tarea = require('./models/tarea');

console.clear();

const main = async() =>{
    
    const tareas = new Tareas();
    const tareasDB = leerDB();
    let opt = '';
    
    if( tareasDB ) {
        tareas.cargarTareasFromArray( tareasDB );
    }

    do{
        opt = await inquirerMenu();

        switch (opt) {
            case '1':
                const desc = await leerInput( 'Descripcion:');
                tareas.crearTarea( desc );
                break;
            case '2':
                tareas.listadoCompleto();
                break;
            case '3':
                    tareas.listarPendientesCompletadas(true);
                    break;
            case '4':
                tareas.listarPendientesCompletadas(false);
                break;
            case '6':
                const id = await listadoBorrarTareas( tareas.listadoArr );
                console.log({ id })
                break;
            default:
                break;
        }

        guardarDB( tareas.listadoArr );
        await pausa();
    } while( opt !== '0' );
}

main();