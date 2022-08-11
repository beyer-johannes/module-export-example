<script
  lang="ts"
  setup
>
import { CarTypes } from '@example/example-module';

const { data } = await useFetch('/api/cars');

const van = data.data.findOne(car => car.type === CarTypes.van);
</script>

<template>
  <div>
    <h1>The van's title is:</h1>

    <h2>{{van.title}}</h2>
  </div>
</template>
