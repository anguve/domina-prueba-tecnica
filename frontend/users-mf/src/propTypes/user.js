import PropTypes from "prop-types";

/**
 * PropTypes del modelo User.
 *
 * Define la estructura completa de un usuario tal como
 * se utiliza en la aplicación.
 *
 * Este shape es reutilizado por:
 * - UserCard
 * - UserList
 * - UserModal
 * - Cualquier componente que consuma usuarios
 *
 * @typedef {Object} User
 * @property {number} id - Identificador único del usuario.
 * @property {string} name - Nombre completo del usuario.
 * @property {string} username - Nombre de usuario.
 * @property {string} email - Correo electrónico.
 * @property {Object} address - Dirección del usuario.
 * @property {string} address.street - Calle.
 * @property {string} address.suite - Departamento o suite.
 * @property {string} address.city - Ciudad.
 * @property {string} address.zipcode - Código postal.
 * @property {Object} address.geo - Coordenadas geográficas.
 * @property {string} address.geo.lat - Latitud.
 * @property {string} address.geo.lng - Longitud.
 * @property {string} phone - Teléfono de contacto.
 * @property {string} website - Sitio web del usuario.
 * @property {Object} company - Información de la empresa.
 * @property {string} company.name - Nombre de la empresa.
 * @property {string} company.catchPhrase - Eslogan de la empresa.
 * @property {string} company.bs - Descripción de la empresa.
 */
export const UserPropTypes = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.shape({
    street: PropTypes.string.isRequired,
    suite: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    zipcode: PropTypes.string.isRequired,
    geo: PropTypes.shape({
      lat: PropTypes.string.isRequired,
      lng: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  phone: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired,
  company: PropTypes.shape({
    name: PropTypes.string.isRequired,
    catchPhrase: PropTypes.string.isRequired,
    bs: PropTypes.string.isRequired,
  }).isRequired,
});
