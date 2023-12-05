<template>
  <div class="row q-pa-lg justify-center bg-grey-6">
    <div style="width: 100%; max-width: 600px">
      <q-chat-message
        :text="['Hello quasar']"
        sent
        name="me"
        stamp="7 minutes ago"
        bg-color="accent"
        text-color="white"
      />
      <q-chat-message
        :text="['Hey dude', 'Want to learn some more?']"
        name="Quasar"
        stamp="2 minutes ago"
        bg-color="primary"
        text-color="white"
      />
    </div>
  </div>
</template>

<script setup lang="ts"></script>
