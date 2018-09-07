<template>
  <div>
    <div
      v-for="badge of badges"
      :key="badge.name"
      :style="{ 'background-color': getBackgroundColor(badge.name), 'color': getForegroundColor(badge.name) }"
      class="dev-badge">
      <div class="dev-badge-header">{{badge.name}}</div>
    </div>
  </div>
</template>

<style scoped>

.dev-badge {
  flex-grow: 1;
  padding: 0.15em 0.4em 0.15em 0.4em;
  margin: 0.2em;
  border-radius: 0.25em;
  display: inline-block;
}

@media screen and (max-width: 1200px) {
  .dev-badge {
    flex-basis: 100%;
    max-width: inherit;
  }
}

.dev-badge-number {
  opacity: 0.75;
  margin-right: 0.2em;
}

.dev-badge-header {
  font-size: 16px;
}

.dev-badge-description {
  color: #5f7081;
}

</style>

<script>
export default {
  props: [
    /**
     * Expected format:
     * Array<{
     *  name: string,
     * }>
     */
    'badges',
  ],
  data: () => {
    const lightText = '#EEEEEE';
    return {
      colors: {
        'HTML5': { b: '#e44d26' },
        'CSS': { b: '#264de4' },
        'JavaScript': { b: '#e7a328' },
        'Web Development': { b: '#e7a328', f: 'black' },
        'C#': { b: '#67217a' },
        'Microsoft Azure': { b: '#1673b9' },
        'Java': { b: '#ea2d2f' },
        'SQLite': { b: '#8fd1f8', f: 'black' },
        'Angular 5': { b: '#c3002f' },
        'Angular': { b: '#c3002f' },
        'TypeScript': { b: '#007acc' },
        'Firebase Realtime Database': { b: '#ffcb2c', f: 'black' },
        'Firebase': { b: '#ffcb2c', f: 'black' },
        'Lua': { b: '#000080' },
        'Robotics': { b: '#FF6F00' },
      }
    };
  },
  methods: {
    getBackgroundColor: function (name) {
      const color = this.colors[name];
      if (color) {
        return color.b || '#333333';
      }
      return '#333333';
    },
    getForegroundColor: function (name) {
      const color = this.colors[name];
      if (color) {
        return color.f || '#EEEEEE';
      }
      return '#EEEEEE';
    }
  }
};
</script>
