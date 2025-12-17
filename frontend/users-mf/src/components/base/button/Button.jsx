import PropTypes from "prop-types";
import styles from "@components/base/button/Button.module.css";

/**
 * Componente Button reutilizable.
 *
 * Renderiza un botón HTML con estilos basados en variantes.
 *
 * @component
 * @param {Object} props - Propiedades del componente.
 * @param {React.ReactNode} props.children - Contenido interno del botón.
 * @param {"primary" | "secondary"} [props.variant="primary"] - Variante visual del botón.
 * @param {Object} props.rest - Propiedades adicionales que se pasan al elemento `<button>`.
 *
 * @returns {JSX.Element} Botón estilizado.
 *
 */
export default function Button({ children, variant = "primary", ...props }) {
  return (
    <button className={styles[variant]} {...props}>
      {children}
    </button>
  );
}

/**
 * Definición de tipos de propiedades usando PropTypes.
 *
 * @property {React.ReactNode} children - Contenido del botón.
 * @property {"primary" | "secondary"} variant - Variante del botón.
 */

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(["primary", "secondary"]),
};
