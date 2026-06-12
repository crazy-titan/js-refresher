// 12-JUNE-2026

// NODE List and HTML Collection

// When you use querySelectorAll('h2') --> it will output as Node List which consists of forEach method not the map!

// When you use getElementsByClassName('main-heading') --> it will output as HTML Collection which dont have forEach or map at all!

// How we solve these Problems?
// Convert HTML Collections into Array

// Array.from(HTML Collection Variable) --> This will output as Array, now you can easily use forEach,map or else!


// innerHTML, innerText, TextContent (What is the difference between these 3)

// innerHTML 
// This will show everything from tags to text written inside an TAG ie. h1,div,p etc.

// innerText
// This will show you text only, if you have hidden something with using, for example span display:hidden property
// in this case it will now show the hidden content

// TextContent
// This will show you text and the hidden content also.


// We use innerHTML to directly alter the content with proper HTML tags and the text content or css content that
// we want to do!

// TRY ALL THIS IN BROWSER CONSOLE TO PRACTISE AND IMPLIMENT WHAT"S ACTUALLY HAPPENING!!
