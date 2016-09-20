function $(e) {
  return document.querySelector(e)
}

// function that creates element like React.createElement
function elem(e, attr) {
  var comp = document.createElement(e)

  attr && Object.keys(attr).forEach(function(key) {
    comp.setAttribute(key, attr[key])
  })

  for (var i = 2; i < arguments.length; i++) {
    var children = arguments[i]
    if (children instanceof Node) {
      comp.appendChild(children)
    } else if (children instanceof Array || children instanceof NodeList){
      children.forEach( function(d) {
        comp.appendChild(d)
      })
    } else {
      comp.innerHTML = children
    }
  }
  return comp
}

function onClick(component, func) {
  return component.addEventListener('click', func);
}

function insertBefore(elem, reference) {
  return reference.parentNode.insertBefore(elem, reference)
}

function changeBackground(color) {
  return function(e){
    this.style.background = color
  }
}

//////////////////////////////////////////////////////////////////////

function addNewSection() {
  return function(e) {
    var component =
    elem('div', {class: 'section'},
     elem('div', {}, 'shit'),
     elem('input', {}),
     elem('p' , {}, 'ladies out!')
    )
    onClick(component, changeBackground('green'))
    insertBefore(component, $('.add-component'))
  }
}

onClick($('.add-component'), addNewSection())

//////////////////////////////////////////////////////////////////////

var data = {
  design: 'Design',
  mother: 'Mother'
}

var x = ['monastery', 2, 'sleepyhead', 4, 'bibimbap', 'yada yada']

var mother = function(data) {
  return elem('div', {},
    elem('p', {}, data.design),
    elem('h2', {}, data.mother)
  )
}

var li = function(data) {
  return elem('li', {}, data)
}

var father = function(data) {
  return elem('ul', {},
    data.map(function(d) {
      return li(d)
    })
  )
}

var yolo = function(){
  return elem('div', {},
  father(x),
  mother(data)
  )
}

document.body.appendChild(yolo())
