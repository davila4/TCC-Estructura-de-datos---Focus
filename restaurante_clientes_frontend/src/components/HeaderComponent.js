import React from "react";

export const HeaderComponent = () => {
  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-md" style={{ backgroundColor: "#0d0d0e" }}>
          <div>
            <a href="/" className="navbar-brand" style={{ fontFamily: "Cambria, serif", fontStyle: "italic", fontSize: "28px", color: "white" }}>
              Gestion de clientes
            </a>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default HeaderComponent;
