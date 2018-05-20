<template>
  <div>
    <section>
      <h1 class="title">
        Work Examples
      </h1>
    </section>

    <section>
      <h2 class="subtitle">
        Demos, Case Studies, Technologies
      </h2>
    </section>

    <section>
      <hr class="separator">

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
              :href="project.imageFull || project.imageFallback || project.image"
              target="_blank"
              rel="noopener">
              <picture v-if="project.imageFallback">
                <source :srcset="encodeURI(project.image)" type="image/webp">
                <img :src="project.imageFallback" :alt="project.name + ' Project Image'" class="project-image">
              </picture>

              <img v-if="!project.imageFallback" :src="project.image" :alt="project.name + ' Project Image'" class="project-image">
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
  display: flex;
  flex-grow: 0;
  flex-direction: column;
  overflow-y: auto;
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
  max-width: 800px;
  flex-grow: 1;
  padding: 1em 0.5em 2em 0.5em;
  overflow-y: auto;
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
        .join(" - ");
    }
  },
  data: () => {
    return {
      projects: [
        {
          name: "FRC (First Robotics Competition) Team 1557",

          time: ['2012', '2016'],

          badges: [
            {
              name: "Leadership"
            },
            {
              name: "Robotics"
            },
            {
              name: "Computer Vision"
            },
            {
              name: "Engineering"
            },
            // {
            //   name: "Electrical Engineering"
            // },
            // {
            //   name: "Mechanical Engineering"
            // },
            {
              name: "Java"
            },
            // {
            //   name: "LabVIEW"
            // },
          ],

          description: `
            <p>FIRST Robotics taught me a lot about teamwork, programming, industry practices and leadership.</p>

            <p>I joined 12 Volt Bolt (FRC Team 1557) in 2012. Immediately I fell in love with the fun and challenge of FIRST robotics.</p>

            <p>The next year, I stepped up as team lead programmer.
            We worked heavily on autonomous robot control, and began using computer vision to detect highlighted goals.

            Our FRC team was not sponsored by a school, so we worked heavily on community outreach to discover new members and
            attract sponsors, so we could pay for robot parts and the robotics competition.</p>

            <p>We worked to grow our team, and my leadership and teaching roles expanded.
            12 Volt Bolt stepped up our robot's design with new fabrication tools, and I also assisted heavily with the electrical wiring and control board setup.</p>

            <p>In 2015 and 2016, I began mentoring the programming sub-team,
            teaching students programming, software architecture, design and critical thinking.
            This was a fulfilling experience which gave me an opportunity learn about teaching and leadership,
            and to help the team which had given me so much.</p>
          `,

          imageFull: "/assets/work/FRC.jpg",
          image: "/assets/work/FRC-small.webp",
          imageFallback: "/assets/work/FRC-small.jpg",
        },

        {
          name: "CodeCraft Partner Community",

          time: ['January 2018', 'April 2018'],

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
            
            <p>Firebase Realtime Database means that any change to the site's data is near-instantaneously updated for all users.</p>
          `,

          image: "/assets/work/PartnerCommunity/Instructors.webp",
          imageFallback: "/assets/work/PartnerCommunity/Instructors.png",
        },

        {
          name: "Numerous Assorted Projects",
          time: ['2010', 'Now!'],
          description: `<p>
            This page is by no means complete or exhaustive.
            I've worked on a wide variety of school, work, and personal projects across many software and hardware domains.
            Feel free to browse my GitHub page to see other projects I've developed or contributed to.
          </p>`
        },

        {
          name: "SHENZHEN I/O Solitaire",

          time: ['November 2016', 'April 2017'],

          badges: [
            {
              name: "Web Development"
            },
          ],

          description: `
            <p>A web project made to emulate the gameplay of <a href="https://store.steampowered.com/app/570490/SHENZHEN_SOLITAIRE/" target="_blank" rel="noopener">SHENZHEN Solitaire</a>.
            Can pull resources from the real game, to get the minigame experience without booting up Steam.</p>
            <p>Also has nice animations for when cards are flying around, and a classic solitaire win animation.</p>
          `,

          image: "/assets/work/ShenzhenSolitaire.webp",
          imageFallback: "/assets/work/ShenzhenSolitaire.jpg",
        },

        // {
        //   name: "AgriCraft Mutation Graph",

        //   time: ['May 2016'],

        //   badges: [
        //     {
        //       name: "Web Development"
        //     },
        //     {
        //       name: "Graph Theory"
        //     }
        //   ],

        //   description: `
        //     <p>Shows the genealogy required to breed plants in the AgriCraft Minecraft mod.</p>
        //     <p>To get Coffee, you need Sugarcane and Beans. To get Beans, you need Pumpkins. To get pumpkins, you need Potatoes.
        //     This (nonsensical) breeding tree can get complex, so the graph helps show what's needed to get a desired result.
        //     The loose graph can be dragged around, or the graph re-ordered with the desired product on top of the tree.</p>
        //     <p><a href="http://tgratzer.com/AgriCraft-Mutation-Graph/" target="_blank" rel="noopener">See this project online</a></p>
        //   `,

        //   image: "/assets/work/Agricraft.webp",
        //   imageFallback: "/assets/work/Agricraft.PNG",
        // },

        // {
        //   name: "World Travelogue Database",
        //   time: ['January 2016', 'April 2016'],
        //   badges: [
        //     { name: "SQLite" },
        //     { name: "Java" },
        //     { name: "Web Development" }
        //   ],
        //   description: `
        //     <p>A web-based application to record a travelogue of places visited,
        //     allowing image uploads, map locations, and sharing with other users.</p>

        //     <p>The application can behave as either a personal desktop application,
        //     or be hosted on a dedicated server to allow multiple users to login and enter travel journals.</p>
        //   `,

        //   image: "/assets/work/World Travel Database.webp",
        //   imageFallback: "/assets/work/World Travel Database.png",

        //   // caseStudy: "/work/travelogue"
        // },

        {
          name: "TIS-100 Emulator",

          time: ['September 2015', 'December 2015'],

          badges: [
            {
              name: "Web Development"
            },
            {
              name: "Domain-Specific Language"
            },
            {
              name: "Lua"
            }
          ],

          description: `
            <p>A web emulator for <a href="http://www.zachtronics.com/tis-100/" target="_blank" rel="noopener">TIS-100</a>.
            This fictional microprocessor has an assembly-like instruction set, and runs programs in unusual grid-based "CPU"s.</p>
            <p>The game's puzzles are defined in a Lua script to allow for complex, sand&shy;boxed user-defined specifications.
            My emulator also loads these user-defined puzzles using lua.vm.js.</p>
            <p><a href="http://tis100.tgratzer.com/" target="_blank" rel="noopener">See this project online</a></p>
          `,

          image: "/assets/work/TIS100 Emulator.webp",
          imageFallback: "/assets/work/TIS100 Emulator.PNG",
        },

        {
          name: "'Dots' Team Pit Display",

          time: ['January 2014'],

          badges: [
            {
              name: "Web Development"
            },
          ],

          description: `
            <p>A cellular automata simulation designed to mesmerize. This was on display at the '14 FRC competition, in Team 1557's (12 Volt Bolt) pit area.</p>
            <p>The dots are rendered on an HTML canvas, and each game team represents an FRC team present at the competition.
            The dots will apply strategies to eliminate weak teams, save themselves, and cluster together.</p>
            <p><a href="http://tgratzer.com/team1557-dots/" target="_blank" rel="noopener">See this project online</a></p>
          `,

          image: "/assets/work/Dots.webp",
          imageFallback: "/assets/work/Dots.PNG",
        },

        // TODO: Kinect FRC pit interactive display
      ]
    };
  }
};
</script>
