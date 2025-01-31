import { Card } from "@/components/ui/card";

const Services = () => {
  return (
    <div className="min-h-screen bg-secondary py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-dark mb-8 text-center">Our Services</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-8 bg-white shadow-lg">
            <h2 className="text-2xl font-bold text-primary mb-6">Personalized Car Financing</h2>
            <p className="text-dark/80">
              We offer customized financing options to suit your unique financial situation, ensuring you get the best possible terms. Our team works with multiple lenders to find the perfect solution for you.
            </p>
            <ul className="mt-4 space-y-2 text-dark/80">
              <li>• Competitive interest rates</li>
              <li>• Flexible payment terms</li>
              <li>• Quick approval process</li>
              <li>• Multiple lender options</li>
            </ul>
          </Card>

          <Card className="p-8 bg-white shadow-lg">
            <h2 className="text-2xl font-bold text-primary mb-6">Credit Consultation</h2>
            <p className="text-dark/80">
              Our experts provide guidance on improving your credit score and understanding your credit report, empowering you to make informed financial decisions.
            </p>
            <ul className="mt-4 space-y-2 text-dark/80">
              <li>• Credit score analysis</li>
              <li>• Credit improvement strategies</li>
              <li>• Financial planning advice</li>
              <li>• Regular credit monitoring</li>
            </ul>
          </Card>

          <Card className="p-8 bg-white shadow-lg">
            <h2 className="text-2xl font-bold text-primary mb-6">Vehicle Selection Assistance</h2>
            <p className="text-dark/80">
              We assist you in finding a vehicle that fits your needs and budget, making the car-buying process seamless and stress-free.
            </p>
            <ul className="mt-4 space-y-2 text-dark/80">
              <li>• Personalized vehicle recommendations</li>
              <li>• Budget-friendly options</li>
              <li>• Quality inspections</li>
              <li>• Test drive arrangements</li>
            </ul>
          </Card>

          <Card className="p-8 bg-white shadow-lg">
            <h2 className="text-2xl font-bold text-primary mb-6">Additional Services</h2>
            <ul className="space-y-4 text-dark/80">
              <li>
                <strong>Trade-In Assistance</strong>
                <p>Get a fair value for your current vehicle</p>
              </li>
              <li>
                <strong>Insurance Guidance</strong>
                <p>Help finding the right coverage for your new vehicle</p>
              </li>
              <li>
                <strong>Documentation Support</strong>
                <p>Assistance with all required paperwork</p>
              </li>
              <li>
                <strong>After-Sale Support</strong>
                <p>Ongoing assistance after your purchase</p>
              </li>
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Services;