import { Suspense, lazy } from "react";
import PropTypes from "prop-types";
import ErrorBoundary from "@components/errors/ErrorBoundary";
import MicrofrontendError from "@components/errors/MicrofrontendError";

const RemoteUsers = lazy(() => import("users/UsersApp"));
/**
 * Componente UsersMF.
 *
 * Adaptador (wrapper) del micro-frontend de usuarios.
 * Se encarga de:
 * - Cargar de forma lazy el micro-frontend remoto
 * - Manejar estados de carga con `Suspense`
 * - Capturar errores del micro-frontend con `ErrorBoundary`
 * - Propagar eventos hacia la aplicación host
 *
 * Este componente es el **punto de integración**
 * entre la aplicación host y el micro-frontend remoto
 * expuesto mediante Module Federation.
 *
 * @component
 * @param {Object} props - Propiedades del componente.
 * @param {(user: Object) => void} [props.onUserSelect] - Callback al seleccionar un usuario en el micro-frontend.
 *
 * @returns {JSX.Element} Micro-frontend de usuarios envuelto con manejo de errores y carga.
 *
 */
export default function UsersMF({ onUserSelect }) {
  return (
    <ErrorBoundary fallback={<MicrofrontendError />}>
      <Suspense fallback={<p>Cargando usuarios...</p>}>
        <RemoteUsers onUserSelect={onUserSelect} />
      </Suspense>
    </ErrorBoundary>
  );
}
/**
 * Props del componente UsersMF.
 *
 * @typedef {Object} UsersMFProps
 * @property {(user: Object) => void} [onUserSelect] - Callback al seleccionar un usuario.
 */
UsersMF.propTypes = {
  onUserSelect: PropTypes.func,
};
