async function newFormHandler(event) {
  event.preventDefault();
  const entry_title = document.querySelector('#entry_title').value;
  const entry_text = document.querySelector('#entry_text').value;
  
 // Send fetch request to add a new entry
  const response = await fetch(`/api/entry`, {
    method: 'POST',
    body: JSON.stringify({
      entry_title,
      entry_text
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  //if the entry is added, the 'all' template will be rerendered
  if (response.ok) {
    document.location.replace('/');
  } else {
    alert('Failed to add entry');
  }
}

document.querySelector('.new-entry-form').addEventListener('submit', newFormHandler);
  