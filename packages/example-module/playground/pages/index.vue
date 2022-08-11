<script
  setup
  lang="ts"
>
import { CarTypes } from '../../src/runtime/carTypes';
</script>

<template>
<div>
  <h1>All Car Types</h1>

  <div>
    <div>{{CarTypes.capriolet}}</div>
    <div>{{CarTypes.limousine}}</div>
    <div>{{CarTypes.van}}</div>
  </div>
</div>
</template>
