let errorParagraph= document.getElementById("error")
console.log(errorParagraph)

function purchase(){
    console.log("clicked")
    errorParagraph.innerText="Something went wrong, please try again"
}