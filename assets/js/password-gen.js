// Assignment code here
function generatePassword()
{
    // Initialize list of characters
    var lower = 'abcdefghijklmnopqrstuvwxyz';
    var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var number = '0123456789';
    var special = '!@#$%^&*';
    var all = lower+upper+number+special;

    // Remove forbidden characters, if they exist.
    // forbidden = document.getElementById("forbidden").value;
    // for(var i = 0; i < forbidden.length; i++)
    // {
    //     lower.replace(forbidden.charAt(i), '');
    //     upper.replace(forbidden.charAt(i), '');
    //     number.replace(forbidden.charAt(i), '');
    //     special.replace(forbidden.charAt(i), '');
    //     all.replace(forbidden.charAt(i), '');
    // }

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
    var characters = '';
    if(document.getElementById("lowercase").checked)
    {
        characters += lower.charAt(Math.floor(Math.random()*lower.length));
        console.log("lowercase checked");
    }
    if(document.getElementById("uppercase").checked)
    {
        characters += upper.charAt(Math.floor(Math.random()*upper.length));
        console.log("uppercase checked");
    }
    if(document.getElementById("numeric").checked)
    {
        characters += number.charAt(Math.floor(Math.random()*number.length));
        console.log("number checked");
    }
    if(document.getElementById("special").checked)
    {
        characters += special.charAt(Math.floor(Math.random()*special.length));
        console.log("special checked");
    }
    console.log("Added required characters: " + characters);

    // Produce remaining characters
    for(var i = characters.length; i < pwSize; i++)
    {
        characters += all.charAt(Math.floor(Math.random()*all.length));
    }
    console.log("Added remaining characters: " + characters);

    // Randomize character order
    var password = '';
    console.log("pre-loop");
    while(characters.length > 0)
    {
        var index = Math.floor(Math.random()*characters.length);
        password += characters.charAt(index);
        console.log("Added " + characters.charAt(index) + " to password.");
        characters = characters.slice(0, index) + characters.slice(index + 1, characters.length);
    }
    console.log("post-loop");
    return password;
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
