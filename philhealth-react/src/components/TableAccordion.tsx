import React from 'react';

const appStyle: React.CSSProperties = {
  textAlign: 'center',
};

const accordion: React.CSSProperties = {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: '10px',
  marginBottom: '10px',
};

const accordionItem: React.CSSProperties = {
  border: '1px solid #ddd',
  marginBottom: '60px',
  width: '80%',
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
  fontSize: '26px',
  textAlign: 'center',
};

const accordionContent: React.CSSProperties = {
  padding: '5px',
  backgroundColor: '#fff',
  border: '1px solid #ddd',
  boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
  textAlign: 'left',
};

const sectionsData = [
  {
    title: 'Enabling Laws',
    content: `R.A. 7875 And IRR\nR.A. 9241 And IRR\nR.A. 10606\nRevised IRR Of The National Health Insurance Act Of 2013 (R.A. 7875 As Amended By R.A. 9241 And 10606)\nR.A. 11223 (Universal Health Care Act)\nUHC-IRR\nIRR Of R.A. 11228\nPhilHealth Rules On Administrative Cases (PROAC) Involving Health Care Providers, Members And PhilHealth Employees`,
  },
  {
    title: 'Medical List',
    content: `Philippine National Formulary (PNF) Essential Medicines List (EML) (As Of November 2, 2022)\nHTA Forum (2006)\nNational TB Control Program Manual\nComprehensive And Unified Policy For TB Control\nPolicy Recommendations On Leptospirosis`,
  },
];

function TableAccordion() {
  return (
    <div className="App" style={appStyle}>
      <div style={accordion}>
        {sectionsData.map((section, index) => (
          <div key={index} style={accordionItem}>
            <div style={accordionHeader}>
              {section.title}
            </div>
            <div style={accordionContent}>
              <pre style={{ fontFamily: 'Arial, sans-serif', fontSize: '1.1rem', lineHeight: '1.4' }}>
                {section.content}
              </pre>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TableAccordion;
