header.innerHTML = `
<section class="container">
    <a href="./index.html"><img class="logo" src="https://static.wixstatic.com/media/2292e8_58d612f14d7f4ff3a0052087ecdf1526~mv2.jpg/v1/fill/w_239,h_224,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Untitled%20design%20(1)_edited.jpg" alt="Aspendale Life Saving Club logo"></a>
    <nav>
        <ul>
            <li><a href="./aboutus.html">About Us</a></li>
            <li><a href="./nippers.html">Nippers</a></li>
            <li><a href="./lifesaving.html">Life Saving</a></li>
            <li><a href="./competition.html">Competition</a></li>
            <li><a href="./membership.html">Membership</a></li>
            <li><a href="./events.html">Events</a></li>
            <li><a href="./merchandise.html">Merchandise</a></li>
            <li><a href="./join.html" class="join-button">Join ALSC</a></li>
        </ul>
    </nav>      
    <!-- Mobile menu -->
    <div id="hamburger-icon" onClick="toggleMobileMenu(this)">
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
        <ul class="mobile-menu">
            <img class="logo" src="https://static.wixstatic.com/media/2292e8_58d612f14d7f4ff3a0052087ecdf1526~mv2.jpg/v1/fill/w_239,h_224,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Untitled%20design%20(1)_edited.jpg" alt="Aspendale Life Saving Club logo" a href="./index.html">
            <li><a href="./aboutus.html">About Us</a></li>
            <li><a href="./nippers.html">Nippers</a></li>
            <li><a href="./lifesaving.html">Life Saving</a></li>
            <li><a href="./competition.html">Competition</a></li>
            <li><a href="./membership.html">Membership</a></li>
            <li><a href="./events.html">Events</a></li>
            <li><a href="./merchandise.html">Merchandise</a></li>
            <li><a href="./join.html" class="join-button">Join ALSC</a></li>
        </ul>   
    </div>
</section>
`;

footer.innerHTML = `
<section class="sponsors">
    <article class="sponsors-logos">
        <h3>Our Sponsors</h3>
        <img src="https://static.wixstatic.com/media/2292e8_65deac91ed254e81bcfc1673cdd2b7bd~mv2.png/v1/fill/w_508,h_245,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Buxton%20Logo.png" alt="Buxton">
        <img src="https://static.wixstatic.com/media/2292e8_54a2cebe3ad44cb4a8f1c773d5e8eaea~mv2.png/v1/fill/w_413,h_114,al_c,lg_1,q_85,enc_auto/Aspendale-Trophies-300x83.png" alt="Aspendale trophies">
    </article>
</section>

<section class="footer-nav-grid">
    <section class="footer-nav-col">
        <article class="footer-nav-contents">
            <a href="./index.html"><img class="logo" src="https://static.wixstatic.com/media/2292e8_58d612f14d7f4ff3a0052087ecdf1526~mv2.jpg/v1/fill/w_299,h_280,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Untitled%20design%20(1)_edited.jpg" alt="ALSC logo"></a>
            <p class="small">ALSC is an inclusive community club steeped in a proud history of lifesaving education, competition and patrolling.</p>
            </article>
    </section>
    <section class="footer-nav-col">
        <article class="footer-nav-contents">
            <h3>Navigation</h3>
            <p><a href="./aboutus.html">About Us</a></p>
            <p><a href="./nippers.html">Nippers</a></p>
            <p><a href="./lifesaving.html">Life Saving</a></p>
            <p><a href="./competition.html">Competition</a></p>
            <p><a href="./membership.html">Membership</a></p>
            <p><a href="./events.html">Events</a></p>
            <p><a href="./merchandise.html">Merchandise</a></p>
        </article>
    </section>
    <section class="footer-nav-col">
        <article class="footer-nav-contents">
            <h3>Contact Us</h3>
            <p>Groves St, Aspendale VIC 3195</p>
            <p><a href="mailto:info@aspendalelsc.org">info@aspendalelsc.org</a></p>
            <p><a href="tel:0395872474">03 9587 2474</a></p>
        </article>
    </section>
    <section class="footer-nav-col">
        <article class="footer-nav-contents">
            <h3>Follow Us</h3>
            <ul class="followus-icons">
                <li><a href="https://www.teamapp.com/clubs/68125?_webpage=v1"><img src="https://is4-ssl.mzstatic.com/image/thumb/Purple123/v4/2b/f9/ee/2bf9ee88-3c5e-3f95-e0c3-2c9f186fb654/source/256x256bb.jpg" alt="Team app icon"></a></li>
                <li><a href="https://www.facebook.com/aspendalelsc/?ref=br_rs"><img src="https://www.pngkey.com/png/full/153-1536567_facebook-icon-white-png.png" alt="Facebook icon"></a></li>
                <li><a href="https://www.instagram.com/aspendalelsc"><img src="https://cdn.freebiesupply.com/images/large/2x/instagram-logo-white-on-black.png" alt="Instagram icon"></a></li>
            </ul>
        </article>
    </section>
</section>

<section class="disclaimer">
    <article class="disclaimer-copy">
        <p>&copy; 2023 Aspendale Life Saving Club</p>
        <p>Images courtesy of <a href="https://eugenewashere.com/">EugeneWasHere</a></p>
        <p>Website created and sponsored by Kelly Wearing</p>
    </article>
</section>
`;

