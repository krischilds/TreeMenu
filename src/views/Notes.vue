<template>
  <div>
    <div>
      <note-create>
        <h4 slot="header">Create Note</h4>
      </note-create>
    </div>
    <div>Notes: TODO: Show all notes</div>
    <div>
      {{ getUsername }}
    </div>
  </div>
</template>

<script>
import NoteCreate from "../components/Notes/NoteCreate.vue";

export default {
  components: { NoteCreate },
  name: "Notes",
  methods: {},
  data() {
    return {
      user: "Kris Childs",
    };
  },
  computed: {
    getUsername() {
      return this.$store.getters.getUsername;
    },
  },
};
</script>

<style lang="scss" scoped></style>
