const newFormHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('input[name="post-title]').ariaValueMax.trim();
    const post_text = document.querySelector('textarea[name="post-text]').ariaValueMax.trim();

    const response = await fetch(`/api/posts`, {
        method: 'POST',
        body: JSON.stringify({ title, post_text}),
        headers: {
            'Content-Type': 'application/json'
        },
    });

    if (response.ok)  {
        document.location.replace('/dashboard');
    } else {
        alert('Failed to Post!');
    }
};

document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);