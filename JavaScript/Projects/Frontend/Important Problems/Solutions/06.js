function detectVowels(str) {
    let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
    let result = [];
    for (const char of str) {
        if (vowels.includes(char)) {
            result.push(char);
        }
    }

    console.log("The vowels are", result);

}

detectVowels("Once upon a time, in a quiet village nestled between the hills, there lived a kind old woman named Ella. She loved baking pies and sharing them with her neighbors. Every morning, the scent of fresh apples, cinnamon, and vanilla wafted through the air, making everyone smile. One day, a curious little bird perched on her windowsill, chirping a sweet melody. Ella smiled and said, 'Would you like some crumbs, little one?' The bird chirped back happily, as if to say, 'Yes, please!' From that day on, Ella and the little bird became friends, sharing mornings full of joy and kindness."

);