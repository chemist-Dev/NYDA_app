import { Calendar, Target, Eye, Users, Award, Heart } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Badge } from "../components/ui/badge";

const About = () => {
  const teamMembers = [
    {
      name: "د. محمود صبرى",
      role: "رئيس الرابطة",
      specialty: "طب الباطنة ",
      faculty: "كلية الطب جامعة اسوان",
    },
    {
      name: "د. أحمد صبرى",
      role: "نائب الرئيس",
      specialty: " كيميائى معمل ",
      faculty: "كلية العلوم جامعة دمنهور",
    },
    {
      name: "د.  صبرى خالد",
      role: " مساعد نائب الرئيس",
      faculty: " كلية الطب البيطرى جامعة السادات",
      specialty: " طب بيطرى",
    },
    {
      name: "د. مصطفى ابو العزم",
      role: "مسؤول الموارد البشرية",
      specialty: "طب الصيدلة",
      faculty: "كلية الصيدلة جامعة الجلالة",
    },
    {
      name: "د.  محمد علام ",
      role: "PH مسؤول",
      specialty: "طب الاسنان",
      faculty: "كلية الاسنان جامعة الريادة",
    },
    {
      name: "د.  مصطفى عبده ",
      role: " مسؤول الصيدلية والادوية",
      specialty: "طب الصيدلة",
      faculty: "كلية الصيدلة جامعة دمنهور",
    },
    {
      name: "د.  ندى نادى",
      role: "مسؤولة الميديا",
      specialty: "طب البيطرى",
      faculty: "كلية الطب البيطرى جامعة دمنهور  ",
    },
    {
      name: "د.   اروى عادل",
      role: "مسؤولة المعمل",
      specialty: "كيميائية المعمل",
      faculty: "كلية العلوم  جامعة الازهر  ",
    },
    {
      name: "د.  أحمد انور",
      role: "مسؤول العلاقات العامة",
      specialty: "الطب النسا والتوليد",
      faculty: "كلية الطب جامعة حلوان",
    },
  ];

  const achievements = [
    {
      number: "28+",
      title: "قافلة طبية",
      description: "منذ تأسيس الرابطة",
    },
    {
      number: "5500+",
      title: "مستفيد",
      description: "من خدماتنا الطبية",
    },
    {
      number: "35+",
      title: "طبيب متطوع",
      description: "في فريق العمل",
    },
    {
      number: "15+",
      title: "قرية مخدومة",
      description: "في محافظة البحيرة",
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            عن رابطة شباب أطباء النوبارية
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            رحلتنا في خدمة المجتمع بدأت بحلم بسيط: تقديم الرعاية الصحية لكل من
            يحتاجها، واليوم نحن فخورون بما حققناه من إنجازات في خدمة مجتمعنا.
          </p>
        </div>

        {/* Foundation Info */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          <Card className="bg-gradient-card border-border/50 shadow-soft">
            <CardHeader className="text-center">
              <Calendar className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle className="text-2xl">تاريخ التأسيس</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-lg font-semibold text-primary mb-2">
                يناير 2019
              </p>
              <p className="text-muted-foreground">
                تأسست الجمعية برؤية واضحة لتقديم الخدمات الطبية المجانية
                للمجتمعات المحتاجة
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-border/50 shadow-soft">
            <CardHeader className="text-center">
              <Eye className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle className="text-2xl">رؤيتنا</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground">
                أن نكون الجمعية الرائدة في تقديم الرعاية الصحية المجانية وبناء
                مجتمع صحي متكامل
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-border/50 shadow-soft">
            <CardHeader className="text-center">
              <Target className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle className="text-2xl">رسالتنا</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground">
                تقديم الرعاية الصحية المتميزة للجميع دون تمييز من خلال القوافل
                الطبية والبرامج التطوعية
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Achievements */}
        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            إنجازاتنا بالأرقام
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <Card
                key={index}
                className="bg-gradient-card border-border/50 shadow-soft hover:shadow-medium transition-shadow"
              >
                <CardContent className="p-6 text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                    {achievement.number}
                  </div>
                  <div className="text-lg font-semibold text-foreground mb-1">
                    {achievement.title}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {achievement.description}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Team Members */}
        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            فريق العمل
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="group hover:shadow-medium transition-all duration-300 hover:-translate-y-1 bg-gradient-card border-border/50"
              >
                <CardContent className="p-6">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:bg-primary/20 transition-colors">
                    <Users className="h-10 w-10 text-primary" />
                  </div>
                  <div className="text-center space-y-2">
                    <h3 className="text-xl font-semibold text-foreground">
                      {member.name}
                    </h3>
                    <Badge variant="secondary" className="mb-2">
                      {member.role}
                    </Badge>
                    <p className="text-muted-foreground">{member.specialty}</p>
                    <p className="text-sm text-muted-foreground">
                      {member.faculty}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Goals */}
        <section className="bg-muted/30 rounded-lg p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            أهدافنا المستقبلية
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4 space-x-reverse">
                <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <Heart className="h-4 w-4 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    توسيع نطاق الخدمة
                  </h3>
                  <p className="text-muted-foreground">
                    الوصول إلى مناطق أكثر في محافظات مختلفة وزيادة عدد
                    المستفيدين من خدماتنا الطبية.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 space-x-reverse">
                <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <Award className="h-4 w-4 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    تطوير البرامج التدريبية
                  </h3>
                  <p className="text-muted-foreground">
                    إقامة دورات تدريبية للأطباء الشباب وتطوير مهاراتهم في العمل
                    التطوعي والخدمة المجتمعية.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4 space-x-reverse">
                <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <Target className="h-4 w-4 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    إنشاء مركز طبي دائم
                  </h3>
                  <p className="text-muted-foreground">
                    العمل على إنشاء مركز طبي دائم لتقديم الخدمات الطبية على مدار
                    السنة.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 space-x-reverse">
                <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <Users className="h-4 w-4 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    بناء شراكات استراتيجية
                  </h3>
                  <p className="text-muted-foreground">
                    التعاون مع مؤسسات طبية وخيرية أخرى لتحقيق أكبر قدر من
                    الاستفادة للمجتمع.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
export default About;
