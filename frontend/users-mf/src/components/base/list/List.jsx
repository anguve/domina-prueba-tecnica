import PropTypes from "prop-types";
import styles from "@components/base/list/List.module.css";
/**
 * Componente List.
 *
 * Contenedor semántico basado en `<ul>` para renderizar listas.
 * Aplica estilos base mediante CSS Modules.
 *
 * @component
 * @param {Object} props - Propiedades del componente.
 * @param {React.ReactNode} props.children - Elementos de lista (`<li>` u otros componentes).
 *
 * @returns {JSX.Element} Lista no ordenada estilizada.
 *
 */
export default function List({ children }) {
  return <ul className={styles.list}>{children}</ul>;
}
/**
 * Definición de tipos de propiedades usando PropTypes.
 *
 * @property {React.ReactNode} children - Elementos internos de la lista.
 */
List.propTypes = {
  children: PropTypes.node.isRequired,
};
