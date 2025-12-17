/**
 * Obtiene usuarios desde el servicio remoto aplicando
 * paginación y filtro de búsqueda.
 *
 * @async
 * @function fetchUsers
 *
 * @param {Object} params - Parámetros de la petición.
 * @param {number} params.page - Página solicitada (1-based).
 * @param {number} params.pageSize - Cantidad de registros por página.
 * @param {string} params.search - Texto de búsqueda.
 *
 * @returns {Promise<FetchUsersResponse>} Respuesta con usuarios y metadatos de paginación.
 *
 * @throws {Error} Si la petición falla o la respuesta no es válida.
 *
 */
export async function fetchUsers({ page, pageSize, search }) {
  try {
    const params = new URLSearchParams({
      page,
      pageSize,
      search,
    });

    const res = await fetch(`http://localhost:3001/users?${params}`);

    if (!res.ok) {
      throw new Error(`Error ${res.status}: ${res.statusText}`);
    }

    return await res.json();
  } catch (error) {
    throw new Error(`fetchUsers failed: ${error.message}`);
  }
}
