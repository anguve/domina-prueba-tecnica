import PropTypes from "prop-types";
import styles from "@components/base/card/Card.module.css";

/**
 * Componente Card.
 *
 * Contenedor visual reutilizable para agrupar contenido.
 * Aplica estilos base de tarjeta mediante CSS Modules.
 *
 * @component
 * @param {Object} props - Propiedades del componente.
 * @param {React.ReactNode} props.children - Contenido que se renderiza dentro de la tarjeta.
 *
 * @returns {JSX.Element} Contenedor estilizado tipo tarjeta.
 *
 */
export default function Card({ children }) {
  return <div className={styles.card}>{children}</div>;
}
/**
 * Definición de tipos de propiedades usando PropTypes.
 *
 * @property {React.ReactNode} children - Contenido interno de la tarjeta.
 */
Card.propTypes = {
  children: PropTypes.node.isRequired,
};
