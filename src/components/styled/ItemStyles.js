import styled from "styled-components";

//TODO: Need to see if theres a way I don't have to resuse all this code lol

// For items that need the vertical flex direction
export const FlexItemColumn = styled.div`
    display: flex;
    flex-direction: column;
    background-color: aquamarine;
    width: 90%;
    height: 90%;
    align-self: center;
    justify-self: center;
    justify-content: center;
`;

//For items that need the horizontal flex direction
export const FlexItemRow = styled.div`
    display: flex;
    flex-direction: row;
    background-color: aquamarine;
    width: 90%;
    height: 90%;
    align-self: center;
    justify-self: center;
    justify-content: center;
`;

//For flex items that will only have one element inside
//A bit useless, but nice for consistency.
export const FlexItemSingle = styled.div`
    display: flex;
    background-color: aquamarine;
    width: 90%;
    height: 90%;
    align-self: center;
    justify-self: center;
    justify-content: center;
`;

