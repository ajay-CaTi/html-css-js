# Readme file is very helpfull

# contains code related data

git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/ajay-CaTi/html-css-js.git
git push -u origin main

CSS

\*{} // Universal selector

h1{} // element selector

.class{} // class selector

a[href="google.com"] // attribute selector

div, h1, p, span, .custom{} // short hand

span > p // child selector/combinator [ work on strictly below level ]

li li // decendent combinator [ work on inside i.e nested ]

h1+p{} // adjacent sibling selector

h1~p // general sibling selector [ samle level only p ]

text-transform:lowercase, uppercase;

text-intedent:25%; // test start after 25% space

line-height:20px

letter-spacing:5px

word-spacing:5px

text-shadow: 2, 5, 2px red // x, y, blurrpx, color

background-image: url('/some.jpg')
backgound-repeat:no-repete , repeat-x, repeat-y
background-attachment: fixed;
background-size: cover;
background-size: curtain; // no stratch
background-position: x, y 10px , 45px;

absolute fixed value
relative value not fixed depended

font-size: 500%; apne parents ka 500%

font-size: 2em; apne parents ka 2x

font-size: 2rem; apne root element ka 2x

font-size: 10vw; screen width ka 10%

font-size: 10vh; screen height ka 10% [ IMP ]

font-size: 10vmin; screen height ya width me jo bhi small ho uska ka 10%

font-size: 10vman; screen height ya width me jo bhi jada ho uska ka 10%

px fixed

li\*5{options$}

list-style-image: url(); li have image

list-style:none; [ IMP ]

box-sizing:border-box; if width is set to 200px then total width includes its margin and padding is 200px

overflow: hidden // over flow content hidden
overflow: auto // BEST
overflow: scroll //

background-image: linear-gradient(to bottom, crimson, yellow);

POSITION
posiion: static, relative, absolute, fixed

STATIC Bi Default
Relative Apni actual position
Absolute Apni Parent position
Fixed  
Sticky top:0 [ Navbar ]

TO CENTER

display: block line element
width 10px
margn auto
