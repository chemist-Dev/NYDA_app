import { Button } from "../ui/button";
import { ArrowLeft, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "/nyda.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-3xl text-primary-foreground">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 space-x-reverse bg-accent/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6 animate-fade-in">
            <Heart className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium">
              خدمة المجتمع • رعاية صحية • تطوع
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 animate-fade-in">
            رابطة شباب
            <br />
            <span className="text-accent">أطباء النوبارية</span>
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl leading-relaxed mb-8 opacity-95 animate-fade-in">
            نحن مجموعة من الأطباء الشباب المتحمسين لخدمة المجتمع وتقديم الرعاية
            الصحية المجانية للمحتاجين من خلال القوافل الطبية والأنشطة التطوعية
            في محافظة البحيرة ومدينة النوبارية.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mb-8 animate-fade-in">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">25+</div>
              <div className="text-sm opacity-90">قافلة طبية</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">5500+</div>
              <div className="text-sm opacity-90">مستفيد</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">35+</div>
              <div className="text-sm opacity-90">طبيب متطوع</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent-light text-accent-foreground shadow-medium"
            >
              <Link to="/caravans">
                استكشف القوافل
                <ArrowLeft className="ml-2 h-5 w-5" />
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-primary-foreground/30 text-black hover:bg-primary-foreground/10"
            >
              <Link to="/about">عن الرابطة</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
