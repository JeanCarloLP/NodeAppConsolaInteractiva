/** Ejemplo de listado para identificarlo en un Objeto
 *  _listado: {
 *      'uuid-128-128128123-123123: { id:2, desc: asdasd, completadoEn: 238238 },
 *      'uuid-128-128128123-386386: { id:3, desc: a2dasd, completadoEn: 338238 }
 *  }
 */
const Tarea = require('./tarea');

class Tareas {
    _listado = {};

    get listadoArr() {
        const listado = [];
        Object.keys(this._listado).forEach( key => {
            const tarea = this._listado[key];
            listado.push( tarea );
        });

        return listado;
    }

    cargarTareasFromArray( tareas = []) {
        tareas.forEach( tarea => {
            this._listado[tarea.id] = tarea;
        });
    }

    constructor() {
        this._listado = {};
    }

    crearTarea( desc = ''){
        const tarea = new Tarea( desc );
        this._listado[tarea.id] = tarea;
    }

    listadoCompleto(){
        this.listadoArr.forEach( (tarea, i) => {
            const idx = `${i+1}.-`.green;
            const { desc, completadoEn } = tarea;
            const estado = ( completadoEn )
                            ? 'Tarea Completada'.green
                            : 'Tarea Pendiente'.red

            console.log( `${idx} ${desc} :: ${estado}`);
        });
    }
}

module.exports = Tareas;