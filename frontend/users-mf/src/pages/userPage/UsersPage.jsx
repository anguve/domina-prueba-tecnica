import { useUsers } from "@hooks/useUsers";
import SearchBar from "@components/searchBar/SearchBar";
import UserList from "@components/userList/UserList";
import Pagination from "@components/pagination/Pagination";
import styles from "./UsersPage.module.css";
import PropTypes from "prop-types";
/**
 * Componente UsersPage.
 *
 * Página principal que orquesta:
 * - Búsqueda de usuarios
 * - Listado de usuarios
 * - Paginación
 * - Estados de carga y error
 *
 * Utiliza el hook `useUsers` como fuente única de verdad
 * para el estado de la feature.
 *
 * @component
 * @param {Object} props - Propiedades del componente.
 * @param {(user: Object) => void} [props.onUserSelect] - Callback al seleccionar un usuario.
 *
 * @returns {JSX.Element} Página de usuarios.
 *
 */
export default function UsersPage({ onUserSelect }) {
  const {
    users,
    search,
    setSearch,
    page,
    setPage,
    pageSize,
    setPageSize,
    totalPages,
    loading,
    error,
  } = useUsers();

  return (
    <section className={styles.page}>
      <SearchBar
        value={search}
        onSubmit={(q) => {
          setPage(1);
          setSearch(q);
        }}
      />

      {loading && <p>Cargando usuarios...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {!loading && !error && (
        <UserList users={users} onUserSelect={onUserSelect} />
      )}

      <Pagination
        page={page}
        totalPages={totalPages}
        pageSize={pageSize}
        pageSizeOptions={[5, 10, 20]}
        onPageChange={setPage}
        onPageSizeChange={(size) => {
          setPage(1);
          setPageSize(size);
        }}
      />
    </section>
  );
}
/**
 * Props del componente UsersPage.
 *
 * @typedef {Object} UsersPageProps
 * @property {(user: Object) => void} [onUserSelect] - Callback al seleccionar un usuario.
 */
UsersPage.propTypes = {
  onUserSelect: PropTypes.func,
};
