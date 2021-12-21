<template>
  <div id="app">
    My icon set:
    <ul>
      <li v-for="(icon, index) in icons" :key="index">
        <i :class="icon" /> {{ icon }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    icons: [
      "icon-trash-o",
      "icon-trash-a",
      "icon-trash-alt",
      "icon-trashcan",
      "icon-trash",
      "icon-delete-garbage-streamline",
      "icon-delete-trash-1",
      "icon-trash-1",
      "icon-trash-2",
      "icon-trash-stroke",
      "icon-trash-can",
      "icon-trash-3",
      "icon-trash-4",
      "icon-trash-alt-1",
      "icon-waste-basket"
    ]
  })
};
</script>
