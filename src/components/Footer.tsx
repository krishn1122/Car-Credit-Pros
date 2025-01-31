import { Link } from "react-router-dom";
import { Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-darker text-secondary py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-primary mb-4">Car Credit Pros</h3>
            <p className="text-secondary/80">
              Making car ownership accessible to everyone through tailored financing solutions.
            </p>
            <a
              href="https://www.instagram.com/carcreditpros/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-primary hover:text-primary/80 mt-4"
            >
              <Instagram className="w-5 h-5 mr-2" />
              Follow us on Instagram
            </a>
          </div>

          <div>
            <h3 className="text-xl font-bold text-primary mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-secondary/80 hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/schedule" className="text-secondary/80 hover:text-primary">
                  Book an Appointment
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-primary mb-4">Contact Us</h3>
            <ul className="space-y-2 text-secondary/80">
              <li>Email: info@carcreditpros.com</li>
              <li>Phone: (555) 123-4567</li>
              <li>Address: 123 Auto Finance Way</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary/20 mt-8 pt-8 text-center text-secondary/60">
          <p>&copy; {new Date().getFullYear()} Car Credit Pros. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;