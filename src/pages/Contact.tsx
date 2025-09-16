import { useState, useEffect } from "react";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";
import { useToast } from "../hooks/use-toast";
import { useForm, ValidationError } from "@formspree/react";

import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  Facebook,
  Instagram,
  MessageCircle,
} from "lucide-react";

const Contact = () => {
  const [fsState, fsHandleSubmit] = useForm("mkgvlnka");
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    if (fsState.succeeded) {
      toast({
        title: "تم إرسال رسالتك بنجاح",
        description: "سنتواصل معك في أقرب وقت ممكن",
      });
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    } else if (
      fsState.errors &&
      Array.isArray(fsState.errors) &&
      fsState.errors.length > 0
    ) {
      toast({
        title: "حدث خطأ",
        description: "تعذر إرسال الرسالة. حاول مرة أخرى.",
        variant: "destructive",
      });
    }
  }, [fsState.succeeded, fsState.errors, toast]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "خطأ",
        description: "يرجى ملء جميع الحقول المطلوبة",
        variant: "destructive",
      });
      return;
    }

    await fsHandleSubmit(e);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "رقم الهاتف",
      value: "+20 123 456 7890",
      description: "للاستفسارات والتواصل المباشر",
    },
    {
      icon: Mail,
      title: "البريد الإلكتروني",
      value: "info@nubaria-doctors.org",
      description: "للرسائل الرسمية والاستفسارات",
    },
    {
      icon: MapPin,
      title: "العنوان",
      value: "النوبارية، محافظة البحيرة، مصر",
      description: "مقر الرابطة الرئيسي",
    },
    {
      icon: Clock,
      title: "مواعيد العمل",
      value: "السبت - الخميس: 9:00 ص - 5:00 م",
      description: "أوقات التواصل والاستقبال",
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            اتصل بنا
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            نحن هنا للإجابة على استفساراتكم ومساعدتكم. لا تترددوا في التواصل
            معنا بأي طريقة تناسبكم
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-foreground mb-8">
              معلومات التواصل
            </h2>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-medium transition-all duration-300 hover:-translate-y-1 bg-gradient-card border-border/50"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4 space-x-reverse">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <info.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-foreground mb-1">
                          {info.title}
                        </h3>
                        <p className="text-primary font-medium mb-2">
                          {info.value}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Social Media */}
            <Card className="bg-gradient-card border-border/50 shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 space-x-reverse">
                  <MessageCircle className="h-5 w-5 text-primary" />
                  <span>تابعنا على وسائل التواصل الاجتماعي</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-4 space-x-reverse">
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() =>
                      window.open(
                        "https://www.facebook.com/noubaria.doctors",
                        "_blank"
                      )
                    }
                    className="flex-1"
                  >
                    <Facebook className="ml-2 h-5 w-5" />
                    Facebook
                  </Button>
                  <Button variant="outline" size="lg" className="flex-1">
                    <Instagram className="ml-2 h-5 w-5" />
                    Instagram
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  تابع أحدث أخبار القوافل الطبية والأنشطة التطوعية على صفحاتنا
                  الرسمية
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="bg-gradient-card border-border/50 shadow-medium">
              <CardHeader>
                <CardTitle className="text-2xl text-center">
                  أرسل لنا رسالة
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">الاسم الكامل *</Label>
                      <Input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) =>
                          handleInputChange("name", e.target.value)
                        }
                        placeholder="أدخل اسمك الكامل"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">رقم الهاتف</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          handleInputChange("phone", e.target.value)
                        }
                        placeholder="أدخل رقم هاتفك"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">البريد الإلكتروني *</Label>
                    <Input
                      id="email"
                      name="email" // مهم ل Formspree
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      placeholder="أدخل بريدك الإلكتروني"
                      required
                    />
                    <ValidationError
                      prefix="Email"
                      field="email"
                      errors={fsState.errors}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">موضوع الرسالة</Label>
                    <Input
                      id="subject"
                      type="text"
                      value={formData.subject}
                      onChange={(e) =>
                        handleInputChange("subject", e.target.value)
                      }
                      placeholder="أدخل موضوع رسالتك"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">الرسالة *</Label>
                    <Textarea
                      id="message"
                      name="message" // مهم ل Formspree
                      value={formData.message}
                      onChange={(e) =>
                        handleInputChange("message", e.target.value)
                      }
                      placeholder="اكتب رسالتك هنا..."
                      rows={6}
                      required
                    />
                    <ValidationError
                      prefix="Message"
                      field="message"
                      errors={fsState.errors}
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full shadow-medium"
                    disabled={fsState.submitting}
                  >
                    <Send className="ml-2 h-4 w-4" />
                    إرسال الرسالة
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Section */}
        <section className="bg-muted/30 rounded-lg p-8 md:p-12">
          <h2 className="text-3xl font-bold text-center text-foreground mb-8">
            موقعنا على الخريطة
          </h2>

          <div className="bg-card rounded-lg overflow-hidden shadow-soft">
            <div className="p-4 md:p-6">
              <h3 className="text-xl font-semibold text-foreground mb-4 text-center">
                النوبارية محافظة البحيرة
              </h3>
              <div className="relative aspect-video w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11505.938544552282!2d30.07805816224744!3d30.669706763351527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145f5406a57ed379%3A0x18962d66a77510de!2sMubarak%20Sports%20Club!5e0!3m2!1sen!2seg!4v1757920987545!5m2!1sen!2seg"
                  className="absolute inset-0 w-full h-full"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">
                سهولة الوصول
              </h3>
              <p className="text-sm text-muted-foreground">
                موقع مركزي في النوبارية يسهل الوصول إليه من جميع القرى المجاورة
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Clock className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">
                مواعيد مرنة
              </h3>
              <p className="text-sm text-muted-foreground">
                مواعيد عمل مرنة لاستقبال الزوار والمتطوعين الجدد
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Phone className="h-6 w-6 text-success" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">دعم مستمر</h3>
              <p className="text-sm text-muted-foreground">
                فريق دعم متاح للرد على استفساراتكم ومساعدتكم
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
