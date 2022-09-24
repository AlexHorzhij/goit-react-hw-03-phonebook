import styled from '@emotion/styled';


export const Item = styled.li`
    display: flex;
    justify-content: space-between;
    font-size: 26px; 
    `
export const Button = styled.button`
    font-size: 20px; 
    background-color: white;
    padding: 0px 15px;
    border-radius: 5px;
    margin-left: 20px;
    :hover, :focus{
        background-color: gray;
        color: white;
    }
`
export const List = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-size: 26px; 
    `
