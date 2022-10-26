Describe: toPigLatin();

Test: "It will add 'way' to the end of words that begin with a vowel."
Code: toPigLatin("a");
Expected Output: "away"

Test: "It will only pig latinify words that begin with a vowel"
code: toPigLatin("egg milk");
expected Output "eggway milk"

Test: "qu words get q and u moved + ay
code toPigLatin("squeal quick")
expected Output "quealsay ickquay