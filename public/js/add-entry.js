async function newFormHandler(event) {
  event.preventDefault();
  const entry_title = document.querySelector('#dish_name').value;
  const entry_text = document.querySelector('#description').value;
  
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
  //if the dish is added, the 'all' template will be rerendered
  if (response.ok) {
    document.location.replace('/');
  } else {
    alert('Failed to add dish');
  }
}

document.querySelector('.new-dish-form').addEventListener('submit', newFormHandler);
  