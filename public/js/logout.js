const logout = async () => {
  
  const response = await fetch('/api/users/logout');

  if (response.ok) {
    document.location.href= '/login';
  } else {
    alert('Failed to log out.');
  }
};

document.querySelector('#logout').addEventListener('click', logout);
