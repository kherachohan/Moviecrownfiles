const search = document.getElementById('search');
const matchList = document.getElementById('columnsearch');

const searchStates = async searchText => {
const res = await fetch('data.json');
const states = await res.json();

let matches = states.filter(state=>{
    const regex = new RegExp(`^${searchText}`, 'gi');
    return state.name.match(regex) || state.name.match(regex);
});
 if(searchText.length ===0) {
matches = [];
matchList.innerHTML = '';
 }
 outputHtml(matches);
};

const outputHtml = matches => {
    if(matches.length > 0) {
       const html = matches.map(match => `
       <div class="moviecontainersearch">
       <a href="${match.link}" class="linksearch"> <img src="${match.image}" class="movieimagesearchbar" /> <h1 class="titlesearch">${match.name}</h1>  <h1 class="moviegenressearchbar">${match.location}</h1></a>
       </div>
       ` )
       .join('');

       matchList.innerHTML = html;
    }
}

search.addEventListener('input', () => searchStates(search.value));