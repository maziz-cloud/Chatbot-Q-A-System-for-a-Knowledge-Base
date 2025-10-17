import { Button } from "@/components/ui/button";
import { MessageSquare, Search, Shield, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-hero py-20 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Knowledge Base AI Assistant
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Ask questions, get instant answers with citations from your knowledge base. Powered by AI for semantic search and intelligent responses.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/chat">
              <Button size="lg" className="shadow-lg hover:shadow-glow transition-smooth">
                <MessageSquare className="mr-2 h-5 w-5" />
                Start Chatting
              </Button>
            </Link>
            <Link to="/auth">
              <Button size="lg" variant="outline" className="transition-smooth">
                Sign In
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Platform</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl border bg-card transition-smooth hover:shadow-md">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Search className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Semantic Search</h3>
              <p className="text-muted-foreground">
                Advanced AI-powered search that understands context and meaning, not just keywords.
              </p>
            </div>

            <div className="p-6 rounded-xl border bg-card transition-smooth hover:shadow-md">
              <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <MessageSquare className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Natural Conversations</h3>
              <p className="text-muted-foreground">
                Chat naturally with follow-up questions and get contextual answers with citations.
              </p>
            </div>

            <div className="p-6 rounded-xl border bg-card transition-smooth hover:shadow-md">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure & Private</h3>
              <p className="text-muted-foreground">
                Your data is secure with authentication and role-based access control.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-4xl text-center">
          <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join thousands of users who are already leveraging AI to access their knowledge base efficiently.
          </p>
          <Link to="/chat">
            <Button size="lg" className="shadow-lg">
              Try It Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
