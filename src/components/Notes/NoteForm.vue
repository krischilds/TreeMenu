<template>
  <section class="p-5 m-5 note-form">
    <slot name="header"></slot>

    <b-form @submit="onSubmit" @reset="onReset" v-if="form.isVisible">

    <div role="group">
        <label for="input-live">Name:</label>
        <!-- This is a form text block (formerly known as help block) -->
        <b-form-text style="margin-top:2px;margin-bottom:2px;" id="input-live-help"><b-icon icon="info-circle" scale="1.5" variant="secondary" style="margin-right: 4px"></b-icon> <i>User's name.</i></b-form-text>

        <b-form-input
          id="input-live"
          v-model="form.name"
          :state="nameState"
          aria-describedby="input-live-help input-live-feedback"
          placeholder="Enter your name"
          trim
        ></b-form-input>

        <!-- This will only be shown if the preceding input has an invalid state -->
        <b-form-invalid-feedback id="input-live-feedback">
          Enter at least 3 letters
        </b-form-invalid-feedback>

      </div>

      <b-form-textarea
        class="form-control"
        v-model="form.noteText"
        debounce="500"
        rows="3"
        max-rows="5"
        :state="isNoteTextValid"
      ></b-form-textarea>
      <div class="error-message" v-if="!isNoteTextValid">The note text is invalid.</div>
      <div class="mt-2 mb-0">{{ form.noteText }}</div>

      <b-form-input
        class="form-control"
        v-model.number="form.rating"
        :state="form.rating > 0 && form.rating <= 10"
        required
      ></b-form-input>

      <b-form-checkbox
        v-model="form.accepted"
        value="accepted"        
        unchecked-value="not_accepted"
        class="form-control"
        name="form-accepted"
        :state="form.accepted === 'accepted'"
      >
        I accept the terms and use
      </b-form-checkbox>

      <div>
        Accepted: <strong>{{ form.accepted }}</strong>
      </div>
      <div>
        Form Valid: <strong>{{ form.valid }}</strong>
      </div>

      <div v-if="hasSubmittedForm">
        <b-alert v-if="isFormComplete" :show="isFormComplete" variant="success">
          Form is complete
        </b-alert>
        <b-alert v-else :show="!isFormComplete" variant="danger">
          Form is not complete
        </b-alert>
      </div>
      <slot name="button"><b-button type="submit">Submit</b-button></slot>
    </b-form>
  </section>
</template>

<script>
import router from "../../router";

export default {
  name: "NoteForm",
  props: [],
  data() {
    return {
      hasSubmittedForm: false,
      form: {          
        name: '',
        hasSubmitted: false,   
        isVisible: true,
        noteText: "",
        noteTitle: "",
        rating: 0,
        accepted: false,
        valid: false,
      }
    };
  },
  computed: {
    nameState() {
      return this.form.name.length > 2 ? true : false;
    },
    isNoteTextValid: function () {
      return this.form.noteText.length >= 10;
    },
    isFormComplete: function () {
      const isComplete =
        this.form.noteText &&
        this.form.noteText.length > 0 &&
        this.form.accepted === "accepted"
      return isComplete;
    },
  },
  methods: {
    createNote: function () {
      console.log("createNote");
    },
    validate() {
      if (this.isFormComplete) {
        this.form.valid = true;
      } else {
        this.form.valid = false;
      }
    },
    onSubmit(evt) {
      this.hasSubmittedForm = true;
      evt.preventDefault();

      this.validate();
      if (this.form.valid) {
        this.createNote();
        this.$store.commit("saveUsername", this.form.noteText);
        const formData = JSON.stringify(this.form);
        console.log(formData);
        // router.push({ name: "ViewNote", params: { form: formData } }); // -> /user/123
      }
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.noteText = "";
      this.form.noteTitle = "";      
      this.form.accepted = "not_accepted";

      // Trick to reset/clear native browser form validation state
      this.form.isVisible = false;
      this.$nextTick(() => {
        this.form.isVisible = true;
      });
    },
  },
  mounted() {
    console.log(this);
  },
};
</script>

<style lang="scss" scoped>
.note-form {
  background-color: whitesmoke;
  border: 4px solid rgb(207, 207, 207);
  border-radius: 2px;
}
</style>
