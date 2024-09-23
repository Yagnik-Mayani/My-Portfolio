import './Contact.css'
export default function Contact() {
    return(
<div className='Contact' id='Contact'>
<h1 className='Con'>Contact</h1>
<div className='icon'>
<a href="https://www.instagram.com/yagnik_mayani/" className='insta'><i class="fa-brands fa-instagram"></i></a>
<a href="https://www.facebook.com/yagnik.mayani.9" className='face'><i class="fa-brands fa-facebook"></i></a>
<a href="https://github.com/Yagnik-Mayani" className='github'><i class="fa-brands fa-github"></i></a>
<a href="https://telegram.org/dl" className='tele'><i class="fa-brands fa-telegram"></i></a>
<a href="tel:6353611560" className='call'><i class="fa-solid fa-phone"></i></a>
<a href="https://www.linkedin.com/in/yagnik-mayani-56aba7239/" className='linkdin'><i class="fa-brands fa-linkedin"></i></a>
<a href="mailto:yagnikmayani15@gmail.com" className='mail'><i class="fa-solid fa-envelope"></i></a>
</div>
</div>
    );
}