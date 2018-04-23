<template>
  <div>
    <section class="section-dark section-pad">
      <h1 class="title">
        Work Examples
      </h1>
      <h2 class="subtitle">
        Demos, Case Studies, Technologies
      </h2>
    </section>

    <section class="section-pad">
      <div class="project-list-container">
        <div class="project-list">
          <div
            v-for="project of projects"
            :key="project.name"
            class="project">
            <h2>{{project.name}}</h2>

            <h3 v-if="project.time" class="project-date">{{project.time | dateFormat}}</h3>

            <Badges
              v-if="project.badges"
              :badges="project.badges"
              class="project-badges"></Badges>

            <a
              v-if="project.image"
              :href="project.image"
              target="_blank"
              rel="noopener">
              <img
                :src="project.image"
                :alt="project.name + ' Project Image'"
                class="project-image"/>
            </a>
            
            <div
              v-if="project.description"
              v-html="project.description"
              class="project-description"></div>

            <div
              v-if="project.caseStudy"
              class="project-case-study-link">
              <nuxt-link :to="project.caseStudy">View Case Study</nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="css">
.project-list-container {
  display: flex;
  justify-content: center;
}

.project-list {
  max-width: 800px;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
}

.project-image {
  max-width: 50%;
  float: left;
  margin: 1em 1em 1em 0;
  box-shadow: 0 4px 6px 0 hsla(0, 0%, 0%, 0.2);
  border: 1px solid lightgray;
  border-radius: 0.25em;
}

.project {
  flex-grow: 1;
  padding: 1em 0.5em 2em 0.5em;
}

.project-description {
  margin-top: 0.5em;
}

.project-description p {
  margin: 0.75em 0 0.75em 0;
  line-height: 1.4em;
}

.project-case-study-link {
  margin-top: 0.5em;
}

.project-date {
  color: #6b8894;
  margin-bottom: 0.5em;
}

.project-badges {
  margin-top: 0.5em;
}

@media screen and (max-width: 800px) {
  .project-list-container {
    justify-content: unset;
  }
}

@media screen and (max-width: 600px) {
  .project-image {
    max-width: 100%;
  }
}
</style>

<script>
import Badges from "~/components/Badges.vue";

export default {
  components: {
    Badges
  },
  filters: {
    dateFormat: function(value) {
      if (!value) {
        return "";
      }

      return value
        .map(v =>
          v.toLocaleString("en-US", {
            month: "long",
            year: "numeric"
          })
        )
        .join(" - ");
    }
  },
  data: () => {
    return {
      projects: [
        {
          name: "CodeCraft Partner Community",

          time: [new Date(2018, 1 - 1), new Date(2018, 4 - 1)],

          badges: [
            {
              name: "Angular 5"
            },
            {
              name: "TypeScript"
            },
            {
              name: "Firebase Realtime Database"
            },
            {
              name: "Google Cloud Platform"
            }
          ],

          description: `
            <p>A team project for <a href="https://www.codecraftworks.com/" target="_blank" rel="noopener">CodeCraft Works</a>.</p>

            <p>The site allows CodeCraft instructors to set up a profile, and allows CodeCraft partners to post when they are offering coding courses.</p>
            
            <p>Firebase Realtime Database means that any change to the site's data is near-instanteously updated for all users.</p>
          `,
          image: "/assets/work/PartnerCommunity/Instructors.png"
        },

        {
          name: "Numerous Assorted Projects",
          time: [new Date(2012, 1 - 1), new Date(Date.now())],
        },

        {
          name: "World Travelogue Database",
          time: [new Date(2016, 1 - 1), new Date(2016, 4 - 1)],
          badges: [
            { name: "SQLite" },
            { name: "Java" },
            { name: "Web Development" }
          ],
          description: `
            <p>A web-based application to record a travelogue of places visited,
            allowing image uploads, map locations, and sharing with other users.</p>

            <p>The application can behave as either a personal desktop application,
            or be hosted on a dedicated server to allow multiple users to login and enter travel journals.</p>
          `,
          image: "/assets/work/World Travel Database.png"
          // caseStudy: "/work/travelogue"
        }
      ]
    };
  },
};
</script>
