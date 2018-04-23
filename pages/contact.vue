<template>
  <div>
    <section class="section-dark section-pad">
      <h1 class="title">
        Contact Me
      </h1>
    </section>

    <div class="container">
      <!-- <section class="section-pad-half">
        <h2>Message</h2>
        <form>
          <div class="form-group">
            <label for="contactReturn">
              <div>Your Email Address</div>
              <input type="email" class="form-control" id="contactReturn" placeholder="your@email.com">
            </label>
          </div>
          <div class="form-group">
            <label for="contactMessage">
              <div>Your Message</div>
              <textarea rows="10" class="form-control" id="contactMessage" placeholder=""></textarea>
            </label>
          </div>
          <input type="submit" value="Send"/>
        </form>
      </section> -->

      <section class="section-pad">
        <h2>Email</h2>
        <p>
          <span>tay</span><!--Various methods of stupid simple, very safe ob-fus-cation, which may or may not work.--><span>lor</span><span color="#f3f5f6" style="color:#f3f5f6; display: none">pleaseenablecss</span><span>&#64;</span><span color="#f3f5f6" style="color:#f3f5f6; display: none">aol</span><span>tgrat</span><!--mailinator--><span>zer&#46;com</span>
        </p>
      </section>
    </div>
  </div>
</template>

<style scoped lang="css">
input, textarea {
  font-size: 0.75rem;
  padding: 0.25em 0.75em;
  line-height: 1.5rem;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
}

textarea {
  width: 100%;
}

input:not([type="submit"]) {
  min-width: 50%;
}

label {
  font-size: 16px;
}
</style>

<script>
import AppLogo from "~/components/AppLogo.vue";

export default {
  components: {
    AppLogo
  }
};
</script>
