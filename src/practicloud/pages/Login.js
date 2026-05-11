import { Container, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaArrowRight, FaShieldAlt, FaServer, FaMicrochip } from "react-icons/fa";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import "./Login.css";

// OOD portal URL - can be overridden via environment variable
// IMPORTANT: Must be the hostname (not raw IP) so the TLS cert matches and
// the OIDC/Dex flow stays on a single origin. Using an IP here causes the
// login to fail with `400 Bad Request` on /dex/auth/local/login because the
// OAuth2 state cookie is bound to a different origin than the callback.
const OOD_URL =
  process.env.REACT_APP_OOD_URL ||
  "https://practicloud-ood.eastus2.cloudapp.azure.com";

const Login = () => {
  useDocumentTitle("Login - PractiCloud");

  const handleLaunch = () => {
    // Redirect to OOD portal - OOD will handle authentication
    window.location.href = OOD_URL;
  };

  return (
    <div className="login-page">
      <div className="login-background">
        <div className="login-gradient"></div>
        <div className="login-pattern"></div>
      </div>

      <Container className="login-container">
        <Card className="login-card">
          <Card.Body className="login-card-body">
            {/* Logo */}
            <div className="login-logo">
              <img src="/logo.png" alt="PractiCloud" height="60" />
            </div>

            <h2 className="login-title">Welcome to PractiCloud</h2>
            <p className="login-subtitle">
              Access your cloud HPC dashboard for cryo-EM data processing
            </p>

            {/* Features list */}
            <div className="login-feature-list">
              <div className="login-feature-item">
                <FaServer className="login-feature-icon" />
                <span>RELION 5, cryoSPARC & more pre-installed</span>
              </div>
              <div className="login-feature-item">
                <FaMicrochip className="login-feature-icon" />
                <span>GPU-accelerated processing</span>
              </div>
              <div className="login-feature-item">
                <FaShieldAlt className="login-feature-icon" />
                <span>Secure, isolated environment</span>
              </div>
            </div>

            <Button
              onClick={handleLaunch}
              className="login-button"
            >
              Launch Dashboard
              <FaArrowRight className="btn-icon" />
            </Button>

            <p className="login-note">
              You'll be prompted to enter your credentials on the next page
            </p>

            <div className="login-divider">
              <span>Need an account?</span>
            </div>

            <p className="login-signup">
              <Link to="/practicloud/contactus" className="signup-link">
                Contact us to get started free
              </Link>
            </p>
          </Card.Body>
        </Card>

        <div className="login-features">
          <div className="feature-item">
            <span className="feature-icon">🔬</span>
            <span>RELION 5 Ready</span>
          </div>
          <div className="feature-item">
            <span className="feature-icon">⚡</span>
            <span>GPU Accelerated</span>
          </div>
          <div className="feature-item">
            <span className="feature-icon">🔒</span>
            <span>Secure & Private</span>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Login;
