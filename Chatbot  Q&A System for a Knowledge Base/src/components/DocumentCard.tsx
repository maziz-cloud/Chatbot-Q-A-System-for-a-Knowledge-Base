import { FileText, ExternalLink } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface DocumentCardProps {
  document: {
    id: string;
    title: string;
    content: string;
    file_url?: string;
    created_at: string;
  };
}

const DocumentCard = ({ document }: DocumentCardProps) => {
  return (
    <Card className="transition-smooth hover:shadow-md cursor-pointer">
      <CardHeader className="pb-3">
        <div className="flex items-start gap-2">
          <FileText className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
          <div className="flex-1 min-w-0">
            <CardTitle className="text-sm font-medium line-clamp-2">
              {document.title}
            </CardTitle>
            <CardDescription className="text-xs mt-1">
              {new Date(document.created_at).toLocaleDateString()}
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <p className="text-xs text-muted-foreground line-clamp-3 mb-3">
          {document.content}
        </p>
        {document.file_url && (
          <Button
            variant="ghost"
            size="sm"
            className="w-full justify-start text-xs"
            asChild
          >
            <a href={document.file_url} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-3 w-3 mr-1" />
              View File
            </a>
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default DocumentCard;
