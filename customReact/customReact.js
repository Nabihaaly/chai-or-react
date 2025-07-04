
// React m kese kaam hota hai

// function customRender(reactElement, container){

//     const domElement = document.createElement(reactElement.type)
    
//     domElement.innerHTML = reactElement.children ;
//     domElement.setAttribute('href',reactElement.props.href);
//     domElement.setAttribute('target',reactElement.props.target);

//     container.appendChild(domElement);
// }


function customRender(reactElement, container){

    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children ;
    for (const prop in reactElement.props) {
        if (prop === 'children') continue;            
        domElement.setAttribute(prop, reactElement.props[prop]);
    }    
    container.appendChild(domElement);
}

const reactElement = {
    type: 'a',
    props:{
        href:'https://Google.com',
        target: '_blank'
    },
    children:'Go visit my channel'
};

const reactDom = document.getElementById('root');

customRender(reactElement, reactDom);