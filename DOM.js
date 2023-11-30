         
         // Get the header element 
let header = document.getElementsByTagName("header")

    // Get the section elements 
let sections = document.getElementsByTagName("section")

   // Get the section element with class = "current"
let Current = document.getElementsByClassName('current')


  // Get the section that comes after the current section       ?????? use next sibling
let sectioncomesAftercurrent = Current[0].nextElementSibling

//let sectioncomesAftercurrent = document.getElementsByClassName('current').nextSibling

  //get the h2 node form the section before the 'current' section    ???????????? use previous sibling
let sectionBeforethecurrent = Current[0].previousSibling

  // Get the div that contains the section that has an h2 with a class of 'highlight'
let  div = document.getElementsByClassName('highlight')

  // Get all the section that contain an H2 (using a single statement)
let sectionwithH2 = document.querySelectorAll('section h2')
