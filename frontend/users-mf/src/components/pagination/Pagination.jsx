import PropTypes from "prop-types";
import styles from "@components/pagination/Pagination.module.css";
import Button from "@components/base/button/Button";
import { getVisiblePages } from "../../utils/pagination.utils";
import PageButton from "@components/base/button/PageButton";
/**
 * Componente Pagination.
 *
 * Proporciona controles completos de paginación:
 * - Navegación entre páginas (primera, anterior, números, siguiente, últimao última)
 * - Selección de tamaño de página
 * - Manejo de rangos visibles con puntos suspensivos
 *
 * Incluye consideraciones de accesibilidad mediante atributos ARIA.
 *
 * @component
 * @param {Object} props - Propiedades del componente.
 * @param {number} props.page - Página actual (1-based).
 * @param {number} props.totalPages - Total de páginas disponibles.
 * @param {number} props.pageSize - Cantidad de registros por página.
 * @param {number[]} props.pageSizeOptions - Opciones disponibles para el tamaño de página.
 * @param {(page: number) => void} props.onPageChange - Callback cuando cambia la página.
 * @param {(pageSize: number) => void} props.onPageSizeChange - Callback cuando cambia el tamaño de página.
 * @param {number} [props.maxPages=5] - Número máximo de páginas visibles en el rango central.
 *
 * @returns {JSX.Element|null} Componente de paginación o `null` si no hay páginas válidas.
 *
 */
export default function Pagination({
  page,
  totalPages,
  pageSize,
  pageSizeOptions,
  onPageChange,
  onPageSizeChange,
  maxPages = 5,
}) {
  if (!Number.isFinite(totalPages) || totalPages < 1) return null;

  const safePage = Math.min(Math.max(1, page), totalPages);

  const { start, end } = getVisiblePages({
    page: safePage,
    totalPages,
    max: maxPages,
  });

  const handlePageChange = (nextPage) => {
    if (nextPage < 1 || nextPage > totalPages) return;
    onPageChange(nextPage);
  };

  return (
    <nav className={styles.pagination} aria-label="Paginación">
      <div className={styles.pageSize}>
        <label htmlFor="page-size">Registros:</label>
        <select
          id="page-size"
          value={pageSize}
          onChange={(e) => onPageSizeChange(Number(e.target.value))}
        >
          {pageSizeOptions.map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>
      </div>

      <Button
        aria-label="Primera página"
        disabled={safePage === 1}
        onClick={() => handlePageChange(1)}
      >
        «
      </Button>

      <Button
        aria-label="Página anterior"
        disabled={safePage === 1}
        onClick={() => handlePageChange(safePage - 1)}
      >
        Anterior
      </Button>

      {start > 1 && (
        <span aria-hidden="true" className={styles.ellipsis}>
          …
        </span>
      )}

      {Array.from({ length: end - start + 1 }, (_, i) => {
        const pageNumber = start + i;
        return (
          <PageButton
            key={pageNumber}
            page={pageNumber}
            isActive={pageNumber === safePage}
            onClick={handlePageChange}
          />
        );
      })}

      {end < totalPages && (
        <span aria-hidden="true" className={styles.ellipsis}>
          …
        </span>
      )}

      <Button
        aria-label="Página siguiente"
        disabled={safePage === totalPages}
        onClick={() => handlePageChange(safePage + 1)}
      >
        Siguiente
      </Button>

      <Button
        aria-label="Última página"
        disabled={safePage === totalPages}
        onClick={() => handlePageChange(totalPages)}
      >
        »
      </Button>
    </nav>
  );
}
/**
 * Props del componente Pagination.
 *
 * @typedef {Object} PaginationProps
 * @property {number} page - Página actual (1-based).
 * @property {number} totalPages - Total de páginas disponibles.
 * @property {number} pageSize - Cantidad de registros por página.
 * @property {number[]} pageSizeOptions - Opciones disponibles para el tamaño de página.
 * @property {number} [maxPages] - Máximo de páginas visibles en el rango.
 * @property {(page: number) => void} onPageChange - Callback al cambiar de página.
 * @property {(pageSize: number) => void} onPageSizeChange - Callback al cambiar el tamaño de página.
 */
Pagination.propTypes = {
  page: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  pageSizeOptions: PropTypes.arrayOf(PropTypes.number).isRequired,
  maxPages: PropTypes.number,
  onPageChange: PropTypes.func.isRequired,
  onPageSizeChange: PropTypes.func.isRequired,
};