// MOBILE MENU
function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
}

// SCROLL TO TOP
const scrollBtn = document.querySelector('.scroll-to-top')

const refreshButtonVisibility = () => {
        if (document.documentElement.scrollTop <= 150) {
            scrollBtn.style.display = "none";
        } else {
            scrollBtn.style.display = "block";
        }
};
refreshButtonVisibility ();

scrollBtn.addEventListener('click', () => {
    document.documentElement.scrollTop = 0;
});

document.addEventListener('scroll', (e) => {
    refreshButtonVisibility ();
});

// JOIN ALSC FORM :: SET VARIABLES
const modalContainer = document.querySelector('.modal-container');
const yesWWC = document.querySelector('#yes-wwc');
const submitBtn = document.querySelector('.submitbtn');
const submitModalContainer = document.querySelector('#submit-modal-container');
const submitModalBtn = document.querySelector('#submit-modal-button');
const form = document.querySelector('.form');
const firstNameInput = document.querySelector('#firstname-input');
const lastNameInput = document.querySelector('#lastname-input');
const emailInput = document.querySelector('#email-input');
const contactNumberInput = document.querySelector('#contactnumber-input');
const inputs = document.querySelectorAll('#firstname-input, #lastname-input, #email-input, #contactnumber-input, #family, #active-family, #individual-senior, #individual-youth, #associate-social, #nippers, #wwc');

// JOIN ALSC FORM :: WHEN PAGE LOADS, SHOW POPUP 
window.addEventListener("load", function () {
	const timerId = setInterval (function () {
		if (Number(modalContainer.style.opacity) < 1) {
			modalContainer.style.opacity = Number(modalContainer.style.opacity) + 0.1;
		} else if (Number(modalContainer.style.opacity) >= 1) {
			clearInterval(timerId);
		}
	}, 50);
});

// JOIN ALSC FORM :: WHEN USER SELECTS I HAVE A WWC, CLOSE THE POPUP
yesWWC.addEventListener('click', function() {
    modalContainer.style.display = "none";
})

// WHEN USER HITS SUBMIT, A POP UP APPEARS
submitBtn.addEventListener('click', function (event) {
    event.preventDefault ();
    if (firstNameInput.value == "") {
        firstNameInput.style.border = "solid red 2px"
        firstNameInput.style.backgroundColor = "pink"
        firstNameInput.placeholder = "Please enter your first name"
        return false;
    } 

    if (lastNameInput.value == "") {
        lastNameInput.style.border = "solid red 2px"
        lastNameInput.style.backgroundColor = "pink"
        lastNameInput.placeholder = "Please enter your last name"
        return false;
    } 

    if (emailInput.value === "") {
        emailInput.style.border = "solid red 2px";
        emailInput.style.backgroundColor = "pink";
        emailInput.placeholder = "Please enter your email address";
        return false;
    } 
    
    else if (!isValidEmail(emailInput.value)) {
        emailInput.style.border = "solid red 2px";
        emailInput.style.backgroundColor = "pink";
        emailInput.placeholder = "Please enter a valid email address";
        return false;
    }

    function isValidEmail(email) {
        let atIndex = email.indexOf('@');
        let dotIndex = email.lastIndexOf('.');
        return atIndex > 0 && dotIndex > atIndex + 2;
    }
    submitModalContainer.style.display = "block";
});

// WHEN USER CLICKS CLOSE, THE POP UP DISAPPEARS AND FORM RESETS
submitModalBtn.addEventListener('click', function () {
    submitModalContainer.style.display = "none";
    inputs.forEach(input => {
        if (input.type === 'checkbox'){
            input.checked = false;
        } 
        else {
        input.value = '';
        input.style.border = '';
        input.style.backgroundColor = '';
        input.placeholder = '';
        }
    })
})



