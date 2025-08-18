import { Card, CardContent } from "./ui/card";
import { Heart, Users, Clock } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-foreground mb-4">A Little About Me</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          <div className="lg:col-span-2">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Hi there! I'm Alex, and I love helping small businesses create their perfect online home. After working
                with dozens of local businesses, I've learned that the best websites are simple, beautiful, and actually
                help you connect with your customers.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I believe every business deserves a website they're proud of – one that reflects their personality and
                makes it easy for customers to find and choose them. That's why I focus on creating clean, user-friendly
                websites without all the unnecessary complexity.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                When I'm not building websites, you'll find me exploring local coffee shops, hiking with my dog, or
                learning about the latest web technologies to better serve my clients.
              </p>
            </div>

            <div className="mt-8 bg-card p-4 rounded-lg border border-border">
              <p className="text-sm text-muted-foreground">
                📝 TODO: Add personal photo and update bio with real information
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <Card>
              <CardContent className="p-6 text-center">
                <Heart className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-heading font-semibold text-lg mb-2">Passionate</h3>
                <p className="text-sm text-muted-foreground">
                  I genuinely care about your success and put my heart into every project.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <Users className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-heading font-semibold text-lg mb-2">Collaborative</h3>
                <p className="text-sm text-muted-foreground">
                  Your input matters. We'll work together to create something you love.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <Clock className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-heading font-semibold text-lg mb-2">Reliable</h3>
                <p className="text-sm text-muted-foreground">
                  I deliver on time and I'm always here when you need support.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
