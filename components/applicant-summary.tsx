import Image from 'next/image';
import { Card, CardContent } from "@/components/ui/card";
import { Applicant } from "../types/applicant";

interface ApplicantSummaryProps {
  accepted: Applicant[];
  rejected: Applicant[];
}

export function ApplicantSummary({ accepted, rejected }: ApplicantSummaryProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-xl font-medium mb-4">Application Review Summary</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-lg font-medium mb-3">Accepted Applicants</h3>
          <div className="space-y-3">
            {accepted.map((applicant) => (
              <ApplicantCard key={applicant.id} applicant={applicant} status="accepted" />
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-lg font-medium mb-3">Rejected Applicants</h3>
          <div className="space-y-3">
            {rejected.map((applicant) => (
              <ApplicantCard key={applicant.id} applicant={applicant} status="rejected" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

interface ApplicantCardProps {
  applicant: Applicant;
  status: 'accepted' | 'rejected';
}

function ApplicantCard({ applicant, status }: ApplicantCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-3 flex items-center space-x-4">
        <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
          <Image
            src={applicant.photo}
            alt={applicant.name}
            fill
            className="object-cover"
          />
        </div>
        <div className="flex-grow">
          <h4 className="font-medium">{applicant.name}</h4>
          <p className="text-sm text-gray-600">{applicant.role}</p>
        </div>
        <div className={`px-2 py-1 rounded text-sm ${
          status === 'accepted' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
        }`}>
          {status === 'accepted' ? 'Accepted' : 'Rejected'}
        </div>
      </CardContent>
    </Card>
  );
}

