import PropTypes from "prop-types";
import "@components/layout/layout.css";
/**
 * Componente Layout.
 *
 * Define la estructura visual base de la aplicación host:
 * - Header
 * - Sidebar (sidenav)
 * - Área de contenido principal
 * - Footer
 *
 * Actúa como **shell de la aplicación**, dentro del cual
 * se renderizan páginas y micro-frontends.
 *
 * @component
 * @param {Object} props - Propiedades del componente.
 * @param {React.ReactNode} props.children - Contenido principal de la aplicación.
 *
 * @returns {JSX.Element} Estructura base de la aplicación.
 *
 */
export default function Layout({ children }) {
  return (
    <div className="app-shell">
      <header className="app-header">
        <h2>Micro Frontends Platform</h2>
      </header>

      <div className="app-body">
        <aside className="app-sidenav">
          <p>Sidenav</p>
        </aside>

        <main className="app-content">{children}</main>
      </div>

      <footer className="app-footer">© 2025 – Host App</footer>
    </div>
  );
}
/**
 * Props del componente Layout.
 *
 * @typedef {Object} LayoutProps
 * @property {React.ReactNode} children - Contenido principal.
 */
Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
