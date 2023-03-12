
// event handler 1

function makeAquamarine(){
    document.body.style.backgroundColor='aquamarine';
}
// event handler type-2
document.getElementById('make-goldenrod').addEventListener('click',function(){
    document.body.style.backgroundColor='goldenrod';
    document.body.style.textAlign='center';
    document.body.style.padding='10em';
    
})
// update text when btn was clicked
function handlerOnClick(){
    const handleStatus = document.getElementById('status');
    handleStatus.innerText='The button is clicked so i am apeared';
}

document.getElementById('Update-btn').addEventListener('click',function(){
    const inputField = document.getElementById('input-field');
    const inputText = inputField.value;
    const p = document.getElementById('display');
    p.innerText = inputText;
    inputField.value='';

})
// comment dialogue box
document.getElementById('btn-comnt').addEventListener('click',function(){
    const commentBox = document.getElementById('comment-box');
    const newCommnt = commentBox.value;
    const commentContainer = document.getElementById('comment-container');
    const p = document.createElement('p');
    p.innerText = newCommnt;
    commentContainer.appendChild(p);
    commentBox.value='';

})

// btn desabled to unables
document.getElementById('delete-confirm').addEventListener('keyup',function(event){
    const text = event.target.value;
    const deleteBtn = document.getElementById('btn-delete');
    if(text == 'delete'){
        deleteBtn.removeAttribute('disabled');
    }else{
        deleteBtn.setAttribute('disabled',true);
        
    }
})
// event delegate

document.getElementById('list-container').addEventListener('click',function(event){
    event.target.parentNode.removeChild(event.target);
})
document.getElementById('add-item-btn').addEventListener('click',function(event){
const listContaineer = document.getElementById('list-container');
const li = document.createElement('li');
li.innerText='Brand New Item';
li.classList.add('item');
listContaineer.appendChild(li);
})

// style on every section
const sections = document.getElementsByTagName('section');
for (const section of sections){
    section.style.textAlign='center';
    section.style.padding='3px';
}