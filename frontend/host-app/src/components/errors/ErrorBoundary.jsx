import PropTypes from "prop-types";
import { Component } from "react";

/**
 * Componente ErrorBoundary.
 *
 * Captura errores de JavaScript en componentes hijos,
 * evitando que toda la aplicación se rompa.
 *
 * Es especialmente útil para aislar errores provenientes
 * de micro-frontends remotos.
 *
 * Implementa el patrón oficial de Error Boundaries de React.
 *
 * @component
 * @extends React.Component
 *
 * @param {Object} props - Propiedades del componente.
 * @param {React.ReactNode} props.children - Componentes hijos a proteger.
 * @param {React.ReactNode} props.fallback - UI alternativa a mostrar cuando ocurre un error.
 *
 */
export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("Microfrontend error:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }

    return this.props.children;
  }
}
/**
 * Props del componente ErrorBoundary.
 *
 * @typedef {Object} ErrorBoundaryProps
 * @property {React.ReactNode} children - Componentes a proteger.
 * @property {React.ReactNode} fallback - UI alternativa cuando ocurre un error.
 */
ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
  fallback: PropTypes.node.isRequired,
};
