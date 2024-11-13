const logoutForm = document.getElementById('logout');

      logoutForm.onsubmit = async function (e) {
        e.preventDefault(); // Prevent the form from submitting

        // Clear the access token from localStorage
        localStorage.removeItem('accessToken');

        try {
          // Make the logout request to the backend
          const response = await fetch('http://localhost:4001/api/auth/logout', {
            method: 'POST',
            credentials: 'include', // Ensure cookies are sent with the request
          });

          const data = await response.json();
          if (data.success) {
            // Redirect to login page after successful logout
            console.log("yes")
            window.location.href = 'login.html';
          } else {
            alert('Logout failed, please try again.');
          }
        } catch (error) {
          console.error('Logout error:', error);
          alert('An error occurred while logging out.');
        }
      };