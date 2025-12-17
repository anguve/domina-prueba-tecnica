import { useFormik } from "formik";
import { searchValidationSchema } from "@validation/searchValidation";
import { useState } from "react";
/**
 * Hook useSearchForm.
 *
 * Encapsula la lógica de un formulario de búsqueda:
 * - Manejo de estado con Formik
 * - Validación mediante esquema
 * - Manejo de errores de envío
 * - Funciones auxiliares para enviar y limpiar el formulario
 *
 * Está diseñado para ser usado por el componente `SearchBar`.
 *
 * @param {(value: string) => Promise<void>|void} onSubmitCallback
 * Callback que se ejecuta al enviar el formulario con el valor de búsqueda.
 *
 * @param {string} [initialValue=""]
 * Valor inicial del campo de búsqueda.
 *
 * @returns {UseSearchFormResult} Objeto con el estado y handlers del formulario.
 *
 */
export function useSearchForm(onSubmitCallback, initialValue = "") {
  const [submitError, setSubmitError] = useState(null);

  const formik = useFormik({
    initialValues: { search: initialValue },
    validationSchema: searchValidationSchema,
    onSubmit: async (values) => {
      try {
        await onSubmitCallback(values.search);
        setSubmitError(null);
      } catch {
        setSubmitError("Error al realizar la búsqueda");
      }
    },
  });
  /**
   * Maneja el envío del formulario
   * - Previene el comportamiento por defecto
   * - Limpia errores previos
   * - Ejecuta la validación y envío de Formik
   *
   * @param {React.FormEvent<HTMLFormElement>} e
   */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError(null);
    await formik.submitForm();
  };
  /**
   * Limpia el formulario, busca de nuevo y controla los errores de envío
   */
  const handleClear = async () => {
    formik.resetForm();
    setSubmitError(null);
    await onSubmitCallback("");
  };

  return {
    formik,
    submitError,
    handleSubmit,
    handleClear,
  };
}
