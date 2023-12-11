         
         // Get the header element 
let header = document.getElementsByTagName("header")[0]

    // Get the section elements 
let sections = document.getElementsByTagName("section")

   // Get the section element with class = "current"
let Current = document.getElementsByClassName('current')[0]


  // Get the section that comes after the current section       ?????? use next sibling
let sectioncomesAftercurrent = Current.nextElementSibling

  //get the h2 node form the section before the 'current' section    ???????????? use previous sibling
let sectionBeforethecurrent = Current.previousElementSibling.firstElementChild

  // Get the div that contains the section that has an h2 with a class of 'highlight'
//let  div = document.querySelector('div section h2.highlight').parentElement.parentElement
let div = document.querySelector('div')

  // Get all the section that contain an H2 (using a single statement)
let sectionwithH2 = document.querySelectorAll('section h2')
