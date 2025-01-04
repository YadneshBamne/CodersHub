import { WarpBackground } from "@/components/ui/warp-background";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";

function ExampleComponentDemo() {
  return (
    <WarpBackground className="w-full min-h-screen flex" >
      <Card >
        <CardContent>
          <CardTitle>Congratulations on Your Promotion!</CardTitle>
          <CardDescription>
            Your hard work and dedication have paid off. We&apos;re thrilled to
            see you take this next step in your career. Keep up the fantastic
            work!
          </CardDescription>
        </CardContent>
      </Card>
    </WarpBackground>
  );
}

export default ExampleComponentDemo;
