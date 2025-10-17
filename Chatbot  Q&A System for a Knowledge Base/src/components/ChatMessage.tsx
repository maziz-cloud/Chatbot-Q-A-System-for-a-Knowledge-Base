import { FileText } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface ChatMessageProps {
  message: {
    role: "user" | "assistant";
    content: string;
    citations?: string[];
  };
}

const ChatMessage = ({ message }: ChatMessageProps) => {
  const isUser = message.role === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`rounded-2xl p-4 max-w-[80%] transition-smooth ${
          isUser
            ? "bg-primary text-primary-foreground"
            : "bg-muted text-foreground"
        }`}
      >
        <p className="whitespace-pre-wrap">{message.content}</p>
        {message.citations && message.citations.length > 0 && (
          <div className="mt-3 pt-3 border-t border-border/20">
            <p className="text-xs font-medium mb-2 opacity-80">Sources:</p>
            <div className="flex flex-wrap gap-2">
              {message.citations.map((citation, idx) => (
                <Badge
                  key={idx}
                  variant="secondary"
                  className="text-xs transition-smooth hover:scale-105"
                >
                  <FileText className="h-3 w-3 mr-1" />
                  Doc {idx + 1}
                </Badge>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatMessage;
