import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-secondary py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-dark mb-8 text-center">About Car Credit Pros</h1>
        
        <Card className="p-8 mb-12 bg-white shadow-lg">
          <p className="text-lg text-dark mb-6">
            At Car Credit Pros, we specialize in securing car loans for individuals with all types of credit histories—good, bad, or no credit. Our mission is to make car ownership accessible to everyone by providing tailored financing solutions. We pride ourselves on our expertise and commitment to helping clients navigate the car financing process with ease.
          </p>
          
          <h2 className="text-2xl font-bold text-primary mb-6">Why Choose Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-dark">Expertise</h3>
              <p className="text-dark/80">
                With years of experience in the automotive financing industry, our team has the knowledge and skills to secure the best deals for our clients.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-dark">Inclusive Approach</h3>
              <p className="text-dark/80">
                We believe that everyone deserves the opportunity to own a car, regardless of their credit history.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-dark">Customer-Centric Service</h3>
              <p className="text-dark/80">
                Our clients are our top priority. We work diligently to ensure a smooth and satisfying experience from start to finish.
              </p>
            </div>
          </div>
        </Card>

        <Card className="p-8 bg-white shadow-lg">
          <h2 className="text-2xl font-bold text-primary mb-6">Our Process</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-dark">Initial Consultation</h3>
              <p className="text-dark/80">
                Meet with our experts to discuss your financial situation and vehicle preferences.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-dark">Credit Assessment</h3>
              <p className="text-dark/80">
                We'll review your credit history and identify the best financing options available.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-dark">Vehicle Selection</h3>
              <p className="text-dark/80">
                Browse our selection of quality vehicles that match your budget and needs.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default AboutUs;