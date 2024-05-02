import { readFile, writeFile } from "fs";

/// Read the content from the first file
readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result; // Save the result from the first file

  // Read the content from the second file
  readFile("./content/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }

    const second = result; // Save the result from the second file

    // Write the combined result to a new file
    writeFile(
      "./content/result-async.txt", // Path to the new file
      `Here is the result: ${first}, ${second}`, // Path to the new file
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log(result);
      }
    );
  });
});
