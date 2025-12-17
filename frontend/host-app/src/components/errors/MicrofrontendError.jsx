/**
 * Componente MicrofrontendError.
 *
 * UI de error que se muestra cuando un micro-frontend
 * no puede cargarse o falla durante su ejecución.
 *
 * Se utiliza como `fallback` dentro de un `ErrorBoundary`
 * para aislar errores y evitar que la aplicación host
 * se rompa por fallos externos.
 *
 * @component
 *
 * @returns {JSX.Element} Mensaje de error del micro-frontend.
 *
 */
export default function MicrofrontendError() {
  return (
    <div
      style={{
        padding: "32px",
        textAlign: "center",
        background: "#fff",
        borderRadius: "12px",
        boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
      }}
    >
      <h2>No se puede cargar este módulo</h2>
      <p>
        El microfrontend no está disponible en este momento.
        <br />
        Intenta más tarde.
      </p>
    </div>
  );
}
