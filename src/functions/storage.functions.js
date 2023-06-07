
import { ref, getDownloadURL,listAll } from "firebase/storage";
import { storage } from '../main.js';

export default async function getAllImages(path){
//   Find all the prefixes and items.
return listAll(ref(storage,path))
  .then((res) => {
    return res.items.map((val)=>{
      return getDownloadURL(ref(storage,val.fullPath))
              .then((url) => {
                return {
                        url: url,
                        name: val.fullPath.slice(4).replace(".png","")
                       }
              }).catch((error) => {
                  switch (error.code) {
                    case 'storage/object-not-found':
                      console.log("object-not-found");
                      break;
                    case 'storage/unauthorized':
                      console.log("unauthorized");
                      break;
                    case 'storage/canceled':
                      console.log("canceled");
                      break;
                    case 'storage/unknown':
                      console.log("unkown");
                      break;
                  }
              });
    });
  }).catch((error) => {
    // Uh-oh, an error occurred!
    console.log(error);
  });
}


