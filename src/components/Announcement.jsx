import styled from "styled-components"

 const Container= styled.div`
 heingh:30px;
 background-color: plum;
 color:white;
 display: flex;
 justify-content:center;
 align-item:center;
 font-size:16px;
 font-weight:500;
 margin-bottom:10px;
 `;

const Announcement = () => {
  return (
    <Container>
      Super Deal! Free Shipping On Order Above Rs5000
    </Container>
  )
}

export default Announcement
