import { useState } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import { Button } from "../ui/button";
import Logo from "../../../public/logo-Di2KzSP2.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "الرئيسية", path: "/" },
    { name: "عن الرابطة", path: "/about" },
    { name: "القوافل", path: "/caravans" },
    { name: "التقييمات", path: "/testimonials" },
    { name: "التبرعات", path: "/donations" },
    { name: "اتصل بنا", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border shadow-soft">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* {Logo} */}
        <Link to="/" className="flex items-center space-x-2 space-x-reverse">
          <img
            src={Logo}
            alt="شعار رابطة الأطباء الشباب"
            className="h-10 w-10"
          />
          <div className="flex flex-col">
            <span className="text-xl font-extrabold text-primary">
              رابطة شباب
            </span>
            <span className="text-sm text-muted-foreground">
              اطباء النوبارية
            </span>
          </div>
        </Link>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 space-x-reverse">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive(item.path)
                  ? "text-primary border-b-2 border-primary"
                  : "text-foreground"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="sm"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-border bg-background animate-slide-in">
          <nav className="container mx-auto px-4 py-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block text-sm font-medium transition-colors hover:text-primary ${
                  isActive(item.path) ? "text-primary" : "text-foreground"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
