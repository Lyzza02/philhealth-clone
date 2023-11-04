import React from 'react';
import { Modal, Card, Button } from 'react-bulma-components';

interface DisclaimerModalProps {
  showDisclaimerModal: boolean;
  toggleDisclaimerModal: () => void;
}

function DisclaimerModal({ showDisclaimerModal, toggleDisclaimerModal }: DisclaimerModalProps) {
  return (
    <Modal show={showDisclaimerModal} onClose={toggleDisclaimerModal}>
      <Modal.Content>
        <Card>
          <Card.Content>
            <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px', textAlign: 'center' }}>Disclaimer</h1>
            <p style={{ textAlign: 'justify' }}>
              The PhilHealth Logo, photographs, and information on this website may not be reproduced, copied, or downloaded in any form or by any means, including recording, taping, photocopying, or information storage and retrieval systems, for use in illegal, damaging, or pornographic material.
            </p>
            <br />
            <p style={{ textAlign: 'justify' }}>
              However, PhilHealth information may be used for educational or informative purposes and may be reproduced, copied, or downloaded without written permission from PhilHealth.
            </p>
          </Card.Content>
          <Card.Footer>
            <Card.Footer.Item renderAs="div">
              <Button onClick={toggleDisclaimerModal}>Close</Button>
            </Card.Footer.Item>
          </Card.Footer>
        </Card>
      </Modal.Content>
    </Modal>
  );
}

export default DisclaimerModal;
