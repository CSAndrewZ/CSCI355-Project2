const img1 = document.getElementById('img1')
const img2 = document.getElementById('img2')
const img3 = document.getElementById('img3')
const img4 = document.getElementById('img4')
const img5 = document.getElementById('img5')
const img6 = document.getElementById('img6')
const img7 = document.getElementById('img7')
const img8 = document.getElementById('img8')
const img9 = document.getElementById('img9')
const img10 = document.getElementById('img10')
const img11 = document.getElementById('img11')
const img12 = document.getElementById('img12')
const img13 = document.getElementById('img13')
const img14 = document.getElementById('img14')
const img15 = document.getElementById('img15')
const img16 = document.getElementById('img16')
const desc1 = document.getElementById('desc1')
const desc2 = document.getElementById('desc2')
const desc3 = document.getElementById('desc3')
const desc4 = document.getElementById('desc4')
const desc5 = document.getElementById('desc5')
const desc6 = document.getElementById('desc6')
const desc7 = document.getElementById('desc7')
const desc8 = document.getElementById('desc8')
const desc9 = document.getElementById('desc9')
const desc10 = document.getElementById('desc10')
const desc11 = document.getElementById('desc11')
const desc12 = document.getElementById('desc12')
const desc13 = document.getElementById('desc13')
const desc14 = document.getElementById('desc14')
const desc15 = document.getElementById('desc15')
const desc16 = document.getElementById('desc16')
const size1 = document.getElementById('size1')
const size2 = document.getElementById('size2')
const size3 = document.getElementById('size3')
const size4 = document.getElementById('size4')
const size5 = document.getElementById('size5')
const size6 = document.getElementById('size6')
const size7 = document.getElementById('size7')
const size8 = document.getElementById('size8')
const size9 = document.getElementById('size9')
const size10 = document.getElementById('size10')
const size11 = document.getElementById('size11')
const size12 = document.getElementById('size12')
const size13 = document.getElementById('size13')
const size14 = document.getElementById('size14')
const size15 = document.getElementById('size15')
const size16 = document.getElementById('size16')
const price1 = document.getElementById('price1')
const price2 = document.getElementById('price2')
const price3 = document.getElementById('price3')
const price4 = document.getElementById('price4')
const price5 = document.getElementById('price5')
const price6 = document.getElementById('price6')
const price7 = document.getElementById('price7')
const price8 = document.getElementById('price8')
const price9 = document.getElementById('price9')
const price10 = document.getElementById('price10')
const price11 = document.getElementById('price11')
const price12 = document.getElementById('price12')
const price13 = document.getElementById('price13')
const price14 = document.getElementById('price14')
const price15 = document.getElementById('price15')
const price16 = document.getElementById('price16')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 2500)

