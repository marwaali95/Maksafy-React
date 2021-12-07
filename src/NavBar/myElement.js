import styled from "styled-components";
import {SearchOutline} from '@styled-icons/evaicons-outline/SearchOutline'

var myInput = document.createElement('input');
myInput.setAttribute('placeholder',"اسم الطالب");


export const TheRightContainer = styled.div`
width: 71vw;
height: 100 vh;
padding: 5rem calc((100vw - 1300px) / 2);
background-color: #E9EBEF;
display: flex;
flex-direction: column;
justify-content: center;

@media screen and (max-width: 650px) {
    width: 100%;
}

`
export const TheLeftContainer = styled.div`
width: 29vw;
height: 100 vh;
padding: 5rem calc((100vw - 1300px) / 2);
background-color: #13A69A;
display: flex;
flex-direction: column;
justify-content: center;
`
export const SearchInput = styled.input`
direction: rtl;
border-radius:20px;
`
export const searchIcon = styled(SearchOutline)`
margin-left: 5px;
font-size: 20px;

`
export const YellowButton = styled.button`
width: 48;
height:56;
display: inline-flex;
`
export const SearchButton = styled.button`
width: 48;
height:56;
display: inline-flex;
`






