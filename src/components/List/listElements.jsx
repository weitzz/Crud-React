import styled from 'styled-components'



export const Nav = styled.nav `
  background: #000000;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction:column;
  max-width:700px;
  margin:40px auto;
  color:#fff;
  border-radius:10px;
 
`;
export const Title = styled.h3`
    padding:30px;
    font-size: 2rem;
`;

export const Table = styled.table`
    border-collapse:collapse;
    margin:20px 0;
    font-size:1.2em;


`;
export const Thead = styled.thead`
    margin-bottom:10px;
   

`;
export const Tr = styled.tr`
    background:#01bf71;
    color:#fff;
    text-align:left;
    font-weight:600;
   

   
`;
export const Th = styled.th`
    padding:12px 15px;  
    

`;
export const Td = styled.td`
    padding:12px 15px;  
    color:#fff;
   
`;
export const LinkD = styled.a`
 text-decoration:none;
 transition:0.5s;

 &:hover{
    cursor: pointer;
   
    color:#bf0101;
}
 
`;
export const Link = styled.a`
     text-decoration:none;
     transition:0.5s;

&:hover{
   cursor: pointer;
   color:#01bf71;
}
`;

export const Tbody = styled.tbody`
    border-bottom:1px solid #dddd;
`;
export const TrB = styled.tr`
    border-bottom:1px solid #dddd;
`;