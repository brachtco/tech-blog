const deleteFormHandler = async (event) => {
    event.Prevent.Default();

    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    const response = await fetch(`/api/posts/${id}`, {
        method: 'DELETE'
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert('Failed to Delete!')
    }
}

document.querySelector('.delete-post-btn').addEventListener('click', deleteFormHandler);