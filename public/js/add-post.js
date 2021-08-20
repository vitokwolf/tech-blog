async function newFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="post-title"]').value.trim();
  const post_contents = document.querySelector('textarea[name="post-contents"]').value.trim();

console.log(title);
console.log(post_contents);

if(title && post_contents){
  const response = await fetch(`/api/posts`, {
    method: 'POST',
    body: JSON.stringify({
      title,
      post_contents
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert(response.statusText);
  }
} else {
  alert('Post title and contents connot be empty')
}
}

document.querySelector('#new-post').addEventListener('click', newFormHandler);
