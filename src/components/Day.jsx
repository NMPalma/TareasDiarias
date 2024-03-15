import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import { useState } from "react";

const Day = () => {

    const [fecha, setFecha] = useState(new Date());
    function formatoFecha(fecha, formato) {
        const map = {
            dd: fecha.getDate(),
            mm: fecha.getMonth() + 1,
            yyyy: fecha.getFullYear()
        }

        return formato.replace(/dd|mm|yyyy/gi, matched => map[matched])
    }

    const obtenerDiaSemana = (fecha) => {
        const diasSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
        return diasSemana[fecha.getDay()];
    }

    const retrocederDia = () => {
        const nuevaFecha = new Date(fecha);
        nuevaFecha.setDate(fecha.getDate() - 1);
        setFecha(nuevaFecha);
    }

    const avanzarDia = () => {
        const nuevaFecha = new Date(fecha);
        nuevaFecha.setDate(fecha.getDate() + 1);
        setFecha(nuevaFecha);
    }

    const fechaFormateada = formatoFecha(fecha, "dd/mm/yyyy");
    const diaSemana = obtenerDiaSemana(fecha);

    return (
        <div className='dayContainer'>
            <FaArrowCircleLeft className='anterior' onClick={retrocederDia} />
            <h2 className='day'>Hoy es {diaSemana} {fechaFormateada}</h2>
            <FaArrowCircleRight className='posterior' onClick={avanzarDia} />
        </div>
    );
}

export default Day;
