devUi.io -> components 

# project based learning not learn syntax 
- for JS and react both 
- concepts smjhna 
- react -> componnents, state jjitny achy sy use krty ho (complex use kro) utny achy react dev 

ek library hai jo UI bnany ka kaam krti hai structutre componentes wgera

React DOM -> react JS or browser ko connect kryyga 

mobile app -> React + react Native  

WebDev -> react + React  DOM

react + React  DOM ki CDN 

CDN links m sy copy krky html m script.js kt sth hi paste 
```
var h1 = React.createElement('h1',null,"Hello from React)  // h1, property (id, styling etc), h1ka content

console.log(h1) //smjh nahi ayega ye output 
```

ab isko UI m dikhany ky lye DOM ki help chahye 
```
var parent = document.querySelector('#parent')

var root = ReactDOM.createRoot(parent)

root.render(h1)
```

react JS real DOM ki cppy bnake rkhta hai
VirtualDOM principle 

button ki click pe H1 click krna hau to wo change krdega or comparision m dekhega kay bss button change hua baki wese hi 

ab real dom nh virtual dom sy hum interact krenfy 

pehly whatsapp sy msg kiya msg gaya puri chat sbkch dubara rerender hogi 



ab react ki hgelp sy srf msg render hoga baki sb compariison krky same rhyga 

me contact w react react w DOM and 
DOM back to react then me 

vite bundler -> reactJS ka complete folder bnany m help

# html 
html is markup language -> structure create krty hain issy not programming

doctype boiler plate code sy pta lgta hai knsa version

browser pe chlti hai

2 types of tags
inline, bloack tags
selfclosing tags 
hr, br, immg, video, 
17  markups hoty hain 

extension imp
kis type ki file hai system ko pta lgta hai

.htm ot .html

conventions -> index.html

Agr beceh m koi dta nahi dena to component ko aesy band krsty hain < div />

# CSS ->
 cascading styling sheet .. cascading -> top to bottom read krta hai 

## selectors in CSS -> 
4 basic : precedence bottom to top
1. Id selector
2. .class selector 
3. type selector H2, para, div, span, div, nav, strong, em, 
html element type likh ke direct target krengy
4. universal selector * sy


CSS types
inline 
internal
external

attribute :
- provide additional information about elements
- in the start tag
-  in name/value pairs 
-  eg class = etc 
  
opening tags main us tag sy related uski aditional infi eg class id
closing tags: 

CSS ko sochein as a box, div is box border wgera hoga uska 

inline element: 
block elements: <p> 

A block-level element always starts on a new line and takes up the full width available
An inline element does not start on a new line and it only takes up as much width as necessary
The <div> element is a block-level element and is often used as a container for other HTML elements

html phases 
and 
semantics in html 
a wgera islye use krty hain kay search krein to wo address kay tag m dekhy 

multipage bar bar change ho page 
single page ek hi pe link ky through jayein

# react.js 
- JS library 
- it builds UI 
fast, optimized, single page ek hi page m content change horha hota hai, views change hngy .. it does that w the help of JS

navbar -> component hai
isko 100 pages m use krrn hai ek hi jaga changes krengy isko imprt krengy

library and framework d/f
framework: ussi m kaam krengy bahar sy kch lene ki need nahi

React -> library: srf base mojud hai, baki chezien import krni hain, koi bh lbray add on krlein
react, functionality provide krti hai bs

Angular -> framework, is m routing wgera bh mojud hoti hai.. sari functionality hai

- single page application 
- multiple resueable components 

JSX use krti hai html ki jagah 

vercel -> company jisny bnai react, next 

Vite -> react application chalany kay lye, basuc app dega uspe coding shuur krengy 

plain JS -> vanilla JS

React 2 tarh sy likh skty hain
- typescript
- JS 

In index.html -> div id root -> is m puri application chlegi w the help of JS

src > assests (/image. font) 
src > App.tsx (component-PascalCase) 

componnet fucntion sy shuruhoga return imp hai kynky component return krta hhai 

node_modules: wo libraries jo is application ko chaleingi. CMD m 
   ``` npm install ```
sy download hojaeingi 

: wo libraries jo iss

localhost:5173
Ip address :port no

export default App1

``` npm run dev``` 

import Name from "./Name";
jitna data return krna hai component ka wo ksi parent elemment m ho kynky react wo pura utha  ke render krta hai 

component must be in any parent element so it converts and render to html 

nextJS, react pe likha wa ek rapper hai 

