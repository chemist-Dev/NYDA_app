import { useState } from "react";
import CaravanCard from "../components/ui/caravan-card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Calendar, Filter, MapPin } from "lucide-react";
import caravan from "../assets/caravan.jpg";
import caravan1 from "../assets/caravan.jpg";
import caravan2 from "../assets/caravan.jpg";

const Caravans = () => {
  const [filter, setFilter] = useState<"all" | "completed" | "upcoming">("all");

  const caravans: {
    id: number;
    title: string;
    date: string;
    location: string;
    beneficiaries: number;
    image: string;
    status: "completed" | "upcoming";
    description: string;
  }[] = [
    {
      id: 1,
      title: "قافلة طبية شاملة - قرية الحمام",
      date: "15 ديسمبر 2024",
      location: "قرية الحمام، البحيرة",
      beneficiaries: 250,
      image: caravan,
      status: "completed" as const,
      description:
        "قافلة طبية شاملة تضمنت فحوصات طبية عامة، قياس ضغط الدم والسكر، توزيع أدوية مجانية للأطفال وكبار السن، بالإضافة إلى جلسات توعية صحية حول الوقاية من الأمراض الشائعة.",
    },
    {
      id: 2,
      title: "قافلة أسنان متخصصة - مركز الدلنجات",
      date: "22 ديسمبر 2024",
      location: "مركز الدلنجات، البحيرة",
      beneficiaries: 180,
      image: caravan2,
      status: "completed" as const,
      description:
        "قافلة متخصصة في طب الأسنان قدمت فحوصات شاملة للفم والأسنان، علاج تسوس الأسنان، تنظيف الأسنان، وتوعية صحية شاملة حول نظافة الفم والأسنان للأطفال والكبار.",
    },
    {
      id: 3,
      title: "قافلة نساء وتوليد - قرية كوم حمادة",
      date: "8 ديسمبر 2024",
      location: "قرية كوم حمادة، البحيرة",
      beneficiaries: 120,
      image: caravan1,
      status: "completed" as const,
      description:
        "قافلة متخصصة لصحة المرأة تضمنت فحوصات نسائية، متابعة الحمل، توعية حول الصحة الإنجابية، وتوزيع الفيتامينات اللازمة للحوامل والمرضعات في المنطقة.",
    },
    {
      id: 5,
      title: "قافلة أطفال - مركز شبراخيت",
      date: "1 ديسمبر 2024",
      location: "مركز شبراخيت، البحيرة",
      beneficiaries: 200,
      image: caravan2,
      status: "completed" as const,
      description:
        "قافلة مخصصة للأطفال شملت فحوصات طبية شاملة، تطعيمات، قياس الطول والوزن، علاج سوء التغذية، وجلسات توعية للأمهات حول التغذية السليمة والعناية بالأطفال.",
    },
    {
      id: 6,
      title: "قافلة جراحة عامة - قرية النوبارية الجديدة",
      date: "10 يناير 2025",
      location: "قرية النوبارية الجديدة، البحيرة",
      beneficiaries: 0,
      image: caravan1,
      status: "upcoming" as const,
      description:
        "قافلة متخصصة في الجراحة العامة ستقدم استشارات جراحية، فحوصات ما قبل العمليات، وعمليات جراحية بسيطة. كما ستتضمن توعية حول أهمية الفحص المبكر للأورام.",
    },
    {
      id: 7,
      title: "قافلة عيون - مركز وادي النطرون",
      date: "18 يناير 2025",
      location: "مركز وادي النطرون، البحيرة",
      beneficiaries: 0,
      image: caravan2,
      status: "upcoming" as const,
      description:
        "قافلة طبية متخصصة في أمراض العيون ستقدم فحوصات شاملة للعين، قياس النظر، علاج أمراض الشبكية، وتوزيع نظارات طبية مجانية للمحتاجين في المنطقة.",
    },
  ];
  const filteredCaravans = caravans.filter((caravan) => {
    if (filter === "all") return true;
    return caravan.status === filter;
  });

  const completedCount = caravans.filter(
    (c) => c.status === "completed"
  ).length;
  const upcomingCount = caravans.filter((c) => c.status === "upcoming").length;

  return (
    <div className=" min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            القوافل الطبية
          </h1>
          <p className=" mx-auto text-xl text-muted-foreground max-w-3xl leading-relaxed">
            تابع جميع القوافل الطبية التي نظمتها الرابطة والقوافل القادمة. كل
            قافلة هي قصة نجاح جديدة في خدمة المجتمع وتقديم الرعاية الصحية
            للمحتاجين.
          </p>
        </div>

        {/* stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-gradient-card border-border/50 rounded-lg p-6 text-center shadow-soft">
            <div className="text-3xl font-bold text-primary mb-2">
              {caravans.length}
              <div className="text-muted-foreground">إجمالي القواقل</div>
            </div>
          </div>

          <div className="bg-gradient-card border border-border/50 rounded-lg p-6 text-center shadow-soft">
            <div className="text-3xl font-bold text-success mb-2">
              {completedCount}
            </div>
            <div className="text-muted-foreground">قوافل مكتملة</div>
          </div>

          <div className="bg-gradient-card border border-border/50 rounded-lg p-6 text-center shadow-soft">
            <div className="text-3xl font-bold text-accent mb-2">
              {upcomingCount}
            </div>
            <div className="text-muted-foreground">قوافل قادمة</div>
          </div>
        </div>

        {/* Filter Buttons  */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 ">
          <Button
            variant={filter === "all" ? "default" : "outline"}
            onClick={() => setFilter("all")}
            className="min-w-[120px]"
          >
            <Filter className="ml-2 h-4 w-4" />
            جميع القوافل
          </Button>
          <Button
            variant={filter === "completed" ? "default" : "outline"}
            onClick={() => setFilter("completed")}
            className="min-w-[120px]"
          >
            القوافل المكتملة
          </Button>
          <Button
            variant={filter === "upcoming" ? "default" : "outline"}
            onClick={() => setFilter("upcoming")}
            className="min-w-[120px]"
          >
            القوافل القادمة
          </Button>
        </div>

        {/* Carvans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 ">
          {filteredCaravans.map((caravan) => (
            <div key={caravan.id} className="animate-fade-in">
              <CaravanCard {...caravan} />
            </div>
          ))}
        </div>

        {/* News Section */}
        <section className="bg-muted/30 rounde-lg p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            أخبار القوافل الطبية
          </h2>

          <div className="space-y-8">
            <div className="bg-card border-border/50 rounded-lg p-6 shadow-soft">
              <div className="flex items-start space-x-4 space-x-reverse ">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Calendar className="h-6 w-6 text-primary" />
                  </div>
                </div>

                <div className="flex-1">
                  <div className="flex items-center space-x-2 space-x-reverse mb-2">
                    <h3 className="text-lg font-semibold text-foreground">
                      نجاح قافلة الحمام الطبية
                    </h3>
                    <Badge variant="secondary">15 ديسمبر 2024</Badge>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    حققت قافلة قرية الحمام نجاحاً كبيراً حيث استقبلت أكثر من 250
                    مستفيد من مختلف الأعمار. تم توفير فحوصات طبية شاملة وتوزيع
                    أدوية مجانية بقيمة تزيد عن 15,000 جنيه.
                  </p>
                  <div className="flex items-center space-x-2 space-x-reverse text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>قرية الحمام، البحيرة</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border/50 rounded-lg p-6 shadow-soft">
              <div className="flex items-start space-x-4 space-x-reverse">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Calendar className="h-6 w-6 text-accent" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 space-x-reverse mb-2">
                    <h3 className="text-lg font-semibold text-foreground">
                      الإعداد لقافلة النوبارية الجديدة
                    </h3>
                    <Badge variant="outline">قادمة</Badge>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    يجري الإعداد حالياً لقافلة جراحية متخصصة في قرية النوبارية
                    الجديدة. ستضم القافلة نخبة من أطباء الجراحة العامة وستقدم
                    خدمات طبية متميزة للمنطقة.
                  </p>
                  <div className="flex items-center space-x-2 space-x-reverse text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>قرية النوبارية الجديدة، البحيرة</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Caravans;
