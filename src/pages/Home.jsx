import styled from "styled-components";
import Title from "../components/Title";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <Container>
            <Title />
            <Link to="/medical-form" className="link"><h2>Get Started</h2></Link>
        </Container>
    );
}


export default Home;

const Container = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
`
