import { useState } from "react";
import type { FormEvent } from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader } from "../components/ui/card";
import { Textarea } from "../components/ui/textarea";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Star, Quote, Heart, Users, Send } from "lucide-react";
import { useToast } from "../hooks/use-toast";

const Testimonials = () => {
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    type: "member",
    message: "",
    rating: 5,
  });

  const testimonials = [
    {
      id: 1,
      name: "أم محمد - مستفيدة",
      type: "beneficiary",
      message:
        "جزاكم الله خيراً على هذا العمل الرائع. لقد استفدت أنا وأطفالي كثيراً من القافلة الطبية في قريتنا. الأطباء كانوا متفهمين ومهتمين بحالتنا الصحية. شكراً لكم من كل قلبي.",
      rating: 5,
      date: "20 ديسمبر 2024",
    },
    {
      id: 2,
      name: "د. أحمد علي - عضو متطوع",
      type: "member",
      message:
        "كوني جزءاً من هذه الجمعية المميزة هو شرف كبير لي. العمل مع الفريق ممتع ومثمر، ونحن نشعر بالفخر عندما نرى تأثيرنا الإيجابي على المجتمع. أنصح كل طبيب شاب بالانضمام إلينا.",
      rating: 5,
      date: "18 ديسمبر 2024",
    },
    {
      id: 3,
      name: "الحاج عبد الرحمن - مستفيد",
      type: "beneficiary",
      message:
        "أشكركم على الاهتمام بالمرضى وخاصة كبار السن مثلي. لقد تلقيت علاجاً ممتازاً ومتابعة طبية جيدة. ربنا يبارك فيكم ويجعل هذا العمل في ميزان حسناتكم.",
      rating: 5,
      date: "15 ديسمبر 2024",
    },
    {
      id: 4,
      name: "د. فاطمة حسن - عضو متطوع",
      type: "member",
      message:
        "العمل التطوعي مع الجمعية أعطاني الكثير من الخبرة والثقة في النفس. نحن نعمل كفريق واحد متماسك، والتنظيم ممتاز. أفخر بكوني جزءاً من هذا العمل الإنساني النبيل.",
      rating: 5,
      date: "12 ديسمبر 2024",
    },
    {
      id: 5,
      name: "أم سارة - مستفيدة",
      type: "beneficiary",
      message:
        "ابنتي كانت تحتاج لعلاج أسنان ولم أكن أستطيع تحمل التكلفة. قافلة الأسنان كانت نعمة حقيقية بالنسبة لنا. الأطباء عالجوا ابنتي بكل صبر ومحبة. جعل الله هذا العمل في ميزان حسناتكم.",
      rating: 5,
      date: "10 ديسمبر 2024",
    },
    {
      id: 6,
      name: "د. محمود إبراهيم - عضو متطوع",
      type: "member",
      message:
        "انضممت للجمعية منذ سنتين وأعتبرها من أفضل القرارات في حياتي المهنية. نحن نتعلم من بعضنا البعض ونساعد المجتمع في نفس الوقت. جو الفريق رائع والهدف نبيل.",
      rating: 5,
      date: "8 ديسمبر 2024",
    },
  ];

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.message) {
      toast({
        title: "خطأ",
        description: "يرجى ملء جميع الحقول المطلوبة",
        variant: "destructive",
      });
      return;
    }
    toast({
      title: "تم إرسال تقييمك بنجاح",
      description: "شكراً لك على مشاركة تجربتك معنا",
    });
    setFormData({
      name: "",
      type: "member",
      message: "",
      rating: 5,
    });
  };

  const handleInputChange = (field: string, value: string | number) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`h-4 w-4 ${
              star <= rating ? "text-yellow-400 fill-current" : "text-gray-300"
            }`}
          />
        ))}
      </div>
    );
  };

  const memberTestimonials = testimonials.filter((t) => t.type === "member");
  const beneficiaryTestimonials = testimonials.filter(
    (t) => t.type === "beneficiary"
  );

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header  */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            التقييمات والشهادات
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            استمع إلى قصص النجاح وتجارب المستفيدين من خدماتنا وأعضاء فريقنا
            الطبي المتطوع
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <Card className="bg-gradient-card border-border/50 shadow-soft text-center">
            <CardContent className="p-6">
              <Heart className="h-8 w-8 text-primary mx-auto mb-4" />
              <div className="text-3xl font-bold text-primary mb-2 ">98%</div>
              <div className="text-muted-foreground">معدل الرضا</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-card border-border/50 shadow-soft text-center">
            <CardContent className="p-6">
              <Users className="h-8 w-8 text-accent mx-auto mb-4" />
              <div className="text-3xl font-bold text-accent mb-2">
                {testimonials.length}
              </div>
              <div className="text-muted-foreground">تقييم إيجابي</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-card border-border/50 shadow-soft text-center">
            <CardContent className="p-6">
              <Star className="h-8 w-8 text-yellow-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-yellow-600 mb-2">4.9</div>
              <div className="text-muted-foreground">متوسط التقييم</div>
            </CardContent>
          </Card>
        </div>

        {/* Member Testimonials */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12 ">
            شهادات أعضاء الفريق الطبى
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {memberTestimonials.map((testimonial) => (
              <Card
                key={testimonial.id}
                className="groub hover:shadow-medium transition-all duration-300 hover:-translate-y-1 bg-gradient-card border-border/50"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3 space-x-reverse">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <Users className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">
                          {testimonial.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.date}
                        </p>
                      </div>
                    </div>
                    {renderStars(testimonial.rating)}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="relative">
                    <Quote className="h-8 w-8 text-primary/20 absolute -top-2 -right-2" />
                    <p className="text-muted-foreground leading-relaxed relative z-10">
                      {testimonial.message}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Beneficiary Testimonials */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            شهادات المستفيدين من خدماتنا
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {beneficiaryTestimonials.map((testimonial) => (
              <Card
                key={testimonial.id}
                className="group hover:shadow-medium transition-all duration-300 hover:-translate-y-1 bg-gradient-card border-border/50"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3 space-x-reverse">
                      <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                        <Heart className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">
                          {testimonial.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.date}
                        </p>
                      </div>
                    </div>
                    {renderStars(testimonial.rating)}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="relative">
                    <Quote className="h-8 w-8 text-accent/20 absolute -top-2 -right-2" />
                    <p className="text-muted-foreground leading-relaxed relative z-10">
                      {testimonial.message}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Feedback Form */}
        <section className="bg-muted/30 rounded-lg p-8 md:p-12">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12 ">
            شاركنا تجربتك
          </h2>
          <Card className="max-w-2xl mx-auto bg-gradient-card border-border/50">
            <CardHeader>
              <h3 className="text-xl font-semibold text-foreground text-center">
                إضافة تقييم جديد
              </h3>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">* الاسم</Label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    placeholder="ادخل اسمك"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="type">نوع التقييم</Label>
                  <select
                    id="type"
                    value={formData.type}
                    onChange={(e) => handleInputChange("type", e.target.value)}
                    className="w-full px-3 py-2 border border-input rounded-md bg-background"
                  >
                    <option value="member">عضو في الفريق الطبي</option>
                    <option value="beneficiary">مستفيد من الخدمات</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="rating">التقييم</Label>
                  <div className="flex space-x-1 space-x-reverse">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => handleInputChange("rating", star)}
                        className="focus:outline-none"
                      >
                        <Star
                          className={`h-6 w-6 transition-colors ${
                            star <= formData.rating
                              ? "text-yellow-400 fill-current"
                              : "text-gray-300 hover:text-yellow-300"
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">رسالتك *</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) =>
                      handleInputChange("message", e.target.value)
                    }
                    placeholder="شاركنا تجربتك وانطباعك عن خدماتنا..."
                    rows={5}
                    required
                  />
                </div>

                <Button type="submit" className="w-full shadow-medium">
                  <Send className="ml-2 h-4 w-4" />
                  إرسال التقييم
                </Button>
              </form>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Testimonials;
