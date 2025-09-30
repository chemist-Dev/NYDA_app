import "../index.css";
import HeroSection from "../components/ui/hero-section";
import VideoSection from "../components/VideoSection";
import CaravanCard from "../components/ui/caravan-card";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Heart, Shield, Users, Target, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
// import caravan1 from "../assets/caravan-1.jpg";
import belal2 from "/belal2.jpg";
import caravan from "/caravan.jpg";

const Home = () => {
  const recentCaravans = [
    {
      title: "قافلة طبية شاملة - قرية ام المؤمنين",
      date: "6 سبتمبر 2025",
      location: "قرية ام المؤمنين، البحيرة",
      beneficiaries: 250,
      image: caravan,
      status: "completed" as const,
      description:
        "قافلة طبية شاملة تضمنت فحوصات طبية عامة وتوزيع أدوية مجانية للأطفال وكبار السن في قرية ام المؤمنين.",
    },
    {
      title: "قافلة طبية متخصصة - قرية بلال",
      date: "19 سبتمبر 2025",
      location: "قرية بلال، النوبارية ، بحيرة",
      beneficiaries: 180,
      image: belal2,
      status: "completed" as const,
      description:
        "قافلة متخصصة في جميع التخصصات الباطنة و الأسنان والنسا  قدمت علاج مجاني وتوعية صحية .",
    },
  ];

  const values = [
    {
      icon: Heart,
      title: "الرحمة والعطاء",
      description:
        "نؤمن بأن الرحمة والعطاء هما أساس رسالتنا في خدمة المجتمع وتقديم الرعاية الصحية للجميع.",
    },
    {
      icon: Shield,
      title: "الجودة والمهنية",
      description:
        "نلتزم بأعلى معايير الجودة والمهنية في تقديم الخدمات الطبية والتطوعية لضمان أفضل النتائج.",
    },
    {
      icon: Users,
      title: "العمل الجماعي",
      description:
        "نعمل كفريق واحد متماسك، نتشارك الخبرات ونتعلم من بعضنا البعض لتحقيق أهدافنا المشتركة.",
    },
    {
      icon: Target,
      title: "التميز والإبداع",
      description:
        "نسعى دائماً للتميز والإبداع في أساليب عملنا ونبحث عن طرق مبتكرة لخدمة المجتمع بشكل أفضل.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />
      {/* {video section} */}
      <VideoSection />
      {/* About Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              من نحن؟
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              رابطة شباب أطباء النوبارية هي مؤسسة تطوعية غير ربحية تأسست عام
              2019 بهدف تقديم الرعاية الصحية المجانية للمحتاجين في محافظة
              البحيرة ومناطق أخرى من خلال تنظيم القوافل الطبية والأنشطة
              التوعوية.
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card
                key={index}
                className="group hover:shadow-medium transition-all duration-300 hover:-translate-y-1 bg-gradient-card border-border/50"
              >
                <CardContent className="p-6 text-center space-y-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Caravans Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              أحدث القوافل الطبية
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              تابع أحدث القوافل الطبية التي نظمتها الجمعية وأثرت في حياة المئات
              من المستفيدين
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {recentCaravans.map((caravan, index) => (
              <div key={index} className="animate-fade-in">
                <CaravanCard {...caravan} />
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button asChild size="lg" className="shadow-medium">
              <Link to="/caravans">
                عرض جميع القوافل
                <ArrowLeft className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            انضم إلينا في رحلة العطاء
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-95">
            كن جزءاً من فريق متميز يسعى لخدمة المجتمع وتقديم أفضل الخدمات الطبية
            للمحتاجين
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="shadow-medium"
            >
              <Link to="/contact">اتصل بنا</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 text-black hover:bg-primary-foreground/10"
            >
              <Link to="/about">تعرف على فريقنا</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
