require('colors');

const { guardarDB, leerDB } = require('./helpers/guardarArchivo');
const { confirmar,
        inquirerMenu,
        leerInput,
        listadoBorrarTareas,
        mostrarListadoCheckList,
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
            case '1': // Crear Tarea
                const desc = await leerInput( 'Descripcion:');
                tareas.crearTarea( desc );
                break;
            case '2': // Listar Tareas
                tareas.listadoCompleto();
                break;
            case '3': // Listar tareas completadas
                tareas.listarPendientesCompletadas(true);
                break;
            case '4': // Listar tareas pendientes
                tareas.listarPendientesCompletadas(false);
                break;
            case '5': // Completar tareas pendientes
                const ids = await mostrarListadoCheckList( tareas.listadoArr );
                tareas.toggleCompletadas( ids );
                break;
            case '6': // Borrar tareas
                const id = await listadoBorrarTareas( tareas.listadoArr );
                if(id !== '0') {
                    const ok = await confirmar('Confirmar si realmente desea eliminar la tarea.');
                    if( ok ){
                        tareas.borrarTarea( id );
                        console.log( 'Tarea borrada.' );
                    }
                }
                break;
            default: // Opción Predeterminada
                break;
        }

        guardarDB( tareas.listadoArr );
        await pausa();
    } while( opt !== '0' );
}

main();