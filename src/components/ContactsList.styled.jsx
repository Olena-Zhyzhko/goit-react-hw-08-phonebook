import styled from '@emotion/styled'

export const List = styled.ul`
    padding-left: 10px;
`;

export const Item = styled.li`
    width: 320px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
    font-size: 16px;
    font-weight: 500;
`;

export const BtnDelete = styled.button`
    padding: 3px 5px;
    border-radius: 5px;
    border: 1px solid grey;
    font-size: 12px;
    cursor: pointer;
`;