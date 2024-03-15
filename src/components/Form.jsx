import { useState, useEffect } from "react";
import confetti from "canvas-confetti";
import Header from "./Header";

export const Form = () => {
    const [tareas, setTareas] = useState([]);
    const [tareaInput, setTareaInput] = useState('');
    const [diasInput, setDiasInput] = useState([]);
    const [tareaAgregada, setTareaAgregada] = useState(false);

    useEffect(() => {
        if (tareas.length > 0 && !tareaAgregada) {
            console.log({ tareas });
            setTareaAgregada(true);
            setTimeout(() => {
                setTareaAgregada(false);
            }, 2000);
        }
    }, [tareas]);

    function handleTareas(e) {
        e.preventDefault();
        // Verificar si no hay días seleccionados
        if (diasInput.length === 0) {
            alert("Por favor selecciona al menos un día.");
            return;
        }
        const nuevaTarea = {
            tarea: tareaInput,
            dias: diasInput
        };
        setTareas([...tareas, nuevaTarea]);
        setTareaInput('');
        setDiasInput([]);
        confetti();
    }

    function handleCheckboxChange(e) {
        const { value, checked } = e.target;
        if (value === "T") {
            if (checked) {
                setDiasInput(["L", "M", "X", "J", "V", "S", "D"]);
            } else {
                setDiasInput([]);
            }
        } else {
            if (checked) {
                setDiasInput([...diasInput, value]);
            } else {
                setDiasInput(diasInput.filter(day => day !== value));
            }
        }
    }

    return (
        <div className="container">
            <div className="headerContainer">
                <Header />
            </div>
            <div className="formContainer">
                <h1>Ingresa Tarea</h1>
                <h3 style={{ visibility: tareaAgregada ? "visible" : "hidden" }}>Tarea agregada!</h3>
                <form onSubmit={handleTareas}>
                    <label>Tarea a agregar:</label>
                    <input
                        name="tarea"
                        type="text"
                        placeholder="Tarea..."
                        value={tareaInput}
                        onChange={(e) => setTareaInput(e.target.value)}
                        required
                    />
                    <label htmlFor="dias">Cantidad de días:</label>
                    <div className="checkboxContainer" style={{ display: "flex", flexWrap: "wrap" }}>
                        <div>
                            <input type="checkbox" id="L" value="L" onChange={handleCheckboxChange} checked={diasInput.includes("L")} />
                            <label htmlFor="L">Lunes</label>
                        </div>
                        <div>
                            <input type="checkbox" id="M" value="M" onChange={handleCheckboxChange} checked={diasInput.includes("M")} />
                            <label htmlFor="M">Martes</label>
                        </div>
                        <div>
                            <input type="checkbox" id="X" value="X" onChange={handleCheckboxChange} checked={diasInput.includes("X")} />
                            <label htmlFor="X">Miércoles</label>
                        </div>
                        <div>
                            <input type="checkbox" id="J" value="J" onChange={handleCheckboxChange} checked={diasInput.includes("J")} />
                            <label htmlFor="J">Jueves</label>
                        </div>
                        <div>
                            <input type="checkbox" id="V" value="V" onChange={handleCheckboxChange} checked={diasInput.includes("V")} />
                            <label htmlFor="V">Viernes</label>
                        </div>
                        <div>
                            <input type="checkbox" id="S" value="S" onChange={handleCheckboxChange} checked={diasInput.includes("S")} />
                            <label htmlFor="S">Sábado</label>
                        </div>
                        <div>
                            <input type="checkbox" id="D" value="D" onChange={handleCheckboxChange} checked={diasInput.includes("D")} />
                            <label htmlFor="D">Domingo</label>
                        </div>
                        <div>
                            <input type="checkbox" id="T" value="T" onChange={handleCheckboxChange} checked={diasInput.length === 7} />
                            <label htmlFor="T">Todos los días</label>
                        </div>
                    </div>
                    <button type="submit">Agregar</button>
                </form>
            </div>
        </div>
    );
};
