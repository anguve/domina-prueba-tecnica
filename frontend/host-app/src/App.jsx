import { useState } from "react";
import Layout from "@components/layout/Layout";
import Home from "@pages/home/Home";

/**
 * Componente App.
 *
 * Componente raíz de la aplicación host.
 * Se encarga de:
 * - Gestionar el usuario seleccionado desde el micro-frontend
 * - Mostrar información de comunicación entre aplicaciones
 * - Renderizar el layout principal
 *
 * Este componente demuestra la comunicación
 * **micro-frontend → aplicación host** mediante callbacks.
 *
 * @component
 *
 * @returns {JSX.Element} Aplicación principal.
 *
 */
export default function App() {
  const [selectedUser, setSelectedUser] = useState(null);

  const handleUserSelected = (user) => {
    setSelectedUser(user);
  };

  return (
    <Layout>
      {selectedUser && (
        <div
          style={{
            background: "#eef",
            padding: "0.75rem 1rem",
            marginBottom: "1rem",
            borderRadius: "6px",
          }}
        >
          <p style={{ margin: 0, fontSize: "0.85rem", color: "#555" }}>
            Comunicación desde el micro-frontend
          </p>

          <p style={{ margin: 0 }}>
            Usuario seleccionado en el micro-frontend:{" "}
            <strong>{selectedUser.name}</strong>
          </p>
        </div>
      )}

      <Home onUserSelected={handleUserSelected} />
    </Layout>
  );
}
