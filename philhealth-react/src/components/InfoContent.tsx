import { Content, Card, Media, Heading, Image, Columns } from "react-bulma-components";

function InfoContent() {

  const cardStyle = {
    width: 300,
    margin: 'auto',
    height: 588, // Adjust the height as needed
  };


  return (
    <Columns>
      <Columns.Column size={"one-quarter"}>
        <Card style={ cardStyle }>
          <Card.Image
            size="4by3"
            src="http://bulma.io/images/placeholders/1280x960.png"
          />
          <Card.Content>
            <Heading size={4}>Member</Heading>
            <Content>
              This section features the different membership categories, premium payment, data amendment and other procedures that each type of member must know. We have custom-fit the information to ensure that we address the specific concerns of each of our member types.
            </Content>
          </Card.Content>
        </Card>
      </Columns.Column>

      <Columns.Column size={"one-quarter"}>
        <Card style={ cardStyle }>
          <Card.Image
            size="4by3"
            src="http://bulma.io/images/placeholders/1280x960.png"
          />
          <Card.Content>

          <Heading size={4}>Benefits</Heading>
            <Content>
            This section features a variety of comprehensive health care services -from basic primary care to catastrophic packages to provide members and their families with the information they need on benefits and benefits availment. It includes eligibility requirements, coverage, general guidelines for specific diseases and selections criteria among others.
            </Content>
          </Card.Content>
        </Card>
      </Columns.Column>

      <Columns.Column size={"one-quarter"}>
        <Card style={ cardStyle }>
          <Card.Image
            size="4by3"
            src="http://bulma.io/images/placeholders/1280x960.png"
          />
          <Card.Content>

          <Heading size={4}>Online Services</Heading>
            <Content>
            Considered the newest addition to our menu of electronic services, this section features the different access points that our stakeholders can tap to transact with us online. It includes registration, premium payment and reporting and even locating our offices nationwide.
            </Content>
          </Card.Content>
        </Card>
      </Columns.Column>

      <Columns.Column size={"one-quarter"}>
        <Card style={ cardStyle }>
          <Card.Image
            size="4by3"
            src="http://bulma.io/images/placeholders/1280x960.png"
          />
          <Card.Content>

          <Heading size={4}>Our Partner</Heading>
            <Content>
              We forge partnerships with only the best in the industry to fulfill our mandate of providing all Filipinos with accessible, available, acceptable and affordable health care services that will lead to better health outcomes and improved quality of life.
            </Content>
          </Card.Content>
        </Card>
      </Columns.Column>
    </Columns>
  );
}

export default InfoContent;