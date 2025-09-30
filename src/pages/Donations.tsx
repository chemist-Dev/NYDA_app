import { useState } from "react";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import {
  Heart,
  Stethoscope,
  Users,
  Shield,
  Wallet,
  Copy,
  CheckCircle2,
  Smartphone,
} from "lucide-react";
import { toast } from "sonner";

const DonationsPage = () => {
  // const [donationAmount, setDonationAmount] = useState("");
  const [copiedWallet, setCopiedWallet] = useState<string | null>(null);

  const wallets = [
    {
      type: "vodafone",
      number: "01009585194",
      icon: <Smartphone className="w-6 h-6 text-red-500" />,
      title: "فودافون كاش",
      description: "محفظة فودافون كاش الرسمية للرابطة",
      qrCode: "/Vodfone Cash img.jpg",
      color: "text-red-500",
      bgColor: "bg-red-50",
    },
  ];

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedWallet(type);
      toast.success("تم نسخ الرقم بنجاح!");
      setTimeout(() => setCopiedWallet(null), 2000);
    });
  };

  const benefits = [
    {
      icon: <Stethoscope className="w-6 h-6 text-red-500" />,
      title: "توفير أدوية",
      description:
        "هنشتري أدوية أساسية للمرضى المحتاجين، زي مضادات الالتهابات والأدوية المزمنة.",
    },
    {
      icon: <Users className="w-6 h-6 text-blue-500" />,
      title: "تنظيم قوافل طبية",
      description:
        "التبرعات هتغطي تكاليف النقل والأدوات عشان نوصل خدمات مجانية للمناطق النائية.",
    },
    {
      icon: <Shield className="w-6 h-6 text-green-500" />,
      title: "شراء أجهزة لمعمل التحاليل",
      description: "هدفنا بناء معمل خاص بأجهزة زي CBC Analyzer لتحاليل سريعة.",
    },
  ];

  // const handleDonation = (method: "vodafone" | "instapay") => {
  //   if (method === "vodafone") {
  //     window.open(`tel:+201060741670`, "_blank");
  //   } else {
  //     window.open("https://www.instapay.eg/", "_blank");
  //   }
  // };

  return (
    <div
      dir="rtl"
      className="min-h-screen bg-gradient-to-br from-background to-secondary/20"
    >
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Card className="shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold mb-4 text-right flex items-center justify-center gap-3">
              <Heart className="w-8 h-8 text-red-500" />
              دعم رابطة شباب أطباء النوبارية
            </CardTitle>
            <p className="text-lg mb-6 text-right text-muted-foreground">
              تبرعاتكم هتساعدنا نطور خدماتنا الطبية في النوبارية، وهتفيد الجميع
              كالتالي:
            </p>
          </CardHeader>

          <CardContent className="space-y-8">
            {/* فوائد التبرعات */}
            <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-3">
              {benefits.map((benefit, index) => (
                <Card
                  key={index}
                  className="border border-border/50 hover:shadow-md transition-shadow"
                >
                  <CardContent className="p-6 text-right">
                    <div className="flex items-center justify-end gap-3 mb-4">
                      <h3 className="text-xl font-semibold">{benefit.title}</h3>
                      {benefit.icon}
                    </div>
                    <p className="text-muted-foreground">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* طرق التبرع */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-right flex items-center justify-end gap-2">
                <span>طرق التبرع</span>
                <Wallet className="w-6 h-6" />
              </h3>

              <div className="grid gap-6 md:grid-cols-2">
                {wallets.map((wallet) => (
                  <Card
                    key={wallet.type}
                    className={`${wallet.bgColor} border-2 border-${wallet.color}`}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() =>
                            copyToClipboard(wallet.number, wallet.type)
                          }
                          className="hover:bg-white/50"
                        >
                          {copiedWallet === wallet.type ? (
                            <CheckCircle2 className="w-5 h-5 text-green-500" />
                          ) : (
                            <Copy className="w-5 h-5" />
                          )}
                        </Button>
                        <div className="flex items-center gap-2">
                          <div>
                            <h4 className="font-bold text-lg text-right">
                              {wallet.title}
                            </h4>
                            <p className="text-sm text-muted-foreground text-right">
                              {wallet.description}
                            </p>
                          </div>
                          {wallet.icon}
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="bg-white p-4 rounded-lg">
                          <p
                            className="text-xl font-mono text-center"
                            dir="ltr"
                          >
                            {wallet.number}
                          </p>
                        </div>

                        <div className="flex justify-center">
                          <img
                            src={wallet.qrCode}
                            alt={`QR Code ${wallet.title}`}
                            className="w-32 h-32"
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* الشفافية */}
            <Card className="bg-secondary/30">
              <CardContent className="p-6">
                <p className="text-center text-lg">
                  كل تبرع هيستخدم بشفافية:{" "}
                  <span className="font-semibold text-red-600">
                    30% للأدوية
                  </span>
                  ،
                  <span className="font-semibold text-blue-600">
                    {" "}
                    40% للقوافل
                  </span>
                  ،
                  <span className="font-semibold text-green-600">
                    {" "}
                    30% للأجهزة
                  </span>
                  . هنقدم تقارير دورية هنا.
                </p>
              </CardContent>
            </Card>

            {/* نموذج التبرع */}
            {/* <Card className="bg-gradient-to-l from-primary/5 to-secondary/5">
              <CardHeader>
                <CardTitle className="text-2xl text-center">
                  تبرع الآن!
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-right">
                  <label className="block text-sm font-medium mb-2">
                    اختر مبلغ التبرع (جنيه)
                  </label>
                  <div className="flex gap-2 justify-center mb-4 flex-wrap">
                    {["50", "100", "200", "500"].map((amount) => (
                      <Button
                        key={amount}
                        variant={
                          donationAmount === amount ? "default" : "outline"
                        }
                        onClick={() => setDonationAmount(amount)}
                        className="min-w-[80px]"
                      >
                        {amount}
                      </Button>
                    ))}
                  </div>
                  <Input
                    type="number"
                    placeholder="أدخل مبلغ آخر"
                    value={donationAmount}
                    onChange={(e) => setDonationAmount(e.target.value)}
                    className="text-right"
                    dir="rtl"
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    onClick={() => handleDonation("vodafone")}
                    className="bg-red-500 hover:bg-red-600 text-white py-3 px-6 text-lg"
                    size="lg"
                  >
                    تبرع عبر Vodafone Cash
                  </Button>
                  <Button
                    onClick={() => handleDonation("instapay")}
                    className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 text-lg"
                    size="lg"
                  >
                    تبرع عبر InstaPay
                  </Button>
                </div>

                </CardContent>
                </Card> */}
            <p className="text-center text-sm text-muted-foreground">
              جزاكم الله خيراً على دعمكم لخدمة المجتمع
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DonationsPage;
