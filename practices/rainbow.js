var rainbow = {
  name: "Rainbow",
  weight: 16,
  breed: "Beagle",
  likesFetching: true
};
function walkTheDog(dog) {
  console.log(dog.name + " likes to be walked at: ");
  for (var i = 0; i < dog.walkTimes; i++) {
    console.log(dog.walkTimes[i]);
  }
  if (dog.likesFetching == true) {
    console.log("Play fetch with " + dog.name);
  }
}
walkTheDog(rainbow);