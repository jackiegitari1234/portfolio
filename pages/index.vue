<template>
  <div class="home">
    <div class="row darknav text-center">
      <div class="col-md-6" style="margin-top:15em; margin-bottom:20em">
        <h3 class="animate__animated animate__zoomIn"> Hi, I'm Jackline Gitari </h3>
        <h1 class="animate__animated secondHeader"> Full-Stack Software engineer. </h1>
        <h5>Multidisciplinary designer who hacks at, makes and occasionally breaks things.</h5>
      </div>
      <div class="col-md-6">
        <img src="~/assets/me3.jpg" alt="" srcset="" width="90%" height="100%">
      </div>
    </div>
    <div class="row coding mb-5  mt-5 justify-content-center">
      <div class="col-md-8  mt-5 mb-5 pt-4 pb-2 text-center text">
        <h5>Who is Jackline Gitari?</h5>
        <ul>
          <li> Software Developer with experience in Java, Java Spring Boot, PHP and Angular 7+, CSS 3 and HTML 5.</li> <br>
          <li> Competent in Software development life cycle.</li><br>
          <li> Graduate of Bachelor of science (Information and communication technology).</li><br>
          <li> Advocate for Agile Scrum Methodology – I understand how scrum reduces risk and gives predictability to the software life cycle.</li><br>
          <li>I have a lot of experience liaising / working with remote teams using Agile Methodology and collaboration tools.</li><br>
          <li> I enjoy working in multi-cultural environments and am used to liaising with Europeans in International companies.</li><br>
          <li> Supporter of Women In Technology </li>
        </ul>
      </div>
    </div>
    <hr>
    
    <div class="backend"> 
      <div class="row mb-5 mt-5 justify-content-center" >
        <div class="col-md-12 pt-5 pb-5 text-center">
          <h5 class="animate__animated animate__fadeInBottomRight">Programming Languages / Frameworks I have used </h5>
        </div>
        <div class="col-md-3  languages">
          <div class="card" style="width: 18rem;">
            <div class="card-body">
              <br>
              <img src="~/assets/lv.png" alt="" srcset="" width="100%" height="100%">
              <br>
              <br>
              <hr>
              <p class="card-text">Laravel is a web application framework with expressive, elegant syntax.</p>
              <a href="https://laravel.com/docs/8.x" class="btn btn-outline-primary">Go to Documentation</a>
            </div>  
          </div>
        </div>
        <div class="col-md-3 languages">
          <div class="card" style="width: 18rem;">
            <div class="card-body">
              <br>
              <img src="~/assets/vue.jpeg" alt="" srcset="" width="80%" height="80%">
              <br>
              <hr>
              <p class="card-text">Vue is designed from the ground up to be incrementally adoptable. </p>
              <a href="https://vuejs.org/v2/guide/" class="btn btn-outline-primary">Go to Documentation</a>
            </div>  
          </div>
        </div>
        <div class="col-md-3 languages">
          <div class="card" style="width: 18rem;">
            <div class="card-body">
              <br>
              <img src="~/assets/angular.png" alt="" srcset="" width="40%" height="40%">
              <br><br>
              <hr>
              <p class="card-text">Angular is used for creating efficient and sophisticated single-page apps. </p>
              <a href="https://angular.io/docs" class="btn btn-outline-primary">Go to Documentation</a>
            </div>  
          </div>
        </div>
      </div>

      <div class="row pb-5 pt-5 justify-content-center ">
        <div class="col-md-3  languages">
          <div class="card" style="width: 18rem;">
            <div class="card-body">
              <img src="~/assets/java.png" alt="" srcset="" width="100%" height="100%">
              <hr>
              <p class="card-text">Use the rich set of code samples, tutorials, developer guides, API documentation, and more to quickly develop your prototype.</p>
              <a href="https://docs.oracle.com/en/java/" class="btn btn-outline-primary">Go to Documentation</a>
            </div>  
          </div>
        </div>
        <div class="col-md-3  languages">
          <div class="card" style="width: 18rem;">
            <div class="card-body">
              <img src="~/assets/python.jpeg" alt="" srcset="" width="75%" height="75%">
              <hr>
              <p class="card-text">Python is an easy to learn, powerful programming language.</p>
              <a href="https://docs.python.org/3/" class="btn btn-outline-primary">Go to Documentation</a>
            </div>  
          </div>
        </div>
        <div class="col-md-3  languages">
          <div class="card" style="width: 18rem;">
            <div class="card-body">
              <img src="~/assets/php2.png" alt="" srcset="" width="100%" height="100%">
              <hr>
              <p class="card-text">
                <br> PHP is a widely-used open source general-purpose scripting language</p>
              <a href="https://www.php.net/docs.php" class="btn btn-outline-primary">Go to Documentation</a>
            </div>  
          </div>
        </div>
      </div>
    </div>

    <div class="darknav pt-3 pb-3 text-center">
      <h6>
        Find me at 
        <a href="https://www.linkedin.com/in/jackline-muthoni-gitari">
          <font-awesome-icon :icon="['fab', 'linkedin']"/>
        </a>
        
        <a href="https://github.com/jackiegitari1234">
          <font-awesome-icon :icon="['fab', 'github']"/>
        </a>
        <a href="#4">
          <font-awesome-icon :icon="['fab', 'twitter']"/>
        </a> 
        <a href="#4">
          <font-awesome-icon :icon="['fab', 'whatsapp']"/>
        </a>
      </h6>
    </div>
</div>
  
</template>

<script>
export default {
  data(){
    return{
      skills: ["Developer", "Web Designer", "Lifetime Learner"]
    };
  }
};
</script>

<style>
.darknav{
  background-color: #000000;
  color: rgb(253, 252, 252);
}
.animated{
  animation-fill-mode: forwards;
  animation-duration: 1.25s;
}
.secondHeader {
  animation: fadeIn; 
  animation-duration: 2s; 
}
.languages {
  transition: transform .2s;
  background-color: hsl(hue, saturation, lightness);
  border-radius: 2em;
  
}
.languages:hover {
  -ms-transform: scale(0.9); /* IE 9 */
  -webkit-transform: scale(0.9); /* Safari 3-8 */
  transform: scale(0.9); 
  background-color: hsl(hue, saturation, lightness);
}



.text{
  background-color: #ffffff;
  border: 1px solid black;
  opacity: 0.6;
  color: black;
  border-radius: 1em;
  box-shadow: 5px 10px 8px #888888;
}
ul {
    list-style-type: none;
}
p {
  font-size: 12px;
}


</style>