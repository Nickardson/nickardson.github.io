<template>
  <div>
    <section class="section-dark section-pad">
      <h1 class="header-title">
        Contact Me
      </h1>
    </section>

    <div class="container">
      <section class="section-pad">
        <h2>Email</h2>
        <p>
          <span>tay</span><!--Various methods of stupid simple, very safe ob-fus-cation, which may or may not work.--><span>lor</span><span color="#f3f5f6" style="color:#f3f5f6; display: none">pleaseenablecss</span><span>&#64;</span><span color="#f3f5f6" style="color:#f3f5f6; display: none">aol</span><span>tgrat</span><!--mailinator--><span>zer&#46;com</span>
        </p>
      </section>

      <section class="section-pad">
        <h2>LinkedIn</h2>
        <p>
          <a href="https://www.linkedin.com/in/taylor-gratzer">Taylor Gratzer</a>
        </p>
      </section>

      <section class="section-pad-half">
        <h2>Send a message</h2>
        <form v-if="!hasSentFromForm" ref="form" class="needs-validation" @submit="sendMail">
          <h3 v-if="formError" class="form-error">Error: {{formError}}</h3>
          <div class="form-group">
            <label for="contactReturn">
              <div>Your Email Address</div>
              <input v-model="email" type="email" class="form-control" id="contactReturn" placeholder="your@email.com" required>
            </label>
          </div>
          <div class="form-group">
            <label for="contactMessage">
              <div>Your Message</div>
              <textarea v-model="body" rows="10" class="form-control" id="contactMessage" placeholder="" required></textarea>
            </label>
          </div>
          <input :disabled="isSending" type="submit" value="Send"/>
        </form>

        <div v-if="hasSentFromForm">
          Thanks, your message has been sent!
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped lang="css">
input,
textarea {
  font-size: 0.75rem;
  padding: 0.25em 0.75em;
  line-height: 1.5rem;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
}

h2 {
  margin-bottom: 0.5em;
}

form {
  margin: 1em 0;
}

input[type=submit] {
  background: rgb(62, 60, 190);
  color: white;
}

input[type=submit]:disabled {
  background: rgb(62, 60, 190, 0.5);
  color: white;
}

textarea {
  font-family: 'Lato', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 1.1em;
  width: 100%;
}

input:not([type="submit"]) {
  min-width: 50%;
}

label {
  font-size: 16px;
}

.form-error {
  padding: 1em;
  color: #dc3545;
}
</style>

<script>
import AppLogo from "~/components/AppLogo.vue";

export default {
  components: {
    AppLogo
  },
  data: () => {
    return {
      email: "",
      body: "",

      formError: '',
      isSending: false,
      hasSentFromForm: false,
    };
  },
  methods: {
    sendMail: function(event) {
      var isValid = this.$refs.form.checkValidity();
      console.log(this.$refs.form, isValid);

      event.preventDefault();

      if (!this.email){
        this.formError = 'Please let me know how I can reach you.';
        return;
      }
      if (!this.body) {
        this.formError = 'Please write me something to read.';
        return;
      }

      var xhr = new XMLHttpRequest();
      xhr.open("POST", "https://tg-functions.azurewebsites.net/api/HttpTriggerCSharp1?code=DkySTB/tQHQWZb3hgyhwVisJaIxcd2raMWrlB47MI77Dlo44QjLzxw==");
      xhr.setRequestHeader("Content-Type", "application/json");

      var self = this;
      xhr.onload = function() {
        if (xhr.status === 200) {
          // var userInfo = JSON.parse(xhr.responseText);
          // TODO: on success
          self.formError = '';
          self.hasSentFromForm = true;
        } else {
          // TODO: on failure
          console.log(xhr.status, xhr.responseText);
          self.formError = xhr.responseText;
        }

        self.isSending = false;
      };
      xhr.send(
        JSON.stringify({
          fromId: this.email,
          bodyContent: this.body,
        })
      );
      self.isSending = true;

      return false;
    }
  }
};
</script>
