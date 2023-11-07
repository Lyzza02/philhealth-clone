import React, { useState } from 'react';
import Header from '../components/Header';
import FooterSection from '../components/FooterSection';
import localImage from '../pictures/contacts.png';
import { Box } from 'react-bulma-components';

const styles = {
  app: {
    backgroundColor: '#FDFD97',
    fontFamily: 'Arial, sans-serif',
    lineHeight: '1.6',
  },
  container: {
    margin: '0 auto',
    padding: '20px',
  },
  select: {
    width: '100%',
    padding: '10px',
    fontSize: '20px',
  },
  regionInfo: {
    backgroundColor: 'white',
    padding: '20px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  header: {
    color:'#329900',
    fontWeight: 'bold',
    fontSize: '32px',
  },
  subHeader: {
    fontSize: '26px',
  },
  text: {
    fontSize: '16px',
  },
};

const ContactsUs = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleDropdownChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div style={styles.app}>
      <Header />
      <Box>
        <img src={localImage} alt="" style={{ width: '100%', height: 'auto' }} />
      </Box>
      <div style={{ ...styles.container, alignItems: 'center', textAlign: 'center' }}>
        <h1 style={styles.header}>Directory of Offices</h1>
        <p>You can view the Regional Offices, Local Health Insurance Offices, Business Centers and PhilHealth Express Branches</p>
      </div>
      <div style={styles.container}>
        <p style={styles.subHeader}>Please Select a Region</p>
        <div style={{ textAlign: 'center' }}>
          <select value={selectedOption} onChange={handleDropdownChange} style={styles.select}>
            <option value="pro1">PRO I</option>
            <option value="pro2">PRO II</option>
            <option value="procar">PRO CAR</option>
            <option value="pro3a">PRO III-A</option>
            <option value="pro3b">PRO III-B</option>

            <option value="proncr">PRO NCR</option>
            <option value="proncrnorth">PRO NCR North - Manila</option>
            <option value="proncrcentral">PRO NCR Central - Quezon City</option>
            <option value="proncrsouth">PRO NCR South - Pasig</option>

            <option value="pro4a">PRO IV-A</option>
            <option value="pro4b">PRO IV-B</option>
            <option value="pro5">PRO V</option>
            <option value="pro6">PRO VI</option>
            <option value="pro7">PRO VII</option>
            <option value="pro8">PRO VIII</option>
            <option value="pro9">PRO IX</option>
            <option value="pro10">PRO X</option>
            <option value="procaraga">PRO CARAGA</option>
            <option value="pro11">PRO XI</option>
            <option value="pro12">PRO XII</option>
            <option value="proarmm">PRO BARMM</option>
          </select>
        </div>
      </div>
      <div style={styles.container}>
        <div style={styles.regionInfo}>
          <h2 style={styles.header}>PRO I - Dagupan</h2>
          <h4 style={styles.subHeader}>Regional Office</h4>
          <p className="address" style={{ ...styles.text, marginBottom: '20px' }}>
            Akia Building, Old De Venecia Highway <br />
            Dagupan City, Pangasinan<br />
            (075) 515-1111<br />
            <a href="mailto:region1@philhealth.gov.ph" style={{ textDecoration: 'none' }}>region1@philhealth.gov.ph</a>
          </p>
          <h4 style={styles.subHeader}>Local Health Insurance Offices</h4>
          <h6 style={{ ...styles.text, backgroundColor: '#f1f1f1', color: '#175E50' }}>LHIO Ilocos Norte</h6>
          <p className="address" style={{ ...styles.text, marginBottom: '20px' }}>
            Ground Floor, Valdez Building A, Valdez Center, Barangay 1, San Francisco, San Nicolas, Ilocos Norte<br />
            (077) 600-0482<br />
            <a href="mailto:laoag.pro1@philhealth.gov.ph" style={{ textDecoration: 'none' }}>laoag.pro1@philhealth.gov.ph</a>
          </p>

          <h6 style={{ ...styles.text, backgroundColor: '#f1f1f1', color: '#175E50' }}>LHIO Ilocos Sur</h6>
          <p className="address" style={{ ...styles.text, marginBottom: '20px' }}>
            2/F Henady Bldg., Brgy 3 Del Pilar St., cor. Salcedo St., Vigan City, Ilocos Sur<br />
            (077) 604-0008<br />
            <a href="mailto:vigan.pro1@philhealth.gov.ph" style={{ textDecoration: 'none' }}>vigan.pro1@philhealth.gov.ph</a>
          </p>

          <h6 style={{ ...styles.text, backgroundColor: '#f1f1f1', color: '#175E50' }}>LHIO La Union</h6>
          <p className="address" style={{ ...styles.text, marginBottom: '20px' }}>
            G/F CSI The City Mall Inc., Brgy. Biday, San Fernando City, La Union<br />
            (072) 607-7162<br />
            <a href="mailto:launion.pro1@philhealth.gov.ph" style={{ textDecoration: 'none' }}>launion.pro1@philhealth.gov.ph</a>
          </p>
        </div>
      </div>
      <FooterSection />
    </div>
  );
};

export default ContactsUs;
