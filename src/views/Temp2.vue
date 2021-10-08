<template>
    <label for="fname" class="custom-field">
        <input v-model="fname" type="text" name="firstname" id="fname" class="inputfield">
        <span class="placeholder">Email</span>
    </label>
</template>

<style lang="scss" scoped>
.custom-field{
    position: relative;
}
.custom-field input {
  border: none;
  appearance: none;
  background: #f2f2f2;
  padding: 12px;
  z-index: -1;
  border-radius: 3px;
  width: 250px;
  font-size: 14px;
}
.custom-field .placeholder {
  position: absolute;
  left: 12px;
//   bottom: 50%;
  top: 50%;  
  transform: translateY(-50%);
  width: calc(100% - 24px);  
  color: #aaa;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.custom-field {
  --field-padding: 12px;
}
.custom-field input {
  padding: var(--field-padding);
}
.custom-field .placeholder {
  left: var(--field-padding);
  width: calc(100% - (var(--field-padding) * 2));
}
.custom-field input:focus + .placeholder {
  top: -10px;
  font-size: 10px;
  color: #222;
}
</style>