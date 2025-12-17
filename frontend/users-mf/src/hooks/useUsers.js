import { useEffect, useState } from "react";
import { fetchUsers } from "@services/users.api";
/**
 * Hook useUsers.
 *
 * Gestiona el estado y la lógica de obtención de usuarios:
 * - Paginación
 * - Búsqueda
 * - Tamaño de página
 * - Estados de carga y error
 *
 * Encapsula el acceso al servicio `fetchUsers` y expone
 * un API simple para los componentes de UI.
 *
 * @returns {UseUsersResult} Estado y setters relacionados con usuarios.
 *
 */
export function useUsers() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const [totalPages, setTotalPages] = useState(1);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    async function loadUsers() {
      setLoading(true);
      setError(null);

      try {
        const res = await fetchUsers({ page, pageSize, search });

        if (isMounted) {
          setUsers(res.data);
          setTotalPages(res.totalPages);
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message || "Error inesperado");
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    loadUsers();

    return () => {
      isMounted = false;
    };
  }, [page, pageSize, search]);

  return {
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
  };
}
