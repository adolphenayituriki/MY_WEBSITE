function disableOther(id){
      alert('Thank you for you choice. Am here by the Email of www.nayituriki.com@gmail.com. Ready to be helped? \n\n please press Ok to confirm!')
      document.getElementById(id).disabled = true;
      document.getElementById('formId').style.backgroundColor = "burlywood";
      document.getElementById('formFill').innerHTML = "Fill this now!";
}

// this function is to return back while clicked on cancel  button appeared in footer
function contentBack(){
  document.getElementById('contentBox').innerHTML = "Ready to know more 👋"
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
