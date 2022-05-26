var colors = ['#f9ed69', '#f08a5d', '#b83b5e', '#6a2c70', '#212121', '#757575', '#BDBDBD', '#000000'];
for(let i = 0; i<=9 ; i++){
    let random_color = colors[Math.floor(Math.random() * colors.length)];
    document.getElementById(i).style.background = random_color;
}