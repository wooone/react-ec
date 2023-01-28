import { Container, Row } from "reactstrap";
import TimerCount from "../../components/timerCount/TimerCount";

const HomePageCountSection = () => {
  return (
    <>
      <section className="bg-slate-700 h-[300px]">
        <Container>
          <Row>
            <TimerCount />
          </Row>
        </Container>
      </section>
    </>
  );
};

export default HomePageCountSection;
