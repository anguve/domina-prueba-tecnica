import PropTypes from "prop-types";
import styles from "@components/base/input/Input.module.css";

/**
 * Componente Input.
 *
 * Campo de entrada controlado reutilizable.
 * Soporta distintos tipos de input HTML y estilos base mediante CSS Modules.
 *
 * @component
 * @param {Object} props - Propiedades del componente.
 * @param {string} props.value - Valor actual del campo (input controlado).
 * @param {(event: React.ChangeEvent<HTMLInputElement>) => void} props.onChange - Función que se ejecuta al cambiar el valor.
 * @param {string} [props.placeholder] - Texto de ayuda que se muestra cuando el campo está vacío.
 * @param {string} [props.type="text"] - Tipo de input HTML (`text`, `password`, `email`, etc.).
 * @param {string} [props.name] - Atributo `name` del input.
 *
 * @returns {JSX.Element} Campo de entrada estilizado.
 *
 */
export default function Input({
  value,
  onChange,
  placeholder,
  type = "text",
  name,
}) {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={styles.input}
    />
  );
}
/**
 * Definición de tipos de propiedades usando PropTypes.
 *
 * @property {string} value - Valor actual del input.
 * @property {(event: React.ChangeEvent<HTMLInputElement>) => void} onChange - Callback al cambiar el valor.
 * @property {string} placeholder - Texto de ayuda.
 * @property {string} type - Tipo de input HTML.
 * @property {string} name - Nombre del campo.
 */
Input.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
};
