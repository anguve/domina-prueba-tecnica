import * as Yup from "yup";
/**
 * Expresión regular para prevenir caracteres comunes en inyección SQL.
 *
 * Permite texto libre excluyendo:
 * ; ' " - / *
 *
 * @type {RegExp}
 */
const sqlInjectionRegex = /^[^;'"\-/*]*$/;
/**
 * Esquema de validación para el formulario de búsqueda.
 *
 * Valida el campo `search` asegurando:
 * - Que no esté vacío
 * - Longitud mínima y máxima permitida
 * - Que no contenga caracteres potencialmente peligrosos
 *
 * Este esquema es utilizado por el hook `useSearchForm`
 * mediante Formik + Yup.
 *
 * @constant
 * @type {Yup.ObjectSchema<{ search: string }>}
 *
 */
export const searchValidationSchema = Yup.object({
  search: Yup.string()
    .required("El campo no puede estar vacío")
    .min(1, "Debes escribir al menos 1 carácter")
    .max(150, "El texto no puede superar 50 caracteres")
    .matches(sqlInjectionRegex, "El texto contiene caracteres no permitidos"),
});
