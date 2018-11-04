<template>
  <div>
    <section>
      <h1 class="header-title">
        My Work
      </h1>
    </section>

    <!-- <section>
      <h2 class="subtitle">Experience</h2>

    </section> -->

<!-- class="print-page-before" -->
    <section >
      <!-- <hr class="separator"> -->

      <h2 class="subtitle">
        Demos, Projects, Technologies
      </h2>
    </section>

    <section>
      <v-container>
        <div v-show="isSmallScreen">
          <WorkItem
            v-for="project of projects"
            :key="project.name"
            :project="project"
            class="mb-3"
          ></WorkItem>
        </div>

        <v-timeline
          align-top
          v-show="!isSmallScreen"
        >
          <v-timeline-item
            v-for="(project, i) of projects"
            :key="project.name"
            class="mb-3"
            color="grey"
            icon-color="grey lighten-2"
            small
          >
            <!-- for large screens, opposite the card -->
            <v-img
              slot="opposite"
              v-if="project.image"
              :src="project.image"
              max-height="600"
              contain
              class="ma-4"
              :position="(i % 2 === 0 ? 'left' : 'right') + ' center'"
            ></v-img>

            <WorkItem :project="project" :hideimage="true"></WorkItem>
          </v-timeline-item>
        </v-timeline>
      </v-container>
    </section>
  </div>
</template>

<style lang="css">
.v-timeline-item .caption {
  margin-top: .75em;
}

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
  line-height: 1.55em;
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
import WorkItem from "~/components/WorkItem.vue";
import Badges from "~/components/Badges.vue";

export default {
  components: {
    WorkItem,
    Badges
  },
  computed: {
    isSmallScreen () {
      if (process.server) {
        return true;
      }

      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
        case 'sm': return true;
        case 'md':
        case 'lg':
        case 'xl': return false;
      }
    }
  },
  data: () => {
    return {
      projects: [
        {
          name: "My Daily Board",

          time: ["August 2018", "October 2018"],

          badges: [
            {
              name: "Vue.js"
            },
            {
              name: "Azure Devops"
            },
            {
              name: "Scrum"
            }
          ],

          description: `
            <p><a href="https://dailyboard.azurewebsites.net/" target="_blank" rel="noopener">My Daily Board</a> helps my Scrum team (and yours too!) to run our daily standup.</p>

            <p>Authorize the app to view your Azure Devops (VSTS) tasks and teams. Then each day, the daily standup organizer brings up the page to provide a visual of what tasks were completed since the last standup, and what's in progress.</p>
            
            <p>Uses ASP.NET core, Vue.js and Material design for a crisp-looking, light-weight utility for users from any organization.</p>

            <p><a href="https://dailyboard.azurewebsites.net/" target="_blank" rel="noopener">See this project online</a></p>
          `,

          image: "/assets/work/DailyBoard.png"
        },

        {
          name: "CodeCraft Partner Community",

          time: ["January 2018", "April 2018"],

          badges: [
            {
              name: "Angular"
            },
            // {
            //   name: "TypeScript"
            // },
            {
              name: "Firebase"
            },
            {
              name: "Google Cloud Platform"
            }
          ],

          description: `
            <p>My UCF capstone project, for the company <a href="https://www.codecraftworks.com/" target="_blank" rel="noopener">CodeCraft Works</a>.</p>

            <p>The site allows CodeCraft instructors to set up a profile, and allows CodeCraft's partners to post when and where they will offer their coding courses.</p>
            
            <p>Using Angular and the Firebase Realtime Database, the site will broadcast relevant database updates. User changes are immediately visible to any other users viewing it.</p>

            <p>The site makes use of responsive mobile breakpoints for a great viewing experience on desktop or mobile, and is an single-page application which provides a snappy browsing experience.</p>
          `,

          image: "/assets/work/PartnerCommunity/Instructors.webp",
          imageFallback: "/assets/work/PartnerCommunity/Instructors.png"
        },

        {
          name: "FRC (First Robotics Competition) Team 1557",

          time: ["2012", "2016"],

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
            }
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
          imageFallback: "/assets/work/FRC-small.jpg"
        },

        {
          name: "SHENZHEN I/O Solitaire",

          time: ["November 2016", "April 2017"],

          badges: [
            {
              name: "Web Development"
            }
          ],

          description: `
            <p>A web project made to emulate the gameplay of <a href="https://store.steampowered.com/app/570490/SHENZHEN_SOLITAIRE/" target="_blank" rel="noopener">SHENZHEN Solitaire</a>.
            Can pull resources from the real game, to get the minigame experience without booting up Steam.</p>
            <p>Also has nice animations for when cards are flying around, and a classic solitaire win animation.</p>
          `,

          image: "/assets/work/ShenzhenSolitaire.webp",
          imageFallback: "/assets/work/ShenzhenSolitaire.jpg"
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

          time: ["September 2015", "December 2015"],

          badges: [
            {
              name: "Web Development"
            },
            {
              name: "Emulator"
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
          imageFallback: "/assets/work/TIS100 Emulator.PNG"
        },

        {
          name: "'Dots' Team Pit Display",

          time: ["January 2014"],

          badges: [
            {
              name: "Web Development"
            }
          ],

          description: `
            <p>A cellular automata simulation designed to mesmerize. This was on display at the '14 FRC competition, in Team 1557's (12 Volt Bolt) pit area.</p>
            <p>The dots are rendered on an HTML canvas, and each game team represents an FRC team present at the competition.
            The dots will apply strategies to eliminate weak teams, save themselves, and cluster together.</p>
          `,
          //<p><a href="http://tgratzer.com/team1557-dots/" target="_blank" rel="noopener">See this project online</a></p>

          image: "/assets/work/Dots.webp",
          imageFallback: "/assets/work/Dots.PNG"
        },

        // TODO: Kinect FRC pit interactive display

        {
          name: "Numerous Assorted Projects",
          time: ["2010", "Now!"],
          description: `<p>
            This page is by no means complete or exhaustive.
            I've worked on a wide variety of school, work, and personal projects across many software and hardware domains.
            Feel free to browse my GitHub page to see some other public projects I've developed or contributed to.
          </p>`
        }
      ]
    };
  }
};
</script>
