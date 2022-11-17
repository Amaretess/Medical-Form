import styled from "styled-components";

const Title = () => {
    return (
        <Container>
            <h1>MEDICAL FORM</h1>
        </Container>

    );
}

export default Title;

const Container = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
`