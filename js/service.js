
// JavaScript to display selected service
    function displayService() {
        const selectElement = document.getElementById('serviceSelect');
        const selectedValue = selectElement.value;

        const displaySection = document.getElementById('afterSubmit');
        if (selectedValue) {
            displaySection.innerHTML = `You have selected: <strong>${selectedValue}</strong>`;
            displaySection.innerHTML = `Web Design is one of our core services.
We specialize in creating visually stunning and highly functional websites tailored to your brand’s unique identity.
Our team uses modern design principles to ensure your website is both user-friendly and responsive on all devices.
Whether you need a personal portfolio, a company site, or an e-commerce platform, we deliver designs that engage visitors and drive conversions.
With our Web Design service, you can expect professional layouts, optimized performance, and a seamless user experience. <br><br> YOU HAVE SEARCHED: <strong>${selectedValue}</strong> <br><p style="color:rgb(186, 174, 174);"><i class="fa-solid fa-hourglass-half"></i> Please wait a moment while we uploading new services </p>`;

        } else {
            displaySection.innerHTML = 'Please select a service first.';
        }
    }

    function changeContent() {
      const box = document.getElementById("contentBox");

      // Fade and slide out
      box.classList.remove("fade-in");
      box.classList.add("fade-out");

      // After fade out, change text
      setTimeout(() => {
      box.innerHTML = "Am Adolphe Nayituriki. <br> should you Find me on youtube channel called RELAX MEDIA 🎉 <br> <a href='http://www.youtube.com/@Relax-words03' style='color: rgb(239, 148, 38); text-decoration: none;''>FOLLOW NOW</a> <button onclick='contentBack()'>cancel</button></button>";

        // Fade and slide in with bounce
      box.classList.remove("fade-out");
      box.classList.add("fade-in", "animate__animated", "animate__bounceIn");

        // Clean up animation class after it plays
      setTimeout(() => {
      box.classList.remove("animate__animated", "animate__bounceIn");
      }, 1000);
      }, 500);
}
