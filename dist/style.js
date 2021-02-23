const style = `
html, body {
    max-width: 100% !important;
    overflow-x: hidden !important;
}
body {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.banner-bar {
    background-color: #FDE74C;
    width: 100%;
    color: #000000;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20vh;
}
h1 {
    font-family: 'Righteous', cursive;
    font-size: 8vw;
}
p {
    font-family: 'Roboto', sans-serif;
    position: relative;
    left: 12px;
}
h2 {
    font-family: 'Roboto', sans-serif;
    color: #ffffff;
    position: relative;
    font-size: 25px;
    left: 12px;
}
h3 {
    font-family: 'Roboto', sans-serif;
    color: #ffffff;
    position: relative;
    font-size: 20px;
    left: 12px;
}
.member-card {
    width: 250px;
    height: 34vh;
    margin-bottom: 5vh;
    background-color: rgb(240, 238, 238);
    box-shadow: 2px 5px 5px black;
    border-top-left-radius: 10px;
}
.card-container {
    position: absolute;
    top: 26vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 40vw; 
}
.card-top {
    background-color: #5BC0EB;
    border: 2px solid rgb(22, 134, 182);
    width: 246px;
    border-top-left-radius: 10px;
}
.card-bottom {
    display: flex;
    flex-direction: column;
    align-content: center;
}
`
module.exports = style;