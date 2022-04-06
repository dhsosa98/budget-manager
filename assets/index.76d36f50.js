var R=Object.defineProperty,A=Object.defineProperties;var D=Object.getOwnPropertyDescriptors;var v=Object.getOwnPropertySymbols;var H=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var y=(o,r,t)=>r in o?R(o,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[r]=t,u=(o,r)=>{for(var t in r||(r={}))H.call(r,t)&&y(o,t,r[t]);if(v)for(var t of v(r))P.call(r,t)&&y(o,t,r[t]);return o},h=(o,r)=>A(o,D(r));import{j as f,s as g,R as b,W as T,r as c,a as U}from"./vendor.d31cebae.js";const W=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))l(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const d of i.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&l(d)}).observe(document,{childList:!0,subtree:!0});function t(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerpolicy&&(i.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?i.credentials="include":n.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function l(n){if(n.ep)return;n.ep=!0;const i=t(n);fetch(n.href,i)}};W();const e=f.exports.jsx,s=f.exports.jsxs,p=f.exports.Fragment,z=({onChangeBudget:o,handleBudget:r,errorMessage:t,resetExpenses:l,budget:n})=>s("header",{children:[e("h1",{children:"Budget Manager"}),n.success?s(p,{children:[e("button",{onClick:l,children:"Reset Expenses"}),s("h1",{children:["Budget: ",n.value]}),s("h2",{children:["Avariable: ",n.avariable]}),s("h3",{children:["Expensed: ",n.expensed]}),s("h4",{children:["Percentage: ",n.percentage]})]}):s(p,{children:[e("input",{placeholder:"Insert your budget",value:n.value===0?"":n.value,onChange:o}),e("button",{onClick:r,children:"Add"}),t&&e("p",{children:t})]})]}),S=()=>s(p,{children:[e("option",{value:"",children:"--- Select ---"}),e("option",{value:"food",children:"Food"}),e("option",{value:"save",children:"Save"}),e("option",{value:"health",children:"Health"}),e("option",{value:"home",children:"Home"}),e("option",{value:"leisure",children:"Leisure"}),e("option",{value:"expense",children:"Other Expense"}),e("option",{value:"suscriptions",children:"Suscriptions"})]}),G=({filter:o,onChangeFilter:r,budget:t,listExpense:l,handleOpen:n})=>e(p,{children:t.success&&s("main",{children:[s("div",{children:[e("h1",{children:"Filter:"}),e("select",{value:o,onChange:r,children:e(S,{})})]}),e("div",{children:l.length>0?s(p,{children:[e("h2",{children:"List of Expenses:"}),l.map(i=>s("div",{children:[e("p",{children:i.name}),e("p",{children:i.quantity}),e("p",{children:i.category})]}))]}):e("div",{children:"There aren't Expenses to show"})}),e("button",{onClick:()=>n(!0),children:"+"})]})}),K=({handleSubmit:o,setExpense:r,expense:t,isOpen:l,handleOpen:n})=>l?b.createPortal(e(J,{children:l&&s(Q,{onSubmit:o,children:[e("label",{children:"Name:"}),e(x,{value:t.name,onChange:i=>{r(h(u({},t),{name:i.target.value}))}}),e("label",{children:"Quantity: "}),e(x,{type:"number",value:t.quantity,onChange:i=>{r(h(u({},t),{quantity:Number(i.target.value)}))}}),e("label",{children:"Category: "}),e(V,{value:t.category,onChange:i=>{r(h(u({},t),{category:i.target.value}))},children:e(S,{})}),e("button",{type:"submit",children:"Add"}),e("button",{onClick:()=>n(!1),children:"Close"})]})}),document.getElementById("modal")):null,Q=g.form`
        display: flex;
        flex-direction: column;
        max-width: fit-content;
        position: absolute;
        padding: 10px;
        background-color: white;
    `,x=g.input`
        padding: 10px;
    `,J=g.div`
        display: flex;
        position: absolute;
        justify-content: center;
        align-items: center;
        height: 100vh;
        width: 100vw;
        background-color: rgb();
        opacity: 0.7;
    `,V=g.select`
padding: 10px;
`,X=T`
    body {
        margin: 0;
        padding: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif;
    }`,Y=()=>{const[o,r]=c.exports.useState({success:!1,value:0,avariable:0,expensed:0,percentage:100}),[t,l]=c.exports.useState([]),[n,i]=c.exports.useState({id:"",name:"",quantity:0,category:""}),[d,C]=c.exports.useState(""),[E,F]=c.exports.useState([]),[M,N]=c.exports.useState(""),[O,k]=c.exports.useState(!1),B=()=>{l([])};c.exports.useEffect(()=>{if(t.length>0){let a=0;t.map(q=>{a+=q.quantity}),r(h(u({},o),{avariable:o.value-a,expensed:a,percentage:a/o.value*100}))}},[t]),c.exports.useEffect(()=>l(d?t.filter(a=>a.category===d):[...E]),[d]);const L=a=>{a.preventDefault(),n.name&&(l([...t,n]),F([...t]))},j=a=>{r(h(u({},o),{value:Number(a.currentTarget.value),avariable:Number(a.currentTarget.value)}))},w=()=>o.value!==0?r(h(u({},o),{success:!0})):N("Not is a valid budget"),I=a=>{C(a.target.value)},m=a=>{k(a)};return s(p,{children:[e(X,{}),e(Z,{}),s("div",{style:{display:"grid"},children:[e(z,{onChangeBudget:j,handleBudget:w,errorMessage:M,resetExpenses:B,budget:o}),e(G,{filter:d,onChangeFilter:I,listExpense:t,budget:o,handleOpen:m}),e(K,{handleSubmit:L,setExpense:i,expense:n,handleOpen:m,isOpen:O})]})]})},Z=g.div`
  min-height: 60vh;
  width: 100%;
  background-color: #5a3a72;
  position: fixed;
  z-index: -1;
`;b.render(e(U.StrictMode,{children:e(Y,{})}),document.getElementById("root"));
