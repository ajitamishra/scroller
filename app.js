const data=[
  {
    name:'John Doe',
    age:'25',
    gender:'male',
    lookingfor:'female',
    location:'Miami',
    image:'https://randomuser.me/api/portraits/men/77.jpg'
  },
  {
    name:'Joy smith',
    age:'27',
    gender:'male',
    lookingfor:'female',
    location:'Bangalore',
    image:'https://randomuser.me/api/portraits/men/64.jpg'
  },
  {
    name:'shreya tiwari',
    age:'24',
    gender:'female',
    lookingfor:'male',
    location:'Miami',
    image:'https://randomuser.me/api/portraits/women/66.jpg'
  },
  {
    name:'Ayesha Bansal',
    age:'25',
    gender:'female',
    lookingfor:'male',
    location:'Mysore',
    image:'https://randomuser.me/api/portraits/women/68.jpg'
  },
  {
    name:'Ayush Shah',
    age:'23',
    gender:'male',
    lookingfor:'female',
    location:'Bangalore',
    image:'https://randomuser.me/api/portraits/men/69.jpg'
  },
  {
    name:'Prateek Dutt',
    age:'30',
    gender:'male',
    lookingfor:'female',
    location:'Boston',
    image:'https://randomuser.me/api/portraits/men/70.jpg'
  },
  {
    name:'Harry smith',
    age:'27',
    gender:'male',
    lookingfor:'female',
    location:'Bangkok',
    image:'https://randomuser.me/api/portraits/men/71.jpg'
  },
  {
    name:'Amrita Kulkarni',
    age:'29',
    gender:'female',
    lookingfor:'male',
    location:'Manipur',
    image:'https://randomuser.me/api/portraits/women/72.jpg'
  },
  {
    name:'Preeti Simoes',
    age:'27',
    gender:'female',
    lookingfor:'male',
    location:'London',
    image:'https://randomuser.me/api/portraits/women/73.jpg'
  }
];
const profiles=profileIterator(data);
nextProfile();
document.getElementById('next').addEventListener('click',nextProfile)
function nextProfile()
{
  const currentProfile=profiles.next().value;
  if(currentProfile!==undefined)
  {
  document.getElementById('profileDisplay').innerHTML=`
  <ul class='list-group'>
  <li class='list-group-item'>Name: ${currentProfile.name}</li>
  <li class='list-group-item'>Age: ${currentProfile.age}</li>
  <li class='list-group-item'>Preference: ${currentProfile.gender}</li>
  <li class='list-group-item'>Location: ${currentProfile.location}</li>
  <li class='list-group-item'>Lookingfor: ${currentProfile.lookingfor}</li>
  </ul>`
document.getElementById('imageDisplay').innerHTML=`<img src="${currentProfile.image}" style="size:100%">`
}
else{
  window.location.reload();
}
}
function profileIterator(profiles)
{
    let nextindex=0;
    return{
      next:function()
      {
        return nextindex<profiles.length ?{value:profiles[nextindex++],done:false} : {done:true}
      }
    }
}