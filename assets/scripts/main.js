// Vue router
const HomePage = {
  template: `
    <div class="page home-page">
      <h1>Front end developer and UX enthusiast</h1>
      <p>Hello, My name is Hainer Savimaa! I have over 3 years of working experience from an ad agency and a fintech company as a front end developer. I'm also a self-thaught UX designer.</p>
      <div class="button__container">
        <router-link to="/portfolio/work" class="btn btn--main">See my work</router-link>
        <a href="mailto:hainer.savimaa@gmail.com" class="btn btn--secondary">E-mail me</a>
      </div>
    </div>
  `
};
const WorkPage = {
  template: `
    <div class="page work-page">
      <section class="work-section">
      	<h2>Scoro Software OÜ</h2>
      	<p><strong>Software engineer (front-end)</strong></p>
      	<p>Scoro is a software-as-a-service solution for professional and creative services. The all-in-one business management software combines project management with time and team management, sales, billing, and professional services automation.</p>
      	<p><strong>Tech stack: </strong>Javascript (ES6, Vue, JQuery), PHP</p>
      	<p></p>
      	<ul class="work">
      	  <li class="work__single">
            <img src="/portfolio/assets/images/scoro.png" class="image">
          </li>
		</ul>
        <h2>Aasa Global AS</h2>
        <p>Aasa Global is an international financial technology company established in 2011 which offers credit solutions to consumers and small-to medium sized businesses in Finland, Sweden & Poland. I was working there as a Front end developer for a year and a half. My biggest accomplishments were implementing the new design on Finnish and Swedish sites and developing an UI components library which is used for keeping the visual design and branding consitent on all sites. </p>
        <p><strong>Tech stack: </strong>HTML/SCSS, Javascript(VueJS and jQuery), PHP(Twig), npm/webpack.</p>
        <h3>Projects</h3>
        <ul class="work">
          <li class="work__single">
            <h4>New design implementation</h4>
            <p>In the fall of 2018 I was made the head FE developer for implementing a new design for Aasa's Finnish site. This design would eventually be the source for an upcoming UI component library development. The main development was made in SCSS with some assistance from JS(jQuery) for the moving parts.</p>
            <img src="/portfolio/assets/images/aasa-desktop.jpg" class="image">
            <p>Fortunately I knew before starting writing the code for this design that most of it will be re-used afterwards in the component library. Therefore all SCSS is made modular and can be imported separately if necessary. The tricky part for this project was (re)naming the classnames of some elements as some components (like the loan form and netbank pages) were coming from an external API.</p>
            <a href="https://www.aasa.fi" target="_blank" class="btn btn--main">Visit website</a>
          </li>
          <li class="work__single">
            <h4>UI library</h4>
            <p>This UI components library was made to keep the design concept consitent through all the different products Aasa Global had. I was the front end developer for this task. </p>
            <p>The library is made with modular SCSS so it's possible to import just the styles for any single component; of course each component has it's dependencies as well. The functional part of the library (menu toggles, events) were made with jQuery. The library was served to the main SCSS file via import and converted with npm & webpack.</p>
          </li>
          <li class="work__single">
            <h4>Customer survey form</h4>
            <img src="/portfolio/assets/images/customer-desktop.jpg" class="image">
            <p>This form is a way to recieve feedback from the client after their customer service experience. The client will get an e-mail notification link with an unique CS id parameter for identification. The form consits of 4 questions: yes/no, two scales (1-5 and 1-10) and an open text for suggestions. I was the developer and designer for this project. Used tech stack: VueJS and SCSS.</p>
            <a href="https://www-test.aasa.fi/customerSurvey?id=8e81bb9a-462b-454b-a033-f4926ca48d15" target="_blank" class="btn btn--main">Visit website</a>
          </li>
          <li class="work__single">
            <h4>Predefined loan offers</h4>
            <img src="/portfolio/assets/images/loantabs-mobile.jpg" class="image show-bg">
            <img src="/portfolio/assets/images/mobile/loantabs-mobile.jpg" class="image show-sm">
            <p>The idea for this task was to make the loan application process more intuitive and comfortable for the client. After choosing the suitable loan amount the component offers 3 different options for the loan period (with monthly payments visible). I was the developer and designer for this task. The tech stack used for this: VueJS and SCSS.</p>
            <a href="https://www.aasa.fi/hae-lainaa" target="_blank" class="btn btn--main">Visit website</a>
          </li>
          <li class="work__single">
            <h4>Chatbot</h4>
            <p>After implementing the new design & library for the Finnish & Swedish sites the next step was updating the loan application process. The idea was to make a chatbot which asks conversational questions from the user in order to fill out required information for the loan application. Unfortunately this project was put on hold after finishing the prototype. </p>
            <img src="/portfolio/assets/images/chatbot-mobile.jpg" class="image show-bg">
            <img src="/portfolio/assets/images/mobile/chatbot-mobile.jpg" class="image show-sm">
            <p>I was the lead front end developer for this project. As this was the prototype all questions and paths are predefined and coming from an JSON file. The trickiest part was that during the development a lot of new paths and cases surfaced(e.g. the user accepts this but not that) which made maintaining the code a headache. The tech stack used for this project: VueJS and SCSS.</p>
            <a href="https://www-test.aasa.fi/joustoluottohakemus&mobile=chucknorris" target="_blank" class="btn btn--main">View prototype</a>
          </li>
        </ul>
      </section>
      <section class="work-section">
        <h2>Media Menu AS & Freelance</h2>
        <p>I started my career as a front end developer and a part-time designer working in a digital advertisement agency. The hours were long and work was plenty but so was the experience and skills gained. The usual work process started from understanding the client's brief and making a design proposal based on it. When it was accepted the development begun. For HTML ads development I used CSS and Javascript (+GreenSock for complicated and interactive ads).</p>
        <p><strong>Tech stack: </strong>HTML/SCSS, Javascript(jQuery and GreenSock), WordPress</p>
        <h3>Projects</h3>
        <ul class="work">
          <li class="work__single">
            <h4>Mediamenu webpage</h4>
            <img src="/portfolio/assets/images/mediamenu-desktop.jpg" class="image">
            <p>I was the developer for this webpage. This is used as a landing page for potential new customers to show previous work, introduction, prices and contact information. Tech stack for this project: SCSS, jQuery, WordPress</p>
            <a href="https://www.mediamenu.ee" target="_blank" class="btn btn--main">Visit website</a>
          </li>
          <li class="work__single">
            <h4>Ingager webpage</h4>
            <img src="/portfolio/assets/images/ingager-mobile.jpg" class="image show-bg">
            <img src="/portfolio/assets/images/mobile/ingager-mobile.jpg" class="image show-sm">
            <p>Ingager is a Stockholm-based Facebook marketing company. As a developer I was responsible for turning a Photoshop design into a site which content could be easily modified by the client. Tech stack for this project: SCSS, jQuery, WordPress</p>
            <a href="https://www.ingager.com" target="_blank" class="btn btn--main">Visit website</a>
          </li>
          <li class="work__single">
            <h4>Interactive ads</h4>
            <img src="/portfolio/assets/images/audi-desktop.jpg" class="image">
            <p>This is one of many interactive full-screen ads I developed for an UK-based client. This particular ad has a custom video player styles and a gallery. Teck stack: CSS, GreenSock (or jQuery)</p>
            <a href="http://www.mediamenu.ee/portfolio/full-screen/audi/panels/" target="_blank" class="btn btn--main">Visit website</a>
          </li>
        </ul>
      </section>
    </div>
  `
};
const CVPage = {
  template: `
    <div class="page cv-page">
      <div class="heading heading--split">
        <h1>CV</h1>
        <a href="/portfolio/assets/cv_hainer-savimaa.pdf" target="_blank" class="btn btn--main">Download my CV</a>
      </div>
      <h3>Experience</h3>
      <ul>
      <li>
          <p><strong>05.2019 - current: Scoro Software OÜ</strong></p>
          <p>Front-end software engineer. Development of Scoro software according to provided tasks from product managers.</p>
        </li>
        <li>
          <p><strong>11.2017 - 05.2019: Aasa Global AS</strong></p>
          <p>Development and design of Aasa Finland & Aasa Sweden webpages and other digital materials.</p>
        </li>
        <li>
          <p><strong>04.2016 - 10.2018: Media Menu International AS</strong></p>
          <p>Development and design of interactive web advertisements and Wordpress based websites for different companies in UK, Norway, Sweden & Finland.</p>
        </li>
        <li>
          <p><strong>11.2018 - 05.2019: Nomadde OÜ</strong></p>
          <p>Started my own company to offer development services to small and medium sized companies.</p>
        </li>
      </ul>
      <h3>Education</h3>
      <ul>
        <li>
          <p><strong>2016: Tallinn University</strong></p>
          <p>Bachelor of science: Informatics. Minored in: Digital media.</p>
        </li>
        <li>
          <p><strong>2009: Pärnumaa Kutsehariduskeskus</strong></p>
          <p>Information Technology. Vocational school.</p>
        </li>
      </ul>
      <h4>Want to get in touch?</h4>
      <a href="mailto:hainer.savimaa@gmail.com" class="btn btn--secondary">E-mail me</a>
    </div>
  `
};
const NotFoundPage = {
  template: `
    <div class="page not-found-page">
      <h1>404 - Page not found</h1>
      <router-link to="/portfolio/" class="btn btn--main">Take me home</router-link>
    </div>
  `
};

const router = new VueRouter({
  routes: [
    { path: '/portfolio/', component: HomePage },
    { path: '/portfolio/work', component: WorkPage },
    { path: '/portfolio/cv', component: CVPage },
    { path: '*', component: NotFoundPage },
  ],
  mode: 'history'
});



var app = new Vue({
  el: "#app",
  router: router,
  data: {
    animate: false
  },
  methods: {
    animateRouteChange: function() {
      this.animate = true
      setTimeout(function () { this.animate = false }.bind(this), 2500)
    },
  },
  watch: {
    $route: function(to, from) {
      this.animateRouteChange();
      setTimeout(function () { window.scrollTo(0,0); }.bind(this), 600)
    }
  }
});
