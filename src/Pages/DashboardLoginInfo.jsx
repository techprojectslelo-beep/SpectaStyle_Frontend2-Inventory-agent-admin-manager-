import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import "../css/LoginInfo.css";

const DashboardLoginInfo = () => {
  const navigate = useNavigate();

  const credentials = [
    {
      role: "Manager (Dashboard)",
      url: "http://localhost:3000",
      credentials: [
        { field: "Name", value: "Admin One" },
        { field: "Password", value: "admin123" },
      ],
      note: "/ecommerce/manager/login",
    },
    {
      role: "Manager (Dashboard)",
      url: "http://localhost:3000",
      credentials: [
        { field: "Name", value: "Manager Two" },
        { field: "Password", value: "manager123" },
      ],
      note: "/ecommerce/manager/login",
    },
    {
      role: "Agent (Dashboard)",
      url: "http://localhost:3000",
      credentials: [
        { field: "Agent Name", value: "Agent Smith" },
        { field: "Password", value: "agent123" },
      ],
      note: "/ecommerce/agent/login",
    },
    {
      role: "Agent (Dashboard)",
      url: "http://localhost:3000",
      credentials: [
        { field: "Agent Name", value: "Agent Johnson" },
        { field: "Password", value: "agent456" },
      ],
      note: "/ecommerce/agent/login",
    },
  ];

  return (
    <Fragment>
      <div className="login-info-container">
        <button 
          className="back-button"
          onClick={() => navigate('/')}
          style={{
            margin: "1rem",
            padding: "0.5rem 1rem",
            cursor: "pointer",
          }}
        >
          ← Back to Dashboard
        </button>
        <h1 className="login-info-title">Dashboard Login Credentials</h1>
        <p className="login-info-subtitle">
          Use these credentials to access the Dashboard
        </p>

        <div className="credentials-grid">
          {credentials.map((item, index) => (
            <div key={index} className="credential-card">
              <h2 className="role-title">{item.role}</h2>
              <div className="credential-details">
                {item.credentials.map((cred, idx) => (
                  <div key={idx} className="credential-row">
                    <span className="field-label">{cred.field}:</span>
                    <span className="field-value">{cred.value}</span>
                  </div>
                ))}
              </div>
              <div className="access-info">
                <strong>URL:</strong> {item.url}
              </div>
              <div className="access-info">
                <strong>Endpoint:</strong> {item.note}
              </div>
            </div>
          ))}
        </div>

        <div className="additional-info">
          <h3>Quick Links:</h3>
          <ul>
            <li><strong>Dashboard:</strong> http://localhost:3000</li>
            <li><strong>Backend API:</strong> http://localhost:5500</li>
          </ul>
          <h3>Instructions:</h3>
          <ul>
            <li>1. Start backend: <code>cd Backend && node index.js</code></li>
            <li>2. Start dashboard: <code>cd Dashboard && npm start</code></li>
            <li>3. Use credentials above to login</li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

export default DashboardLoginInfo;
