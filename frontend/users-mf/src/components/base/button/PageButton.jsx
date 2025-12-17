import PropTypes from "prop-types";
import Button from "@components/base/button/Button";

/**
 * Componente PageButton.
 *
 * Representa un botón de paginación que indica una página específica.
 * Cambia su estilo y comportamiento cuando está activo.
 *
 * @component
 * @param {Object} props - Propiedades del componente.
 * @param {number} props.page - Número de página que representa el botón.
 * @param {boolean} [props.isActive=false] - Indica si la página está activa.
 * @param {(page: number) => void} props.onClick - Función que se ejecuta al hacer clic en el botón.
 *
 * @returns {JSX.Element} Botón de paginación.
 *
 */
export default function PageButton({ page, isActive, onClick }) {
  return (
    <Button
      aria-label={`Página ${page}`}
      aria-current={isActive ? "page" : undefined}
      variant={isActive ? "primary" : "secondary"}
      disabled={isActive}
      onClick={() => onClick(page)}
    >
      {page}
    </Button>
  );
}

/**
 * Definición de tipos de propiedades usando PropTypes.
 *
 * @property {number} page - Número de página.
 * @property {boolean} isActive - Indica si el botón está activo.
 * @property {(page: number) => void} onClick - Callback ejecutado al hacer clic.
 */

PageButton.propTypes = {
  page: PropTypes.number.isRequired,
  isActive: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};
