<template>
  <div class="home">
    <!-- small device -->
    <div class="row darknav text-center d-md-none pt-2">
      <div class="col-md-6">
        <img src="~/assets/me3.jpg" width="70%" height="100%" />
      </div>
      <div class="col-md-6 mt-5 pt-5">
        <h6 class="secondHeader pt-3">Hi, I'm Jackline Gitari</h6>
        <h4 class="secondHeader2">Full-Stack Software engineer.</h4>
        <p class="secondHeader3">
          Multidisciplinary designer who hacks at, makes and occasionally breaks
          things.
        </p>
      </div>
    </div>

    <!-- other devices -->
    <div class="d-none d-md-block">
      <div class="row darknav text-center pt-5 ">
        <div class="col-md-5 mt-5 pt-5">
          <h4 class="secondHeader pt-3">Hi, I'm Jackline Gitari</h4>
          <h2 class="secondHeader2">Full-Stack Software engineer.</h2>
          <div class="ml-5 mt-5">
            <video width="320" height="240" autoplay="autoplay" muted>
            <source src="~/assets/vidd2.mp4" type=video/mp4>
            </video>
          </div>
        </div>
        <div class="col-md-6 justify-content-end">
          <img src="~/assets/me3.jpg" width="70%" height="100%" />
        </div>
      </div>
    </div>

    <div class="row coding p-2 ">
      <div class="col-md-4 p-5 ml-5">
        <div class="contained ml-5 mt-5">
          <div class="box p-2" style="background: rgb(4, 4, 71);">
          </div>
          <div class="box stack-top p-2" style="background: rgb(28, 28, 214);">
          </div>
          <div class="box stack-top2 p-2 text-center" style="background: rgb(60, 60, 194);">
            <br><br><br>
            About <br> Jackline Gitari
          </div>
        </div>
      </div>
      <div class="col-6 mt-5 mb-3 pt-4 pb-2 text-left text">
            Software Developer with experience in Java, Java Spring Boot, PHP and Angular, CSS 3 and HTML 5.
          <br /><br />
            Graduate of Bachelor of science (Information and communication
            technology).
          <br /><br />
            I have a lot of experience liaising / working with remote teams
            using Agile Methodology and collaboration tools.
          <br /><br />
          Supporter of Women In Technology
          <hr >
        
        <div class="row coding skills justify-content-center"> 
          <div class="col-md-12 text-start"> <h5 class="lists">Skills:</h5></div>
          <div class="col-md-6">
            <i > 
              <font-awesome-icon :icon="['fas', 'check']" class="lists"/> Java <br/>
              <font-awesome-icon :icon="['fas', 'check']" class="lists"/> PHP <br/>
              <font-awesome-icon :icon="['fas', 'check']" class="lists"/> Spring Boot <br/>
            </i>
            <i >
              <font-awesome-icon :icon="['fas', 'check']" class="lists"/> Laravel <br/>
              <font-awesome-icon :icon="['fas', 'check']" class="lists"/> VueJS <br/>
              <font-awesome-icon :icon="['fas', 'check']" class="lists"/> Angular <br/>
            </i>
          </div>
          <div class="col-md-6">
            <i >
              <font-awesome-icon :icon="['fas', 'check']" class="lists"/> Git <br/>
              <font-awesome-icon :icon="['fas', 'check']" class="lists"/> Amazon web services <br/>
              <font-awesome-icon :icon="['fas', 'check']" class="lists"/> Postgres & MySQL <br/>
              <font-awesome-icon :icon="['fas', 'check']" class="lists"/> Postgres & MySQL <br/>
              <font-awesome-icon :icon="['fas', 'check']" class="lists"/> Bootstrap <br/>
              <font-awesome-icon :icon="['fas', 'check']" class="lists"/> Material Design <br/>
              
            </i>
          </div>
        </div>
      </div>
    </div>
    <div class="projects">
      <div class="row  justify-content-center">
        <div class="col-12  pb-5 pt-5 text-center">
          <h5 class="animate__fadeInBottomRight lists">
            Major Projects :-
          </h5>
        </div>
        <div class="col-md-10 col-8  text-end justify-content-end myprojects mb-5 p-5">
          <div class="row">
            <div class="col-md-4">
              <br><br>
              <h5> EnigmaScore Kenya </h5>
              Built using Spring Java and AngularJS <br>
            </div>
            <div class="col-md-3"></div>
            <div class="col-md-5 sites ">
              <img class="image" src="~/assets/enigma.png" width="100%" height="100%" />
              <div class="overlay">
                <span class="text2">
                  <a href="https://enigmascore.com/home" > Visit Website</a>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-10 col-8  text-end justify-content-end myprojects mb-3 p-5">
          <div class="row">
            <div class="col-md-4">
              <br><br>
              <h5> Portfolio </h5>
              Built using NuxtJS - A VUEJS framework <br>
            </div>
            <div class="col-md-3"></div>
            <div class="col-md-5 sites ">
              <img class="image" src="~/assets/mee.png" width="100%" height="100%" />
              <div class="overlay">
                <span class="text2">
                  <a href="http://jackline.herokuapp.com/" > Visit Website</a>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-10 col-8  text-end justify-content-end myprojects mb-3 p-5">
            <div class="row">
            <div class="col-md-4">
              <br><br>
              <h5> Work in Progress </h5>
              Checkout my github account for more projects <br>
            </div>
            <div class="col-md-5"></div>
            <div class="col-md-3  ">
              <a href="https://github.com/jackiegitari1234" > To Github</a>
              
              <br>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="footer pt-3 pb-3 text-center">
      <h6>
        Find me at
        <a href="https://www.linkedin.com/in/jackline-muthoni-gitari">
          <font-awesome-icon :icon="['fab', 'linkedin']" />
        </a>

        <a href="https://github.com/jackiegitari1234">
          <font-awesome-icon :icon="['fab', 'github']" />
        </a>
        <a href="https://wa.me/254707802693">
          <font-awesome-icon :icon="['fab', 'whatsapp']" />
        </a>
      </h6>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Jackline Gitari",
    };
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1, shrink-to-fit=no",
        },
      ],
    };
  },
};
</script>

