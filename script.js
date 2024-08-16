const pages = {
    1: { title: "Image no.1", image: "Images/image1.jpg" },
    2: { title: "Image no.2", image: "Images/image2.jpg" },
    3: { title: "Image no.3", image: "Images/image3.jpg" },
    4: { title: "Image no.4", image: "Images/image4.jpg" },
    5: { title: "Image no.5", image: "Images/image5.jpg" },
    6: { title: "Image no.6", image: "Images/image6.jpg" },
    7: { title: "Image no.7", image: "Images/image7.jpg" },
    8: { title: "Image no.8", image: "Images/image8.jpg" }
};

const pageTitle = document.getElementById('page-title');
const pageImage = document.getElementById('page-image');
const paginationLinks = document.querySelectorAll('.page-link');
const prevPage = document.getElementById('prev-page');
const nextPage = document.getElementById('next-page');

paginationLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const page = parseInt(link.getAttribute('data-page'));
        updatePage(page);
    });
});

function updatePage(page) {
    pageTitle.innerText = pages[page].title;
    pageImage.src = pages[page].image;

    paginationLinks.forEach(link => {
        link.parentElement.classList.remove('active');
        if (parseInt(link.getAttribute('data-page')) === page) {
            link.parentElement.classList.add('active');
        }
    });

    if (page === 1) {
        prevPage.classList.add('disabled');
        nextPage.querySelector('a').setAttribute('data-page', page + 1);
        nextPage.classList.remove('disabled');
    } else if (page === Object.keys(pages).length) {
        nextPage.classList.add('disabled');
        prevPage.querySelector('a').setAttribute('data-page', page - 1);
        prevPage.classList.remove('disabled');
    } else {
        prevPage.classList.remove('disabled');
        nextPage.classList.remove('disabled');
        prevPage.querySelector('a').setAttribute('data-page', page - 1);
        nextPage.querySelector('a').setAttribute('data-page', page + 1);
    }
}
