let contacts = [
  // { id : 'sjabd.ir' , icon : 'fa fa-globe' , href : 'https://www.sjabd.ir' },
  { id : 'mynameissajjad@gmail.com' , icon : 'fa fa-envelope' , href : 'mailto:mynameissajjad@gmail.com' } ,
  //{ id : 'sajjad.abd__' , icon : 'fa fa-instagram' , href : 'https://www.instagram.com/sajjad.abd__' },
  { id : 'sajjad-abdollahi' , icon : 'fa fa-linkedin' , href : 'https://www.linkedin.com/in/sajjad-abdollahi/' },
  { id : '+98 938 130 8994' , icon : 'fa fa-whatsapp' , href : 'https://wa.me/+989381308994' },
  //{ id : '+98 938 130 8994' , icon : 'fa fa-phone' , href : 'tel:+989381308994' },
  //{ id : 'sjabd' , icon : 'fa fa-telegram' , href : 'https://t.me/+989381308994' },
  
  { id : 'sajjadabd' , icon : 'fa fa-github' , href : 'https://www.github.com/sajjadabd' },
];

let contactList = document.getElementById('contactList');


let contactTemplate = ``;

for(let i=0;i<contacts.length;i++) {
  contactTemplate += `
    <li>
      <span class="icon">
        <i class="${contacts[i].icon}"></i>
      </span>
      <span class="contactInfo">
        <a href="${contacts[i].href}">
          ${contacts[i].id}
        </a>
      </span>
    </li>
  `;
}



contactList.innerHTML = contactTemplate;