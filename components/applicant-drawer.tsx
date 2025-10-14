import { Drawer } from "vaul";
import { IconX, IconBriefcase, IconSchool, IconStar, IconLanguage } from "@tabler/icons-react";
import { Applicant } from "../types/applicant";

interface ApplicantDrawerProps {
  applicant: Applicant;
  isOpen: boolean;
  onClose: () => void;
}

export function ApplicantDrawer({ applicant, isOpen, onClose }: ApplicantDrawerProps) {
  return (
    <Drawer.Root open={isOpen} onOpenChange={onClose}>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />
        <Drawer.Content className="bg-white flex flex-col rounded-t-[10px] h-[96%] mt-24 fixed bottom-0 left-0 right-0">
          <div className="p-4 bg-white rounded-t-[10px] flex-1 overflow-auto">
            <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-gray-300 mb-8" />
            <div className="max-w-3xl mx-auto">
              <Drawer.Title className="font-bold text-3xl mb-2">
                {applicant.name}
              </Drawer.Title>
              <p className="text-xl text-gray-600 mb-4">{applicant.role}</p>
              <button
                onClick={onClose}
                className="absolute top-3 right-3 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                <IconX className="w-5 h-5" />
              </button>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2 space-y-6">
                  <section>
                    <h3 className="font-semibold text-lg mb-2">Summary</h3>
                    <p className="text-gray-600">{applicant.summary}</p>
                  </section>
                  
                  <section>
                    <h3 className="font-semibold text-lg mb-2 flex items-center">
                      <IconBriefcase className="w-5 h-5 mr-2" />
                      Experience
                    </h3>
                    {Array.isArray(applicant.experience) ? (
                      applicant.experience.map((exp, index) => (
                        <div key={index} className="mb-4">
                          <h4 className="font-medium">{exp.role} at {exp.company}</h4>
                          <p className="text-sm text-gray-500">{exp.duration}</p>
                          <p className="text-gray-600 mt-1">{exp.description}</p>
                        </div>
                      ))
                    ) : (
                      <p className="text-gray-600">{applicant.experience}</p>
                    )}
                  </section>
                  
                  <section>
                    <h3 className="font-semibold text-lg mb-2 flex items-center">
                      <IconSchool className="w-5 h-5 mr-2" />
                      Education
                    </h3>
                    {Array.isArray(applicant.education) ? (
                      applicant.education.map((edu, index) => (
                        <div key={index} className="mb-2">
                          <h4 className="font-medium">{edu.degree}</h4>
                          <p className="text-sm text-gray-500">{edu.institution}, {edu.year}</p>
                        </div>
                      ))
                    ) : (
                      <p className="text-gray-600">{applicant.education || 'Not specified'}</p>
                    )}
                  </section>
                </div>
                
                <div className="space-y-6">
                  <section>
                    <h3 className="font-semibold text-lg mb-2">Contact</h3>
                    <p className="text-gray-600">{applicant.email}</p>
                    <p className="text-gray-600">{applicant.phone}</p>
                    <p className="text-gray-600">{applicant.location}</p>
                  </section>
                  
                  <section>
                    <h3 className="font-semibold text-lg mb-2 flex items-center">
                      <IconStar className="w-5 h-5 mr-2" />
                      Skills
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {Array.isArray(applicant.skills) ? (
                        applicant.skills.map((skill, index) => (
                          <span key={index} className="bg-gray-100 text-gray-800 text-sm font-medium px-2.5 py-0.5 rounded">
                            {skill}
                          </span>
                        ))
                      ) : (
                        <p className="text-gray-600">{applicant.skills || 'Not specified'}</p>
                      )}
                    </div>
                  </section>
                  
                  <section>
                    <h3 className="font-semibold text-lg mb-2 flex items-center">
                      <IconLanguage className="w-5 h-5 mr-2" />
                      Languages
                    </h3>
                    {Array.isArray(applicant.languages) ? (
                      <ul className="list-disc list-inside text-gray-600">
                        {applicant.languages.map((language, index) => (
                          <li key={index}>{language}</li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-gray-600">{applicant.languages || 'Not specified'}</p>
                    )}
                  </section>
                </div>
              </div>
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
