const hiddenHeaders = document.querySelectorAll('.sectionTitle')
const hiddenText = document.querySelectorAll('.sectionText')
const aboutImage = document.querySelector('.aboutImage')

function handleScrollAnimation(element, styleClass){
    let observer = new IntersectionObserver(entries => {
        entries.forEach((entry) => {
            if(entry.isIntersecting)
                entry.target.classList.add(styleClass)
        })
    })
    observer.observe(element)
}

hiddenHeaders.forEach((element) => handleScrollAnimation(element, "show"))
hiddenText.forEach((element) => handleScrollAnimation(element, "show"))
handleScrollAnimation(aboutImage, 'aboutImageScale')
