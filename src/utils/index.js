const image_v_1 = require("../assets/vehicles/v-1.png");
const image_v_2 = require("../assets/vehicles/v-2.png");
const image_v_3 = require("../assets/vehicles/v-3.png");
const image_v_4 = require("../assets/vehicles/v-4.png");

export const getImage = (id) => {
  switch (id) {
    case 1:
      return image_v_1;
    case 2:
      return image_v_2;
    case 3:
      return image_v_3;
    case 4:
      return image_v_4;
  }
};
