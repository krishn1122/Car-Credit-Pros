import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Shield, Users, Target, Award } from "lucide-react";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-secondary pt-32 font-jakarta">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-5xl font-bold text-dark mb-6">About Car Credit Pros</h1>
          <p className="text-xl text-dark/80">
            Transforming the way people finance their dream cars through innovative solutions and exceptional service.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-primary">Our Mission</h2>
            <p className="text-lg text-dark/80 leading-relaxed">
              At Car Credit Pros, we believe that everyone deserves the opportunity to own their dream car, regardless of their credit history. Our mission is to make car ownership accessible through personalized financing solutions that work for each individual's unique situation.
            </p>
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-primary">Our Vision</h2>
            <p className="text-lg text-dark/80 leading-relaxed">
              We envision a future where credit barriers don't stand between people and their automotive dreams. Through innovative financing solutions and dedicated customer service, we're making this vision a reality, one satisfied customer at a time.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {[
            {
              icon: <Shield className="w-12 h-12 text-primary" />,
              title: "Trust & Integrity",
              description: "Building lasting relationships through honest and transparent service",
            },
            {
              icon: <Users className="w-12 h-12 text-primary" />,
              title: "Customer First",
              description: "Prioritizing your needs and delivering personalized solutions",
            },
            {
              icon: <Target className="w-12 h-12 text-primary" />,
              title: "Expert Guidance",
              description: "Professional advice from experienced finance specialists",
            },
            {
              icon: <Award className="w-12 h-12 text-primary" />,
              title: "Excellence",
              description: "Committed to delivering outstanding results for every client",
            },
          ].map((item, index) => (
            <Card key={index} className="p-6 text-center bg-white shadow-sm">
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-dark mb-2">{item.title}</h3>
              <p className="text-dark/80">{item.description}</p>
            </Card>
          ))}
        </div>

        <div className="bg-white rounded-lg p-12 text-center mb-20">
          <h2 className="text-3xl font-bold text-primary mb-6">Our Commitment</h2>
          <p className="text-lg text-dark/80 leading-relaxed max-w-3xl mx-auto">
            We're committed to providing exceptional service and support throughout your car financing journey. Our team of experts works tirelessly to secure the best possible terms for your loan, ensuring you drive away satisfied in your dream vehicle.
          </p>
        </div>

        <div className="text-center pb-20">
          <h2 className="text-3xl font-bold text-primary mb-6">Ready to Start Your Journey?</h2>
          <Button
            asChild
            className="bg-primary text-darker hover:bg-primary/90 text-lg px-8 py-6"
          >
            <Link to="/schedule">Schedule a Consultation</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;