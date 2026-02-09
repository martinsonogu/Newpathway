import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          
          {/* Brand / About */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-4">
              NewPathway1
            </h3>
            <p className="text-sm leading-relaxed">
              Providing compassionate Supported Living and Residential Care,
              focused on dignity, independence, and wellbeing.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/services/supported-living"
                  className="hover:text-white"
                >
                  Supported Living
                </Link>
              </li>
              <li>
                <Link
                  to="/services/residential-care"
                  className="hover:text-white"
                >
                  Residential Care
                </Link>
              </li>
              <li>
                <Link
                  to="/services/who-we-support"
                  className="hover:text-white"
                >
                  Who We Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-white">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Trust & Compliance */}
          <div>
            <h4 className="text-white font-semibold mb-4">
              Trust & Information
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-white">
                  Safeguarding
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-white">
                  Complaints & Feedback
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                {/* <Link to="/" className="hover:text-white">
                  Accessibility
                </Link> */}
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          
          {/* Copyright */}
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Newpathway1 Limited. All rights reserved.
          </p>

          {/* Reassurance */}
          <p className="text-sm text-gray-400 text-center md:text-right">
            UK-based care provider · DBS-checked staff · Equality Act compliant
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
