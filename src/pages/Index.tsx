import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen font-jakarta">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-darker/80 to-darker/40" />
          <img
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070&auto=format&fit=crop"
            alt="White luxury car"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-secondary mb-6 animate-fade-in">
              Drive Your Dream Car
              <span className="text-primary block mt-2">
                No Matter Your Credit
              </span>
            </h1>
            <p className="text-xl text-secondary/90 mb-8 animate-slide-up">
              We specialize in helping customers with all types of credit histories get behind the wheel of their perfect vehicle.
            </p>
            <Button
              asChild
              className="bg-primary text-secondary hover:bg-primary/90 text-lg px-8 py-6 animate-fade-in"
            >
              <Link to="/schedule">Schedule Your Visit</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Credit Types Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-dark text-center mb-12">
            We Work With All Credit Types
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Good Credit",
                description: "Access premium rates and exclusive financing options",
              },
              {
                title: "Bad Credit",
                description: "Get approved with flexible terms and rebuilding programs",
              },
              {
                title: "No Credit",
                description: "Start building your credit history with our first-time buyer programs",
              },
            ].map((item) => (
              <Card key={item.title} className="p-8 bg-white shadow-sm hover:shadow-md transition-shadow animate-fade-in">
                <h3 className="text-2xl font-bold text-primary mb-4">{item.title}</h3>
                <p className="text-dark/80">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-dark mb-8 text-center">About Car Credit Pros</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-lg text-dark/80 leading-relaxed">
                  At Car Credit Pros, we believe everyone deserves the opportunity to drive their dream car. Our mission is to make car ownership accessible through tailored financing solutions that work for your unique situation.
                </p>
                <p className="text-lg text-dark/80 leading-relaxed">
                  With years of experience and a commitment to exceptional service, we've helped thousands of clients achieve their automotive dreams, regardless of their credit history.
                </p>
                <Button
                  asChild
                  className="bg-primary text-secondary hover:bg-primary/90"
                >
                  <Link to="/about" className="inline-flex items-center">
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=2073&auto=format&fit=crop"
                  alt="Car dealership"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-darker">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-primary mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-secondary/90 mb-8 max-w-2xl mx-auto">
            Schedule a consultation with our financing experts today and take the first step towards driving your dream car.
          </p>
          <Button
            asChild
            className="bg-primary text-secondary hover:bg-primary/90 text-lg px-8 py-6"
          >
            <Link to="/schedule">Book Your Appointment Now</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;