/* Sort list randomly @index.html */
import json from "../data/news.json";

if(location.pathname === '/'){
  sortList(json);
  renderList(json);
  footerHomepage();
} else footer();

// AUX
function footer() {
  const footer = this.document.querySelector('.footer');
  const nav = this.document.querySelector('.footer nav');
  
  if(!footer || !nav) {
    console.error('Error showing footer links.')
    return;
  }

  if(window.innerWidth >= 1920) {
    // console.log('desktop');
    footer.classList.remove('z-3');
    footer.classList.add('z3');
    nav.classList.remove('hidden');
    nav.classList.add('visible');
    nav.style.height = 'initial';
  } else {
    // console.log('mobile');   
    // no scroll after nav
    
    footer.classList.remove('z-3');
    footer.classList.add('z3');
    nav.classList.remove('visible');
    nav.classList.add('hidden');
    nav.style.height = 0;
    
    // scroll within
    window.addEventListener('scroll', function() {  
      const scrollY = window.scrollY;
      const innerHeight = window.innerHeight;
      const scrollHeight = document.documentElement.scrollHeight;
    
      if ((innerHeight + scrollY) >= scrollHeight) {
        // console.warn('BOT');
        footer.classList.remove('z-3');
        footer.classList.add('z3');
        nav.classList.remove('hidden');
        nav.classList.add('visible');
        nav.style.height = 'initial';
      } else {
        // console.log('up...');
        footer.classList.remove('z-3');
        footer.classList.add('z3');
        nav.classList.remove('visible');
        nav.classList.add('hidden');
        nav.style.height = 0;
      }
    });
  } 
}

function footerHomepage() {
  const footer = this.document.querySelector('.footer');
  const nav = this.document.querySelector('.footer nav');

  if(!footer) {
    console.error('Error showing footer.')
    return;
  }

  if(window.innerWidth >= 1920) {
    // console.log('desktop');
    footer.classList.remove('z-3');
    footer.classList.add('z3');
    nav.classList.remove('hidden');
    nav.classList.add('visible');
    nav.style.height = 'initial';
  } else {
    window.addEventListener('scroll', function() {      
      const scrollY = window.scrollY;
      const innerHeight = window.innerHeight;
      const scrollHeight = document.documentElement.scrollHeight;
      
      if ((innerHeight + scrollY) >= scrollHeight) {
        // console.warn('BOT');
        footer.classList.remove('z-3');
        nav.classList.remove('hidden');
        nav.classList.add('visible')
      } else {
        // console.log('up...');
        footer.classList.add('z-3');
        nav.classList.remove('visible');
        nav.classList.add('hidden');
      }
    });
  }
}

function sortList(data) {
  if((data??[]).length === 0) return void 0;
  data.map(d => d.order = Math.round(+(+Math.random().toFixed(5) * 100000).toFixed()));
  data.sort((a,b)=> a.order - b.order);
}

function renderList(data){
  if((data??[]).length === 0) return void 0;

  const ul = document.getElementById('last-news-list').children;

  for (let i = 0; i < ul.length; i++) {
    const li = ul[i];
    const p = li.children[0];
    const anchor = p.children[0];	
    if (updateListAnchorXorFail(anchor, i, data)) console.error(`Error parsing homepage's "News" section. List element ${i} failed rendering.`);	
  }
}

function updateListAnchorXorFail(anchor, i, data)  {
  if(anchor === undefined) return true;
  if(!anchor.classList.contains('last-news-link')) return true;

  anchor.href = data[i].href;
  
  const aChildren = anchor.children;
  if(aChildren.length !== 2 || !aChildren[0].classList.contains('news-link-title') || !aChildren[1].classList.contains('news-link-category')) return true;
  
  const [title, category ] = aChildren;	
  title.textContent = data[i].title;
  category.innerText = data[i].category;	
}
