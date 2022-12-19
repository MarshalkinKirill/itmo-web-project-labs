let disable = (pageLocation) => {
    if ((pageLocation == "Immortal.html")||(pageLocation == "Arcana.html")||(pageLocation == "Other.html")){
        // let containerElement = document.querySelector('.header')
        // console.log(pageLocation)
        let css = '.header div:hover > ul{ display: none; }'
        let style = document.createElement('style');
        style.appendChild(document.createTextNode(css));
        document.getElementsByTagName('head')[0].appendChild(style);
    }
    if(pageLocation == "Immortal.html"){
        let css = '.market-menu__immortal a { background-color: #464646;\n' +
            '        color: #ffffd0;\n' +
            '        box-shadow: inset 1px 3px 7px -5px black;\n' +
            '        transition: all 0.2s; }'
        let style = document.createElement('style');
        style.appendChild(document.createTextNode(css));
        document.getElementsByTagName('head')[0].appendChild(style);
    }
    if(pageLocation == "Arcana.html"){
        let css = '.market-menu__sets a { background-color: #464646;\n' +
            '        color: #ffffd0;\n' +
            '        box-shadow: inset 1px 3px 7px -5px black;\n' +
            '        transition: all 0.2s; }'
        let style = document.createElement('style');
        style.appendChild(document.createTextNode(css));
        document.getElementsByTagName('head')[0].appendChild(style);
    }
    if(pageLocation == "Other.html"){
        let css = '.market-menu__other a { background-color: #464646;\n' +
            '        color: #ffffd0;\n' +
            '        box-shadow: inset 1px 3px 7px -5px black;\n' +
            '        transition: all 0.2s; }'
        let style = document.createElement('style');
        style.appendChild(document.createTextNode(css));
        document.getElementsByTagName('head')[0].appendChild(style);
    }
}
