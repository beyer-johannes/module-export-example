import { CarTypes } from '@example/example-module';

export default defineEventHandler(async (event) => {
  return {
    data: [
      {
        title: 'Car 1',
        type: CarTypes.capriolet,
      },
      {
        title: 'Car 2',
        type: CarTypes.capriolet,
      },
      {
        title: 'Car 3',
        type: CarTypes.van,
      },
    ],
  };
});
