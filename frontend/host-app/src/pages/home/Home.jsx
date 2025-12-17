import PropTypes from "prop-types";

import "@pages/home/home.css";
import UsersMF from "@microfrontends/UsersMF";
/**
 * Componente Home.
 *
 * Página principal del host que actúa como contenedor
 * del micro-frontend de usuarios.
 *
 * Se encarga de:
 * - Renderizar la sección principal
 * - Integrar el micro-frontend `UsersMF`
 * - Propagar el callback de selección de usuario
 *
 * Este componente representa el punto de integración
 * entre la aplicación host y el micro-frontend.
 *
 * @component
 * @param {Object} props - Propiedades del componente.
 * @param {(user: Object) => void} [props.onUserSelected] - Callback al seleccionar un usuario desde el micro-frontend.
 *
 * @returns {JSX.Element} Página Home.
 *
 */
export default function Home({ onUserSelected }) {
  return (
    <section className="home">
      <h1 className="home-title">Usuarios</h1>

      <div className="users-container">
        <UsersMF onUserSelect={onUserSelected} />
      </div>
    </section>
  );
}

/**
 * Props del componente Home.
 *
 * @typedef {Object} HomeProps
 * @property {(user: Object) => void} [onUserSelected] - Callback al seleccionar un usuario.
 */
Home.propTypes = {
  onUserSelected: PropTypes.func,
};
