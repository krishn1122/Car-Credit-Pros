import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";

const Schedule = () => {
  const [date, setDate] = useState<Date | undefined>(undefined);

  return (
    <div className="min-h-screen bg-secondary py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-dark mb-8 text-center">Schedule Your Visit</h1>
        
        <Card className="max-w-2xl mx-auto p-8 bg-white shadow-lg">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-primary mb-6">Select a Date</h2>
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
              />
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-primary mb-6">Available Times</h2>
              <div className="grid grid-cols-2 gap-4">
                {["9:00 AM", "10:00 AM", "11:00 AM", "1:00 PM", "2:00 PM", "3:00 PM"].map((time) => (
                  <Button
                    key={time}
                    variant="outline"
                    className="w-full hover:bg-primary hover:text-white transition-colors"
                  >
                    {time}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8">
            <Button className="w-full bg-primary text-darker hover:bg-primary/90">
              Confirm Appointment
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Schedule;