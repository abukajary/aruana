
import React from 'react';
import { requirementsDoc } from '../locales/requirementsDoc';

const RequirementsOverview: React.FC = () => {
  return (
    <div className="container mx-auto p-6">
      <header className="mb-6">
        <h1 className="text-3xl font-bold">{requirementsDoc.header}</h1>
        <p className="mt-2 text-gray-700">{requirementsDoc.regulationText}</p>
      </header>

      <main>
        {requirementsDoc.profiles.map((profile, idx) => (
          <section key={idx} className="mb-8 border-b pb-4">
            <h2 className="text-2xl font-semibold mb-3">{profile.profileTitle}</h2>

            <div className="mb-4">
              <h3 className="text-xl font-medium mb-2">Обследования:</h3>
              <ul className="list-disc list-inside space-y-1">
                {profile.examinations.map((exam, examIdx) => (
                  <li key={`exam-${examIdx}`} className="text-gray-800">
                    {exam}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-2">Консультации:</h3>
              <ul className="list-disc list-inside space-y-1">
                {profile.consultations.map((consult, consultIdx) => (
                  <li key={`consult-${consultIdx}`} className="text-gray-800">
                    {consult}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ))}
      </main>
    </div>
  );
};

export default RequirementsOverview;