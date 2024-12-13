import { Mail, Phone } from "lucide-react";

export const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About iGTB</h3>
            <p className="text-gray-400">
              Leading provider of transaction banking technology
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Support</h3>
            <div className="space-y-2">
              <a
                href="mailto:support@igtb.com"
                className="text-gray-400 hover:text-white flex items-center gap-2"
              >
                <Mail className="h-4 w-4" />
                support@igtb.com
              </a>
              <a
                href="tel:+1234567890"
                className="text-gray-400 hover:text-white flex items-center gap-2"
              >
                <Phone className="h-4 w-4" />
                +1 (234) 567-890
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Resources
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} iGTB. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};