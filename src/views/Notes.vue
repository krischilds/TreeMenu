<template>
  <div>
    <div>
      <note-create />
    </div>
    <div>
      Notes: TODO: Show all notes
    </div>
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
  computed: {
    getUsername() {
      return this.$store.getters.getUsername;
    }
  }
};
</script>

<style lang="scss" scoped></style>
