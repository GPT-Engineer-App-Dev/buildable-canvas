import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">Welcome to Your Bare-Bones App</CardTitle>
          <CardDescription>A simple starting point for your web application</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            This is a minimal web application that you can modify and build upon. It includes basic
            routing, a navbar, and uses shadcn-ui components with Tailwind CSS for styling.
          </p>
          <Button>Get Started</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;