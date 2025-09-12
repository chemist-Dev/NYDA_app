import { Calendar, MapPin, Users } from "lucide-react";
import { Card, CardContent, CardHeader } from "./card";
import { Badge } from "../ui/badge";

interface CaravanCardProps {
  title: string;
  date: string;
  location: string;
  beneficiaries: number;
  image: string;
  status: "completed" | "upcoming";
  description: string;
}

const CaravanCard = ({
  title,
  date,
  location,
  beneficiaries,
  image,
  status,
  description,
}: CaravanCardProps) => {
  return (
    <Card className="group hover:shadow-medium transition-all duration-300 hover:-translate-y-1 bg-gradient-card border-border/50">
      <CardHeader className="p-0">
        <div className="relative overflow-hidden rounded-t-lg">
          <img
            src={image}
            alt={title}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-4 right-4">
            <Badge
              variant={status === "completed" ? "default" : "secondary"}
              className={status === "completed" ? "bg-success" : "bg-accent"}
            >
              {status === "completed" ? "مكتملة" : "قادمة"}
            </Badge>
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-6 space-y-4">
        <h3 className="text-xl font-semibold text-card-foreground group-hover:text-primary transition-colors">
          {title}
        </h3>

        <p className="text-muted-foreground text-sm leading-relaxed">
          {description}
        </p>

        <div className="space-y-2">
          <div className="flex items-center space-x-2 space-x-reverse text-sm text-muted-foreground">
            <Calendar className="h-4 w-4 text-primary" />
            <span>{date}</span>
          </div>

          <div className="flex items-center space-x-2 space-x-reverse text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 text-primary" />
            <span>{location}</span>
          </div>

          <div className="flex items-center space-x-2 space-x-reverse text-sm text-muted-foreground">
            <Users className="h-4 w-4 text-primary" />
            <span>{beneficiaries} مستفيد</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CaravanCard;
