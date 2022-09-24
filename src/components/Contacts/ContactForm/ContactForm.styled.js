import styled from '@emotion/styled'

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    font-size: 20px;
    padding: 15px 10px;
    border: 1px solid black;        
`

export const FormTitle = styled.h3`
    margin: 0px;
    font-size: 20px;
    margin-bottom: 5px;
    line-height: 1.0;
`
export const FormInput = styled.input`
    width: 300px;
    padding: 5px;
    margin-bottom: 20px;
    border: 1px solid gray;
`

export const SubmitButton = styled.button`
    background-color: white;
    width: 150px;
    padding: 5px;
    font-size: 16px;
    border-radius: 5px;
    :hover, :focus{
        background-color: gray;
        color: white;
    }
`