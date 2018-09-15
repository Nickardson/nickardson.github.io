<template>
  <div class="columns-container">
    <div class="columns">
      <div
        v-for="aspect of aspects"
        :key="aspect.name"
        @click="onAspectChanged(aspect.id)"
        :class="{ 'dev-key-aspect': aspect.key }"
        class="dev-aspect">
        <h3 class="dev-aspect-header">{{aspect.name}}</h3>
        <p
          v-html="aspect.description"
          class="dev-aspect-description"></p>
      </div>
    </div>
  </div>
</template>

<style scoped>

.columns-container {
  display: flex;
  justify-content: center;
}

.columns {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.dev-aspect {
  background: #FFFFFF;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
  border-radius: 2px;

  align-content: center;
  flex-grow: 1;
  padding: 0.5em 1em 1.5em 1em;
  max-width: 300px;

  /* under */
  margin: 0.25em -0.25em 0.25em -0.25em;
  z-index: 49;
}

.dev-key-aspect {
  background: linear-gradient(180deg, #3E3CBE 0%, #6F5BBF 100%);
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25), 0px 4px 6px rgba(0, 0, 0, 0.25);

  /* over */
  margin: 0;
  z-index: 50;
}

.dev-key-aspect .dev-aspect-header {
  color: #F2F2F2;
}
.dev-key-aspect .dev-aspect-description {
  color: #E5E4FF;
}

@media screen and (max-width: 1000px) {
  .dev-aspect {
    flex-basis: auto;
    max-width: inherit;

    margin: 5px 20px 5px 20px;
  }

  .dev-key-aspect {
    margin: 5px 10px 5px 10px;
  }
}

.dev-aspect-header {
  font-family: "Playfair Display", serif;
  font-size: 24px;
  font-weight: normal;
  margin: 0.5em 0 0.5em 0;
}

.dev-aspect-description {
  color: #5f7081;
}

</style>

<script>
export default {
  data: () => {
    return {
      aspects: [
        {
          id: 'design',
          name: "Design",
          description: `
            Familiar with <abbr title="User Interface">UI</abbr> / <abbr title="User Experience">UX</abbr> practices,
            software design patterns, separation of concerns, and system architecture.
          `
        },
        {
          id: 'development',
          key: true,
          name: "Development",
          description: "Strong technical acumen across a variety of software domains and languages, with a knack for quickly adapting to new technologies."
        },
        {
          id: 'devops',
          name: "Dev-ops",
          description: "Experienced in Continuous Integration and Deployment (CI/CD), automated gated releases to Azure, and application metric monitoring."
        }
      ]
    };
  },
  methods: {
    onAspectChanged: function (aspectId) {
      this.$emit('aspect', aspectId);
    }
  }
};
</script>
