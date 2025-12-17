import PropTypes from "prop-types";
import Input from "@components/base/input/Input";
import Button from "@components/base/button/Button";
import { useSearchForm } from "@hooks/useSearchForm";
/**
 * Componente SearchBar.
 *
 * Barra de búsqueda controlada que gestiona su estado y validaciones
 * mediante el hook `useSearchForm`.
 *
 * Incluye:
 * - Campo de texto
 * - Validación y mensajes de error
 * - Botón de envío
 * - Botón para limpiar la búsqueda
 *
 * @component
 * @param {Object} props - Propiedades del componente.
 * @param {string} [props.value] - Valor inicial de la búsqueda.
 * @param {(value: string) => void} props.onSubmit - Callback ejecutado al enviar el formulario.
 *
 * @returns {JSX.Element} Formulario de búsqueda.
 *
 */
export default function SearchBar({ value, onSubmit }) {
  const { formik, submitError, handleSubmit, handleClear } = useSearchForm(
    onSubmit,
    value
  );

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", gap: "0.5rem" }}>
      <Input
        name="search"
        value={formik.values.search}
        onChange={formik.handleChange}
        placeholder="Buscar usuario"
      />

      {formik.touched.search && formik.errors.search && (
        <div style={{ color: "red", fontSize: "0.8rem" }}>
          {formik.errors.search}
        </div>
      )}

      {submitError && (
        <div style={{ color: "red", fontSize: "0.8rem" }}>{submitError}</div>
      )}

      <Button type="submit" variant="primary">
        Buscar
      </Button>

      <Button type="button" variant="secondary" onClick={handleClear}>
        Limpiar
      </Button>
    </form>
  );
}
/**
 * Props del componente SearchBar.
 *
 * @typedef {Object} SearchBarProps
 * @property {string} [value] - Valor inicial de la búsqueda.
 * @property {(value: string) => void} onSubmit - Callback ejecutado al enviar el formulario.
 */
SearchBar.propTypes = {
  value: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
};