page pe Ctrl + U shows source code jo server se aake browser pe render hua  

### Drawbacks of react : 
- single page app -> root ky andr chlri hai -> JS ki help sy chlri hai , JS behinf the scene codinf krrhi hai lkn yahn nazar nahi arhi wo.. is problem ko resolve krny kay lye nextjs aai 
- nextjs react kay upar likhi gai hai 


page pe Ctrl + U shows source code jo server se aake browser pe render hua  

server sy JS bundle m data bhejta hai  

search engine sy google search krta hai html elements readf krta hai 
iski wajh sy website kbh rank nahi krpati 

backend pe html m convert krky frontend pe bh html m bhejta hai jiski  wajh sy searching problem hal hui -> nextjs krti hai ye

choice hai budle bnana hai ya internal use krni hai 
internal use krni hai bss portal hai react use krlein 

react  ko inline CSS object ki form m dety hain 

to wrtie JS in JSX write in  
{} -> js start (key value pair)
{{}} -> object 
{{{}}} -> 

use state 

dev mode -> bfr deployment 
dev production -> deployed



# chai or code 

roadmap
- why learn 
  - easy to manage & build complex frontend
- when learn
  - mastery JS 
  - most project dont need react in initial phase 
- why react created ?
  - ghost(fandom) msg problem  (in fb) (no consistency in UI)
  - state -> js  & UI -> DOM (state manage by JS, UI managed by DOM inky dramyan baat nh hori thi)
    - JS and DOM ko sync krna tha 



react is a libary

library(cool dude) vs framework (rules)

### TOPICS TO LEARN 
- core of react (state or UI manipulation, JSX)
- component reusability 
- reusing of component (properties)
- how to propogate change (hooks)-> usestate, useeffect 5-10 prhlein concept smjhlein bs unka 

React end here

### additional Addon to react  
JS libraries hain ye additional 
- router (react dont have router)
- state managemennt
  - redux, redux toolkit, context API, zustand
- class based component
  - legacy code
- BAAS Apps  (backend as a service)
  - appwrite, firebase, superbase (backend wgera likhna nahi prta )

FreeApi.app -> chai or code 

### after react 
- React isnot complete solution
   no seo, browser render of JS, no routing 
- framework (next.js, gatsby, remix) 



### start
nodejs -> jS ka compiler 

bundler -> vite 
js ki files combine krky ek file dedeta hai

react library
- react-dom (web)
- react-native (mobile apps)

npm -> node package manager (installer)
npx -> executer 

**bulky utility:**
npx create-react-app name (utility hai) *(slow)*
cd name
dir (paclage.json dikhna chhaye)

 npm run start <!-- yahann kch bh script likh skty hain -->

**vite** start: light weigted 
 npm create vite@latest
 cd proj_name
 dir
 npm i (install all req pacckages)
 npm run dev

 hr react project ki readme edit krna 
 
concepts: 
in basic react(bulky utility):
 react scripts -> index.html m main.js/index.js load krti hai
react inject:
 reactDOM.createRoot(doc,.getElemnentById)


**engineerying smjh agai phr to asan**

fragemtn m rkhein wo return krein  : <> </>

best practiise file name CamelCase
convention: funct name CamelCase\

{} evaluator expresision js ka final output likhty hain bss. koi expression nahi evaluate result
createElement object m aesy aata hai 
  ```javascript
  , variable 
  ```

## Hooks 
  UI updation ko react control krta hai
  hooks ky through hngy

 ### UseState: state and UI ka sync 

 declares a state variable that you can update directly.

useState jitny updsates bhejny hain var or Ui ko unhein batches m bhejta hai, ek batch m ek stateent repeated hai to wo ek hi bar wo kam kryga
fibre(diffing algo sy or optimized hogya batching )
```   setCounter(counter+1)  
      setCounter(counter+1)  
```
setCounter callback accept krta hai, 
lastupdated state fetch kri issy -> prevCounter
```
setCounter(prevCounter => {prevCounter+1})
```

### virtual DOM, fibre and reconccillation
DOM pura repaint hota hai webstructure dubara sy tayar hota hai lkn

virtual dom m pura trace or track krskty ho srf jo calues change hui hain unhien change krdo 

kch element netwrok pe depend hai netwrok call sy update ati rhygi or apko update bar bar krna perega

immediately update kay bjaye algo lgake update krein

UI UPDATION 

reacr fibre documentation:
hiteration 
fibre 
reconccillation recursive algo:
- reconsider ksko update krna hai kisko nahi 
- to diff 1 tree from another  
- virtual DOM ka behinf the scene

