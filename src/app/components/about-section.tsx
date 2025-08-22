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
                Hi there! I&apos;m Nathan &mdash; a recent Computer & Information Science graduate who loves building simple, effective websites
                that actually make life easier for small business owners. I know how overwhelming tech can feel, so my goal is always
                to keep things clear, friendly, and stress-free.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                My approach is all about clean design and straightforward functionality. Whether it&apos;s helping a local shop put their
                first site online or refreshing an existing business page, I focus on creating something that feels professional
                without unnecessary complexity.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                When I&apos;m not coding, you&apos;ll usually find me outdoors &mdash; hiking, camping, or exploring nature. That same curiosity
                and love for exploration shows up in my work: I&apos;m always learning, improving, and looking for new ways to help
                businesses connect with their customers.
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
                  Your input matters. We&apos;ll work together to create something you love.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <Clock className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-heading font-semibold text-lg mb-2">Reliable</h3>
                <p className="text-sm text-muted-foreground">
                  I deliver on time and I&apos;m always here when you need support.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
