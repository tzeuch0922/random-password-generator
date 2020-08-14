// Assignment code here
function generatePassword()
{
    // Initialize list of characters
    var lower = 'abcdefghijklmnopqrstuvwxyz';
    var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var number = '0123456789';
    var special = '!@#$%^&*';

    // Get size of password to be produced.
    var pwSize;
    if(document.getElementById("fixed").checked)
    {
        pwSize = document.getElementById("size").value;
        if(pwSize > 128)
        {
            pwSize = 128;
        }
        else if(pwSize < 8)
        {
            pwSize = 8;
        }
        console.log("fixed selected");
    }
    else if(document.getElementById("range").checked)
    {
        minSize = document.getElementById("size-min").value;
        maxSize = document.getElementById("size-max").value;

        // Make sure that size is in range.
        minSize = Math.max(Math.min(minSize, 128), 8);
        maxSize = Math.max(Math.min(maxSize, 128), 8);

        // Swap minSize and maxSize if reversed
        if(minSize > maxSize)
        {
            var temp = minSize;
            minSize = maxSize;
            maxSize = temp;
        }
        pwSize = minSize + Math.floor(Math.random()*(maxSize-minSize));
        console.log("range selected");
    }
    else
    {
        return "";
    }

    // Produce required characters
    var all = '';
    if(document.getElementById("lowercase").checked)
    {
        // characters += lower.charAt(Math.floor(Math.random()*lower.length));
        // console.log("lowercase checked");
        all += lower;
    }
    if(document.getElementById("uppercase").checked)
    {
        // characters += upper.charAt(Math.floor(Math.random()*upper.length));
        // console.log("uppercase checked");
        all += upper;
    }
    if(document.getElementById("numeric").checked)
    {
        // characters += number.charAt(Math.floor(Math.random()*number.length));
        // console.log("number checked");
        all += number;
    }
    if(document.getElementById("special").checked)
    {
        // characters += special.charAt(Math.floor(Math.random()*special.length));
        // console.log("special checked");
        all += special;
    }
    if(all === '')
    {
        window.alert("Need to check at least one box in the required characters section.");
        return "";
    }
    console.log("Added required characters: " + characters);

    // Produce remaining characters
    var characters = '';
    for(var i = characters.length; i < pwSize; i++)
    {
        characters += all.charAt(Math.floor(Math.random()*all.length));
    }

    /* Removed, due to no need anymore. */
    // Randomize character order
    // var password = '';
    // console.log("pre-loop");
    // while(characters.length > 0)
    // {
    //     var index = Math.floor(Math.random()*characters.length);
    //     password += characters.charAt(index);
    //     console.log("Added " + characters.charAt(index) + " to password.");
    //     characters = characters.slice(0, index) + characters.slice(index + 1, characters.length);
    // }
    // console.log("post-loop");
    return characters;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
