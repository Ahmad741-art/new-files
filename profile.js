document.getElementById('back-button').addEventListener('click', () => {
    window.location.href = 'index.html';
});

// Dummy data for demonstration purposes
const user = {
    name: "John Doe",
    email: "john.doe@example.com"
};

document.getElementById('user-name').innerText = user.name;
document.getElementById('user-email').innerText = user.email;

document.getElementById('update-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const newName = document.getElementById('new-name').value;
    const newEmail = document.getElementById('new-email').value;
    
    if (newName) user.name = newName;
    if (newEmail) user.email = newEmail;

    document.getElementById('user-name').innerText = user.name;
    document.getElementById('user-email').innerText = user.email;

    alert('Profile updated successfully!');
});
