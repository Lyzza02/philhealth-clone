import { Content, Card, Media, Heading, Image, Columns } from "react-bulma-components";

interface HeroProps {
  url?: string;
  title?: string;
  subtitle?: string;
  header?: string;
  body?: string
}

function InfoContent(props: HeroProps) {
  const cardStyle = {
    width: 300,
    margin: 'auto',
    height: '100%', // Adjust the height as needed
  };

  return (
    <Card style={cardStyle}>
      {props.url && props.url !== "" && <Card.Image size="4by3" src={props.url} />}
      <Card.Content>
        <Heading size={4}>{props.title}</Heading>
        <Content>{props.body}</Content>
      </Card.Content>
    </Card>
  );
}


export default InfoContent;