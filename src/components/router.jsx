import { createBrowserRouter } from "react-router-dom";
import { Dashboard } from "./Dashboard.jsx";
import { Form } from "./Form.jsx";
import { Contact } from "./Contact.jsx";

export const router = createBrowserRouter([
    { path: "/", element: <Dashboard /> },
    { path: "/agregar-tarea", element: <Form /> },
    { path: "/informe", element: <Contact /> },

])