fibre m list ki perforance improve krni hai to keys ka use krna hoga hr iteration m 

### Props
ek compinent sy dusry mm valye bhejty hain 
reusable components 
reactsnippet extension
  rfce 

```
  kb knsi chez rander hogi it isnt in my control
```

# Hooks  (use--)
its a method hacing var and fnc 
custom hooks:
  - method returnign array
  - purelly JS return krty hain


### useRef
ksi chez ka jb refrence lena ho 
passwordRef.current?.select()  islye rkskty hain ky refrence  use krksyt hin

### useEffect
jese hi component load hoga to ye call hoga 
agr kch change to rerender kro 

### useCallback
- memorize krta hai functioon ko jitna hosky (cache m rkhta hai)
- jo bhchange hua ussy cache m rkehin optimized kor method ko agr change  hota hai to 
- optimization kay lye 
- dependency hai bh \ya nh us hisaab sy lgana hai

// jsx m loop mgaein to ek key pass krein, key kiya honi chhaye?
// performance m bht late krta hai react elemeent bnaye jarha hota hai
// loop m performance kani hai ti key pass krni hogi  

### useId 
useId is a React Hook for generating unique IDs that can be passed to accessibility attributes.
```
const id = useId()
```

useId should not be used to generate keys in a list. Keys should be generated from your data.


# React Router DOM (6.4 v)

### 1. What Is React Router?
> React Router is a JavaScript library used with React to create single-page applications (SPAs) with multiple "pages" (routes) — without reloading the page.

🔁 Recap: Steps to Use React Router in Vite
1. Install React Router
2. Create pages (Home, About, etc.)
3. Create a layout with Outlet
4. Define routes in main.jsx using createBrowserRouter
5. Use <Link> for internal navigation
6. Wrap everything in <RouterProvider>

1. Key Terms You Must Know

| Term              | Description                                                               |
| ----------------- | ------------------------------------------------------------------------- |
| **Route**         | A specific path (e.g. `/`, `/about`) in your app                          |
| **Component**     | The UI that should show when a route is visited                           |
| **Router**        | The overall route manager (`BrowserRouter` or `createBrowserRouter`)      |
| **Nested Routes** | Routes inside a layout, like dashboard/sidebar logic                      |
| **Link**          | React version of `<a>` tag for internal navigation                        |
| **Outlet**        | is m automatiocally react routerdom kio taraf sy nesting ki jaskti hai,main.jsx ky top m layout diya phr nesteing hoskti hai Placeholder where child components (nested routes) render inside a layout |

5. Define Routes (main.jsx)
```
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> }, // acts as path: ''
      { path: 'about', element: <About /> },
      { path: 'contact', element: <Contact /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
``` 

### Loader 
jesi hi mouse jata hai even clivk hony sy eohly feyching shuru hojati hai or wo fetching kay bad cache m bh rkhta hai 

Router :
- isky sth kch chezein milti hain jese rwact m useState wgera 
- link navlink 
- a tag pura page refresh hota hai, islye link use krty hain.. reaxct use hi islye krrhy hain kay refresh na ho pur apage 
- navLink: provide additional chezein, callback m classes likh ke ussy manipulate krein, isActive sy highlisht krein.. home, contactus wgera..navlink btayega app jis page m hain url m wi hai to aap active ho us m 
``` 
inside classname
{isActive? "orange text": "text-gray"}

``` 
- in main.jsx : reactprovider : router chahye issy 
- routerbnana : 
1. createBrowserRouter() : method jis m array hei, arrray m list daldenge jo objects chhaye, outlet import kiya  wo layout ko as a base use krega jaahan outlet dedya usky andr chezein same rhengi andar ki chezein chnage hotu rhengi
2. 

2 ways of rendering footer and header :
1. hr file m sth header and footer impoert krky likhein
2. ek jagah router sy krlein or bss andr kay componnets change krty rhein route ky according

## best practises 
- components > ek file m sary immport krlye ppohr wo file export krdu 
- components > header, footer folder 

### interview questions :
- a tag pura page refresh hota hai, islye link use krty hain.. reaxct use hi islye krrhy hain kay refresh na ho pur apage 

### export when cbraces and when not 
| Do you use `export default`?                   | → ❌ No Braces in `import`  |
| ---------------------------------------------- | -------------------------- |
| Do you use `export const` / `export function`? | → ✅ Use Braces in `import` |
