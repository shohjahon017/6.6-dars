import React from "react";

function Footer() {
  return (
    <div>
      <footer className="footer footer-center bg-base-300 text-base-content p-4">
        <aside>
          <p className="font-medium">
            Powered by{" "}
            <a
              className="btn btn-link"
              href="https://json-api.uz"
              target="_blank"
            >
              json-api.uz
            </a>
          </p>
        </aside>
      </footer>
    </div>
  );
}

export default Footer;
