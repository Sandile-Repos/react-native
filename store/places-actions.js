import * as FileSystem from "expo-file-system";

export const ADD_PLACE = "ADD_PLACE";

export const addPlace = (title, image) => {
  return async (dispatch) => {
    const fileName = image.split("/").pop(); //split image path by / and get filename(last element)
    const newPath = FileSystem.documentDirectory + fileName;

    try {
      await FileSystem.moveAsync({
        //moves file from a to b
        from: image,
        to: newPath,
      });
    } catch (err) {
      console.log(err);
      throw err;
    }

    dispatch({ type: ADD_PLACE, placeData: { title: title, image: newPath } });
  };
};
