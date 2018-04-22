<template>
  <div class="columns-container">
    <div class="columns">
      <div v-for="(aspect, index) of aspects" :key="aspect.name" class="dev-aspect">
        <h3 class="dev-aspect-header"><span class="dev-aspect-number">#{{index + 1}}</span> {{aspect.name}}</h3>
        <p class="dev-aspect-description">{{aspect.description}}</p>
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
  align-content: center;
  flex-grow: 1;
  padding: 1em;
  max-width: 400px;
}

@media screen and (max-width: 1200px) {
  .dev-aspect {
    flex-basis: 100%;
    max-width: inherit;
  }
}

.dev-aspect-number {
  opacity: 0.75;
  margin-right: 0.2em;
}

.dev-aspect-header {
  font-size: 32px;
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
          name: "Design",
          description: "Familiar with UI / UX practices, software design patterns, separation of concerns, and system architecture."
        },
        {
          name: "Development",
          description: "Strong technical acumen across a variety of software domains and languages, with a knack for quickly adapting to new technologies."
        },
        {
          name: "Devops",
          description: "Experienced in Continuous Integration and Deployment (CI/CD), automated gated releases to Azure, and application metric monitoring."
        }
      ]
    };
  }
};
</script>
