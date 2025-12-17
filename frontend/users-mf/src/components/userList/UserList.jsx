import UserCard from "@components/userCard/UserCard";
import PropTypes from "prop-types";
import styles from "@components/userList/UserList.module.css";
import { UserPropTypes } from "@/propTypes/user";
/**
 * Componente UserList.
 *
 * Renderiza una lista de usuarios utilizando el componente `UserCard`.
 * Está pensado para usarse dentro de vistas o secciones que muestran
 * colecciones de usuarios.
 *
 * @component
 * @param {Object} props - Propiedades del componente.
 * @param {Object[]} props.users - Lista de usuarios a renderizar.
 * @param {(user: Object) => void} [props.onUserSelect] - Callback al seleccionar un usuario.
 *
 * @returns {JSX.Element} Lista de tarjetas de usuario.
 *
 */
export default function UserList({ users, onUserSelect }) {
  return (
    <ul className={styles.list}>
      {users.map((user) => (
        <UserCard key={user.id} user={user} onUserSelect={onUserSelect} />
      ))}
    </ul>
  );
}
/**
 * Props del componente UserList.
 *
 * @typedef {Object} UserListProps
 * @property {Object[]} users - Lista de usuarios.
 * @property {(user: Object) => void} [onUserSelect] - Callback al seleccionar un usuario.
 */
UserList.propTypes = {
  users: PropTypes.arrayOf(UserPropTypes).isRequired,
  onUserSelect: PropTypes.func,
};
