<template>
  <div class="half-n-half">
    <div>
      <h3>About Me</h3>
      <p>
        I’m currently a software developer at <a href="https://centralsqr.com/" target="_blank">CentralSquare Technologies</a>, working to create innovative safety and justice solutions for the public sector. I have a Baccalaureate degree in software development from UCF.
      </p>
      <p>
        Why have I been programming software, games, and robots for the past {{yearsProgramming}}+ years? I absolutely love seeing a solution come together while learning to overcome new challenges.
      </p>
    </div>

    <!-- <h3>My Work</h3> -->

    <div>
      <h3>Technologies</h3>
      <table>
        <tbody>
          <tr v-for="techGroup of techGroups" :key="techGroup.name" class="tech-group">
            <td class="tech-group-name">{{techGroup.name}}</td>
            <td class="tech-bullet">&bull;</td>
            <td class="tech-text">{{techGroup.techs.join(', ')}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
p {
  line-height: 1.6em;
  margin-bottom: 1em;
}
.tech-group-name {
  color: #838383;
  text-align: right;
}
.tech-bullet {
  color: #C4C4C4;
  padding: 0.25em 0.5em;
  line-height: 1em;
}
.tech-text {
  padding: 0.5em 0;
}
</style>

<script>
export default {
  data: () => {
    var startProgrammingYear = 2007;
    var yearsProgramming = (new Date() - new Date(startProgrammingYear, 1)) / (1000 * 60 * 60 * 24 * 365.25);
    return {
      yearsProgramming: Math.floor(Math.max(
        10, // even if your date is wonky, 10+ is close, and a nice even number
        yearsProgramming)),
      techGroups: [
        {
          name: 'Process',
          techs: ['Scrum', 'VSTS', 'Build Automation']
        },
        {
          name: 'Web',
          techs: ['HTML5', 'CSS3', 'TypeScript', 'JavaScript', 'Angular', 'Vue']
        },
        {
          name: 'Server',
          techs: ['Azure', 'Google Cloud', 'ASP.NET and ASP.NET core', 'node.js']
        },
        {
          name: 'Desktop',
          techs: ['C#', 'Java', 'Python']
        },
        {
          name: 'Data',
          techs: ['SQL (Microsoft, Oracle, MySQL)', 'PowerBI', 'Firebase']
        },
      ]
    }
  }
};
</script>
