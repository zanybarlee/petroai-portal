
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download, Eye } from "lucide-react";

type DocumentType = "reports" | "contracts" | "guides";

interface DocumentsListProps {
  type: DocumentType;
}

export function DocumentsList({ type }: DocumentsListProps) {
  // Sample documents data based on type
  const documents = getSampleDocuments(type);

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Size</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {documents.map((doc) => (
            <TableRow key={doc.id}>
              <TableCell className="font-medium">{doc.name}</TableCell>
              <TableCell>{doc.type}</TableCell>
              <TableCell>{doc.date}</TableCell>
              <TableCell>{doc.size}</TableCell>
              <TableCell>
                <Badge variant={doc.status === "New" ? "success" : "default"}>{doc.status}</Badge>
              </TableCell>
              <TableCell className="text-right">
                <div className="flex justify-end gap-2">
                  <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                    <Eye className="h-4 w-4" />
                    <span className="sr-only">View</span>
                  </Button>
                  <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                    <Download className="h-4 w-4" />
                    <span className="sr-only">Download</span>
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

function getSampleDocuments(type: DocumentType) {
  if (type === "reports") {
    return [
      { id: "1", name: "Q3 Trading Analysis", type: "PDF", date: "Oct 15, 2024", size: "2.4 MB", status: "New" },
      { id: "2", name: "Monthly Performance Report", type: "PDF", date: "Oct 1, 2024", size: "1.8 MB", status: "Read" },
      { id: "3", name: "Trade Execution Summary", type: "XLSX", date: "Sep 15, 2024", size: "756 KB", status: "Read" },
      { id: "4", name: "Market Analysis Q3", type: "PDF", date: "Sep 10, 2024", size: "3.2 MB", status: "Read" },
      { id: "5", name: "Risk Assessment Report", type: "PDF", date: "Aug 28, 2024", size: "1.1 MB", status: "Read" }
    ];
  } else if (type === "contracts") {
    return [
      { id: "6", name: "Trading Agreement", type: "PDF", date: "Jan 15, 2024", size: "534 KB", status: "Read" },
      { id: "7", name: "Terms of Service", type: "PDF", date: "Jan 15, 2024", size: "428 KB", status: "Read" },
      { id: "8", name: "Privacy Policy Update", type: "PDF", date: "Sep 5, 2024", size: "312 KB", status: "New" },
      { id: "9", name: "Data Processing Agreement", type: "PDF", date: "Mar 22, 2024", size: "645 KB", status: "Read" },
      { id: "10", name: "User License Agreement", type: "PDF", date: "Jan 15, 2024", size: "512 KB", status: "Read" }
    ];
  } else {
    return [
      { id: "11", name: "Platform User Guide", type: "PDF", date: "Aug 12, 2024", size: "4.2 MB", status: "Read" },
      { id: "12", name: "Trading Strategies Guide", type: "PDF", date: "Sep 30, 2024", size: "2.8 MB", status: "New" },
      { id: "13", name: "Risk Management Handbook", type: "PDF", date: "Jul 18, 2024", size: "3.1 MB", status: "Read" },
      { id: "14", name: "Technical Analysis Guide", type: "PDF", date: "Jun 5, 2024", size: "5.6 MB", status: "Read" },
      { id: "15", name: "Getting Started Tutorial", type: "PDF", date: "Jan 20, 2024", size: "1.8 MB", status: "Read" }
    ];
  }
}
