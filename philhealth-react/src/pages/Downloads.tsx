import React, { useState } from 'react';
import Header from '../components/Header';
import FooterSection from '../components/FooterSection';
import { Box } from 'react-bulma-components';
import localImage from '../pictures/downloads.png';

const appStyle: React.CSSProperties = {
  backgroundColor: '#175E50',
  textAlign: 'center',
};

const accordion: React.CSSProperties = {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: '60px',
  marginBottom: '60px'
};

const accordionItem: React.CSSProperties = {
  marginBottom: '10px',
  width: '90%',
  maxWidth: '810px',
  borderRadius: '8px',
  overflow: 'hidden',
  boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
};

const accordionHeader: React.CSSProperties = {
  backgroundColor: '#329900',
  color:'#fff',
  padding: '15px',
  cursor: 'pointer',
  userSelect: 'none',
  fontWeight: 'bold',
  fontSize: '24px',
  textAlign: 'left',
};

const accordionContent: React.CSSProperties = {
  display: 'none',
  padding: '5px',
  backgroundColor: '#fff',
  border: '1px solid #ddd',
  boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
  transition: 'display 0.3s, opacity 0.3s',
  textAlign: 'left',
};

const openAccordionContent: React.CSSProperties = {
  ...accordionContent,
  display: 'block',
  opacity: 1,
};

const sectionsData = [
  {
    title: 'Forms',
    content: `Membership\nClaims\nE-Claims\nDialysis Database\nPayment\nEmployers\nAccredited Collecting Agents (ACAs)\nKasambahay\nCOVID-19\nRheumatic Fever / Rheumatic Heart Disease (RF / RHD)`,
  },
  {
    title: 'Accreditation Documents',
    content: `Health IT Partners\nHealth Care Professionals\nHealth Care Facilities`,
  },
  {
    title: 'Z Benefit Documents',
    content: 'Pre-Authorization And Claims Reimbursement',
  },
  {
    title: 'Konsulta',
    content: `Annex A: Standards for Accreditation of PhilHealth Konsulta Facilities
Annex B. Self - Assessment Accreditation Survey Tool for PhilHealth Konsulta Facility
Annex B.1 Health Human Resource Survey Tool for PhilHealth Konsulta Facility
Annex B.2 Checklist of PhilHealth Konsulta Drugs and Its Preparations
Annex B.3 Checklist of PhilHealth Konsulta Laboratories and Diagnostic Services
Annex C. Procedures and Documentary Requirements for Accreditation of PhilHealth Konsulta Providers
Annex D.1 Certification of Service Delivery Support (Laboratory and Diagnostic Services)
Annex D.2 Certification of Service Delivery Support (Medicines)
Annex E. Non - disclosure Agreement`,
  },
  {
    title: 'IEC Materials',
    content: 'Infomercials',
  },
];

function Downloads() {
  const [sections, setSections] = useState(
    sectionsData.map((section) => ({ ...section, isOpen: false }))
  );

  const toggleSection = (index: number) => {
    const updatedSections = [...sections];
    updatedSections[index].isOpen = !updatedSections[index].isOpen;
    setSections(updatedSections);
  };

  return (
    <div className="App" style={appStyle}>
      <Header />
      <Box>
        <img src={localImage} alt="" style={{ width: '100%', height: 'auto' }} />
      </Box>
      <div style={accordion}>
        {sections.map((section, index) => (
          <div key={index} style={accordionItem}>
            <div
              style={accordionHeader}
              onClick={() => toggleSection(index)}
            >
              {section.title}
            </div>
            {section.isOpen ? (
              <div style={openAccordionContent}>
                <pre style={{ fontFamily: 'Arial, sans-serif', fontSize: '16px', lineHeight: '1.4' }}>{section.content}</pre >
              </div>
            ) : (
              <div style={accordionContent}>
                <pre style={{ fontFamily: 'Arial, sans-serif', fontSize: '16px', lineHeight: '1.4' }}>{section.content}</pre >
              </div>
            )}
          </div>
        ))}
      </div>
      <FooterSection />
    </div>
  );
}

export default Downloads;
