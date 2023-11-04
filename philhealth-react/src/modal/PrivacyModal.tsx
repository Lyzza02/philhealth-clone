import React from 'react';
import { Modal, Card, Button, Content } from 'react-bulma-components';

interface PrivacyModalProps {
  showPrivacyModal: boolean;
  togglePrivacyModal: () => void;
}

function PrivacyModal({ showPrivacyModal, togglePrivacyModal }: PrivacyModalProps) {
  return (
    <Modal show={showPrivacyModal} onClose={togglePrivacyModal}>
      <Modal.Content>
        <Content>
          <Card>
            <Card.Content>
              <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px', textAlign: 'center' }}>Privacy Notice</h1>
              <p style={{ textAlign: 'justify' }}>
                In carrying out its mandate under Republic Act (RA) No. 7875, as amended by RAs 9241 and 10606, which relates to the administration of the National Health Insurance Program (NHIP), the Philippine Health Insurance Corporation (“PhilHealth or “We”) collects and processes personal data, including those sourced from its official website.
              </p>
              <p style={{ textAlign: 'justify' }}>
                As a responsible data custodian, it commits to keep such personal data secure from any unlawful or unauthorized processing, in line with RA 10173, also known as the Data Privacy Act of 2012 (DPA), and the fundamental right to privacy of every individual.
              </p>
              <p style={{ textAlign: 'justify' }}>
                This Privacy Notice defines how we manage the information we collect or generate via our official website and other linked online services. Since this website also contains links to other websites, visitors are advised to read the privacy notice (privacy policy) of those sites since they are separate and distinct from ours.
              </p>

              <h6 style={{ fontSize: '18px', fontWeight: 'bold', marginTop: '25px' }}>Information We Collect</h6>
              <p style={{ textAlign: 'justify' }}>
                Collection is primarily carried out via the linked web applications found in My PhilHealth Portal under Online Services that record personal data including, but not limited to:
              </p>
              <ol style={{ marginLeft: '20px' }}>
                <li>PhilHealth Identification Number;</li>
                <li>last name;</li>
                <li>first name;</li>
                <li>middle name;</li>
                <li>mobile number;</li>
                <li>sex;</li>
                <li>date of birth;</li>
                <li>civil status; and</li>
                <li>email address.</li>
              </ol>
              <p style={{ textAlign: 'justify' }}>
                We also use cookies to help us maintain and improve the website to enhance user experience. Thus, when you visit our website, the following information are also recorded via Google Analytics:
              </p>
              <ol style={{ marginLeft: '20px' }}>
                <li>browser type and version;</li>
                <li>browser plug-in types and versions;</li>
                <li>date and time of connection;</li>
                <li>length of visits to certain pages;</li>
                <li>IP address; and</li>
                <li>page interaction information (e.g., scrolling, clicks, and mouse-overs).</li>
              </ol>

              <h6 style={{ fontSize: '18px', fontWeight: 'bold', marginTop: '25px' }}>Purpose of Collection</h6>
              <p style={{ textAlign: 'justify' }}>
                Personal data collected via the linked web applications are used for any or all the following purposes:
              </p>
              <ol style={{ marginLeft: '20px' }}>
                <li>to facilitate electronic registration;</li>
                <li>to verify the identity of a member and/or his or her dependent;</li>
                <li>to administer and update PhilHealth’s account records;</li>
                <li>to provide appropriate services;</li>
                <li>to guard against potential information security breaches;</li>
                <li>to comply with legal and regulatory requirements; and</li>
                <li>to respond to queries.</li>
              </ol>
              <p style={{ textAlign: 'justify' }}>
                On the other hand, data gathered and processed by Google Analytics are used to generate a report on the following:
              </p>
              <ol style={{ marginLeft: '20px' }}>
                <li>most viewed pages (per day and per month);</li>
                <li>number of regular users and new users;</li>
                <li>landing pages;</li>
                <li>social networking site which has the most referrals;</li>
                <li>location of most users; and</li>
                <li>most common devices and browsers used to access the website.</li>
              </ol>

              <h6 style={{ fontSize: '18px', fontWeight: 'bold', marginTop: '25px' }}>Security Measures</h6>
              <p style={{ textAlign: 'justify' }}>
                PhilHealth has evolving controls and security policies in place in order to maintain the confidentiality, integrity and availability of the personal data it collects. All information collected by domains maintained by PhilHealth are stored in data centers accessible only to authorized personnel including third-party service providers.
              </p>

              <h6 style={{ fontSize: '18px', fontWeight: 'bold', marginTop: '25px' }}>Sharing Information</h6>
              <p style={{ textAlign: 'justify' }}>
                Personal data collected via the linked web applications are not disclosed to external parties unless required or permitted by law.
              </p>

              <h6 style={{ fontSize: '18px', fontWeight: 'bold', marginTop: '25px' }}>Retention of Information</h6>
              <p style={{ textAlign: 'justify' }}>
                Except when otherwise required or permitted by law, collected data are kept only as long as they are necessary to achieve the purposes declared herein. After which, they are deleted or disposed of in a safe and secure manner.
              </p>

              <h6 style={{ fontSize: '18px', fontWeight: 'bold', marginTop: '25px' }}>Rights of Data Subjects</h6>
              <p style={{ textAlign: 'justify' }}>
                Individuals whose personal data we collect are accorded rights by the DPA as data subjects. They may invoke such rights at any time, in accordance with the provisions of the law. On the other hand, if there are inaccuracies in their records that need to be corrected or updated, members must notify PhilHealth immediately through any of its Local Health Insurance Offices or Branches.
              </p>

              <h6 style={{ fontSize: '18px', fontWeight: 'bold', marginTop: '25px' }}>Changes to this Notice</h6>
              <p style={{ textAlign: 'justify' }}>
                This Privacy Notice was issued January 16, 2019 and will remain effective unless there is a revision, which will be effective immediately after being posted on this site. PhilHealth will make every effort to announce to the public any changes made on this Notice.
              </p>

              <h6 style={{ fontSize: '18px', fontWeight: 'bold', marginTop: '25px' }}>Contact Information</h6>
              <p style={{ textAlign: 'justify' }}>
                If you have feedback, questions, complaints or other concerns regarding this Privacy Notice or PhilHealth’s data processing operations, you may relay them to us via our Data Protection Officer using the information below:
              </p>
              <p style={{ fontSize: '14px' }}>
                DATA PROTECTION OFFICER
                <br />
                (02) 8441-7444 local 7425
                <br />
                Callback Channel: 0917-8987442 (PHIC)
                <br />
                Text "PHICcallback [space] Mobile No. or Metro Manila landline [space] details of your data privacy concern" and we will call you during office hours, weekdays only.
                <br />
                Callback requests will expire after 72 hours
                <br />
                Email: privacy.dpo@philhealth.gov.ph
              </p>
            </Card.Content>
            <Card.Footer style={{ position: 'sticky', bottom: 0, backgroundColor: 'white' }}>
              <Card.Footer.Item renderAs="div">
                <Button onClick={togglePrivacyModal}>Close</Button>
              </Card.Footer.Item>
            </Card.Footer>
          </Card>
        </Content>
      </Modal.Content>
    </Modal>
  );
}

export default PrivacyModal;
