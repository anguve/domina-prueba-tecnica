import ReactDOM from "react-dom/client";
import UsersPage from "@pages/userPage/UsersPage";

/**
 * Punto de entrada de la aplicación.
 *
 * Inicializa la aplicación React y monta el componente raíz
 * dentro del elemento DOM con id `root`.
 *
 * En este caso, el componente raíz es `UsersPage`,
 * que gestiona toda la feature de usuarios.
 *
 * @file entry-point
 */
ReactDOM.createRoot(document.getElementById("root")).render(<UsersPage />);
