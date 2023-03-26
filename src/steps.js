import HabiName from './components/habiName';
import HabiResume from './components/habiResume';
import HabiEmail from './components/habiEmail';
import HabiDirection from './components/habiDirection';
import HabiFloor from './components/habiFloor';
import HabiAditionals from './components/habiAditionals';
import HabiMainResume from './components/habiMainResume';
import Modals from './components/modaLManager';

export const Steps =[
        {
            path:"/nombres",
            component:<HabiName/>,
            Description: "El usario agrega su nombre y apellido"
        },
        {
            path:"/email",
            component:[<HabiEmail/>,<HabiResume/>,<Modals/>],
            Description: "El usario su email el cual debe ser un email correcto"
        },
        {
            path:"/direccion",
            component:[<HabiDirection/>,<HabiResume/>,<Modals/>],
            Description: "El usario agrega su Direccion"
        },
        {
            path:"/pisoApt",
            component:[<HabiFloor/>,<HabiResume/>,<Modals/>],
            Description: "El usario agrega su piso, minimo piso 1 hasta maximo el 50"
        },
        {
            path:"/zonasC",
            component:[<HabiAditionals/>,<HabiResume/>,<Modals/>],
            Description: "El usario agrega zonas comunes que tenga el apartamento mediante un checkbox"
        },
        {
            path:"/resume",
            component:<HabiMainResume/>,
            Description: "Muestra un resumen de los datos añadidos"
        }
]

 