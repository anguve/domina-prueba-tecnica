import UsersPage from "@pages/userPage/UsersPage";
import "@/global.css";
import PropTypes from "prop-types";
/**
 * Componente UsersApp.
 *
 * Punto de entrada de la aplicación de usuarios.
 * Se encarga de:
 * - Cargar los estilos globales
 * - Renderizar la página principal de usuarios
 * - Propagar el callback de selección de usuario
 *
 * Este componente actúa como contenedor de alto nivel
 * (similar a un `App` o `FeatureRoot`).
 *
 * @component
 * @param {Object} props - Propiedades del componente.
 * @param {(user: Object) => void} [props.onUserSelect] - Callback al seleccionar un usuario.
 *
 * @returns {JSX.Element} Aplicación de usuarios.
 *
 */
export default function UsersApp({ onUserSelect }) {
  return <UsersPage onUserSelect={onUserSelect} />;
}
/**
 * Props del componente UsersApp.
 *
 * @typedef {Object} UsersAppProps
 * @property {(user: Object) => void} [onUserSelect] - Callback al seleccionar un usuario.
 */
UsersApp.propTypes = {
  onUserSelect: PropTypes.func,
};
