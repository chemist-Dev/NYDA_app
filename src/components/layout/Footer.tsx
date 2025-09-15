import { Heart, Mail, Phone, MapPin, Facebook, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "/logo-Di2KzSP2.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 space-x-reverse">
              <img
                src={logo}
                alt="شعار جمعية نبارية الأطباء الشباب"
                className="h-10 w-10"
              />
              <div className="flex flex-col">
                <span className="text-lg font-bold"> رابطة شباب</span>
                <span className="text-sm opacity-90"> أطباء النوبارية </span>
              </div>
            </div>
            <p className="text-sm opacity-90 leading-relaxed">
              نحن مجموعة من الأطباء الشباب المتحمسين لخدمة المجتمع وتقديم
              الرعاية الصحية للجميع من خلال القوافل الطبية والأنشطة التطوعية.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">روابط سريعة</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-sm opacity-90 hover:opacity-100 transition-opacity"
                >
                  عن الرابطة
                </Link>
              </li>
              <li>
                <Link
                  to="/caravans"
                  className="text-sm opacity-90 hover:opacity-100 transition-opacity"
                >
                  القوافل
                </Link>
              </li>
              <li>
                <Link
                  to="/testimonials"
                  className="text-sm opacity-90 hover:opacity-100 transition-opacity"
                >
                  التقييمات
                </Link>
              </li>
              <li>
                <Link
                  to="/donations"
                  className="text-sm opacity-90 hover:opacity-100 transition-opacity"
                >
                  التبرعات
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-sm opacity-90 hover:opacity-100 transition-opacity"
                >
                  اتصل بنا
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">معلومات التواصل</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 space-x-reverse">
                <Phone className="h-4 w-4" />
                <span className="text-sm">+20 123 456 7890</span>
              </div>
              <div className="flex items-center space-x-3 space-x-reverse">
                <Mail className="h-4 w-4" />
                <span className="text-sm">info@nubaria-doctors.org</span>
              </div>
              <div className="flex items-center space-x-3 space-x-reverse">
                <MapPin className="h-4 w-4" />
                <a
                  href="https://www.google.com/maps/place/%D8%A7%D9%84%D9%86%D9%88%D8%A8%D8%A7%D8%B1%D9%8A%D8%A9+%D8%A7%D9%84%D8%AC%D8%AF%D9%8A%D8%AF%D8%A9%E2%80%AD/@30.6541831,30.074971,13.92z/data=!4m6!3m5!1s0x145f53500a636ce1:0x4e416d0e2e3ecbb5!8m2!3d30.6636218!4d30.0864782!16s%2Fg%2F11tk0pcb2r?entry=ttu&g_ep=EgoyMDI1MDkxMC4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  className="text-sm"
                >
                  غرب النوباريةّ، البحيرة، مصر
                </a>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">تابعنا</h3>
            <div className="flex space-x-4 space-x-reverse">
              <a
                href="https://www.facebook.com/noubaria.doctors"
                target="_blank"
                className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm opacity-90 flex items-center justify-center space-x-2 space-x-reverse">
            <span style={{ direction: "ltr" }}>
              <span className="font-semibold text-lg text-white">
                Abdelaziz chemistDev
              </span>{" "}
              تم التطوير بواسطة
            </span>
            <Heart className="h-4 w-4 text-accent" />
            <span className="ltr">
              © 2024 رابطة شباب أطباء النوبارية جميع الحقوق محفوظة.
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
