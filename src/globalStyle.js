import { createGlobalStyle } from 'styled-components';
<style>
@import url('https://fonts.googleapis.com/css2?family=Tajawal:wght@200&display=swap');
</style>


export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin:0;
    padding: 0;
    font-family: 'Tajawal', sans-serif;
    
  }
`;