<template>
  <section style="boder: 1px solid gray" class="p-5 m-5">
    <slot name="header"></slot>

    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-textarea
        v-model="form.noteText"
        debounce="500"
        rows="3"
        max-rows="5"
      ></b-form-textarea>
      <div class="mt-2 mb-0">{{ form.noteText }}</div>

      <b-form-checkbox
        id="checkbox-1"
        v-model="status"
        name="checkbox-1"
        value="accepted"
        unchecked-value="not_accepted"
      >
        I accept the terms and use
      </b-form-checkbox>

      <div>
        State: <strong>{{ status }}</strong>
      </div>
      <div v-if="hasSubmittedForm">
        <b-alert v-if="isFormComplete" :show="isFormComplete" variant="success">
          Form is complete
        </b-alert>
        <b-alert v-else :show="!isFormComplete" variant="danger">
          Form is not complete
        </b-alert>
      </div>
      <slot name="button"></slot>
    </b-form>
  </section>
</template>

<script>
import router from "../../router";

export default {
  name: "NoteCreate",
  props: [],
  data() {
    return {
      hasSubmittedForm: false,
      show: true,
      form: {
        noteText: "",
        noteTitle: "",
        checked: [],
        valid: false,
      },
      status: "not_accepted",
    };
  },
  computed: {
    isFormComplete: function () {
      const isComplete =
        this.form.noteText &&
        this.form.noteText.length > 0 &&
        this.status === "accepted";
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
      this.form.checked = [];
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
  mounted() {
    console.log(this);
  },
};
</script>

<style></style>
