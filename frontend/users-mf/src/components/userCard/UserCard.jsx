import { useState } from "react";
import Button from "@components/base/button/Button";
import UserModal from "@components/userModal/UserModal";
import styles from "@components/userCard/UserCard.module.css";
import { UserPropTypes } from "@/propTypes/user";
import PropTypes from "prop-types";
/**
 * Componente UserCard.
 *
 * Representa visualmente a un usuario dentro de una lista.
 * Permite seleccionar un usuario y mostrar información adicional
 * en un modal.
 *
 * @component
 * @param {Object} props - Propiedades del componente.
 * @param {Object} props.user - Objeto usuario.
 * @param {(user: Object) => void} [props.onUserSelect] - Callback al seleccionar un usuario.
 *
 * @returns {JSX.Element} Elemento de lista con información del usuario.
 *
 */
export default function UserCard({ user, onUserSelect }) {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    onUserSelect?.(user);
    setShowModal(true);
  };

  return (
    <li className={styles.card}>
      <span>
        <strong>{user.name}</strong> - {user.email}
      </span>

      <Button variant="primary" onClick={handleClick}>
        Ver más
      </Button>

      {showModal && (
        <UserModal user={user} onClose={() => setShowModal(false)} />
      )}
    </li>
  );
}
/**
 * Props del componente UserCard.
 *
 * @typedef {Object} UserCardProps
 * @property {Object} user - Datos del usuario.
 * @property {(user: Object) => void} [onUserSelect] - Callback al seleccionar un usuario.
 */
UserCard.propTypes = {
  user: UserPropTypes.isRequired,
  onUserSelect: PropTypes.func,
};