function getData(){
    img1.innerHTML = '<img class="womens-images" src="images/wt1.webp" alt="wt1" loading="lazy">'
    img2.innerHTML = '<img class="womens-images" src="images/wt2.jpg" alt="wt2" loading="lazy">'
    img3.innerHTML = '<img class="womens-images" src="images/wt3.jpg" alt="wt3" loading="lazy">'
    img4.innerHTML = '<img class="womens-images" src="images/wt4.jpg" alt="wt4" loading="lazy">'
    img5.innerHTML = '<img class="womens-images" src="images/wb1.jpg" alt="wb1" loading="lazy">'
    img6.innerHTML = '<img class="womens-images" src="images/wb2.jpg" alt="wb2" loading="lazy">'
    img7.innerHTML = '<img class="womens-images" src="images/wb3.jpg" alt="wb3" loading="lazy">'
    img8.innerHTML = '<img class="womens-images" src="images/wb4.webp" alt="wb4" loading="lazy">'
    img9.innerHTML = '<img class="womens-images" src="images/ws1.webp" alt="ws1" loading="lazy">'
    img10.innerHTML = '<img class="womens-images" src="images/ws2.jpg" alt="ws2" loading="lazy">'
    img11.innerHTML = '<img class="womens-images" src="images/ws3.webp" alt="ws3" loading="lazy">'
    img12.innerHTML = '<img class="womens-images" src="images/ws4.webp" alt="ws4" loading="lazy">'
    img13.innerHTML = '<img class="womens-images" src="images/wa1.webp" alt="wa1" loading="lazy">'
    img14.innerHTML = '<img class="womens-images" src="images/wa2.webp" alt="wa2" loading="lazy">'
    img15.innerHTML = '<img class="womens-images" src="images/wa3.webp" alt="wa3" loading="lazy">'
    img16.innerHTML = '<img class="womens-images" src="images/wa4.webp" alt="wa4" loading="lazy">'
    desc1.innerHTML = 'Basketball & Letter Graphic Kangaroo Pocket Drawstring Thermal Hoodie'
    desc2.innerHTML = ' March Madness T-shirt '
    desc3.innerHTML = ' Women\'s Basketball Hawkeye Full Sleeve '
    desc4.innerHTML = ' Nike Full Sleeve '
    desc5.innerHTML = ' Adidas Joggers '
    desc6.innerHTML = ' Nike Sweatpants '
    desc7.innerHTML = ' Nike Shorts '
    desc8.innerHTML = ' Puma Sweatpants '
    desc9.innerHTML = ' Puma Stewie 1 Causing Trouble '
    desc10.innerHTML = 'Nike Court Vision'
    desc11.innerHTML = ' Nike HyperDunk 2023 TB'
    desc12.innerHTML = 'LI-NING Wow 7 Series'
    desc13.innerHTML = ' Nike Wristbands: Pink '
    desc14.innerHTML = ' Nike Elite Socks '
    desc15.innerHTML = ' Nike Elite Arm Sleeves '
    desc16.innerHTML = ' Nike 2-Pair Headbands '
    size1.innerHTML = 'Sizes: S, M, L, XL'
    size2.innerHTML = ' Sizes: S, M, L, XL'
    size3.innerHTML = ' Sizes: S, M, L, XL'
    size4.innerHTML = ' Sizes: S, M, L, XL'
    size5.innerHTML = 'Sizes: S, M, L, XL '
    size6.innerHTML = ' Sizes: S, M, L, XL'
    size7.innerHTML = 'Sizes: S, M, L, XL '
    size8.innerHTML = ' Sizes: S, M, L, XL '
    size9.innerHTML = ' Sizes: 7-13 '
    size10.innerHTML = ' Sizes: 7-13 '
    size11.innerHTML = ' Sizes: 7-13 '
    size12.innerHTML = ' Sizes: 7-13 '
    size13.innerHTML = 'Sizes: S, M, L '
    size14.innerHTML = ' Sizes: XS, S, M, L, XL '
    size15.innerHTML = ' Sizes: S, M, L '
    size16.innerHTML = ' Sizes: S, M, L'
    price1.innerHTML = 'Price: $15.00 USD'
    price2.innerHTML = ' Price: $10.00 USD '
    price3.innerHTML = ' Price: $20.00 USD'
    price4.innerHTML = ' Price: $30.00 USD '
    price5.innerHTML = ' Price: $30.00 USD'
    price6.innerHTML = ' Price: $30.00 USD  '
    price7.innerHTML = ' Price: $25.00 USD '
    price8.innerHTML = ' Price: $20.00 USD '
    price9.innerHTML = ' Price: $80.00 USD '
    price10.innerHTML = ' Price: $90.00 USD'
    price11.innerHTML = ' Price: $85.00 USD'
    price12.innerHTML = ' Price: $75.00 USD '
    price13.innerHTML = ' Price: $5.00 USD '
    price14.innerHTML = ' Price: 1 pair = $2.00 USD '
    price15.innerHTML = ' Price: $10.00 USD '
    price16.innerHTML = ' Price: $8.00 USD '

    animated_bgs.forEach(bg => bg.classList.remove('animated-bg'))

    animated_bg_texts.forEach(bg => bg.classList.remove('animated-bg-text'))
}