<style>
.darknav {
  background-color: #000000;
  color: rgb(253, 252, 252);
  height: 85vh;
}
.coding{
  background-color: rgb(24, 22, 22);
  /* color:rgb(148, 142, 142); */
}
.myprojects{
  background-color: rgb(24, 22, 22);
  border-radius: 0.5em;
  padding: 1em;
  color: white;
}
.skills{
  color: #ffff;
  padding-top: 3em;
}
.footer{
  background-color: #000000;
  color: rgb(253, 252, 252);
}
.animated {
  animation-fill-mode: forwards;
  animation-duration: 1.25s;
}
.secondHeader {
  animation: fadeIn;
  animation-duration: 2s;
}
.secondHeader2 {
  animation: slideInUp;
  animation-duration: 3s;
}
.secondHeader3 {
  animation: fadeIn;
  animation-duration: 5s;
}
.secondHeader4 {
  animation: fadeIn;
  animation-duration: 5s;
  font-size: 15px;
}
.sites {
  transition: transform 0.2s;
  border-radius: 1em;
  margin-bottom: 1em;
  background-color: rgb(24, 22, 22);
}
.sites:hover .image {
  opacity: 0.3;
}
.image {
  opacity: 1;
  display: block;
  height: auto;
  transition: .5s ease;
  backface-visibility: hidden;
}
.sites:hover .overlay{
  opacity: 1;
}

.text2 {
  position:absolute;
  top:30%;
  left:50%;
  transform:translate(-50%,-50%);
  color:rgb(105, 105, 199);
  font-size: 2em;

}
.text{
  color: #ffff;
}
.overlay {
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  opacity:0;
  transition:opacity 500ms ease-in-out;
}
ul {
  list-style-type: none;
}
p {
  font-size: 12px;
}

.contained{
        width: 200px;
        height: 200px;
        position: relative;
        margin: 20px;
    }
    .box{
        width: 100%;
        height: 100%;            
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0.8;  /* for demo purpose  */
    }
    .stack-top{
        z-index: 9;
        margin: 20px; /* for demo purpose  */
    }
    .stack-top2{
        z-index: 9;
        margin: 40px; /* for demo purpose  */
        color: rgb(7, 7, 7);
    }

    .lists{
      color: rgb(105, 105, 199);
    }

    .projects{
      background-color:black;
      /* background-image: linear-gradient(to bottom, rgb(102, 98, 98), rgb(202, 202, 240)); */
    }

</style>