
//Highlight all of the words over 8 characters long in the paragraph text (with a yellow background for example)

let x = document.getElementsByTagName('p').innerText;
     console.log(x);
y= x.split(' ');

    for(let i=0;i<y.length;i++){

        if (i.length>=8){
           y[i]= "<span class='change'>" + y[i] + "</span>";
        }
    }

    






















// // select the body

// document.querySelector("body");

// //how to select header

// document.querySelector('header');
// //select all elements with class or id
// document.querySelectorAll('.quote');
// document.querySelectorAll('#quote');
// // select all subject names
// document.querySelectorAll('.subject')
// // select by navigator links
// document.querySelectorAll('nav' , 'a');
// //select all the  the life and quote
// document.querySelectorAll('.life.quote')
// //select all the <P> eklement containing the second mark  twian quote
// document.querySelector('#mark-twain-second p')
// //do the same thing , but use relative selection
// document.body.children[1].children[1].children[2].firstChild.nextSibling.children[0];
// //quotes about motivation
// document.querySelector(".motivation h2");

// //lets adda class simplicity to the first subject

// document.querySelector('.subject').classList.add('simplicity');

