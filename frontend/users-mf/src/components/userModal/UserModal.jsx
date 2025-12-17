import PropTypes from "prop-types";
import Button from "@components/base/button/Button";
import styles from "@components/userModal/UserModal.module.css";
import { UserPropTypes } from "@/propTypes/user";
/**
 * Componente UserModal.
 *
 * Modal que muestra información detallada de un usuario.
 * Se renderiza de forma condicional cuando existe un usuario válido.
 *
 * Incluye:
 * - Overlay para bloquear la interacción externa
 * - Información completa del usuario
 * - Botón para cerrar el modal
 *
 * @component
 * @param {Object} props - Propiedades del componente.
 * @param {Object|null} props.user - Usuario a mostrar. Si es `null` o `undefined`, no se renderiza.
 * @param {() => void} props.onClose - Callback para cerrar el modal.
 *
 * @returns {JSX.Element|null} Modal de usuario o `null` si no hay usuario.
 *
 */
export default function UserModal({ user, onClose }) {
  if (!user) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles["modal-content"]}>
          <h2>{user.name}</h2>

          <p>
            <strong>Username:</strong> {user.username}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Phone:</strong> {user.phone}
          </p>
          <p>
            <strong>Website:</strong> {user.website}
          </p>
          <p>
            <strong>Address:</strong> {user.address.street},{" "}
            {user.address.suite}, {user.address.city}, {user.address.zipcode}
          </p>
          <p>
            <strong>Company:</strong> {user.company.name} –{" "}
            {user.company.catchPhrase}
          </p>

          <Button variant="secondary" onClick={onClose}>
            Cerrar
          </Button>
        </div>
      </div>
    </div>
  );
}
/**
 * Props del componente UserModal.
 *
 * @typedef {Object} UserModalProps
 * @property {Object|null} user - Usuario a mostrar.
 * @property {() => void} onClose - Callback para cerrar el modal.
 */
UserModal.propTypes = {
  user: UserPropTypes,
  onClose: PropTypes.func.isRequired,
};
