// The frontend will connect to localhost when running locally, and to your Render backend when deployed.
// Please replace 'YOUR_RENDER_BACKEND_URL' with the actual Render web service URL after you create it.
const IS_LOCAL = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1";
const API_URL = IS_LOCAL 
  ? "http://localhost:3030/api/students" 
  : "";

const fetchStudents = async (url) => {
  const response = await fetch(url);
  const results = await response.json();

  results.forEach(person => {
      const div = document.createElement('div');
      div.className = 'card';

      const container = document.getElementById('students');

      div.innerHTML = `
        <strong>${person.firstName} ${person.lastName}</strong><br>
        Age: ${person.age}<br>
        Gender: ${person.gender}<br>
        Country: ${person.country}<br>
        Email: ${person.email}<br>
        Grade: ${person.grade}
      `;

      container.appendChild(div);
    });

  console.log(results);
};

const btn = document.getElementsByTagName("button")[0];
btn.addEventListener("click", () => {
  fetchStudents(API_URL);
});
