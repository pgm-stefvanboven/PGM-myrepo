(() => {
  const app = {
    init() {
      console.log("1. Initialize Application");
      this.cacheElements();
      this.generateUI();
    },
    cacheElements() {
      console.log("2. Cache Elements");
      this.$projects = document.querySelector(".projects");
      this.$navigation = document.querySelector(".navigation");
      this.$events = document.querySelector(".events");
    },
    generateUI() {
      console.log("3. Generate User Interface");
      this.$projects.innerHTML = this.generateHTMLForProjects(projects);
      this.$navigation.innerHTML = this.generateHTMLForNavigation(navigation);
      this.$events.innerHTML = this.generateHTMLForEvents(events);
    },
    generateHTMLForProjects(projects) {
      let tmpStr = "";
      for (let i = 0; i < projects.length; i++) {
        tmpStr += this.generateHTMLForProject(projects[i]);
      }
      return tmpStr;
    },
    generateHTMLForProject(project) {
      return `
      <div class="project" data-id="${project.id}">
        <picture class="project-screenshots">
          <img src="${project.screenshots[0]}">
        </picture>
        <p class="author">${project.author.name}</p>
        <h2 class="project-title">${project.title}</h2>
        <p class="project-technologies">${project.technologies.name}</p>
      </div>
      `;
    },
    generateUIForproject(id) {
      const project = projects.find((project) => project.id === id);
      this.$projects.innerHTML = this.generateHTMLForProjects(project);
    },

    generateHTMLForNavigation(navigation) {
      let tmpStr = "";
      for (let i = 0; i < navigation.length; i++) {
        tmpStr += this.generateHTMLForNavigationItem(navigation[i]);
      }
      return tmpStr;
    },
    generateHTMLForNavigationItem(navigationItem) {
      return `
        <a target="${navigationItem.type}" href="${navigationItem.link}" title="${navigationItem.name}">${navigationItem.name}</a>
      `;
    },
    generateUIForNavigation() {
      this.$navigation.innerHTML = this.generateHTMLForNavigation(navigation);
    },
    generateHTMLForEvents(events) {
      let tmpStr = "";
      for (let i = 0; i < events.length; i++) {
        tmpStr += this.generateHTMLForEventsItem(events[i]);
      }
      return tmpStr;
    },
    generateHTMLForEventsItem(eventsItem) {
      return `
      <div class="events">
        <ul>
            <li>
             <a target="${"_blank"}" href="${eventsItem.link}" title="${eventsItem.title}">${eventsItem.title}</a>
            </li>
        </ul>
      </div>     
      `;
    },
    generateUIForEvents() {
      this.$events.innerHTML = this.generateHTMLForEvents(events);
    },
    generatedigitalclock() {
      const startAcademicYear = 1695019500000;
      const now = new Date().getTime();
      const diff = now - startAcademicYear;
    },
    getTimeDifferenceAsString(diff) {
      const days = Math.floor(diff / (24 * 3600 * 1000));
      const time = `${this.toBits(days, 3, 0)}days`;
      return time;
    },
    toBits(v, n, b) {
      let vStr = String(v);
      while (vStr.length < n) {
        vStr = b + vStr;
      }
      return vStr;
    },
    updateTimeCurrentAcademicYear() {
      const now = new Date().getTime();
      const diff = now - startCurrentAcademicYear;
      this.$currentAcademicYearTime.innerText =
      this.getTimeDifferenceAsString(diff);
    },
    generateUIfordigitalclock() {
      this.$digitalclock.innerHTML = this.generatedigitalclock()
    }
  };
  app.init();
})();
