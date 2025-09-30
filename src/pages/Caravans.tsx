import { useState } from "react";
import CaravanCard from "../components/ui/caravan-card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import {
  Calendar,
  Filter,
  MapPin,
  ChevronDown,
  CalendarDays,
} from "lucide-react";
import caravansData from "../data/caravans.json";
import type { Caravan } from "../types/caravan";

const Caravans = () => {
  const [filter, setFilter] = useState<"all" | "completed" | "upcoming">("all");
  const [showAll, setShowAll] = useState(false);
  const initialDisplay = 6;

  const caravans: Caravan[] = caravansData.caravans.map((caravan) => ({
    ...caravan,
    status: caravan.status === "completed" ? "completed" : "upcoming",
  }));

  const filteredCaravans = caravans.filter((caravan) => {
    if (filter === "all") return true;
    return caravan.status === filter;
  });

  const displayedCaravans = showAll
    ? filteredCaravans
    : filteredCaravans.slice(0, initialDisplay);

  const completedCount = caravans.filter(
    (c) => c.status === "completed"
  ).length;
  const upcomingCount = caravans.filter((c) => c.status === "upcoming").length;

  // Static display counts toggle (preserve dynamic logic for future use)
  const useStaticCounts = true;
  const displayTotalCount = useStaticCounts ? 28 : caravans.length;
  const displayCompletedCount = useStaticCounts ? 28 : completedCount;
  const displayUpcomingCount = useStaticCounts ? 0 : upcomingCount;

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            القوافل الطبية
          </h1>
          <p className="mx-auto text-xl text-muted-foreground max-w-3xl leading-relaxed">
            تابع جميع القوافل الطبية التي نظمتها الرابطة والقوافل القادمة. كل
            قافلة هي قصة نجاح جديدة في خدمة المجتمع وتقديم الرعاية الصحية
            للمحتاجين.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-gradient-card border-border/50 rounded-lg p-6 text-center shadow-soft">
            <div className="text-3xl font-bold text-primary mb-2">
              {displayTotalCount}
            </div>
            <div className="text-muted-foreground">إجمالي القوافل</div>
          </div>

          <div className="bg-gradient-card border border-border/50 rounded-lg p-6 text-center shadow-soft">
            <div className="text-3xl font-bold text-success mb-2">
              {displayCompletedCount}
            </div>
            <div className="text-muted-foreground">قوافل مكتملة</div>
          </div>

          <div className="bg-gradient-card border border-border/50 rounded-lg p-6 text-center shadow-soft">
            <div className="text-3xl font-bold text-accent mb-2">
              {displayUpcomingCount}
            </div>
            <div className="text-muted-foreground">قوافل قادمة</div>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
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

        {/* Caravans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {displayedCaravans.length > 0 ? (
            displayedCaravans.map((caravan) => (
              <div key={caravan.id} className="animate-fade-in">
                <CaravanCard {...caravan} />
              </div>
            ))
          ) : (
            <div className="col-span-full flex flex-col items-center justify-center p-12 text-center bg-muted/30 rounded-lg">
              <div className="bg-primary/10 p-4 rounded-full mb-4">
                <CalendarDays className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                لا توجد قوافل {filter === "upcoming" ? "قادمة" : "مكتملة"}{" "}
                حالياً
              </h3>
              <p className="text-muted-foreground max-w-md">
                نحن نعمل على تخطيط قوافل طبية جديدة لخدمة المجتمع. تابعونا
                للحصول على آخر التحديثات حول القوافل القادمة.
              </p>
            </div>
          )}
        </div>

        {/* زر عرض المزيد */}
        {filteredCaravans.length > initialDisplay && !showAll && (
          <div className="flex justify-center mb-16">
            <Button
              onClick={() => setShowAll(true)}
              variant="outline"
              size="lg"
              className="group hover:bg-primary/5"
            >
              عرض المزيد من القوافل
              <ChevronDown className="mr-2 h-5 w-5 transition-transform group-hover:translate-y-1" />
            </Button>
          </div>
        )}

        {/* زر عرض أقل */}
        {showAll && filteredCaravans.length > initialDisplay && (
          <div className="flex justify-center mb-16">
            <Button
              onClick={() => setShowAll(false)}
              variant="outline"
              size="lg"
              className="group hover:bg-primary/5"
            >
              عرض أقل
              <ChevronDown className="mr-2 h-5 w-5 rotate-180 transition-transform group-hover:-translate-y-1" />
            </Button>
          </div>
        )}

        {/* News Section */}
        <section className="bg-muted/30 rounded-lg p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            أخبار القوافل الطبية
          </h2>

          <div className="space-y-8">
            <div className="bg-card border-border/50 rounded-lg p-6 shadow-soft">
              <div className="flex items-start space-x-4 space-x-reverse">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Calendar className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 space-x-reverse mb-2">
                    <h3 className="text-lg font-semibold text-foreground">
                      نجاح قافلة بلال الطبية
                    </h3>
                    <Badge variant="secondary">15 سبتمبر 2025</Badge>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    حققت قافلة قرية بلال نجاحاً كبيراً حيث استقبلت أكثر من 250
                    مستفيد من مختلف الأعمار. تم توفير فحوصات طبية شاملة وتوزيع
                    أدوية مجانية بقيمة تزيد عن 15,000 جنيه.
                  </p>
                  <div className="flex items-center space-x-2 space-x-reverse text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>قرية بلال، البحيرة</span>
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
                      الإعداد لقافلة السابعة حسن علام
                    </h3>
                    <Badge variant="outline">قادمة</Badge>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    يجري الإعداد حالياً لقافلة جراحية متخصصة في قرية السابعة حسن
                    علام الجديدة. ستضم القافلة نخبة من أطباء الجراحة العامة
                    وستقدم خدمات طبية متميزة للمنطقة.
                  </p>
                  <div className="flex items-center space-x-2 space-x-reverse text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>قرية السابعة حسن علام، البحيرة</span>
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
