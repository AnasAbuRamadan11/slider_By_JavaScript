// get slider items || Array.form
let sliderImages = Array.from(document.querySelectorAll(".sliderContainer img"))

// get number of slides
let slidesCount = sliderImages.length

// Get current slide
let currentSlide = 1

// Slide Number element
let slideNumberElement = document.getElementById("slide-number")

// previous and next button
let nextButton = document.getElementById("next")
let prevButton = document.getElementById("prev")


// Hundle Click on previous and e=next button
nextButton.onclick = nextSlide
prevButton.onclick = prevSlide



// create the main ul element
let paginationEle = document.createElement("ul")

// set id in ul
paginationEle.setAttribute("id", "pagination-ul")

// create list items based on slides count
for(let i = 1; i <= slidesCount; i++) {

    // create li
    let paginationItem = document.createElement("li")

    // set custom attributes
    paginationItem.setAttribute("data-index", i)

    // set item content
    paginationItem.appendChild(document.createTextNode(i))

    // append items to the main ul list
    paginationEle.appendChild(paginationItem)
}


// add the created ul to the page
document.getElementById("indicators").appendChild(paginationEle)



// Get the new created ul
let paginationCreatedUl = document.getElementById("pagination-ul")

// get pagination items || Array.form
let paginationBullets = Array.from(document.querySelectorAll("#pagination-ul li"))



// loop through all bullets items
for(let i = 0; i < paginationBullets.length; i++) {

    paginationBullets[i].onclick =function() {

        currentSlide = parseInt(this.getAttribute("data-index"))

        theChecker()
    }

}



// function nextSlide
function nextSlide() {

    if(nextButton.classList.contains('disabled')) {

        // do nothing
        return false
    }
    else {

        currentSlide++

        theChecker()
    }
}

function prevSlide() {

    if(prevButton.classList.contains('disabled')) {

        // do nothing
        return false
    }
    else {

        currentSlide--

        theChecker()
    }
}

// trigger the checker function
theChecker()



// create the checker function
function theChecker() {

    // set the slide number
    slideNumberElement.textContent = `Slide #${currentSlide} of ${slidesCount}`

    // remove all active classes
    removeAllActive()


    // set active class of current slide
    sliderImages[currentSlide - 1].classList.add("active")

    // set active class on current pagination item
    paginationCreatedUl.children[currentSlide - 1].classList.add("active")

    

    // check if current slide is first
    if(currentSlide == 1) {


        // add disabled class on previous button
        prevButton.classList.add("disabled")
    }

    else {

         // remove disabled class on previous button
        prevButton.classList.remove("disabled")
    }


    // check if current slide is last
    if(currentSlide == slidesCount) {


        // add disabled class on next button
        nextButton.classList.add("disabled")
    }

    else {

         // remove disabled class on next button
        nextButton.classList.remove("disabled")
    }
}


// remove all active classes from image and pagination Bullets
function removeAllActive() {

    // loop form images
    sliderImages.forEach(function(img) {

        img.classList.remove("active")
    })

    // loop through pagination bullets
    paginationBullets.forEach(function(bullet) {

        bullet.classList.remove("active")
    })
}








