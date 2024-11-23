/* Sort list randomly @index.html */
import json from "../data/news.json";

if(location.pathname === '/'){
	sortList(json);
	renderList(json);
}

// AUX

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
		const anchor = li.children[0];	
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
