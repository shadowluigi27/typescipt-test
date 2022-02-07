function flip_case(word: string)
{
    for(let i = 0; i < word.length; i++ )
    {
        console.log(word.charAt(i));
    }
}


let input = "Testing Function";

flip_case(input);

console.log(input + "worked");