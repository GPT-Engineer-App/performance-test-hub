import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Toggle } from "@/components/ui/toggle";
import { Paw } from "lucide-react";

const dogImages = [
  "https://images.unsplash.com/photo-1517849845537-4d257902454a",
  "https://images.unsplash.com/photo-1530281700549-e82e7bf110d6",
  "https://images.unsplash.com/photo-1548199973-03cce0bbc87b",
  "https://images.unsplash.com/photo-1587300003388-59208cc962cb",
];

const funFacts = [
  "Dogs' sense of smell is at least 40x better than ours.",
  "The Basenji is the only breed of dog that can't bark.",
  "A dog's nose print is unique, much like a human's fingerprint.",
  "Dalmatians are born completely white, and develop their spots as they get older.",
];

const Index = () => {
  const [showFunFact, setShowFunFact] = useState(false);
  const [currentFact, setCurrentFact] = useState(0);

  const toggleFunFact = () => {
    setShowFunFact(!showFunFact);
    if (!showFunFact) {
      setCurrentFact(Math.floor(Math.random() * funFacts.length));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-purple-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-8 text-center text-indigo-800">Discover the World of Dogs</h1>
        
        <Carousel className="mb-8">
          <CarouselContent>
            {dogImages.map((src, index) => (
              <CarouselItem key={index}>
                <img 
                  src={src}
                  alt={`Dog ${index + 1}`}
                  className="mx-auto object-cover w-full h-[400px] rounded-lg shadow-lg"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        <div className="flex justify-center mb-8">
          <Toggle pressed={showFunFact} onPressedChange={toggleFunFact}>
            <Paw className="mr-2 h-4 w-4" />
            Toggle Fun Fact
          </Toggle>
        </div>

        {showFunFact && (
          <Card className="mb-8 bg-yellow-100 border-yellow-300">
            <CardHeader>
              <CardTitle className="text-yellow-800">Did You Know?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-yellow-900">{funFacts[currentFact]}</p>
            </CardContent>
          </Card>
        )}

        <Card className="mb-8 bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl text-indigo-700">What are Dogs?</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-indigo-900">Dogs are domesticated mammals, not natural wild animals. They were originally bred from wolves. They have been bred by humans for a long time, and were the first animals ever to be domesticated.</p>
          </CardContent>
        </Card>

        <Card className="mb-8 bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl text-indigo-700">Characteristics of Dogs</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 text-indigo-900">
              <li>Loyal and affectionate companions</li>
              <li>Highly intelligent and trainable</li>
              <li>Come in a wide variety of breeds, sizes, and colors</li>
              <li>Have an excellent sense of smell and hearing</li>
              <li>Require regular exercise and mental stimulation</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl text-indigo-700">Popular Dog Breeds</CardTitle>
            <CardDescription className="text-indigo-600">Here are some of the most popular dog breeds worldwide:</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-2 gap-2 text-indigo-900">
              <li>Labrador Retriever</li>
              <li>German Shepherd</li>
              <li>Golden Retriever</li>
              <li>French Bulldog</li>
              <li>Bulldog</li>
              <li>Poodle</li>
              <li>Beagle</li>
              <li>Rottweiler</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
