/**
 * Calcula el rango de páginas visibles para un sistema de paginación.
 *
 * Dado un número de página actual, el total de páginas y el máximo
 * de páginas visibles, determina los límites `start` y `end`
 * del rango a mostrar.
 *
 * Esta función es utilizada por el componente `Pagination`
 * para renderizar los botones de página y los puntos suspensivos.
 *
 * @function getVisiblePages
 *
 * @param {Object} params - Parámetros de cálculo.
 * @param {number} params.page - Página actual (1-based).
 * @param {number} params.totalPages - Total de páginas disponibles.
 * @param {number} params.max - Número máximo de páginas visibles.
 *
 * @returns {VisiblePagesRange} Rango de páginas visibles.
 *
 */
export function getVisiblePages({ page, totalPages, max }) {
  const half = Math.floor(max / 2);

  let start = Math.max(1, page - half);
  let end = Math.min(totalPages, start + max - 1);

  if (end - start + 1 < max) {
    start = Math.max(1, end - max + 1);
  }

  return { start, end };
}
